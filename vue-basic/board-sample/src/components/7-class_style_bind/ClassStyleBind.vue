<template>
	<div>
		<div
			class="text"
			v-bind:class="{ active: isActive, 'text-danger': hasError }"
		>
			Class Binding & Style Binding
		</div>
		<div :class="classObject">Class Object</div>
		<button @click="changeActive">active</button>
		<button @click="changeDanger">danger</button>

		<div
			:class="[isActive ? activeClass : 'non-active', errorClass, classObject]"
		>
			Array class binding
		</div>

		<button @click="fontSize++">+</button>
		<button @click="fontSize--">-</button>
		<div :style="styleObject">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			Lorem Ipsum has been the industry's standard dummy text ever since the
			1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book. It has survived not only five centuries, but
			also the leap into electronic typesetting, remaining essentially
			unchanged. It was popularised in the 1960s with the release of Letraset
			sheets containing Lorem Ipsum passages, and more recently with desktop
			publishing software like Aldus PageMaker including versions of Lorem
			Ipsum.
		</div>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		let isActive = ref(true);
		let hasError = ref(false);

		const changeActive = () => {
			isActive.value = !isActive.value;
		};

		const changeDanger = () => {
			hasError.value = !hasError.value;
		};

		// const classObject = reactive({
		// 	active: isActive,
		// 	'text-danger': hasError,
		// });
		const classObject = computed(() => {
			return {
				active: isActive,
				'text-danger': hasError,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('text-danger');

		// const styleObject = reactive({
		// 	color: 'blue',
		// 	fontSize: '13px',
		// });
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'blue',
				fontSize: fontSize.value + 'px',
			};
		});

		return {
			isActive,
			changeActive,
			hasError,
			changeDanger,
			classObject,
			activeClass,
			errorClass,
			styleObject,
			fontSize,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
