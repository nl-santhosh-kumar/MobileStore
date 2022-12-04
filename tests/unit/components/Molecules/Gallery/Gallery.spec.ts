import { shallowMount } from '@vue/test-utils'
import Gallery from '@/components/Organisms/Gallery/Gallery.vue'

describe('Gallery', () => {
  it('renders props title when passed', () => {
    const wrapper = shallowMount(Gallery, {
      props: {
        phoneFeed: [{
          image: '',
          name: 'Test',
          manufacturer: 'Apple'
        }]
      }
    })
    expect(wrapper.text()).toMatch('Test')
  })
})
