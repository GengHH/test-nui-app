<template>
	<uni-row id="audio_btn" class="rotate">
		<!-- <div > -->
		<audio loop src="bg_audio.mp3" id="media" autoplay="" preload=""></audio>
		<!-- </div> -->
	</uni-row>
</template>

<script>
	export default {
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
					uni.navigateTo({
						url: 'second?id=1&name=uniapp'
					});
				}, 3000);
			}
		}
	}
</script>

<style>
	#audio_btn {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 30px;
		height: 30px;
		/* background-image: url(normalmusic.svg); */
		background-image: url(../../static/img/music.png);
		background-size: contain;
	}

	.rotate {
		-webkit-animation: rotating 1.2s linear infinite;
		-moz-animation: rotating 1.2s linear infinite;
		-o-animation: rotating 1.2s linear infinite;
		animation: rotating 1.2s linear infinite
	}

	@-webkit-keyframes rotating {
		from {
			-webkit-transform: rotate(0)
		}

		to {
			-webkit-transform: rotate(360deg)
		}
	}

	@keyframes rotating {
		from {
			transform: rotate(0)
		}

		to {
			transform: rotate(360deg)
		}
	}

	@-moz-keyframes rotating {
		from {
			-moz-transform: rotate(0)
		}

		to {
			-moz-transform: rotate(360deg)
		}
	}
</style>
