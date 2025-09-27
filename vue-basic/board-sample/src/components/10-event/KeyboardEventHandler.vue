<template>
	<div>
		<input @keyup="onKeyupHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const onKeyupHandler = event => {
			console.log('event.key: ', event.key);
		};
		return {
			onKeyupHandler,
		};
	},
};
</script>

<style lang="scss" scoped></style>
