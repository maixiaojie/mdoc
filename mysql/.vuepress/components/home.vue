<template>
	<div>
		<p id="one"><span id="content"></span></p>
		<p style="text-align: center;"><img src="../public/rap.png" height="50" alt=""></p>
		<!-- <p><span id="ctl" @click="ctl">播放</span></p> -->
		<p style="text-align: center;"><audio ref="audio" id="audio" controls="controls" src="https://doc.now.sh/static/audio/rap.mp3"></audio></p>
	</div>
</template>
<script>
import { init } from 'ityped';
	export default {
		data() {
			return {
			}
		},
		methods: {
			ctl() {
				if(this.$refs.audio.paused) {
					this.$refs.audio.play();
				}else {
					this.$refs.audio.pause();
				}
			}
		},
		components: {
		},
		mounted() {
			init(`#content`, {
		  // required - for now, only accepting texts
		    strings: [
		    	'hello everybody',
		    	'这里是麦晓杰 来自西部westside', 
		    	'欢迎来到这里 学习技术',
		    	'下面给你们展示一下我rap实力',
		    	'也表达一下我对你们的真心实意',
		    	'Java、前端、浏览器',
		    	'不能天天 耍脾气',
		    	'网络协议 数据库',
		    	'找我来玩 阿木木',
		    	'最新的技术你都需要看看',
		    	'浮躁到每天都是娜可露露',
		    	'生活不能在这样零零乱乱',
		    	'平平淡淡 停停看看 瓶瓶罐罐',
		    	'不要互相diss',
		    	'这个圈子需要更多的peace',
		    	'把梦想都装进同一个list',
		    	'才能开拓新的天地',
		    	'还在听从别人差使？',
		    	'点击上面 快速开始',
		    	'Time !!!',
		    	'end ~',
		    	'    ',
		    	'    '
		    ],
		    //optional
		    typeSpeed: 140, //default
		    //optional
		    backSpeed: 50, //default
		    //optional
		    startDelay: 500, //default
		    //optional
		    backDelay: 500, //default
		    //optional
		    loop: true, //default
		    //optional    
		    showCursor: true, //default
		    //optional    
		    cursorChar: "|", //default
		    // optional callback called once the last string has been typed
		    onFinished: function(){}
		});
		}
	}
</script>