import request from '@/utils/request'

export function feedbackList(data) {
  return request({
    url: 'tsystem/feedback/web/list',
    method: 'GET',
    data
  })
}

export function feedbackCount(data) {
  return request({
    url: 'tsystem/feedback/web/getCount',
    method: 'GET',
    data
  })
}
