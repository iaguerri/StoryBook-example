import CalculatedFilter from './calculatedFilter.vue';

export default {
    title: 'Mi Biblioteca/CalculatedFilter',
    component: CalculatedFilter,
    argTypes: {
        title: {
            control: { type: 'text' },
          },
          size: {
            control: { type: 'range',
              min: 16,
              max: 32,
              step: 1
            },
            description: 'Este es el tamaño del input',
          },
          maxLength: {
            control: { type: 'range',
              min: 32,
              max: 256,
              step: 1
            },
          },
          placeHolder: {
            control: { type: 'text' },
          },
          filterString: {
            control: { type: 'text' },
          },
      },
     
   };
   
   export const Default = (args) => ({
    components: { CalculatedFilter },
    setup() {
        return { args };
    },
    template: '<CalculatedFilter v-bind="args"/>',
   });
   Default.args = {
    title: 'Filtrador Default',
   }
Default.description = 'componente molón';
   export const Dark = Default.bind({});
   Dark.args = {
    title: 'Filtrador Dark',
    filterString: 'd',
    size: 16,
    maxLength: 32,
    placeHolder: 'Version dark',
    color:'#000'
   };
   
   export const Light = Default.bind({});
   Light.args = {
    title: 'Filtrador Light',
    filterString: 'l',
    size: 16,
    maxLength: 32,
    placeHolder: 'Version light',
    color:'#eee'
   };

   /*
   export const Default = (args) => ({
    components: { MyFilterSentence },
    setup() {
      return { args };
    },
    template: '<MyFilterSentence v-bind="args"/>',
   });
   */
   
   