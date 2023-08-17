<script setup lang="ts">
import { MyComponent } from "@stencil-test/vue2";

const handleChange = () => {
	console.log("change");
};
</script>

<template>
	<div>
		<MyComponent first="my-change" @my-change="handleChange" />
		<MyComponent first="myChange" @myChange="handleChange" />
	</div>
</template>
