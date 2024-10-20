<template>
    <!-- setup header with nav -->
    <div class="bg-white shadow-md">
        <nav class="container mx-auto">
            <ul class="flex justify-center space-x-8">
                <li>
                    <router-link to="/"
                        class="text-base font-medium px-4 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg">Home</router-link>
                </li>
                <li>
                    <router-link to="/about"
                        class="text-base font-medium px-4 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg">About</router-link>
                </li>
                <li>
                    <router-link to="/contact"
                        class="text-base font-medium px-4 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg">Contact</router-link>
                </li>
                <li>
                    <router-link to="/producers"
                        class="text-base font-medium px-4 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg">Producers</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>
