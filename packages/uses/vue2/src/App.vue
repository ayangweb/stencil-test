<script setup lang="ts">
import { onMounted, ref } from "vue";
import { MyComponent, MyTest } from "@stencil-test/vue2";

const list = ref([0]);

const handleChange = () => {
	console.log("change");
};

onMounted(() => {
	setInterval(() => {
		list.value = [...list.value, list.value.length];
	}, 1000);
});
</script>

<template>
	<div>
		<MyComponent first="my-change" @my-change="handleChange" />
		<MyComponent first="myChange" @myChange="handleChange" />
		<MyTest :value="list" />
	</div>
</template>
