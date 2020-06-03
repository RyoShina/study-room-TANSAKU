import {axiosBase} from '@/service/config'

async function fetchRooms(condition={}, limit=0, skip=0){
  const url = '/api/v1/rooms'
  const config = {
    params: {
      condition,
      option: {
        limit,
        skip
      }
    }
  }
  try {
    const res = await axiosBase.get(url, config)
    if (res && res.status === 200){
      return res.data
    } else {
      return []
    }
  } catch (err){
    console.error(err)
  }
}

export const roomService = {
  fetchRooms
}