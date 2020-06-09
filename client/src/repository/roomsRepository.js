import Repository from './Repository'

const resource = '/api/v1/rooms'

export default {
  get(params) {
    return Repository.get(`${resource}`, params)
  },
  getRoom(roomId) {
    return Repository.get(`${resource}/${roomId}`)
  }
}