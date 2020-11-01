import request from "@/utils/request";

export function bookLibraryList(data) {
  return request({
    url: "tproBook/pagList",
    method: "get",
    data
  });
}
export function booksDetail(data) {
  return request({
    url: "product/books",
    method: "get",
    data
  });
}