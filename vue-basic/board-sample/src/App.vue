<script setup>
// options vs composition
import CounterCompositionApi from '@/components/1-options_vs_composition_api/CounterCompositionApi.vue';
import CounterOptionsApi from '@/components/1-options_vs_composition_api/CounterOptionsApi.vue';
// composition api
import ReactivityApi from '@/components/2-composition_api/ReactivityApi.vue';
import LifecycleHooks from '@/components/2-composition_api/LifecycleHooks.vue';
// setup hook
import SetupHook from '@/components/3-setup_hook/SetupHook.vue';
// template syntax
import TemplateSyntax from '@/components/4-template_syntax/TemplateSyntax.vue';
// reactive
import Reactive from '@/components/5-reactive/Reactive.vue';
import ReactiveRef from '@/components/5-reactive/ReactiveRef.vue';
import ReactiveDestructuring from '@/components/5-reactive/ReactiveDestructuring.vue';
import ReactiveReadonly from '@/components/5-reactive/ReactiveReadonly.vue';
import Computed from '@/components/6-computed/Computed.vue';
import WritableComputed from '@/components/6-computed/WritableComputed.vue';
import ClassStyleBind from '@/components/7-class_style_bind/ClassStyleBind.vue';
import Conditional from '@/components/8-condition_rendering/Conditional.vue';
import VFor from '@/components/9-v_for/VFor.vue';
</script>

<template>
	<div>Hello Vue3</div>
	<div class="column">
		<hr />
		<CounterCompositionApi></CounterCompositionApi>
		<hr />
		<CounterOptionsApi></CounterOptionsApi>
		<hr />
		<ReactivityApi></ReactivityApi>
		<LifecycleHooks></LifecycleHooks>
		<hr />
		<SetupHook title1="testTitle1" title2="testTitle2"></SetupHook>
		<hr />
		<TemplateSyntax></TemplateSyntax>
	</div>
	<div class="column">
		<hr />
		<Reactive></Reactive>
		<ReactiveRef></ReactiveRef>
		<ReactiveDestructuring></ReactiveDestructuring>
		<ReactiveReadonly></ReactiveReadonly>
		<Computed></Computed>
		<WritableComputed></WritableComputed>
	</div>
	<div class="column">
		<ClassStyleBind></ClassStyleBind>
		<Conditional></Conditional>
		<VFor></VFor>
	</div>
</template>

<style>
@import '@/../public/2column_layout.css';
</style>
