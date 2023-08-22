<script setup lang="ts">
import { MyComponent, MyTest } from "@stencil-test/vue3";

const handleChange = () => {
	console.log("change");
};
</script>

<template>
	<MyComponent first="Stencil" class="test" />
	<MyComponent first="Stencil" :style="{ color: 'red' }" />
	<MyComponent first="my-change" @my-change="handleChange" />
	<MyComponent first="myChange" @myChange="handleChange" />

	<MyComponent>
		<MyTest slot="test" />
	</MyComponent>

	<my-component>
		<my-test slot="test" @mouseover="handleChange" />
	</my-component>
</template>
