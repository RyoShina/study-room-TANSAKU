import Repository from './Repository'

const resource = '/api/v1/documents'

export default {
  getDocument(documentId) {
    return Repository.get(`${resource}/${documentId}`)
  },
  getDocumentUrl(documentId) {
    console.log(Repository)
    return `${Repository.defaults.baseURL}${resource}?docKey=${documentId}`
  }
}