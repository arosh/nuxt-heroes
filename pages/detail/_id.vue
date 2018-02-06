<template>
  <HeroDetail :hero="hero" />
</template>

<script>
import { mapGetters } from 'vuex';
import HeroDetail from '~/components/HeroDetail';

export default {
  components: {
    HeroDetail,
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id);
  },
  computed: {
    ...mapGetters(['hero'])
  },
  fetch ({store, params}) {
    return store.dispatch('FETCH_HERO', params.id);
  },
};
</script>
