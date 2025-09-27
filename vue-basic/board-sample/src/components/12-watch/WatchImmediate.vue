<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue3');

		// watch(
		// 	message,
		// 	(newValue, oldValue) => {
		// 		console.log('newValue: ', newValue); // Hello Vue3
		// 		console.log('oldValue: ', oldValue); // undefined
		// 	},
		// 	{
		// 		immediate: true,
		// 	},
		// );

		// immediate 를 직접 구현할 수 있음
		const reverseMessage = ref('');

		const reverseFn = () => {
			reverseMessage.value = message.value.split('').reverse().join('');
		};

		watch(message, reverseFn);
		reverseFn();

		/*
    - **computed**
    Vue 인스턴스의 상태(ref, reactive 변수)의 종속 관계를 자동으로 세팅하고자 할 때는 `computed`로 구현하는 것이 좋다.
    위 예시 처럼 `reverseMessage`는 `message` 값에 따라 결정되어지는 종속관계에 있다.  이 종속관계 코드가 복잡해지면 `watch`로 구현할 경우 더 복잡해지거나 중복계산 또는 오류를 발생시킬 수 있다.

    - **watch**
    Vue 인트턴스의 상태(ref, reactive 변수)의 변경 시점에 특정 액션(call api, push route 등)을 취하고자 할때 적합하다.
    대게의 경우 `computed`로 구현 가능한 것이라면 `watch`가 아니라 `computed`로 구현하는게 대부분 옳다.
    */

		return {
			message,
			reverseMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
