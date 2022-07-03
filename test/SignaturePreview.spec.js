import { mount } from '@vue/test-utils'
import SignaturePreview from '@/components/SignaturePreview.vue'

describe('SignaturePreview', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SignaturePreview)
    expect(wrapper.vm).toBeTruthy()
  })
})
