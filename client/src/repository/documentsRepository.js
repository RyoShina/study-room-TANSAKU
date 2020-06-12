import Repository from './Repository'

const resource = '/api/v1/documents'

// AxiosRequestConfig.baseURLはインスタンス精製後、末尾にハイフンをつけるため、
// 先頭ハイフンなしの定義を作成
const resource2 = 'api/v1/documents'

export default {
  getDocument(documentId) {
    return Repository.get(`${resource}/${documentId}`)
  },
  getDocumentUrl(documentId) {
    return `${Repository.defaults.baseURL}${resource2}?docKey=${documentId}`
  }
}