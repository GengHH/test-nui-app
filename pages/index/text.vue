<template>
	<div class="textContainer">

		<h1>
			<a href="" class="typewrite" data-period="2000"
				data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
				<span class="wrap"></span>
			</a>
		</h1>
	</div>
</template>

<script>
	let TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function() {
		let i = this.loopNum % this.toRotate.length;
		let fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		let that = this;
		let delta = 200 - Math.random() * 100;

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
	};
	export default {
		//初始化加载
		onReady() {
			this.load();
		},
		methods: {
			load() {
				console.log(1111111111);
				let elements = document.getElementsByClassName('typewrite');
				for (let i = 0; i < elements.length; i++) {
					console.log(22222222);
					let toRotate = elements[i].getAttribute('data-type');
					console.log(toRotate);
					console.log(elements[i]);
					console.log(elements[i].getAttribute('data-type'));
					let period = elements[i].getAttribute('data-period');
					if (toRotate) {
						console.log(33333333);
						new TxtType(elements[i], JSON.parse(toRotate), period);
					}
				}
				// INJECT CSS
				let css = document.createElement("style");
				css.type = "text/css";
				css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
				document.body.appendChild(css);
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
</style>
