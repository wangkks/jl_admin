import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data
  });
}

export function createUser(data) {
  return request({
    url: "/plat/user/web/createUser",
    method: "post",
    data
  });
}

export function sendSms(data) {
  return request({
    url: "/plat/user/web/sendSms",
    method: "post",
    data
  });
}

export function sendEmail(data) {
  return request({
    url: "/plat/user/web/sendEmail",
    method: "post",
    data
  });
}

export function checkCode(data) {
  return request({
    url: "/plat/user/web/checkCode",
    method: "put",
    data
  });
}

export function updateEmail(data) {
  return request({
    url: "/plat/user/web/updateEmail",
    method: "put",
    data
  });
}

export function updatePassword(data) {
  return request({
    url: "/plat/user/web/updatePassword",
    method: "put",
    data
  });
}

export function updateUser(data) {
  return request({
    url: "/plat/user/web",
    method: "put",
    data
  });
}

export function getUser(data) {
  return request({
    url: "/plat/user/web",
    method: "get",
    data
  });
}


