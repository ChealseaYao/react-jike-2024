
import { request } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"
import { setToken as _setToken,getToken } from "@/utils"
import { loginAPI,getProfileAPI } from '@/apis/user'



const userStore=createSlice({
    name:"user",
    initialState:{
        token: getToken() ||'',
        userInfo: {}
    },
    //同步修改方案
    reducers: {
        setToken (state,actions){
            state.token=actions.payload
            _setToken(actions.payload)
        },
        setUserInfo (state, action) {
            state.userInfo = action.payload
          },
        clearUserInfo (state) {
            state.token = ''
            state.userInfo = {}
        }
    }
})

//解构出actionCreater
const { setToken,setUserInfo,clearUserInfo } = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异步方法
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
      const res = await loginAPI(loginForm)
      dispatch(setToken(res.data.token))
    }
  }

  const fetchUserInfo = () => {
    return async (dispatch) => {
      const res = await getProfileAPI()
      dispatch(setUserInfo(res.data))
    }
  }
  

export {setToken, fetchLogin,fetchUserInfo, clearUserInfo}
export default userReducer