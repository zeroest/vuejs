<template>
	<div>
		<div id="modifiers">
			<!-- capture modifier 를 통해 p 태그보다 먼저 실행-->
			<div @click.capture="clickDiv">
				Div 영역
				<p @click="clickP">
					P 영역
					<span @click.stop="clickSpan">Span 영역</span>
					<a href="https://daum.net" @click.prevent.stop="clickA">A 영역</a>
				</p>
			</div>
		</div>
		<a href="https://daum.net" @click.prevent="clickA">A 영역</a>
	</div>

	<div id="modifiers">
		<div @click="clickDiv">
			Div 영역
			<!--  본인 영역 클릭에만 반응, 버블링에 반응하지 않음    -->
			<p @click.self="clickP">
				P 영역
				<span @click="clickSpan">Span 영역</span>
			</p>
		</div>
		<!--  한번만 클릭되고 추가적으로 반응하지 않음  -->
		<button @click.once="clickOnce">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = event => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};
		const clickP = event => {
			console.log('clickP');
		};
		const clickSpan = event => {
			console.log('clickSpan');
			// event.stopPropagation(); // modifier stop 으로 대체
			alert('like');
		};
		const clickA = event => {
			// event.preventDefault(); // modifier prevent 로 대체
			alert('click A');
		};
		const clickOnce = () => {
			console.log('once');
		};
		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
			clickOnce,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}

#modifiers div {
	background-color: #ccc;
}

#modifiers p {
	background-color: #999;
}

#modifiers span {
	background-color: #666;
	display: block;
}
</style>
