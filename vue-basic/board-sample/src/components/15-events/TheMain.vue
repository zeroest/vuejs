<template>
	<div>
		<GlobalComponent></GlobalComponent>
		<TheNavbar></TheNavbar>
		<TheGrid></TheGrid>
	</div>
</template>

<script>
import TheNavbar from '@/components/15-events/TheNavbar.vue';
import TheGrid from '@/components/15-events/TheGrid.vue';

export default {
	components: { TheGrid, TheNavbar },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
