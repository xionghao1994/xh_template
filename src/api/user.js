/** 
 * 用户相关API
 */
// 登陆接口
 import { get, fetch } from 'utils/http'

 export const login = data => fetch('DoulongwanServer/user/loginUser','post',data)