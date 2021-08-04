<template>
	<uni-row id="audio_btn" :class="{rotate:rotate}">
		<view class="audio_view" @click="play">
			<!-- <div > -->
			<!-- <audio v-if="type=== '1' " loop src="../../static/zc.mp3" id="media" autoplay="" preload=""></audio>
			<audio v-if="type=== '2' " loop src="../../static/jtc.mp3" id="media" autoplay="" preload=""></audio>
			<audio v-if="type=== '3' " loop src="../../static/dshb.mp3" id="media" autoplay="" preload=""></audio> -->
			<!-- </div> -->
		</view>
	</uni-row>
</template>

<script>
	export default {
		props: {
			oneMusic: {
				type: String,
				default: '1'
			}
		},
		data() {
			return {
				rotate: true,
				innerAudioContext: null
			}
		},
		mounted() {
			this.makeMusic();
		},
		methods: {
			makeMusic() {
				let innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext = innerAudioContext;
				innerAudioContext.autoplay = true;
				innerAudioContext.loop = true;

				innerAudioContext.src =
					'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
				if (this.oneMusic === '1') {
					innerAudioContext.src = '../../static/zc.mp3';
				}
				if (this.oneMusic === '2') {
					innerAudioContext.src = '../../static/jtc.mp3';
				}
				if (this.oneMusic === '3') {
					innerAudioContext.src = '../../static/dshb.mp3';
				}
				innerAudioContext.onPlay(() => {
					this.rotate = true;
					// console.log('开始播放');
				});
				innerAudioContext.onPause(() => {
					this.rotate = !this.rotate;
					// console.log('暂停');
				});
				innerAudioContext.onError((res) => {
					console.log(res.errMsg);
					console.log(res.errCode);
				});
			},
			play() {
				if (this.innerAudioContext && this.rotate) {
					console.log(0);
					/*音乐暂停*/
					this.innerAudioContext.pause();
				} else if (this.innerAudioContext && !this.rotate) {
					console.log(1);
					/*音乐开启*/
					this.innerAudioContext.play();
				}
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
		z-index: 999;
	}

	.audio_view {
		height: 100%;
		width: 100%;
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
