<template>
	<div class="bg_heart">
		<music ref="myMusic" oneMusic="3"></music>
		<div class="heartText">
			<p>是不是曾经怀疑过我</p>
			<p>怀疑过我对你的爱</p>
			<p>减少了</p>
			<p>或者不存在了</p>
			<p>那么我来告诉你</p>
			<p>我对你的爱就像</p>
			<p>这层出不穷，源源不断，冉冉上升</p>
			<p>一波接着一波</p>
			<p>如潮涌般袭来</p>
			<!-- <p>每一颗心都代表一份对你的思念</p> -->
			<p>每颗心被你蚀去装满你的影子，没有蚀去的部分却塞满对你的相思。</p>
			<p>
				流星短促，轻轻划过，却能掩盖星空的光亮；昙花命短，可是一现，却能惊艳；一辈子在时间长河中不过沧海一栗，有你的日子，却是我生命里最美的光亮！
			</p>
		</div>
		<button @click="goStar()" style=" position: fixed;
		    bottom: 0;
		    width: 100%;
		    background: #f0f8ff14;
		    color: #eee;
			z-index: 9999999;
		}">Click Me!</button>
	</div>
</template>

<script>
import $ from "@/static/SDK/jquery.min.js"
import music from "../common/music.vue"
export default {
	components: {
		music,
	},
	data() {
		return {}
	},
	onLoad() {
		this.init()
	},
	methods: {
		goStar() {
			this.$refs.myMusic.stopMusic();
			// window.open(this.href)
			//在起始页面跳转到test.vue页面并传递参数
			uni.navigateTo({
				url: 'star?id=1&name=uniapp'
			});
		},
		init() {
			var love = setInterval(function () {
				var r_num = Math.floor(Math.random() * 20) + 1
				var r_size = Math.floor(Math.random() * 45) + 10
				var r_left = Math.floor(Math.random() * 100) + 1
				var r_bg = Math.floor(Math.random() * 100) + 100
				var r_time = Math.floor(Math.random() * 20) + 5
				$(".bg_heart").append(
					"<div class='move-heart' style='width:" +
						r_size +
						"px;height:" +
						r_size +
						"px;left:" +
						r_left +
						"%;background:rgba(255," +
						(r_bg - 25) +
						"," +
						r_bg +
						",1);-webkit-animation:love " +
						r_time +
						"s ease;-moz-animation:love " +
						r_time +
						"s ease;-ms-animation:love " +
						r_time +
						"s ease;animation:love " +
						r_time +
						"s ease'></div>"
				)

				$(".bg_heart").append(
					"<div class='move-heart' style='width:" +
						(r_size - 10) +
						"px;height:" +
						(r_size - 10) +
						"px;left:" +
						(r_left + r_num) +
						"%;background:rgba(255," +
						(r_bg - 25) +
						"," +
						(r_bg + 25) +
						",1);-webkit-animation:love " +
						(r_time + 5) +
						"s ease;-moz-animation:love " +
						(r_time + 5) +
						"s ease;-ms-animation:love " +
						(r_time + 5) +
						"s ease;animation:love " +
						(r_time + 5) +
						"s ease'></div>"
				)

				$(".heart").each(function () {
					var top = $(this)
						.css("top")
						.replace(/[^-\d\.]/g, "")
					var width = $(this)
						.css("width")
						.replace(/[^-\d\.]/g, "")
					if (top <= -100 || width >= 150) {
						$(this).detach()
					}
				})
			}, 800)
		},
	},
}
</script>

<style>
.bg_heart {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* overflow: hidden; */
}

.heartText {
	font-family: fangsong;
	font-weight: 800;
	text-align: center;
	font-size: 20px;
	z-index: 999;
	padding: 0 10px;
	color: #9f6ef8;
}
p {
	padding: 10px 0;
}
</style>
