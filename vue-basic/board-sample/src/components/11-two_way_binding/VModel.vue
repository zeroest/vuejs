<!-- 양방향 바인딩 v-model -->
<template>
	<div>
		<h2>Input Value</h2>
		<h3>단방향 바인딩</h3>
		<input type="text" v-bind:value="inputValue" />
		<!--  아래와 같이 inputValue의 자바스크립트 value 를 수동으로 동기화 할 수 는 있다  -->
		<!--		<input-->
		<!--			type="text"-->
		<!--			v-bind:value="inputValue"-->
		<!--			v-on:input="event => (inputValue = event.target.value)"-->
		<!--		/>-->
		<div>{{ inputValue }}</div>

		<h3>양방향 바인딩</h3>
		<input type="text" v-model="inputValue" />
		<div>{{ inputValue }}</div>

		<h2>Text Area Value</h2>
		<h3>단방향 바인딩</h3>
		<textarea v-bind:value="textAreaValue" />
		<!--
		<textarea
			type="text"
			v-bind:value="textAreaValue"
			v-on:input="event => (textAreaValue = event.target.value)"
		/>
    -->
		<div>{{ textAreaValue }}</div>

		<h3>양방향 바인딩</h3>
		<textarea v-model="textAreaValue"></textarea>
		<div>{{ textAreaValue }}</div>

		<hr />

		<h1>상황에 따른 v-model 속성값 변화</h1>
		<h2>Checkbox value</h2>
		<h3>단방향 바인딩</h3>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input id="checkbox" type="checkbox" :checked="checkboxValue" />
		<!--
		<input
			id="checkbox"
			type="checkbox"
			:checked="checkboxValue"
			v-on:change="event => (checkboxValue = event.target.checked)"
		/>
    -->
		<h3>양방향 바인딩</h3>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input id="checkbox" type="checkbox" v-model="checkboxValue" />

		<h3>true false value</h3>
		<label for="checkboxTrueFalse">{{ checkboxTrueFalseValue }}</label>
		<input
			id="checkboxTrueFalse"
			type="checkbox"
			v-model="checkboxTrueFalseValue"
			true-value="YES"
			false-value="NO"
		/>

		<h3>Multi values</h3>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			JavaScript
		</label>
		<div>{{ checkboxValues }}</div>

		<h2>Radio value</h2>
		<label>
			<input
				type="radio"
				name="type"
				value="O"
				v-bind:checked="radioValue === 'O'"
				v-on:change="event => (radioValue = event.target.value)"
			/>
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<p>{{ radioValue }}</p>

		<h2>Select value</h2>
		<h3>단방향 바인딩</h3>
		<select
			v-bind:value="selectValue"
			v-on:change="event => (selectValue = event.target.value)"
		>
			<option
				v-for="option in selectOptions"
				:key="option.value"
				v-bind:value="option.value"
			>
				{{ option.key }}
			</option>
			<!--			<option value="html">HTML 수업</option>-->
			<!--			<option value="css">CSS 수업</option>-->
			<!--			<option value="javascript">JavaScript 수업</option>-->
		</select>

		<h3>양방향 바인딩</h3>
		<select v-model="selectValue">
			<option
				v-for="option in selectOptions"
				:key="option.value"
				v-bind:value="option.value"
			>
				{{ option.key }}
			</option>
		</select>
		<div>{{ selectValue }}</div>

		<h1>Modifiers</h1>
		<h2>Lazy modifier</h2>
		<p>문자 입력 후 포커스가 input에서 떨어졌을때 동기화 됨</p>
		<input type="text" v-model.lazy="inputValue" />
		<div>{{ inputValue }}</div>

		<h2>Number modifier</h2>
		<p>사용자 입력이 자동으로 number 타입으로 형변환 되기를 원할때</p>
		<input type="text" v-model.number="inputValue" />
		<div>{{ typeof inputValue }}</div>

		<h2>Trim modifier</h2>
		<p>
			사용자가 입력한 내용에서 자동으로 앞뒤 공백을 제거하는 트림처리가 된다
		</p>
		<input type="text" v-model.trim="inputValue" />
		<div>'{{ inputValue }}'</div>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('hello');
		const textAreaValue = ref('');
		const checkboxValue = ref(true);
		const checkboxTrueFalseValue = ref('YES');
		const checkboxValues = ref([]);
		const radioValue = ref('N/A');
		const selectValue = ref('N/A');
		const selectOptions = reactive([
			{ key: 'HTML 수업', value: 'html' },
			{ key: 'CSS 수업', value: 'css' },
			{ key: 'JavaScript 수업', value: 'javascript' },
		]);

		return {
			inputValue,
			textAreaValue,
			checkboxValue,
			checkboxTrueFalseValue,
			checkboxValues,
			radioValue,
			selectValue,
			selectOptions,
		};
	},
};
</script>

<style lang="scss" scoped></style>
