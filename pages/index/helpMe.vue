<template>
	<div class="container">
		<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件" @clickLeft="clickLeft"></uni-nav-bar>
		<div class="jar">
			<div class="wording help">HELP!</div>
			<div class="wording thanks">THANKS!:)</div>
			<div class="jartop"></div>
			<div class="jarlid"></div>
			<div class="firefly">
				<div class="body">
					<div class="bodybottom"></div>
				</div>
				<div class="wing wing-left"></div>
				<div class="wing wing-right"></div>
				<div class="head"></div>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return {}
		},
		methods:{
			clickLeft(){
				uni.navigateTo({
					url: 'index'
				});
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/css/test.scss';
</style>
