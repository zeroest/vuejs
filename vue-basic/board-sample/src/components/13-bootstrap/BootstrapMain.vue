<template>
	<div>
		<GlobalComponent></GlobalComponent>
		<Navbar></Navbar>
		<GridComponent></GridComponent>
	</div>
</template>

<script>
import NavbarComponent from '@/components/13-bootstrap/NavbarComponent.vue';
import GridComponent from '@/components/13-bootstrap/GridComponent.vue';

export default {
	components: { GridComponent, Navbar: NavbarComponent },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
