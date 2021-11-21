import { provide, inject } from "vue";

const mutationSymbol = Symbol();
const getterSymbol = Symbol();
const actionsSymbol = Symbol();

const provideStore = (store) => {
  provide(mutationSymbol, store.commit);
  provide(getterSymbol, store.getters);
  provide(actionsSymbol, store._actions);
};
const injectStore = () => {
  const stores = {
    commit: inject(mutationSymbol),
    getters: inject(getterSymbol),
    actions: inject(actionsSymbol),
  };
  return stores;
};

export { provideStore, injectStore };
