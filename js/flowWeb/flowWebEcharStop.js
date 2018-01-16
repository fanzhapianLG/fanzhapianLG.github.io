require(['../require.config'], function () {
    require(['echarts'], function (echarts) {
        let option = {
            title: {
                text: '各类型网站拦截次数点比',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['黄赌毒', '电信诈骗', '网络病毒', '伪基站', '爆恐类']
            },
            calculable: true,
            series: [{
                name: '半径模式',
                type: 'pie',
                radius: [20, 110],
                roseType: 'radius',
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
        var myChart = echarts.init(document.getElementById('stop-percent'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
})