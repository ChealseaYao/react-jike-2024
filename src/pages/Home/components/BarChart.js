import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const Barchart=({title})=>{ //props 参数 父传子
    const chartRef = useRef(null) //react中获取节点
    useEffect(() => {
        // 1. 生成实例
        const chartDom = chartRef.current
        const myChart = echarts.init(chartDom)
        // 2. 准备图表参数
        const option = {
            title :{
                text:title
            },
            xAxis: {
              type: 'category',
              data: ['Vue', 'React', 'Angular']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [10,40,70],
                type: 'bar'
              }
            ]
          };
        // 3. 渲染参数
        myChart.setOption(option)
      }, [])
    
    return (
        <div>
          <div ref={chartRef} style={{ width: '400px', height: '300px' }} />
        </div >
      )

}

export default Barchart