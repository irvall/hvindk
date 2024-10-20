<template>
  <Header />

</template>

<script lang="ts">
import Header from './components/Header.vue';
export default {
  components: {
    Header,
  },
};

</script>


<style scoped>
/* Remove the default router-link styles to make it look like part of the chip */
.chip-link {
  color: inherit;
  /* Inherit chip's color */
  text-decoration: none;
  /* Remove underline */
  width: 100%;
  display: block;
  /* Make the entire chip clickable */
}

/* Remove visited, active, and hover link styles */
.chip-link:visited,
.chip-link:active,
.chip-link:hover {
  color: inherit;
  text-decoration: none;
}

/* Custom chip styles to make them more rounded and match Material Design */
.custom-chip {
  padding: 0 16px;
  /* Add padding for a spacious look */
  height: 32px;
  /* Set a consistent height for a more compact, pill-shaped appearance */
  border-radius: 50px;
  /* Ensure the chips are fully rounded */
  font-size: 14px;
  /* Adjust font size to fit well within the pill shape */
}
</style>
