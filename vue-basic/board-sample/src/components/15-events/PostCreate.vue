<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			title:
			<input type="text" class="form-control" v-model="title" /> contents:
			<input type="text" class="form-control" v-model="contents" />
		</div>
		<div class="col col-2">
			<button class="btn btn-primary d-grid" v-on:click="createPost">
				<!--      v-on:click="$emit('createPost', '제목', '내용')"-->
				추가
			</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	emits: {
		createPost: newPost => {
			if (!newPost.title) {
				// alert('title is empty');
				// return false 여도 이벤트는 발생함
				return false;
			}
			if (!newPost.type) {
				return false;
			}
			return true;
		},
	},
	// setup(props, context) {
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		const contents = ref('');

		const createPost = () => {
			// 	context.emit('createPost', '제목', '내용');
			const newPost = {
				type: type.value,
				title: title.value,
				contents: contents.value,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
			contents.value = '';
		};
		return {
			type,
			title,
			contents,
			createPost,
		};
	},
};
</script>

<style lang="scss" scoped></style>
