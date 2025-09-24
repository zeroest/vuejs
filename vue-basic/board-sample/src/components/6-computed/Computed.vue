<template>
	<div>
		<h2>Computed</h2>
		<p>{{ teacher.lectures }}</p>
		<!--  템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수가 어려워짐 -->
		<!--		<p>{{ teacher.lectures.length > 0 ? '있음1' : '없음1' }}</p>-->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button @click="removeLecture">Remove</button>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: 'zero',
			lectures: ['java', 'vue'],
			// lectures: [],
		});

		// hasLecture, existLecture 같은 결과를 가져옮
		// 그러나 computed 는 계산된 값을 캐시해둠
		// 위 템플릿에서 hasLecture 를 여러번 호출해도 computed 로그는 한번만 호출됨
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음2' : '없음2';
		});
		// 위 템플릿에서 existLecture 를 여러번 호출하면 호출하는대로 연산하여 method 로그가 여러번 호출됨
		const existLecture = () => {
			console.log('not computed');
			return teacher.lectures.length > 0
				? 'existLecture 있음2'
				: 'existLecture 없음2';
		};

		const removeLecture = () => {
			teacher.lectures.pop();
		};
		return {
			teacher,
			hasLecture,
			existLecture,
			removeLecture,
		};
	},
};
</script>

<style lang="scss" scoped></style>
