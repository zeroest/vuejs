<template>
	<!--  https://getbootstrap.com/docs/5.3/components/card/  -->
	<!--	<div class="col">-->
	<div class="col col-4">
		<!--		<div class="card" style="width: 18rem">-->
		<div class="card">
			<!--			<img src="..." class="card-img-top" alt="..." />-->
			<div class="card-body">
				<span class="badge text-bg-secondary">{{ badgeTitle }}</span>
				<!--        <h5 class="card-title">Card title</h5>-->
				<h5 class="card-title mt-2">{{ title }}</h5>
				<!--
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
-->
				<p class="card-text">{{ contents }}</p>
				<!--				<a href="#" class="btn btn-primary">Go somewhere</a>-->

				<!--				<a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>-->
				<!--				<a v-else href="#" class="btn btn-outline-danger">좋아요</a>-->
				<a href="#" class="btn" v-bind:class="isLikeClass">좋아요</a>
			</div>
		</div>
		<!-- props 객체에 직접 접근도 가능하다 -->
		<!--		{{ $props }}-->
	</div>
</template>

<script>
import { computed } from 'vue';

console.log('AppCard module');
export default {
	// props: ['title', 'contents'],
	props: {
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		obj: {
			type: Object,
			default: () => {},
		},
	},
	setup(props) {
		console.log('AppCard setup()');

		const badgeTitle = computed(() => {
			if (props.type === 'news') {
				return '뉴스';
			} else if (props.type === 'notice') {
				return '공지사항';
			} else {
				return 'N/A';
			}
		});

		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		return {
			badgeTitle,
			isLikeClass,
		};
	},
};
</script>

<style lang="scss" scoped></style>
