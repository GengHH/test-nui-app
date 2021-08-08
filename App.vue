<!--
 * @Author: your name
 * @Date: 2021-07-26 09:17:25
 * @LastEditTime: 2021-08-07 12:32:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test-uni-app\App.vue
-->
<script>
export default {
	onLaunch: function () {
		console.log("App Launch")
	},
	onShow: function () {
		console.log("App Show")
	},
	onHide: function () {
		console.log("App Hide")
	},
}
</script>

<style>
uni-page-body,
uni-page-refresh {
	height: 100%;
}
/*每个页面公共css */
:root {
	--darkgrey: #3b3b3b;
	--lightgrey: #768c90;
	--lightestgrey: #dcdedf;
	--red: #c7535d;
	--yellow: #fec14f;
	--nearlyblack: #3b3b3b;
	--lightyellow: #ffeac4;
	--grey: #767676;
}

/* heart页面中的爱心样式 */
.move-heart {
	position: absolute;
	top: -50%;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-m-transform: rotate(-45deg);
	transform: rotate(-45deg);
	z-index: 888;
}
.move-heart:before {
	position: absolute;
	top: -50%;
	left: 0;
	display: block;
	content: "";
	width: 100%;
	height: 100%;
	background: inherit;
	border-radius: 100%;
	z-index: 777;
}
.move-heart:after {
	position: absolute;
	top: 0;
	right: -50%;
	display: block;
	content: "";
	width: 100%;
	height: 100%;
	background: inherit;
	border-radius: 100%;
	z-index: 777;
}

@-webkit-keyframes love {
	0% {
		top: 110%;
	}
}
@-moz-keyframes love {
	0% {
		top: 110%;
	}
}
@-ms-keyframes love {
	0% {
		top: 110%;
	}
}
@keyframes love {
	0% {
		top: 110%;
	}
}
</style>
