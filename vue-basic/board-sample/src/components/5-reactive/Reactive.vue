<!--https://gymcoding.notion.site/a0565cf4a00341a78da7f5bf7180fd6e-->
<template>
	<div>
		<h2>Reactive</h2>
		<button @click="increment">Click {{ state.count }}</button>
		<button @click="increment">Deep Click {{ state.deep.count }}</button>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	// options api 에서 객체선언시 data 옵션을 사용하는데
	// 내부적으로 반환된 객체는 reactive로 감싸진다
	// data() {
	// 	return {};
	// },

	setup() {
		// reactive는 객체나 배열과 같은 레퍼런스 타입을 반응형 객체로 만들 수 있다
		// primitive 타입은 ref 함수로 @see ./ReactiveRef.vue
		const state = reactive({
			count: 0,
			deep: {
				count: 0,
			},
		});
		const increment = () => {
			state.count++;
			state.deep.count--;
		};

		return {
			state,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
