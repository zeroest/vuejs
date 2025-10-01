<template>
	<div>
		<GlobalComponent></GlobalComponent>
		<TheNavbar></TheNavbar>
		<TheGrid></TheGrid>
	</div>
</template>

<script>
import TheNavbar from '@/components/13-bootstrap/TheNavbar.vue';
import TheGrid from '@/components/13-bootstrap/TheGrid.vue';

export default {
	components: { TheGrid, TheNavbar },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
