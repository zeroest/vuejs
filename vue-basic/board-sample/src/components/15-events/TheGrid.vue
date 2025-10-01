<template>
	<div>
		<!--  https://getbootstrap.com/docs/5.3/layout/grid/  -->
		<!--  https://getbootstrap.com/docs/5.3/layout/gutters/  -->
		<div class="container py-4">
			<PostCreate v-on:create-post="createPost"></PostCreate>

			<!--   my-4 상하 간격   -->
			<hr class="my-4" />

			<div class="row g-3">
				<AppCard title="제목1" contents="내용1"></AppCard>
				<!--				<AppCard-->
				<!--					v-bind:title="post2.title"-->
				<!--					v-bind:contents="post2.contents"-->
				<!--				></AppCard>-->

				<!-- 다중 속성 전달-->
				<AppCard v-bind="post2"></AppCard>

				<!--
				<AppCard></AppCard>
				<AppCard></AppCard>
				<AppCard></AppCard>
-->
				<AppCard
					v-for="(post, index) in posts"
					:key="index"
					v-bind:title="post.title"
					v-bind:contents="post.contents"
					v-bind:type="post.type"
					v-bind:is-like="post.isLike"
				></AppCard>
			</div>
			<div class="row g-3"></div>

			<hr class="my-4" />

			<!--				<input v-model="username" type="text" />-->
			<!--
			<label>
				이름
				<input
					v-bind:value="username"
					v-on:input="event => (username = event.target.value)"
					type="text"
				/>
			</label>
-->
			<!--
			<LabelInput
				v-bind:model-value="username"
				v-on:update:model-value="value => (username = value)"
			></LabelInput>
-->
			<LabelInput label="이름" v-model="username"></LabelInput>
			<LabelTitle label="제목" v-model:title="username"></LabelTitle>

			<hr class="my-4" />

			<Username
				v-model:first-name="firstName"
				v-model:last-name="lastName"
			></Username>
		</div>
	</div>
</template>

<script>
import AppCard from '@/components/15-events/AppCard.vue';
import { reactive, ref } from 'vue';
import PostCreate from '@/components/15-events/PostCreate.vue';
import LabelInput from '@/components/15-events/LabelInput.vue';
import LabelTitle from '@/components/15-events/LabelTitle.vue';
import Username from '@/components/15-events/Username.vue';

export default {
	components: { Username, LabelInput, LabelTitle, PostCreate, AppCard },
	setup() {
		const post2 = {
			title: '제목2',
			contents: '내용2',
		};
		const posts = reactive([
			{
				id: 3,
				title: '제목3',
				contents: '내용3',
				type: 'notice',
				isLike: true,
			},
			{ id: 4, title: '제목4', contents: '내용4', type: 'news', isLike: false },
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				type: '?',
				isLike: true,
			},
			{
				id: 6,
				title: '제목6',
				contents: '내용6',
				type: 'notice',
				isLike: true,
			},
		]);
		const username = ref('');

		const createPost = newPost => {
			// console.log('hello');
			posts.push(newPost);
		};

		const firstName = ref('');
		const lastName = ref('');

		return {
			post2,
			posts,
			createPost,
			username,
			firstName,
			lastName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
