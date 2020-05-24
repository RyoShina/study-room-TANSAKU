// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// Components
import roomCard from '@/components/card/Room'

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
    return mount(roomCard, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('画像未設定', () => {
    const wrapper = mountFunction({
      propsData: {
        card: {
          _id: 'test',
          word: 'Fizzbuzz',
          imgSrc: '',
          name: '',
          tags: []
        }
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})