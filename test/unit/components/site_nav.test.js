import { mount } from '@vue/test-utils'

import SiteNav from '@/components/site_nav.vue'

describe('site-nav', () => {
  it('displays the site name to the left', () => {
    const wrapper = mount(SiteNav)
    expect(wrapper.text()).toMatch(/^Airport Search/)
  })
  describe('sections', () => {
    it('displays the text of all sections to the right', () => {
      const wrapper = mount(SiteNav)
      expect(wrapper.text()).toMatch(/CountriesRegionsCodes$/)
    })
    it('displays the sectional texts in the correct slots', () => {
      const wrapper = mount(SiteNav)
      const slots = wrapper.findAll('[data-test="site-nav-sect"]')
      const sequence = slots.map((slot) => slot.text())
      expect(sequence).toEqual(['Countries', 'Regions', 'Codes'])
    })
  })
})

describe('site-nav async hacked up (WIP showcase for async tests)', () => {
  it('displays the data we feed it', async () => {
    const wrapper = mount(SiteNav)
    await wrapper.setData({
      site: 'A',
      sections: [
        { name: 'B', url: 'b' },
        { name: 'C', url: 'c' },
        { name: 'D', url: 'd' },
      ],
    })
    expect(wrapper.text()).toMatch(/^ABCD$/)
  })
})
