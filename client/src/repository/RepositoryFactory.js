import RoomsRepository from './roomsRepository'

const repositories = {
  rooms: RoomsRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}