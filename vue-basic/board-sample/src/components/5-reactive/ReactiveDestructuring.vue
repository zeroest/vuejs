<template>
	<div>
		<h2>Reactive Destructuring</h2>

		<p>{{ book }}</p>
		<p><strong>title:</strong> {{ title }}</p>
		<p>
			<button @click="title = title + '!!!'">Change title</button>
			<button @click="book.title = book.title + '!!!'">
				Change book title
			</button>
		</p>
		<p><strong>author:</strong> {{ author }}</p>
		<p>
			<button @click="author = author + '!!!'">Change author</button>
			<button @click="book.author = book.author + '!!!'">
				Change book author
			</button>
		</p>
		<p><strong>year:</strong> {{ year }}</p>
		<p>
			<button @click="year = year + '!!!'">Change year</button>
			<button @click="book.year = book.year + '!!!'">Change book year</button>
		</p>
		<p><strong>description:</strong> {{ description }}</p>
		<p>
			<button @click="description = description + '!!!'">
				Change description
			</button>
			<button @click="book.description = book.description + '!!!'">
				Change book description
			</button>
		</p>
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		// 구조분해 (destructuring) 으로 인해서 author, title 은 재할당! 된 상태 이므로 reactive 반응성을 잃는다
		let { author, title } = book;

		// https://ko.vuejs.org/api/reactivity-utilities.html#toref
		// https://ko.vuejs.org/api/reactivity-utilities.html#torefs
		let { year, price } = toRefs(book);

		let description = toRef(book, 'description');

		return {
			book,
			author,
			title,
			year,
			price,
			description,
		};
	},
};
</script>

<style lang="scss" scoped></style>
