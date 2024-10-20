<template>
    <div class="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ props.name }}</h1>

        <p class="text-lg text-gray-600 mb-4">
            {{ props.pretext }}
        </p>

        <img :src="`@assets/images/${props.id}/intro.jpg`" alt="Producer image" class="w-full h-auto rounded-lg mb-4" />

        <p class="text-base text-gray-700">
            {{ props.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { Producer } from '../types/producer';
const props = defineProps<Producer>()
</script>

<style scoped></style>