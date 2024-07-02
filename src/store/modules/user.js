
import { request } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"
import { setToken as _setToken,getToken } from "@/utils"



const userStore=createSlice({
    name:"user",
    initialState:{
        token: getToken() ||''
    },
    //同步修改方案
    reducers: {
        setToken (state,actions){
            state.token=actions.payload
            _setToken(actions.payload)
        }
    }
})

//解构出actionCreater
const { setToken } = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异步方法
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
      const res = await request.post('/authorizations', loginForm)
      dispatch(setToken(res.data.token))
    }
  }
  

export {setToken, fetchLogin}
export default userReducer