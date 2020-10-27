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

// export function updatePassword(data) {
//   return request({
//     url: "/plat/user/web/updatePassword",
//     method: "put",
//     data
//   });
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
