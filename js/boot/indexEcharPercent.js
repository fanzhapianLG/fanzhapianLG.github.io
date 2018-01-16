/**
 * 终端百分比
 */
require(['../require.config'], function () {
    require(['echarts'], function (echarts) {
        let option = {
            title: {
                text: '终端拦截占比',
                x: 'center',
                textStyle:{
                    color:'#fff'
                },
                top:'5%'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                show:false,
                orient: 'vertical',
                left: 'left',
                data: ['移动', 'PC']
            },
            color:['#37b1ff', '#80b3ff'] ,
            series: [{
                name: '终端拦截占比',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [{
                        value: 335,
                        name: '移动'
                    },
                    {
                        value: 310,
                        name: 'PC'
                    }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('terminal'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
})