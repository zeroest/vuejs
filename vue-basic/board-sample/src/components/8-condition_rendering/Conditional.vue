<template>
	<div>
		<a href="https://ko.vuejs.org/guide/essentials/conditional"
			>조건부 렌더링</a
		>
		<hr />
		<a href="https://ko.vuejs.org/guide/essentials/list.html#v-for-with-v-if"
			>v-if와 함께 사용하는 v-for</a
		>
		<h3 v-if="visible">Hello Vue3!</h3>

		<h4 v-if="visible">Hello Vue3!</h4>
		<h4 v-else>Good bye!</h4>
		<button v-on:click="visible = !visible">toggle</button>

		<h1 v-if="type === 'A'">A</h1>
		<h1 v-else-if="type === 'B'">B</h1>
		<h1 v-else-if="type === 'C'">C</h1>
		<h1 v-else>Not A/B/C</h1>
		<button
			@click="
				type === 'A'
					? (type = 'B')
					: type === 'B'
					? (type = 'C')
					: type === 'C'
					? (type = 'D')
					: type === 'D'
					? (type = 'A')
					: (type = 'B')
			"
		>
			Change type
		</button>

		<!--  여러개의 HTML요소를 v-if 디렉티브로 연결하고 싶다면 <template>을 사용  -->
		<template v-if="visible">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>

		<!--  v-show <> v-if 차이점  -->
		<!--  v-show는 태그는 존재하나 display=none 처리   -->
		<!--  v-if는 렌더링 자체를 하지 않는다  -->
		<h1 v-show="show">Title</h1>
		<button @click="show = !show">toggle show</button>
	</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';

export default {
	setup() {
		// 일반적으로 `v-if`는 전환 비용이 높은 반면, `v-show`는 초기 렌더링 비용이 높습니다.
		// 그러므로 무언가를 자주 전환해야 한다면 `v-show`를 사용하는 게 좋고,
		// 런타임 시 조건이 변경되지 않는다면 `v-if`를 사용하는 게 더 낫습니다.
		const visible = ref(true);
		const show = ref(true);
		const type = ref('B');
		return {
			visible,
			type,
			show,
		};
	},
};
</script>

<style lang="scss" scoped></style>
