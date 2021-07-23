<template>

	<div class="poet">
		<h1>雨霖铃</h1>
		<p>寒蝉凄切，对长亭晚，骤雨初歇。<br>
			都门帐饮无绪，留恋处，兰舟催发。<br>
			执手相看泪眼，竟无语凝噎。<br>
			念去去，千里烟波，暮霭沉沉楚天阔。</p>

		<p>多情自古伤离别，更那堪，冷落清秋节！<br>
			今宵酒醒何处？杨柳岸，晓风残月。<br>
			此去经年，应是良辰好景虚设。<br>
			便纵有千种风情，更与何人说？
		<p>
		<!-- <p class="author">——&lt;宋&gt;<strong>柳永</strong></p> -->
		<p class="author">——《宋》<strong>柳永</strong></p>
	</div>

</template>

<script>
</script>

<style>
	.poet {
		/*wirting-mode实现竖直排版*/
		writing-mode: vertical-rl;
		/*使用行楷字体*/
		font-family: STXingkai;
	}

	.poet h1 {
		margin-top: 4em;
	}

	.poet p:not(.author) {
		letter-spacing: 0.5em;
		line-height: 1.5em;
		margin: 2em;
	}

	.poet .author {
		text-align: right;
	}
</style>
