import {useState,useEffect} from 'react'
import {getChannelAPI} from '@/apis/article'
//封装获取频道列表的逻辑
function useChannel(){
    //1.获取频道列表的所有逻辑
    //获取频道列表
    const [channelList,setChannelList]=useState([])
    useEffect(()=>{
        //封装函数 在函数体内调用接口
      const getChannelList=async()=>{
        const res=await getChannelAPI()
        setChannelList(res.data.channels)
      }
      //调用函数
      getChannelList()
    },[])
    //把组件中用的数据return
    return {
        channelList
    }
}

export {useChannel}