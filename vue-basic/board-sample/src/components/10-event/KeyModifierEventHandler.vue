<template>
	<div>
		<!--		<input type="text" @keyup="addTodoOnKeyEnter" />-->
		<!--		<input type="text" @keyup.enter="addTodo" />-->
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ index }} : {{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);
		const addTodoOnKeyEnter = event => {
			if (event.key === 'Enter') {
				const value = event.target.value;
				todos.push(value);
			}
		};
		const addTodo = event => {
			const value = event.target.value;
			todos.push(value);
		};

		return {
			todos,
			addTodo,
			addTodoOnKeyEnter,
		};
	},
};
</script>

<style lang="scss" scoped></style>
