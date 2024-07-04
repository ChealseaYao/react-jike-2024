import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import Barchart from './components/BarChart'


const Home = () => {

    
    return (
        <div>
          <div ><Barchart title={'三大框架满意度'}/> 
          <Barchart title={'三大框架使用度'}/> </div>
        </div >
      )
  }
  export default Home