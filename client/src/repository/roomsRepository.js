import Repository from './Repository'

const resource = '/api/v1/rooms'

export default {
  get(payload) {
    return Repository.get(`${resource}`, payload)
  },
  getPost(postId) {
    return Repository.get(`${resource}/${rpostId}`)
  }
}