import Vuex from 'vuex';

const fetchHeroes = () => Promise.resolve([
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]);

const createStore = () =>
  new Vuex.Store({
    state: {
      hero: {},
      heroes: [],
    },
    getters: {
      hero: state => state.hero,
      heroes: state => state.heroes,
      topHeroes: state => state.heroes.slice(1, 5),
    },
    mutations: {
      SET_HERO: (state, hero) => {
        state.hero = hero;
      },
      SET_HEROES: (state, heroes) => {
        state.heroes = heroes;
      },
    },
    actions: {
      FETCH_HEROES: async ({commit}) => {
        const heroes = await fetchHeroes();
        commit('SET_HEROES', heroes);
      },
      FETCH_HERO: async ({state, commit}, id) => {
        if (state.heroes) {
          const hero = state.heroes.find(item => item.id === id);
          console.log(hero);
          commit('SET_HERO', hero);
        } else {
          const heroes = await fetchHeroes();
          const hero = heroes.find(item => item.id === id);
          console.log(hero);
          commit('SET_HERO', hero);
        }
      }
    },
  });

export default createStore;
