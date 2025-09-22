<template>
	<div>
		<p>{{ original.count }}</p>
		<p>{{ copy.count }}</p>
		<button @click="original.count++">Original count ++</button>
		<button @click="copy.count++">Copy count ++</button>
	</div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		// https://ko.vuejs.org/api/reactivity-core.html#readonly
		const original = reactive({ count: 0 });

		const copy = readonly(original);

		// 원본이 변이되면 복사본에 의존하는 watch 도 트리거
		original.count++;

		// 복사본을 변이하려고 하면 경고와 함께 실패
		console.log('============= change copyed readonly value ===============');
		copy.count++; // [Vue warn] Set operation on key "count" failed: target is readonly.
		console.log('============= change copyed readonly value ===============');

		// A 컴포넌트에서 생성한 객체를 B 컴포넌트에서 변경하지 못하게 할때 사용할 수 있다

		return {
			original,
			copy,
		};
	},
};
</script>

<style lang="scss" scoped></style>
