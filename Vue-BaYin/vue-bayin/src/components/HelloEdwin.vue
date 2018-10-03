<template>
	<div class="edwin_b">
		{{edwin}}
	</div>
</template>

<script>
export default {

  name: 'HelloEdwin',

  data() {
    return {
    	edwin:"欢迎来到Edwin的家！"
    };
  },
};
</script>

<style lang="css" scoped>
	.edwin_b {
		text-align: center;
		font-size: 25px;
		margin-top: 50px;
		color:#00e0a8;
	}
</style>
