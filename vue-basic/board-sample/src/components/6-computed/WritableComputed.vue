<template>
	<div>
		firstName: {{ firstName }} | lastName: {{ lastName }}

		<p>이름: {{ fullName }}</p>
		<button @click="changeName">Change name</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		const firstName = ref('길동');
		const lastName = ref('홍');

		const fullName = computed({
			// Computed는 기본적으로 getter전용
			// 계산된 속성에 새 값을 할당하려고 하면 런타임 경고가 표시
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			// 새로운 계산된 속성이 필요한 경우에 getter와 setter를 모두 제공하여 속성을 만들 수 있다
			set(newValue) {
				[firstName.value, lastName.value] = newValue.split(' ');
			},
		});

		const changeName = () => {
			fullName.value = '안녕 하세요';
		};
		return {
			firstName,
			lastName,
			fullName,
			changeName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
