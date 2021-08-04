<template>
	<view class="flex-container">
		<web-view :webview-styles="webviewStyles" src="https://static-6294bbe6-5207-4f48-a030-98219bdba3b7.bspapp.com"></web-view>
		<!-- <music></music> -->
		<uni-row class="unit">
			<!-- <div class="unit"> -->
			<uni-row class="heart">
				<div class="heart-piece-0"></div>
				<div class="heart-piece-1"></div>
				<div class="heart-piece-2"></div>
				<div class="heart-piece-3"></div>
				<div class="heart-piece-4"></div>
				<div class="heart-piece-5"></div>
				<div class="heart-piece-6"></div>
				<div class="heart-piece-7"></div>
				<div class="heart-piece-8"></div>
			</uni-row>
			<p>love is love</p>
			<!-- <p class="tip">准备好开始❥(^_-)的旅程了吗？</p> -->
			<!-- </div> -->
		</uni-row>
		<uni-row class="text">
			<p class="tip">准备好开始❥(^_-)的旅程了吗？</p>
			<!-- </div> -->
		</uni-row>
		<!-- Loader 2 -->
		<uni-row class="svg">
			<svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
				<circle fill="none" stroke="#fff" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48" />
				<line fill="none" stroke-linecap="round" stroke="#fff" stroke-width="4" stroke-miterlimit="10" x1="50"
					y1="50" x2="85" y2="50.5">
					<animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 50" to="360 50 50"
						repeatCount="indefinite" />
				</line>
				<line fill="none" stroke-linecap="round" stroke="#fff" stroke-width="4" stroke-miterlimit="10" x1="50"
					y1="50" x2="49.5" y2="74">
					<animateTransform attributeName="transform" dur="15s" type="rotate" from="0 50 50" to="360 50 50"
						repeatCount="indefinite" />
				</line>
			</svg>
		</uni-row>
	</view>
</template>

<script>
	import music from '../common/music.vue';
	export default {
		components: {
			music
		},
		data() {
			return {
				title: 'Hello! This my first uniCloud App.'
			}
		},
		onReady() {
			this.goNextStep();
		},
		methods: {
			goNextStep() {
				setTimeout(function() {
					// window.open(this.href)
					//在起始页面跳转到test.vue页面并传递参数
					// #ifdef H5
					uni.navigateTo({
						url: 'second?id=1&name=uniapp'
					});
					// #endif
					// // #ifdef MP-WEIXIN
					// uni.webView.navigateTo({
					// 	url: 'https://static-6294bbe6-5207-4f48-a030-98219bdba3b7.bspapp.com'
					// });
					// // #endif
				}, 4200);
			}
		}
	}
</script>

<style>
	/* @import url("https://fonts.googleapis.com/css?family=Lato:100"); */
	/* latin-ext */
	@font-face {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 100;
		src: url(../../static/font/S6u8w4BMUTPHh30AUi-qJCY.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 100;
		src: url(../../static/font/S6u8w4BMUTPHh30AXC-q.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	html,
	body {
		width: 100%;
		height: 100%;
	}

	.flex-container {
		/* background-color: #262e6f; */
		background-color: #da68ed;
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.unit {
		text-align: center;
	}

	.unit p {
		margin-top: 100px;
		font-family: 'Lato', sans-serif;
		font-weight: 100;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: #fff;
	}

	.heart {
		position: relative;
		font-size: 0;
		width: 138px;
	}

	[class*="heart-piece-"] {
		position: absolute;
		top: -5px;
		width: 10px;
		height: 10px;
		border-radius: 5px;
	}

	.heart-piece-4 {
		-webkit-animation: piece-4 3.2s infinite;
		animation: piece-4 3.2s infinite;
	}

	.heart-piece-3,
	.heart-piece-5 {
		-webkit-animation: piece-3 3.2s infinite;
		animation: piece-3 3.2s infinite;
	}

	.heart-piece-2,
	.heart-piece-6 {
		-webkit-animation: piece-2 3.2s infinite;
		animation: piece-2 3.2s infinite;
	}

	.heart-piece-1,
	.heart-piece-7 {
		-webkit-animation: piece-1 3.2s infinite;
		animation: piece-1 3.2s infinite;
	}

	.heart-piece-0,
	.heart-piece-8 {
		-webkit-animation: piece-0 3.2s infinite;
		animation: piece-0 3.2s infinite;
	}

	.heart-piece-0 {
		left: 0px;
		-webkit-animation-delay: 0s;
		animation-delay: 0s;
		background-color: #ec2d73;
	}

	.heart-piece-1 {
		left: 16px;
		-webkit-animation-delay: 0.15s;
		animation-delay: 0.15s;
		background-color: #eb5324;
	}

	.heart-piece-2 {
		left: 32px;
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
		background-color: #fdc800;
	}

	.heart-piece-3 {
		left: 48px;
		-webkit-animation-delay: 0.45s;
		animation-delay: 0.45s;
		background-color: #47b264;
	}

	.heart-piece-4 {
		left: 64px;
		-webkit-animation-delay: 0.6s;
		animation-delay: 0.6s;
		background-color: #1470bd;
	}

	.heart-piece-5 {
		left: 80px;
		-webkit-animation-delay: 0.75s;
		animation-delay: 0.75s;
		background-color: #76469a;
	}

	.heart-piece-6 {
		left: 96px;
		-webkit-animation-delay: 0.9s;
		animation-delay: 0.9s;
		background-color: #ec2d73;
	}

	.heart-piece-7 {
		left: 112px;
		-webkit-animation-delay: 1.05s;
		animation-delay: 1.05s;
		background-color: #eb5324;
	}

	.heart-piece-8 {
		left: 128px;
		-webkit-animation-delay: 1.2s;
		animation-delay: 1.2s;
		background-color: #fdc800;
	}

	@-webkit-keyframes piece-4 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 94px;
			top: -23px;
		}
	}

	@keyframes piece-4 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 94px;
			top: -23px;
		}
	}

	@-webkit-keyframes piece-3 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 90px;
			top: -31px;
		}
	}

	@keyframes piece-3 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 90px;
			top: -31px;
		}
	}

	@-webkit-keyframes piece-2 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 80px;
			top: -37px;
		}
	}

	@keyframes piece-2 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 80px;
			top: -37px;
		}
	}

	@-webkit-keyframes piece-1 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 60px;
			top: -31px;
		}
	}

	@keyframes piece-1 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 60px;
			top: -31px;
		}
	}

	@-webkit-keyframes piece-0 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 30px;
			top: -15px;
		}
	}

	@keyframes piece-0 {

		0%,
		10%,
		90%,
		100% {
			height: 10px;
			top: -5px;
		}

		45%,
		55% {
			height: 30px;
			top: -15px;
		}
	}


	.tip {
		animation: tip 2s linear infinite;
	}

	@keyframes tip {

		0%,
		10%,
		90%,
		100% {
			opacity: .3;
		}

		45%,
		55% {
			opacity: .8;
		}
	}
</style>
<style>
	/* @import url(https://fonts.googleapis.com/css?family=Comfortaa:400,700,300); */
	/* cyrillic-ext */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 300;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4QIFqPfE.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}

	/* cyrillic */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 300;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4SYFqPfE.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}

	/* greek */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 300;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4ToFqPfE.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}

	/* vietnamese */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 300;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4QoFqPfE.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 300;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4Q4FqPfE.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 300;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* cyrillic-ext */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 400;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4QIFqPfE.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}

	/* cyrillic */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 400;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4SYFqPfE.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}

	/* greek */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 400;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4ToFqPfE.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}

	/* vietnamese */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 400;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4QoFqPfE.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 400;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4Q4FqPfE.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 400;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* cyrillic-ext */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 700;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4QIFqPfE.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}

	/* cyrillic */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 700;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4SYFqPfE.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}

	/* greek */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 700;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4ToFqPfE.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}

	/* vietnamese */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 700;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4QoFqPfE.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 700;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4Q4FqPfE.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Comfortaa';
		font-style: normal;
		font-weight: 700;
		src: url(../../static/font/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}


	*,
	html {
		margin: 0;
		padding: 0;
	}

	body {
		background: #e74c3c;
		text-align: center;
		font-family: "Comfortaa", cursive;
	}

	.text {
		font-family: 'Lato', sans-serif;
		position: absolute;
		width: 100%;
		height: 100px;
		bottom: 100px;
		text-align: center;
		color: #fff;
	}

	.svg {
		position: absolute;
		width: 100%;
		height: 100px;
		bottom: 50px;
		text-align: center;
	}

	svg {
		width: 50px;
		height: 50px;
		margin: 20px;
		display: inline-block;
	}

	h1 {
		text-align: center;
		color: #fff;
		margin: 0 0 100px;
		font-size: 34px;
		font-weight: 100;
		text-transform: uppercase;
		background-color: #e43725;
		padding: 20px 0;
	}

	h1 b {
		font-weight: 700;
	}

	.made-with-love {
		margin-top: 20px;
		padding: 10px;
		font-size: 10px;
		font-family: arial;
		color: #fff;
	}

	.made-with-love i {
		font-style: normal;
		color: #F50057;
		font-size: 14px;
		position: relative;
		top: 2px;
	}

	.made-with-love a {
		color: #fff;
		text-decoration: none;
	}

	.made-with-love a:hover {
		text-decoration: underline;
	}
</style>
