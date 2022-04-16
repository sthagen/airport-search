import { mount } from '@vue/test-utils'

import ActionButton from '@/components/action_button.vue'

describe('action-button', () => {
  it('displays the site name to the left', () => {
    const wrapper = mount(ActionButton)
    expect(wrapper.text()).toMatch(/^Action$/)
  })
  describe('button(s)', () => {
    it('displays the button texts in the correct slots', () => {
      const wrapper = mount(ActionButton)
      const slots = wrapper.findAll('[data-test="action-button"]')
      const sequence = slots.map((slot) => slot.text())
      expect(sequence).toEqual(['Action'])
    })
  })
})
