<template>
	<div class="textContainer">
		<h1>
			<a href="" class="typewrite">
				<!-- data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'> -->
				<span class="wrap">{{txt}}</span>
			</a>
		</h1>
	</div>
</template>

<script>
	// 逐字显示
	export default {
		data() {
			return {
				period: "2000",
				toRotate: ["Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop."],
				loopNum: 0,
				txt: '',
				isDeleting: false,
				// period = parseInt(period, 10) || 2000;
			}
		},
		//初始化加载
		onReady() {
			this.tick();
		},
		methods: {
			tick() {
				let that = this;
				let i = this.loopNum % this.toRotate.length;
				let delta = 200 - Math.random() * 100;
				let fullTxt = this.toRotate[i];

				this.period = parseInt(this.period, 10) || 2000;
				if (this.isDeleting) {
					this.txt = fullTxt.substring(0, this.txt.length - 1);
				} else {
					this.txt = fullTxt.substring(0, this.txt.length + 1);
				}

				if (this.isDeleting) {
					delta /= 2;
				}

				if (!this.isDeleting && this.txt === fullTxt) {
					delta = this.period;
					this.isDeleting = true;
				} else if (this.isDeleting && this.txt === '') {
					this.isDeleting = false;
					this.loopNum++;
					delta = 500;
				}

				setTimeout(function() {
					that.tick();
				}, delta);
			}
		}
	}
</script>

<style>
	.textContainer {
		background-color: #ce3635;
		text-align: center;
		color: #fff;
		padding-top: 10em;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	/* 动态显示的字体的样式 */
	.typewrite>.wrap {
		border-right: 0.08em solid #fff
	}
</style>
