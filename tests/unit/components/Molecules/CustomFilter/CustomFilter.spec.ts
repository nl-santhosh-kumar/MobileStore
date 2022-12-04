import { shallowMount } from '@vue/test-utils'
import CustomFilter from '@/components/Molecules/CustomFilter/CustomFilter.vue'

describe('CustomFilter', () => {
  it('renders props title when passed', () => {
    const wrapper = shallowMount(CustomFilter, {
      props: {
        title: 'Title'
      }
    })
    expect(wrapper.text()).toMatch('Title')
  })

  it('renders props title when passed', () => {
    const wrapper = shallowMount(CustomFilter, {
      props: {
        title: 'Title',
        attribue: 'OS',
        filterOptions: ['Yes', 'No']
      }
    })
    expect(wrapper.text()).toMatch('Title')
    expect(wrapper.text()).toMatch('Yes')
    expect(wrapper.text()).toMatch('No')
  })
})
