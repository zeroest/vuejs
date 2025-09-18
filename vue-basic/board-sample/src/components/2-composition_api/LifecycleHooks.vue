<template>
	<div>
		<p>{{ value }}</p>
		<button v-on:click="change">change</button>
	</div>
</template>

<script>
import {
	onBeforeMount,
	onBeforeUnmount,
	onBeforeUpdate,
	onMounted,
	onUnmounted,
	onUpdated,
	ref,
} from 'vue';

export default {
	setup() {
		console.log('1.setup()');
		onBeforeMount(() => {
			console.log('2.onBeforeMount');
		});
		// 초기 렌더링: DOM 노드 생성 및 삽입
		onMounted(() => {
			console.log('3.onMounted');
		});
		// 마운트 됨

		// 데이터 변경시
		onBeforeUpdate(() => {
			console.log('3-1.onBeforeUpdate');
		});
		// 리렌더링 및 패치 이후
		onUpdated(() => {
			console.log('3-2.onUpdated');
		});

		onBeforeUnmount(() => {
			console.log('4.onBeforeUnmount');
		});
		onUnmounted(() => {
			// 마운트 해제됨
			console.log('5.onUnmounted');
		});

		const value = ref('hello');
		const change = () => {
			value.value = value.value + '!';
		};
		return {
			value,
			change,
		};
	},
};
</script>

<style lang="scss" scoped></style>
