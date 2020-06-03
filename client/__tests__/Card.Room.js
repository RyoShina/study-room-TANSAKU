// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// Components
import component from '@/components/card/Room'

// Utilities
import {
  mount,
  createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()

describe('room.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = options => {
    return mount(component, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('必須データのみ', () => {
    const wrapper = mountFunction({
      propsData: {
        card: {
          _id: '_id',
          word: '',
          imgSrc: '',
          name: '',
          tags: []
        }
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('区名未設定', () => {
    const wrapper = mountFunction({
      propsData: {
        card: {
          _id: '_id',
          word: '',
          imgSrc: 'imgSrc',
          name: 'name',
          tags: ['tag1', 'tag2']
        }
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('画像未設定', () => {
    const wrapper = mountFunction({
      propsData: {
        card: {
          _id: '_id',
          word: 'word',
          imgSrc: '',
          name: 'mame',
          tags: ['tag1', 'tag2']
        }
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('room名未設定', () => {
    const wrapper = mountFunction({
      propsData: {
        card: {
          _id: '_id',
          word: 'word',
          imgSrc: 'imgSrc',
          name: '',
          tags: ['tag1', 'tag2']
        }
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('タグ未設定', () => {
    const wrapper = mountFunction({
      propsData: {
        card: {
          _id: '_id',
          word: 'word',
          imgSrc: 'imgSrc',
          name: 'name',
          tags: []
        }
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})