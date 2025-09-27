<template>
	<div>
		<p>{{ message }}</p>
		<input type="text" v-model.lazy="message" />

		<hr />

		<button v-on:click="x++">x++</button>
		<button v-on:click="y++">y++</button>
		<p>x: {{ x }} , y: {{ y }}</p>
		<p>sum: {{ sum }}</p>

		<hr />

		<button v-on:click="obj.count++">obj.count++</button>
		<p>obj.count: {{ obj.count }}</p>

		<hr />

		<p>{{ person }}</p>
	</div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('hello');

		watch(message, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});

		const x = ref(0);
		const y = ref(0);
		const sum = ref(0);

		// watch(
		// 	() => x.value + y.value,
		// 	s => (sum.value = s),
		// );

		watch([x, y], ([newX, newY]) => {
			console.log(newX, newY);
			sum.value = newX + newY;
		});

		const obj = reactive({
			count: 0,
		});

		// 특정 오브젝트의 속성을 감지하고 싶으면 getter 함수로 제공하면 된다
		watch(
			// obj.count 는 단순 number 이고 proxy 객체가 아니기 때문에 동작하지 않는다
			// obj.count,
			() => obj.count,
			(newValue, oldValue) => {
				console.log('newValue: ', newValue);
				console.log('oldValue: ', oldValue);
			},
		);

		// 오브젝트 타입을 감지할때는 newValue, oldValue 모두 같은 객체를 가리키기 때문에 같은 값을 반환한다
		watch(obj, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});

		/*
    # deep option
    반응형 객체를 직접 watch() 하면 암시적으로 깊은 감시자가 생성됩니다.
    즉, 속성 뿐만아니라 모든 중첩된 속성에도 트리거 됩니다.
    */
		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		watch(person, newValue => {
			console.log('newValue: ', newValue);
		});

		// getter function으로 객체를 넘길 경우에는 객체의 값이 바뀔 경우에만 트리거 됩니다.
		// 즉, 중첩된 속성은 트리거되지 않습니다.
		// 아래의 경우 person.obj 객체 자체가 변경되어야 아래 와치가 동작함
		// person.obj.count 의 숫자를 변경해도 동작하지 않음
		watch(
			() => person.obj,
			newValue => {
				// 객체의 값이 바뀔 경우에만 트리거 됩니다.
				console.log('person.obj newValue: ', newValue);
			},
		);

		// deep 옵션을 주면 person.obj.count 변경에 동작함
		watch(
			() => person.obj,
			newValue => {
				// 객체의 값이 바뀔 경우에만 트리거 됩니다.
				console.log('person.obj newValue: ', newValue);
			},
			// deep 옵션을 사용하면 깊은 감시자로 강제할 수 있습니다
			// deep 옵션은 큰 데이터 구조에서 사용할 때 비용이 많이 들 수 있습니다. 필요한 경우에만 사용하고 성능 영향에 주의하십시오.
			{ deep: true },
		);

		return {
			message,
			x,
			y,
			sum,
			obj,
			person,
		};
	},
};
</script>

<style lang="scss" scoped></style>
