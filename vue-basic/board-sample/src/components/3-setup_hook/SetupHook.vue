<template>
	<div></div>
</template>

<script>
export default {
	setup(props, context) {
		// 속성($attrs와 동일한 비반응형 객체)
		console.log('attrs' + context.attrs);
		// 슬롯($slots에 해당하는 비반응성 개체)
		console.log('slots' + context.slots);
		// 이벤트 발생($emit에 해당하는 함수)
		console.log('emit' + context.emit);
		// public한 속성, 함수를 외부에 노출시 사용
		console.log('expose' + context.expose);

		console.log('==========================');
	},
};
</script>

<style scoped></style>
