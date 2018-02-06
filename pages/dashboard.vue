<template>
  <div>
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <a
        v-for="hero in heroes"
        :key="hero.id"
        class="col-1-4">
        <div class="module hero">
          <h4>{{ hero.name }}</h4>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      heroes: 'topHeroes',
    })
  },
  fetch ({store}) {
    return store.dispatch('FETCH_HEROES');
  },
}
</script>
