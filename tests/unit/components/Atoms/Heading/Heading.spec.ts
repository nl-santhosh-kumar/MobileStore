import { shallowMount } from '@vue/test-utils'
import Heading from '@/components/Atoms/Heading/Heading.vue'

describe('Heading.vue', () => {
  it('renders props when passed', () => {
    const title = 'new message'
    const wrapper = shallowMount(Heading, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
