import { mount } from '@vue/test-utils'
import SignatureForm from '@/components/SignatureForm.vue'

describe('SignatureForm', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SignatureForm)
    expect(wrapper.vm).toBeTruthy()
  })
})
