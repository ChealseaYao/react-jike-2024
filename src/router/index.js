//配置路由

import { AuthRoute } from "@/components/AuthRoute";
import Layout from "@/pages/Layout"; //src/pages/Layout
import Login from "@/pages/Login";

import { createBrowserRouter} from 'react-router-dom'

//配置路由实例，查看文档如何使用
const router = createBrowserRouter([
    {
        path:'/',
        element:<AuthRoute><Layout/></AuthRoute>
    },
    {
        path:'/login',
        element:<Login/>
    }
]

)

export default router
