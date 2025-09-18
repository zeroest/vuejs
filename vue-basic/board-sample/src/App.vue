<script setup>
// options vs composition
import CounterCompositionApi from '@/components/1-options_vs_composition_api/CounterCompositionApi.vue';
import CounterOptionsApi from '@/components/1-options_vs_composition_api/CounterOptionsApi.vue';
// composition api
import ReactivityApi from '@/components/2-composition_api/ReactivityApi.vue';
import LifecycleHooks from '@/components/2-composition_api/LifecycleHooks.vue';
// setup hook
import SetupHook from '@/components/3-setup_hook/SetupHook.vue';
</script>

<template>
	<div>Hello Vue3</div>
	<hr />
	<CounterCompositionApi></CounterCompositionApi>
	<hr />
	<CounterOptionsApi></CounterOptionsApi>
	<hr />
	<ReactivityApi></ReactivityApi>
	<LifecycleHooks></LifecycleHooks>
	<hr />
	<SetupHook title1="testTitle1" title2="testTitle2"></SetupHook>
</template>

<style></style>
