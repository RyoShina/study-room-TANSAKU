import Repository from './Repository'

const resource = '/api/v1/rooms'

export default {
  get(params) {
    return Repository.get(`${resource}`, params)
  },
  getById(roomId) {
    return Repository.get(`${resource}/${roomId}`)
  }
}