
<template>
	<view class="content">
		<music></music>
		<!-- <uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 --> -->
		<!-- love heart -->
		<div class="back"></div>
		<div class="love"></div>
		<div class="love-1"></div>
		<div class="love-2"></div>
		<!-- end -->
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- partial:index.partial.html -->
		<uni-row class="demo-uni-row">
			<uni-col :span="6">
				<!-- <view class="demo-uni-col dark"></view> -->
				<span class="text text-1">2</span>
			</uni-col>
			<uni-col :span="6">
				<span class="text text-2">0</span>
			</uni-col>
			<uni-col :span="6">
				<span class="text text-3">2</span>
			</uni-col>
			<uni-col :span="6">
				<span class="text text-4">1</span>
			</uni-col>
			<!-- <uni-col :span="6">
				<span class="text-2 text-5">0</span>
			</uni-col> -->
		</uni-row>
		<uni-row class="index-text">
			<uni-col :span="24">
				this is for you!
			</uni-col>
		</uni-row>
		<!-- Boutton -->
		<div class="main-content">
			<div class="item button-pulse" style="--bg-color: #e67e22">
				<div class="button__wrapper">
					<div class="pulsing"></div>
					<button @click="goTigurashi()">Click Me!</button>
				</div>
				<!-- <div class="name">Dubstep</div> -->
			</div>
		</div>

		<!-- balloon -->
		<uni-row class="balloon">
			<uni-col :span="4">
				<span>☺</span>
			</uni-col>
			<uni-col :span="4">
				<span>D</span>
			</uni-col>
			<uni-col :span="4">
				<span>E</span>
			</uni-col>
			<uni-col :span="4">
				<span>A</span>
			</uni-col>
			<uni-col :span="4">
				<span>R</span>
			</uni-col>
			<uni-col :span="4">
				<span>!</span>
			</uni-col>
		</uni-row>

		<!-- partial -->
		<!-- <button type="default" @click="goTest()">goTest</button>
		<button type="default" @click="goText()">goText</button>
		<button type="default" @click="goTigurashi()">goTigurashi</button> -->
	</view>
</template>

<script>
	import music from './music.vue';
	export default {
		components:{
			music
		},
		data() {
			return {
				title: 'Hello! This my first uniCloud App.'
			}
		},
		onLoad() {
			console.log(123);
		},
		methods: {
			goTest() {
				// window.open(this.href)
				//在起始页面跳转到test.vue页面并传递参数
				uni.navigateTo({
					url: 'test?id=1&name=uniapp'
				});
			},
			goText() {
				// window.open(this.href)
				//在起始页面跳转到test.vue页面并传递参数
				uni.navigateTo({
					url: 'text?id=1&name=uniapp'
				});
			},
			goTigurashi() {
				console.log(this._)
				console.log(this._.add(1, 2))
				// window.open(this.href)
				//在起始页面跳转到test.vue页面并传递参数
				uni.navigateTo({
					url: 'hig?id=1&name=uniapp'
				});
			}
		}
	}
</script>

<style>
	@import url("https://fonts.googleapis.com/css?family=Modak");

	/* latin */
	@font-face {
		font-family: 'Gloria Hallelujah';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/gloriahallelujah/v12/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		height: var(--status-bar-height);
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.demo-uni-row {
		margin-top: 60px;
	}

	.text {
		/* height: 200px; */
		height: 75px;
		display: inline-block;
		font-size: 100px;
		/* line-height: 84%; */
		line-height: 100px;
		font-family: Modak;
		padding-left: 7px;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		/* margin-top: 50px; */
		/* margin-top: calc(50vh - 100px); */
		text-shadow: 7px 7px 0px #d2d2d22e;
	}


	.text-1 {
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='200px' height='200px' viewBox='0 0 400 400'%3e%3cdefs%3e%3cfilter id='filter' width='400px' height='400px' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-color='%23f5576c' flood-opacity='1' x='0' y='0' width='250px' height='250px' result='flood3'%3e%3c/feFlood%3e%3cfeFlood flood-color='%23f093fb' flood-opacity='1' x='150px' y='150px' width='250px' height='250px' result='flood4'%3e%3c/feFlood%3e%3cfeGaussianBlur stdDeviation='50 50' x='0%25' y='0%25' width='100%25' height='100%25' in='flood3' edgeMode='none' result='blur1'%3e%3c/feGaussianBlur%3e%3cfeGaussianBlur stdDeviation='50 50' x='0%25' y='0%25' width='100%25' height='100%25' in='flood4' edgeMode='none' result='blur2'%3e%3c/feGaussianBlur%3e%3cfeBlend mode='normal' x='0%25' y='0%25' width='100%25' height='100%25' in='blur2' in2='SourceGraphic' result='blend5'%3e%3c/feBlend%3e%3cfeBlend mode='normal' x='0%25' y='0%25' width='100%25' height='100%25' in='blur1' in2='blend5' result='blend6'%3e%3c/feBlend%3e%3c/filter%3e%3c/defs%3e%3crect width='400' height='400' x='0' y='0' fill='%23fee140' filter='url(%23filter)'%3e%3c/rect%3e%3c/svg%3e");
	}

	.text-2 {
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='200px' height='200px' viewBox='0 0 400 400'%3e%3cdefs%3e%3cfilter id='filter' width='400px' height='400px' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-color='%238fd3f4' flood-opacity='1' x='0' y='0' width='250px' height='250px' result='flood3'%3e%3c/feFlood%3e%3cfeFlood flood-color='%2396e6a1' flood-opacity='1' x='150px' y='150px' width='250px' height='250px' result='flood4'%3e%3c/feFlood%3e%3cfeGaussianBlur stdDeviation='50 50' x='0%25' y='0%25' width='100%25' height='100%25' in='flood3' edgeMode='none' result='blur1'%3e%3c/feGaussianBlur%3e%3cfeGaussianBlur stdDeviation='50 50' x='0%25' y='0%25' width='100%25' height='100%25' in='flood4' edgeMode='none' result='blur2'%3e%3c/feGaussianBlur%3e%3cfeBlend mode='normal' x='0%25' y='0%25' width='100%25' height='100%25' in='blur2' in2='SourceGraphic' result='blend5'%3e%3c/feBlend%3e%3cfeBlend mode='normal' x='0%25' y='0%25' width='100%25' height='100%25' in='blur1' in2='blend5' result='blend6'%3e%3c/feBlend%3e%3c/filter%3e%3c/defs%3e%3crect width='400' height='400' x='0' y='0' fill='%23d4fc79' filter='url(%23filter)'%3e%3c/rect%3e%3c/svg%3e");
	}

	.text-3 {
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='200px' height='200px' viewBox='0 0 400 400'%3e%3cdefs%3e%3cfilter id='filter' width='400px' height='400px' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-color='%23cd9cf2' flood-opacity='1' x='0' y='0' width='250px' height='250px' result='flood3'%3e%3c/feFlood%3e%3cfeFlood flood-color='%23c2e9fb' flood-opacity='1' x='150px' y='150px' width='250px' height='250px' result='flood4'%3e%3c/feFlood%3e%3cfeGaussianBlur stdDeviation='50 50' x='0%25' y='0%25' width='100%25' height='100%25' in='flood3' edgeMode='none' result='blur1'%3e%3c/feGaussianBlur%3e%3cfeGaussianBlur stdDeviation='50 50' x='0%25' y='0%25' width='100%25' height='100%25' in='flood4' edgeMode='none' result='blur2'%3e%3c/feGaussianBlur%3e%3cfeBlend mode='normal' x='0%25' y='0%25' width='100%25' height='100%25' in='blur2' in2='SourceGraphic' result='blend5'%3e%3c/feBlend%3e%3cfeBlend mode='normal' x='0%25' y='0%25' width='100%25' height='100%25' in='blur1' in2='blend5' result='blend6'%3e%3c/feBlend%3e%3c/filter%3e%3c/defs%3e%3crect width='400' height='400' x='0' y='0' fill='%2366a6ff' filter='url(%23filter)'%3e%3c/rect%3e%3c/svg%3e");
	}

	.text-4 {
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='200px' height='200px' viewBox='0 0 400 400'%3e%3cdefs%3e%3cfilter id='filter' width='400px' height='400px' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-color='%230fd850' flood-opacity='1' x='0' y='0' width='250px' height='250px' result='flood3'%3e%3c/feFlood%3e%3cfeFlood flood-color='%2320E2D7' flood-opacity='1' x='80px' y='160px' width='250px' height='250px' result='flood4'%3e%3c/feFlood%3e%3cfeGaussianBlur stdDeviation='50 50' x='0%25' y='0%25' width='100%25' height='100%25' in='flood3' edgeMode='none' result='blur1'%3e%3c/feGaussianBlur%3e%3cfeGaussianBlur stdDeviation='50 50' x='0%25' y='0%25' width='100%25' height='100%25' in='flood4' edgeMode='none' result='blur2'%3e%3c/feGaussianBlur%3e%3cfeBlend mode='normal' x='0%25' y='0%25' width='100%25' height='100%25' in='blur2' in2='SourceGraphic' result='blend5'%3e%3c/feBlend%3e%3cfeBlend mode='normal' x='0%25' y='0%25' width='100%25' height='100%25' in='blur1' in2='blend5' result='blend6'%3e%3c/feBlend%3e%3c/filter%3e%3c/defs%3e%3crect width='400' height='400' x='0' y='0' fill='%23fbed96' filter='url(%23filter)'%3e%3c/rect%3e%3c/svg%3e");
		animation: acticity3 3s linear;
		/* animation-duration: 3s;
		animation-iteration-count: infinite; */
	}

	.text-5 {
		visibility: hidden;
		animation: acticity5 3s linear;
	}

	@keyframes acticity3 {
		0% {
			left: calc(-100vw);
			top: -40px;
			opacity: 0;
			position: relative;
		}

		/* 25% {
			left: 0px;
			top: -10px;
			position: relative;
		} */
		40% {
			left: 50px;
			top: -80px;
			opacity: .4;
			transform: rotate(360deg);
			position: relative;
		}

		50% {
			left: 180px;
			top: -40px;
			opacity: .5;
			transform: rotate(720deg);
			position: relative;
		}

		70% {
			right: -100px;
			top: 0px;
			opacity: .7;
			transform: rotate(180deg);
			position: relative;
		}

		80% {
			/* left: -200px; */
			top: -20px;
			left: 0;
			opacity: 1;
			transform: rotate(-90deg);
			position: relative;
		}

		90% {
			/* left: -200px; */
			left: 0;
			top: 0px;
			transform: rotate(-360deg);
			position: relative;
		}

		100% {
			/* left: -200px; */
			left: 0;
			top: 0px;
			position: relative;
			transform: rotate(-720deg);
		}
	}

	@keyframes acticity5 {
		0% {
			/* height: 200px; */
			visibility: visible;
			display: inline-block;
			font-size: 100px;
			/* line-height: 84%; */
			line-height: 100px;
			font-family: Modak;
			padding-left: 7px;
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
			/* margin-top: 50px; */
			/* margin-top: calc(50vh - 100px); */
			text-shadow: 7px 7px 0px #d2d2d22e;
		}

		80%,
		100% {
			visibility: hidden;
			position: fixed;
			right: -100px;
		}
	}

	/* love heart*/
	.back {
		position: fixed;
		padding: 0;
		margin: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgb(252, 235, 236);
		animation-name: back;
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}

	.love {
		position: absolute;
		background-color: rgb(207, 105, 112);
		width: 250px;
		height: 250px;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		transform: rotate(-45deg);
		animation-name: love;
		animation-duration: 3s;
		animation-delay: 1s;
		animation-iteration-count: infinite;
	}

	.love::before {
		content: "";
		position: absolute;
		background-color: rgb(207, 105, 112);
		border-radius: 50%;
		width: 250px;
		height: 250px;
		top: -125px;
		left: 0px;
	}

	.love::after {
		content: "";
		position: absolute;
		background-color: rgb(207, 105, 112);
		border-radius: 50%;
		width: 250px;
		height: 250px;
		left: 125px;
		top: 0px;
	}

	@keyframes back {
		50% {
			background: rgb(250, 211, 214);
		}
	}

	@keyframes love {
		50% {
			transform: scale(0.3) rotate(-45deg);
		}
	}

	/*love-1*/
	.love-1 {
		position: absolute;
		background-color: rgb(231, 132, 139);
		width: 125px;
		height: 125px;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		transform: rotate(-45deg);
		animation-name: love-1;
		animation-duration: 2s;
		animation-delay: 1.7s;
		animation-iteration-count: infinite;
	}

	.love-1::before {
		content: "";
		position: absolute;
		background-color: rgb(231, 132, 139);
		border-radius: 50%;
		width: 125px;
		height: 125px;
		top: -62.5px;
		left: 0px;
	}

	.love-1::after {
		content: "";
		position: absolute;
		background-color: rgb(231, 132, 139);
		border-radius: 50%;
		width: 125px;
		height: 125px;
		left: 62.5px;
		top: 0px;
	}

	@keyframes love-1 {
		50% {
			transform: scale(0.5) rotate(-45deg);

		}
	}

	/*love-2*/
	.love-2 {
		position: absolute;
		background-color: pink;
		width: 62.5px;
		height: 62.5px;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		transform: rotate(-45deg);
		animation-name: love-2;
		animation-duration: 1s;
		animation-delay: 1s;
		animation-iteration-count: infinite;
	}

	.love-2::before {
		content: "";
		position: absolute;
		background-color: pink;
		border-radius: 50%;
		width: 62.5px;
		height: 62.5px;
		top: -31.25px;
		left: 0px;
	}

	.love-2::after {
		content: "";
		position: absolute;
		background-color: pink;
		border-radius: 50%;
		width: 62.5px;
		height: 62.5px;
		left: 31.25px;
		top: 0px;
	}

	@keyframes love-2 {
		50% {
			transform: scale(1.25) rotate(-45deg);
		}
	}

	/* love heart end */
	.index-text {
		color: #FFFFFF;
		font-size: 26px;
	}

	/* balloon */
</style>
<style>
	.balloon {
		font-family: 'Wendy One', sans-serif;
		/* width: 738px; */
		width: 100%;
		margin: 0 auto;
		padding-top: 30px;
		position: absolute;
		bottom: 15px;
	}

	.balloon span {
		/* text-transform: uppercase;
		font-size: 4.8em;
		color: white;
		position: relative;
		top: 30px;
		left: 50%;
		margin-left: -27px; */
		text-transform: uppercase;
		font-size: 1.8em;
		color: white;
		position: relative;
		top: 15px;
		left: 50%;
		margin-left: -10px;
	}

	.balloon>uni-view {
		/* width: 104px;
		height: 140px; */
		width: 16%;
		height: 80px;
		background: rgba(182, 15, 97, 0.9);
		border-radius: 0;
		border-radius: 80% 80% 80% 80%;
		margin: 0 auto;
		/* position: absolute; */
		padding: 10px;
		box-shadow: inset 17px 7px 10px rgba(182, 15, 97, 0.9);
		-webkit-transform-origin: bottom center;
	}

	.balloon>uni-view:nth-child(1) {
		background: rgba(182, 15, 97, 0.9);
		left: 0;
		box-shadow: inset 10px 10px 10px rgba(135, 11, 72, 0.9);
		-webkit-animation: enter 1s ease-in, balloon1 6s 1s ease-in-out infinite;
		-moz-animation: enter 1s ease-in, balloon1 6s 1s ease-in-out infinite;
		-o-animation: enter 1s ease-in, balloon1 6s 1s ease-in-out infinite;
		animation: enter 1s ease-in, balloon1 6s 1s ease-in-out infinite;
	}

	.balloon>uni-view:nth-child(1):before {
		color: rgba(182, 15, 97, 0.9);
	}

	.balloon>uni-view:nth-child(2) {
		background: rgba(242, 112, 45, 0.9);
		/* left: 120px; */
		box-shadow: inset 10px 10px 10px rgba(222, 85, 14, 0.9);
		-webkit-animation: balloon2 6s ease-in-out infinite;
		-moz-animation: balloon2 6s ease-in-out infinite;
		-o-animation: balloon2 6s ease-in-out infinite;
		animation: balloon2 6s ease-in-out infinite;
	}

	.balloon>uni-view:nth-child(2):before {
		color: rgba(242, 112, 45, 0.9);
	}

	.balloon>uni-view:nth-child(3) {
		background: rgba(45, 181, 167, 0.9);
		/* left: 240px; */
		box-shadow: inset 10px 10px 10px rgba(35, 140, 129, 0.9);
		-webkit-animation: balloon4 6s ease-in-out infinite;
		-moz-animation: balloon4 6s ease-in-out infinite;
		-o-animation: balloon4 6s ease-in-out infinite;
		animation: balloon4 6s ease-in-out infinite;
	}

	.balloon>uni-view:nth-child(3):before {
		color: rgba(45, 181, 167, 0.9);
	}

	.balloon>uni-view:nth-child(4) {
		background: rgba(190, 61, 244, 0.9);
		/* left: 360px; */
		box-shadow: inset 10px 10px 10px rgba(173, 14, 240, 0.9);
		-webkit-animation: balloon1 5s ease-in-out infinite;
		-moz-animation: balloon1 5s ease-in-out infinite;
		-o-animation: balloon1 5s ease-in-out infinite;
		animation: balloon1 5s ease-in-out infinite;
	}

	.balloon>uni-view:nth-child(4):before {
		color: rgba(190, 61, 244, 0.9);
	}

	.balloon>uni-view:nth-child(5) {
		background: rgba(180, 224, 67, 0.9);
		/* left: 480px; */
		box-shadow: inset 10px 10px 10px rgba(158, 206, 34, 0.9);
		-webkit-animation: balloon3 5s ease-in-out infinite;
		-moz-animation: balloon3 5s ease-in-out infinite;
		-o-animation: balloon3 5s ease-in-out infinite;
		animation: balloon3 5s ease-in-out infinite;
	}

	.balloon>uni-view:nth-child(5):before {
		color: rgba(180, 224, 67, 0.9);
	}

	.balloon>uni-view:nth-child(6) {
		background: rgba(242, 194, 58, 0.9);
		left: 600px;
		box-shadow: inset 10px 10px 10px rgba(234, 177, 15, 0.9);
		-webkit-animation: balloon2 3s ease-in-out infinite;
		-moz-animation: balloon2 3s ease-in-out infinite;
		-o-animation: balloon2 3s ease-in-out infinite;
		animation: balloon2 3s ease-in-out infinite;
	}

	.balloon>uni-view:nth-child(6):before {
		color: rgba(242, 194, 58, 0.9);
	}

	.balloon>uni-view:before {
		color: rgba(182, 15, 97, 0.9);
		position: absolute;
		bottom: -11px;
		left: 20px;
		content: "▲";
		font-size: 1em;
	}


	/*BALLOON 1 4*/
	@-webkit-keyframes balloon1 {

		0%,
		100% {
			-webkit-transform: translateY(0) rotate(-6deg);
		}

		50% {
			-webkit-transform: translateY(-20px) rotate(8deg);
		}
	}

	@-moz-keyframes balloon1 {

		0%,
		100% {
			-moz-transform: translateY(0) rotate(-6deg);
		}

		50% {
			-moz-transform: translateY(-20px) rotate(8deg);
		}
	}

	@-o-keyframes balloon1 {

		0%,
		100% {
			-o-transform: translateY(0) rotate(-6deg);
		}

		50% {
			-o-transform: translateY(-20px) rotate(8deg);
		}
	}

	@keyframes balloon1 {

		0%,
		100% {
			transform: translateY(0) rotate(-6deg);
		}

		50% {
			transform: translateY(-20px) rotate(8deg);
		}
	}

	/* BAllOON 2 5*/
	@-webkit-keyframes balloon2 {

		0%,
		100% {
			-webkit-transform: translateY(0) rotate(6eg);
		}

		50% {
			-webkit-transform: translateY(-30px) rotate(-8deg);
		}
	}

	@-moz-keyframes balloon2 {

		0%,
		100% {
			-moz-transform: translateY(0) rotate(6deg);
		}

		50% {
			-moz-transform: translateY(-30px) rotate(-8deg);
		}
	}

	@-o-keyframes balloon2 {

		0%,
		100% {
			-o-transform: translateY(0) rotate(6deg);
		}

		50% {
			-o-transform: translateY(-30px) rotate(-8deg);
		}
	}

	@keyframes balloon2 {

		0%,
		100% {
			transform: translateY(0) rotate(6deg);
		}

		50% {
			transform: translateY(-30px) rotate(-8deg);
		}
	}

	/* BAllOON 0*/
	@-webkit-keyframes balloon3 {

		0%,
		100% {
			-webkit-transform: translate(0, -10px) rotate(6eg);
		}

		50% {
			-webkit-transform: translate(-20px, 30px) rotate(-8deg);
		}
	}

	@-moz-keyframes balloon3 {

		0%,
		100% {
			-moz-transform: translate(0, -10px) rotate(6eg);
		}

		50% {
			-moz-transform: translate(-20px, 30px) rotate(-8deg);
		}
	}

	@-o-keyframes balloon3 {

		0%,
		100% {
			-o-transform: translate(0, -10px) rotate(6eg);
		}

		50% {
			-o-transform: translate(-20px, 30px) rotate(-8deg);
		}
	}

	@keyframes balloon3 {

		0%,
		100% {
			transform: translate(0, -10px) rotate(6eg);
		}

		50% {
			transform: translate(-20px, 30px) rotate(-8deg);
		}
	}

	/* BAllOON 3*/
	@-webkit-keyframes balloon4 {

		0%,
		100% {
			-webkit-transform: translate(10px, -10px) rotate(-8eg);
		}

		50% {
			-webkit-transform: translate(-15px, 20px) rotate(10deg);
		}
	}

	@-moz-keyframes balloon4 {

		0% {
			-webkit-transform: translateY(-10px) rotate(-8eg);
		}

		50% {
			-webkit-transform: rotate(10deg);
		}

		100% {
			-webkit-transform: translateY(50px) rotate(-8eg);
		}
	}

	@-o-keyframes balloon4 {

		0%,
		100% {
			-o-transform: translate(10px, -10px) rotate(-8eg);
		}

		50% {
			-o-transform: translate(-15px, 10px) rotate(10deg);
		}
	}

	@keyframes balloon4 {

		0%,
		100% {
			transform: translate(10px, -10px) rotate(-8eg);
		}

		50% {
			transform: translate(-15px, 10px) rotate(10deg);
		}
	}


	/* enter*/
	/* 	@-webkit-keyframes enter {

		0% {
			-webkit-transform: translateY(-10px) rotate(-8eg);
		}
		50% {
			-webkit-transform: rotate(10deg);
		}
		100% {
			-webkit-transform: translateY(50px) rotate(-8eg);
		}
	}

	@-moz-keyframes enter {

		0% {
			-webkit-transform: translateY(-10px) rotate(-8eg);
		}
		50% {
			-webkit-transform: rotate(10deg);
		}
		100% {
			-webkit-transform: translateY(50px) rotate(-8eg);
		}
	}

	@-o-keyframes enter {

		0% {
			-webkit-transform: translateY(-10px) rotate(-8eg);
		}
		50% {
			-webkit-transform: rotate(10deg);
		}
		100% {
			-webkit-transform: translateY(50px) rotate(-8eg);
		}
	} */

	@keyframes enter {

		0% {
			-webkit-transform: translateY(-100px) rotate(-8eg);
		}

		50% {
			-webkit-transform: rotate(10deg);
		}

		100% {
			-webkit-transform: translateY(50px) rotate(-8eg);
		}
	}

	/* my-text */
	h1 {
		position: relative;
		top: 200px;
		text-align: center;
		color: white;
		font-size: 3.5em;
	}
</style>






<style>
	@charset "UTF-8";


	* {
		box-sizing: border-box;
	}

	*:before,
	*:after {
		content: "";
		position: absolute;
	}

	.main-content {
		font-family: "Rubik", sans-serif;
		position: absolute;
		bottom: 100px;
		height: 100px;
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}

	.main-content .item {
		height: 100%;
		display: grid;
		grid-template-rows: 1fr min-content;
		align-items: center;
		justify-content: center;
		/* height: 50vh; */
		flex-wrap: wrap;
		/* background: var(--bg-color); */
	}

	.main-content .item:not(.footer) {
		padding-top: 1rem;
	}

	button {
		background: transparent;
		color: #fff;
		border: 3px solid #fff;
		border-radius: 50px;
		padding: 0.8rem 2rem;
		font: 24px "Margarine", sans-serif;
		outline: none;
		cursor: pointer;
		position: relative;
		transition: 0.2s ease-in-out;
		letter-spacing: 2px;
	}

	.name {
		width: 100%;
		text-align: center;
		padding: 0 0 3rem;
		font: 500 14px "Rubik", sans-serif;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
	}

	.button__wrapper {
		display: inline-block;
		position: relative;
		width: 200px;
		height: 65px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button-pulse button {
		background: var(--bg-color);
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}

	.button-pulse .button__wrapper:hover .pulsing:before {
		animation: pulsing 0.2s linear infinite;
	}

	.button-pulse .button__wrapper:hover .pulsing:after {
		animation: pulsing1 0.2s linear infinite;
	}

	.pulsing {
		width: 99%;
		height: 99%;
		border-radius: 50px;
		z-index: 1;
		position: relative;
	}

	.pulsing:before,
	.pulsing:after {
		width: 100%;
		height: 100%;
		border: inherit;
		top: 0;
		left: 0;
		z-index: 0;
		background: #fff;
		border-radius: inherit;
		animation: pulsing 2.5s linear infinite;
	}

	.pulsing:after {
		animation: pulsing1 2.5s linear infinite;
	}

	@keyframes pulsing {
		0% {
			opacity: 1;
			transform: scaleY(1) scaleX(1);
		}

		20% {
			opacity: 0.5;
		}

		70% {
			opacity: 0.2;
			transform: scaleY(1.8) scaleX(1.4);
		}

		80% {
			opacity: 0;
			transform: scaleY(1.8) scaleX(1.4);
		}

		90% {
			opacity: 0;
			transform: scaleY(1) scaleX(1);
		}
	}

	@keyframes pulsing1 {
		0% {
			opacity: 1;
			transform: scaleY(1) scaleX(1);
		}

		20% {
			opacity: 0.5;
		}

		70% {
			opacity: 0.2;
			transform: scaleY(1.3) scaleX(1.15);
		}

		80% {
			opacity: 0;
			transform: scaleY(1.3) scaleX(1.15);
		}

		90% {
			opacity: 0;
			transform: scaleY(1) scaleX(1);
		}
	}


	@keyframes typing {
		0% {
			width: 0;
		}

		50% {
			width: 100%;
		}

		55%,
		65%,
		75% {
			opacity: 1;
		}

		60%,
		70% {
			opacity: 0;
		}

		80% {
			width: 100%;
		}

		100% {
			width: 0;
		}
	}


	@keyframes blink {

		25%,
		75% {
			color: transparent;
		}

		40%,
		60% {
			color: #fff;
		}
	}


	@keyframes up-down {
		50% {
			margin-top: -20px;
		}
	}

	.button-100 .emoji {
		position: absolute;
		top: -45px;
		left: 0;
		width: 35px;
		height: 35px;
		overflow: hidden;
	}

	.button-100 .emoji:before {
		content: "💯";
		display: inline-block;
		animation: give-score 2.5s infinite;
		position: relative;
		top: 0;
	}

	.button-100 .emoji:nth-child(2) {
		left: 0;
		right: 0;
		margin: auto;
	}

	.button-100 .emoji:nth-child(2):before {
		animation: give-score 2.5s infinite 0.2s;
	}

	.button-100 .emoji:nth-child(3) {
		left: auto;
		right: 0;
	}

	.button-100 .emoji:nth-child(3):before {
		animation: give-score 2.5s infinite 0.4s;
	}

	.button-100 button:hover .emoji:before {
		content: "👏";
		transition: 0.5s ease;
	}

	@keyframes give-score {

		30%,
		80% {
			top: 0;
		}

		40%,
		70% {
			top: 50px;
		}
	}


	.button-rainbow button {
		animation: rainbow 3s infinite, heartbeat 0.6s infinite;
		background: #c0392b;
	}

	.button-rainbow button .rainbow {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: -40px;
		transition: 0.5s ease;
		opacity: 0;
		transform: rotate(0);
	}

	.button-rainbow button .rainbow:before {
		content: "🌈";
		left: 0;
	}

	.button-rainbow button:hover .rainbow {
		opacity: 1;
		animation: rotate-nonstop 0.2s infinite;
	}

	.button-rainbow button+.name {
		color: #444;
	}

	@keyframes rotate-nonstop {
		50% {
			transform: rotate(92deg);
		}
	}

	@keyframes omg-yes {
		50% {
			opacity: 1;
		}

		100% {
			top: -50px;
		}
	}

	@keyframes rainbow {
		0% {
			background: #1abc9c;
		}

		10% {
			background: #2ecc71;
		}

		20% {
			background: #3498db;
		}

		30% {
			background: #9b59b6;
		}

		40% {
			background: #e74c3c;
		}

		50% {
			background: #e67e22;
		}

		60% {
			background: #f1c40f;
		}

		70% {
			background: #2c3e50;
		}

		80% {
			background: #9b59b6;
		}
	}

	@keyframes heartbeat {
		50% {
			transform: scale(1.1);
		}
	}
</style>
