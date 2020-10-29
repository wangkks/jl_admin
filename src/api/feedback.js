import request from '@/utils/request'

export function feedbackCount(data) {
  return request({
    url: 'tsystem/feedback/web/getCount',
    method: 'GET',
    data
  })
}

export function feedbackAdd(data) {
  return request({
    url: 'tsystem/feedback/web',
    method: 'GET',
    data
  })
}


