// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// Components
import compponent from '@/components/itemGroups/RoomSearchMenu'

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
    return mount(compponent, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('初期表示', () => {
    const wrapper = mountFunction({
      propsData: {},
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})