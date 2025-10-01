<template>
	<div>
		<!--  https://getbootstrap.com/docs/5.3/layout/grid/  -->
		<!--  https://getbootstrap.com/docs/5.3/layout/gutters/  -->
		<div class="container text-center py-4">
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
		</div>
	</div>
</template>

<script>
import AppCard from '@/components/14-props/AppCard.vue';
import { reactive } from 'vue';

export default {
	components: { AppCard },
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
		return { post2, posts };
	},
};
</script>

<style lang="scss" scoped></style>
