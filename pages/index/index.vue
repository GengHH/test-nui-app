<template>
	<view class="content">
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
		</uni-row>
		<uni-row class="index-text">
			<uni-col :span="24">
				this is for you!
			</uni-col>
		</uni-row>
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
		<button type="default" @click="goTest()">goTest</button>
		<button type="default" @click="goText()">goText</button>
		<button type="default" @click="goTigurashi()">goTigurashi</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello! This my first uniCloud App.'
			}
		},
		onLoad() {

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

	.text {
		height: 200px;
		display: inline-block;
		font-size: 100px;
		line-height: 84%;
		font-family: Modak;
		padding-left: 7px;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		margin-top: 50px;
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
		width: 738px;
		margin: 0 auto;
		padding-top: 30px;
		position: relative;
	}

	.balloon span {
		text-transform: uppercase;
		font-size: 4.8em;
		color: white;
		position: relative;
		top: 30px;
		left: 50%;
		margin-left: -27px;
	}

	.balloon>uni-view {
		width: 104px;
		height: 140px;
		background: rgba(182, 15, 97, 0.9);
		border-radius: 0;
		border-radius: 80% 80% 80% 80%;
		margin: 0 auto;
		position: absolute;
		padding: 10px;
		box-shadow: inset 17px 7px 10px rgba(182, 15, 97, 0.9);
		-webkit-transform-origin: bottom center;
	}

	.balloon>uni-view:nth-child(1) {
		background: rgba(182, 15, 97, 0.9);
		left: 0;
		box-shadow: inset 10px 10px 10px rgba(135, 11, 72, 0.9);
		-webkit-animation: balloon1 6s ease-in-out infinite;
		-moz-animation: balloon1 6s ease-in-out infinite;
		-o-animation: balloon1 6s ease-in-out infinite;
		animation: balloon1 6s ease-in-out infinite;
	}

	.balloon>uni-view:nth-child(1):before {
		color: rgba(182, 15, 97, 0.9);
	}

	.balloon>uni-view:nth-child(2) {
		background: rgba(242, 112, 45, 0.9);
		left: 120px;
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
		left: 240px;
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
		left: 360px;
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
		left: 480px;
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
		left: 52px;
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

		0%,
		100% {
			-moz-transform: translate(10px, -10px) rotate(-8eg);
		}

		50% {
			-moz-transform: translate(-15px, 10px) rotate(10deg);
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

	h1 {
		position: relative;
		top: 200px;
		text-align: center;
		color: white;
		font-size: 3.5em;
	}
</style>
