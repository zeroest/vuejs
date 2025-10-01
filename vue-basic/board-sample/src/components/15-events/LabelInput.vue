<!-- v-model 만들기 -->
<template>
	<label>
		<!--		이름-->
		{{ label }}
		<!--				<input v-model="username" type="text" />-->
		<!--
		<input
			v-bind:value="username"
			v-on:input="event => (username = event.target.value)"
			type="text"
		/>
    -->

		<!--
		<input
			v-bind:value="modelValue"
			v-on:input="event => $emit('update:modelValue', event.target.value)"
			type="text"
		/>
-->

		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
