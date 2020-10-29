import request from "@/utils/request";

export function readNotesList(data) {
  return request({
    url: "/readnotes/readnotes/list",
    method: "get",
    data
  });
}

export function deleteReadNotes(data) {
  return request({
    url: "/readnotes/readnotes",
    method: "DELETE",
    data
  });
}

export function readReadNotes(data) {
  return request({
    url: "/readnotes/readnotes",
    method: "put",
    data
  });
}


