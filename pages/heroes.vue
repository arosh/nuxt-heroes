<template>
  <Heroes />
</template>

<script>
import Heroes from '~/components/Heroes';
export default {
  components: {
    Heroes,
  },
  fetch ({store}) {
    return store.dispatch('FETCH_HEROES');
  },
};
</script>
