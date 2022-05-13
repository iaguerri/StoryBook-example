import SetFilter from './setFilter.vue';

export default {
    title: 'Mi Biblioteca/SetFilter',
    component: SetFilter,
    argTypes: {
        onUpdateFilter: { action: 'updateFilter'},
        title: {
            control: { type: 'text' },
          },
    }
}

export const Default = (args) => ({
    components: { SetFilter },
    setup() {
        return { args };
    },
    template: '<SetFilter v-bind="args"/>',
   });
Default.args = {
    title: 'Configurador Default', 
}