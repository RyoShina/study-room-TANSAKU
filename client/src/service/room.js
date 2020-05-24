import {axiosBase} from '@/service/config'

async function fetchRooms(){
  const url = '/api/v1/rooms'
  const config = {
    params: {}
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