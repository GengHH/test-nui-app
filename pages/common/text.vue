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
				period: "1400",
				// toRotate: ["Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop."],
				toRotate: ["Hi, 亲爱的","(=̴̶̷̤̄ ₃ =̴̶̷̤̄)♡.", "不会吧-不会吧.", "不会以为这是给你的情书吧ಠ‿ಠ.", "是不是被骗了，哈哈哈.", 
				"其实，是只请你听听音乐罢了","...........","是不是蛮好听的(•̀ᴗ•́)̑","逗你玩的(づ◡ど)，哈哈哈","记得点击按钮哟"],
				loopNum: 0,
				txt: '',
				isDeleting: false,
				// period = parseInt(period, 10) || 2000;
			}
		},
		//初始化加载
		mounted() {
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

				if (this.txt === "记得点击按钮哟") {
					this.$emit("writeStop");
					return;
				} else {
					setTimeout(function() {
						that.tick();
					}, delta);

				}
			}
		}
	}
</script>

<style>
	.textContainer {
		/* background-color: #da68ed; */
		text-align: center;
		color: #fff;
		font-size: 16px;
		padding: 0 10px;
		/* padding-top: 10em; */
	}

	a {
		color: #ff5722a8;
		text-decoration: none;
	}

	/* 动态显示的字体的样式 */
	.typewrite>.wrap {
		border-right: 0.08em solid #fff
	}
</style>
