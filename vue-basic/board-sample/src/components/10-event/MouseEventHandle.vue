<template>
	<div>
		<button @click="printEventInfo('Hello Vue3', $event)">
			inline event handler
		</button>
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log('message: ', message);
			console.log('event.target: ', event.target);
			console.log('event.target.tagName: ', event.target.tagName);
		};
		/*
    message:  Hello Vue3
    MouseEventHandle.vue:14 event.target:  <button> inline event handler </button>
    MouseEventHandle.vue:15 event.target.tagName:  BUTTON
    */

		return {
			printEventInfo,
		};
	},
};
</script>

<style lang="scss" scoped></style>
