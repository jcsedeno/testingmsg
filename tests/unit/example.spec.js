import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import TestComponents from '@/components/TestComponents'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('TestComponent.vue', () => {
  it('should pass when rendering slots', () => {
    const title = '<span>Title</span>'
    const wrapper = shallowMount(TestComponents, {
      slots: { title: title }
    })
    expect(wrapper.html()).toMatch(title)
  })
})
