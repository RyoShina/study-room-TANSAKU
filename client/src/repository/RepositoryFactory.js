import DocumentsRepository from './documentsRepository'
import RoomsRepository from './roomsRepository'

const repositories = {
  documents: DocumentsRepository,
  rooms: RoomsRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}