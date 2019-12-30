import config from '@/services/config'
import axios from 'axios'
const user_id = localStorage.getItem('uid')
const enpoint = `${config.apiUrl}/api/users/${user_id}/boards`
export default {
  getBoards: () => {
    return axios({
      method: 'get',
      url: `${enpoint}`
    })
      .then(response => response)
      .catch(error => error)
  },
  getBoardById: board_id => {
    return axios({
      method: 'get',
      url: `${config.apiUrl}/api/board/${board_id}`
    })
      .then(response => response)
      .catch(error => error)
  },
  createBoard: data => {
    const params = new URLSearchParams()
    params.append('title', data.title)
    params.append('limit_votes', data.limit_votes)
    params.append('user_id', user_id)
    return axios({
      method: 'post',
      url: `${enpoint}/`,
      data: params
    })
      .then(response => response)
      .catch(error => error)
  },
  updateBoard: data => {
    const params = new URLSearchParams()
    params.append('title', data.title)
    params.append('limit_votes', data.limit_votes)
    return axios({
      method: 'patch',
      url: `${enpoint}/${data.id}`,
      data: params
    })
      .then(response => response)
      .catch(error => error)
  },
  deleteBoard: board_id => {
    console.log(`${enpoint}/${board_id}`, board_id)
    return axios({
      method: 'delete',
      url: `${enpoint}/${board_id}`
    })
      .then(response => response)
      .catch(error => error)
  }
}
