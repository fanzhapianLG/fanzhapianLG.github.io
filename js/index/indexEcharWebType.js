/**
 * 各类型网站占比
 */
require(['../require.config'], function () {
    require(['echarts'], function (echarts) {
        let option = {
            title: {
                text: '各类型网站拦截次数点比',
                x: 'center',
                textStyle:{
                    color:'#fff',
                },
                top:'5%'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['黄赌毒', '电信诈骗', '网络病毒', '伪基站', '爆恐类'],
                textStyle:{
                    color:'#fff'
                }
            },
            color:['#37b1ff', '#80b3ff','#38d16f','#85df5b','#e87b20','#d34d40'] ,
            calculable: true,
            series: [{
                name: '各类型网站拦截次数点比',
                type: 'pie',
                radius: [20, 110],
                roseType: 'radius',
                center: ['50%', '60%'],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                        value: 10,
                        name: '黄赌毒'
                    },
                    {
                        value: 5,
                        name: '电信诈骗'
                    },
                    {
                        value: 15,
                        name: '金融诈骗'
                    },
                    {
                        value: 25,
                        name: '网络病毒'
                    },
                    {
                        value: 20,
                        name: '伪基站'
                    },
                    {
                        value: 35,
                        name: '爆恐类'
                    }
                ]
            }]
        };
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('web-type'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
})