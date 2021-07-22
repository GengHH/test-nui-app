<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- partial:index.partial.html -->
		<span class="text text-1">2</span>
		<span class="text text-2">0</span>
		<span class="text text-3">2</span>
		<span class="text text-4">1</span>
		<span class="text text-2">.</span>
		<!-- partial -->
		<button type="default" @click="goTest()">goTest</button>
		<button type="default" @click="goText()">goText</button>
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
			}
		}
	}
</script>

<style>
	/* @import url("https://fonts.googleapis.com/css?family=Modak"); */
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
		height:var(--status-bar-height);
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.text {
		height: 200px;
		display: inline-block;
		font-size: 300px;
		line-height: 84%;
		font-family: Modak;
		padding-left: 7px;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		margin-top: calc(50vh - 100px);
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
</style>
