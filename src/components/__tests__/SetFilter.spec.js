import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SetFilter from '../../components/filter/setFilter.vue'

describe('HelloWorld', () => {
  it('Compruebo que se renderiza', () => {
    const wrapper = mount(SetFilter,
      { 
        props: { 
          title: 'Configurador de filtro'
        } 
      })
    expect(wrapper.text()).toContain('Configurador de filtro')
  })
})

