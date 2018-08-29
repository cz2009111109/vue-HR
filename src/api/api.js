import axios from 'axios';
import qs from 'qs';
let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`,  params ).then(res =>  res.data) };
// export const requestLogin = params => { 
//     return axios.post(`http://localhost:8087/login`, qs.stringify(params))
//     .then(res => {return { code: 200, msg: '请求成功', user:res.data } })
//     .catch(err => {
//         console.log(err);
//         return  { code: 500, msg: '账号或密码错误' }
//     })};

// export const requestLogin= params =>{ 
//     return  new Promise((resolve,reject)=>{
//     axios({
//         url:"/login", 
//         method:'post',
//         data:qs.stringify(params),
//         baseURL:"http://localhost:8080",
//         timeout:2000,
//        // withCredentials:true
//     })
//     .then(res =>res.data).catch(err => console.log(err))
//     })

// };

export const apiAxios=(method, url, params) =>{
    if (params) {
      params = filterNull(params)
    }
    // 相同get 请求 从缓存获取问题
    params.now = new Date().getTime()
    axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      baseURL: '',
      withCredentials: true,
      
    })
    .then(res =>{ console.log(res.data)
    }).catch(err => console.log(err))
}
// export const requestLogin = params => {

//      return axios.post(`http://localhost:8087/LabMaven/login`, params)
//      .then(res => res.data)
//      .catch(err => console.log(err))
// };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {
      if (o[key] === null) {
        delete o[key]
      }
      if (toType(o[key]) === 'string') {
        o[key] = o[key].trim()
      } else if (toType(o[key]) === 'object') {
        o[key] = filterNull(o[key])
      } else if (toType(o[key]) === 'array') {
        o[key] = filterNull(o[key])
      }
    }
    return o
  }
  