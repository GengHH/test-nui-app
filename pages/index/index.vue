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
		margin-top: 100px;
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
		animation-duration: 2s;min	
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
</style>
