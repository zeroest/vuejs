<template>
	<div>
		<h2>반응형 메세지</h2>
		<p>{{ reactiveMessage }}</p>
		<button type="button" v-on:click="addReactiveMessage">Add Message</button>
		<h2>일반 메세지</h2>
		<p>{{ normalMessage }}</p>
		<button type="button" v-on:click="addNormalMessage">Add Message</button>
	</div>
</template>

<script>
import { isRef, ref } from 'vue';
export default {
	setup() {
		const reactiveMessage = ref('This is reactive message');
		const addReactiveMessage = () => {
			console.log('addReactiveMessage: is Ref? ' + isRef(reactiveMessage));
			reactiveMessage.value = reactiveMessage.value + '!';
		};

		let normalMessage = 'This is normal message';
		const addNormalMessage = () => {
			console.log('addNormalMessage: isRef? ' + isRef(normalMessage));
			normalMessage = normalMessage + '!';
		};

		return {
			reactiveMessage,
			addReactiveMessage,
			normalMessage,
			addNormalMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
