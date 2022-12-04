import { shallowMount } from '@vue/test-utils'
import Notification from '@/components/Atoms/Notification/Notification.vue'

describe('Notification.vue', () => {
  it('renders props when passed', () => {
    const title = 'Extended due to success! Black Friday : €2.50 discount on Unlimited Data or 10 GB + 2 GB free! With device or Sim Only . Now without connection costs!'
    const wrapper = shallowMount(Notification, {
    })
    expect(wrapper.text()).toMatch(title)
  })
})
