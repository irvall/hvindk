<template>
    <h1>Producers</h1>

    <v-row>
        <v-chip-group multiple column>
            <v-chip v-for="(producer, index) in producers" :key="index" class="ma-2 custom-chip" color="primary" label
                elevated pill>
                <router-link :to="`/producer/${producer.id}`" class="chip-link">
                    {{ producer.name }}
                </router-link>
            </v-chip>
        </v-chip-group>
    </v-row>
    <router-view />
</template>

<script setup lang="ts">

import { ref } from 'vue';
import data from '../producers.json';

const producers = ref(data.producers);

</script>


<style scoped></style>