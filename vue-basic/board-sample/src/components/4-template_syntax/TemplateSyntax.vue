<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button @click="changeMessage">change message</button>

		<h2>v-html</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<p>임의의 HTML을 동적으로 렌더링하면 XSS 취약점 발생가능!</p>

		<h2>속성 바인딩</h2>
		<div title="안녕하세요">마우스를 올릴경우 title 이 보임</div>
		<div v-bind:title="dynamicTitle">마우스를 올릴경우 title 이 보임</div>
		<input type="text" value="홍길동" :disabled="isInputDisabled" />
		<input v-bind="attrs" value="다중속성바인딩" />
		<button @click="isInputDisabled = !isInputDisabled">change disabled</button>

		<h2>JavaScript</h2>
		{{ message.split('').reverse().join() }} <br />
		{{ isInputDisabled ? 'yes' : 'no' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('hello');
		const changeMessage = () => {
			message.value = message.value + '!';
		};

		const rawHtml = ref('<strong>hihihi</strong>');

		const dynamicTitle = ref('dynamic title');
		const isInputDisabled = ref(false);
		const attrs = ref({
			type: 'password',
			value: '12345678',
			disabled: isInputDisabled,
		});

		return {
			message,
			changeMessage,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
