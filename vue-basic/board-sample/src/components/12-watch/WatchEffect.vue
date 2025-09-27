<template>
	<div>
		<form action="" v-on:submit.prevent>
			<input v-model.lazy="title" type="text" placeholder="Title" />
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<button v-on:click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`Save title: ${title}, contents: ${contents}`);
		};

		// 글을 자동저장하고 싶을때 와치이펙트 사용
		// 기본적으로 immediate 로 동작한다
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});

		return {
			title,
			contents,
			save,
		};
	},
};
</script>

<style lang="scss" scoped></style>
