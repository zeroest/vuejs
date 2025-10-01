<template>
	<div>
		<LabelInput
			label="성"
			v-bind:model-value="lastName"
			v-on:update:model-value="value => $emit('update:lastName', value)"
		></LabelInput>
		<LabelInput
			label="이름"
			v-bind:model-value="firstName"
			v-on:update:model-value="value => $emit('update:firstName', value)"
		></LabelInput>
	</div>
</template>

<script>
import LabelInput from '@/components/15-events/LabelInput.vue';

export default {
	components: { LabelInput },
	props: ['firstName', 'lastName'],
	emits: ['update:firstName', 'update:lastName'],
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
