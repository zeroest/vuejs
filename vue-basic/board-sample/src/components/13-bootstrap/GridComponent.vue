<template>
	<div>
		<!--  https://getbootstrap.com/docs/5.3/layout/grid/  -->
		<!--  https://getbootstrap.com/docs/5.3/layout/gutters/  -->
		<div class="container text-center py-4">
			<div class="row g-3">
				<CardComponent></CardComponent>
				<CardComponent></CardComponent>
				<CardComponent></CardComponent>
				<CardComponent></CardComponent>
				<CardComponent></CardComponent>
				<CardComponent></CardComponent>
			</div>
			<div class="row g-3"></div>
		</div>
	</div>
</template>

<script>
import CardComponent from '@/components/13-bootstrap/CardComponent.vue';

export default {
	components: { CardComponent },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
