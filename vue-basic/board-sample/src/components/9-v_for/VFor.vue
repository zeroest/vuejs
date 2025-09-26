<template>
	<div>
		<hr />
		<ul>
			<li v-for="item in items" :key="item.id">
				{{ item.message }}
			</li>
		</ul>
		<hr />
		<ul>
			<li v-for="(item, index) in items" :key="index">
				{{ index }}: {{ item.message }}
			</li>
		</ul>
		<hr />
		<!--  목록중 id 가 짝수인 것만 출력  -->
		<ul>
			<template v-for="item in items">
				<li v-if="item.id % 2 === 0" :key="item.id">
					template 활용 {{ item.id }} : {{ item.message }}
				</li>
			</template>
		</ul>
		<!--  computed 활용하여 짝수 출력  -->
		<ul>
			<li v-for="item in evenItem" :key="item.id">
				computed 활용 {{ item.id }} : {{ item.message }}
			</li>
		</ul>
		<!--  객체 활용  -->
		<ul>
			<li v-for="(value, key, index) in myObject" :key="index">
				{{ index }} | {{ key }} : {{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);

		const myObject = reactive({
			title: '제목입니다.',
			author: '홍길동',
			publishedAt: '2016-04-10',
		});

		const evenItem = computed(() => items.filter(item => item.id % 2 === 0));

		return {
			items,
			evenItem,
			myObject,
		};
	},
};
</script>

<style lang="scss" scoped></style>
