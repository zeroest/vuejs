<template>
	<div>
		<!--    return 된 ref 객체는 내부적으로 unwrapping 됨, 따라서 template 에서 msg.value 처리할 필요 없음-->
		<p>{{ message }}</p>
		<button @click="changeMsg">change</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// reactive 함수는 객체나 배열과 같이 레퍼런스 타입의 반응형 상태,반응형 개체를 선언하는 함수이기 때문에 동작하지 않음
		// let message = reactive('message');
		// console.log('message', message);
		// console.log('message typeof', typeof message); // message typeof string

		let message = ref('message');
		console.log('message', message); // RefImpl {dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 'message', _value: 'message'}
		// ref 함수는 reference 의미로 결국 아래와 같은 의미를 가짐
		// let message = reactive({
		// 	value: 'message',
		// });
		const changeMsg = () => {
			// message = message + '!';
			message.value = message.value + '!';
		};

		// ref 를 객체에서 사용
		// ref 로 선언한 데이터를 반응형 객체의 속성으로 주입하게 되면 자동으로 unwrapping 된다
		const count = ref(0);
		const state = reactive({
			count,
		});
		count.value++;
		console.log('count.value: ', count.value); // count.value:  1
		console.log('state.count.value ', state.count.value); // state.count.value undefined
		console.log('state.count.value ', state.count); // state.count.value  1

		// ref 를 배열에서 사용
		const arr = reactive([message]);
		console.log('arr[0] ', arr[0]); // RefImpl {dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 'message', _value: 'message'}
		console.log('arr[0].value ', arr[0].value); // message

		return {
			// return 된 ref 객체는 내부적으로 unwrapping 됨, 따라서 template 에서 msg.value 처리할 필요 없음
			message,
			changeMsg,
		};
	},
};
</script>

<style lang="scss" scoped></style>
