const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
    // var bookurl = 'https://juejin.im/book/5bdc715fe51d454e755f75ef' // 前端面试之道
    // var bookurl = 'https://juejin.im/book/5a8f9ddcf265da4e9f6fb959' // 高频面试题解析
    // var bookurl = "https://juejin.im/book/5c526902e51d4543805ef35e"; // chrome
    var bookurl = "https://juejin.im/book/5a0ab8e2f265da43111fbab2"; // canvas
    var logintel = '17744568139'
    var loginpwd = '19950616wyj'
    var resData = []
    const browser = await puppeteer.launch({
        devtools: true
    });
    const page = await browser.newPage();
    await page.goto(bookurl);
    const islogin = await page.$$('.login');
    if (islogin.length === 1) {
        // to login
        await page.click('.login');
        await page.type('input[name="loginPhoneOrEmail"]', logintel, { delay: 100 })
        await page.type('input[name="loginPassword"]', loginpwd, { delay: 100 })
        await page.click('button[class="btn"]')

        await page.waitFor(1500)
        await page.click('.section:first-child')
        await page.on('response', res => {
            if (res.url().indexOf('getSection') > -1) {
                res.json().then(json => {
                    if (json.m == 'ok') {
                        resData.push(json.d)
                    }
                })
            }
        })

        await page.waitFor(1500);
        try {
            const finish = await page.$$('.step-btn.step-btn--finished');
            while (finish.length !== 1) {
                await page.waitFor(1500)
                var next = await page.$$('.step-btn.step-btn--next');
                if (next.length == 1) {
                    await page.click('.step-btn.step-btn--next');
                }else {
                	break;
                }
            }
            console.log('1')
            fs.writeFile('chrome.json', JSON.stringify(resData), 'utf-8', function(err) {
                console.log(err)
            });
        } catch (e) {
            console.log(e)
        }
        await browser.close();
    }


    
})();