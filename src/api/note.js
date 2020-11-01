import request from "@/utils/request";

export function readNotesList(data) {
  return request({
    url: "/readnotes/readnotes/list",
    method: "get",
    data
  });
}

export function deleteReadNote(data) {
  return request({
    url: "/readnotes/readnotes/" + data.id,
    method: "DELETE"
  });
}

// 修改
export function editReadNote(data) {
  return request({
    url: "/readnotes/readnotes",
    method: "put",
    data
  });
}

export function addReadNote(data) {
  return request({
    url: "/readnotes/readnotes",
    method: "post",
    data
  });
}


