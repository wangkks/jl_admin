import request from '@/utils/request'

export function feedbackCount(data) {
  return request({
    url: 'tsystem/feedback/web/getCount',
    method: 'GET',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
