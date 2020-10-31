import request from '@/utils/request'

export function bookClassList(data) {
  return request({
    url: 'product/bookclasses/list',
    method: 'GET',
    data
  })
}

export function bookShelfList(data) {
  return request({
    url: 'product/bookshelf/list',
    method: 'GET',
    data
  })
}

export function bookcClass(data) {
  return request({
    url: 'product/bookclasses',
    method: 'POST',
    data
  })
}


export function editBookClass(data) {
  return request({
    url: 'product/bookclasses',
    method: 'put',
    data
  })
}

export function addBookClass(data) {
  return request({
    url: 'product/bookshelf',
    method: 'post',
    data
  })
}

export function deleteBookShelf(data) {
  return request({
    url: 'product/bookshelf/' + data.id,
    method: 'delete'
  })
}

export function deleteBookClass(data) {
  return request({
    url: 'product/bookclasses/remove/' + data.id,
    method: 'delete'
  })
}

