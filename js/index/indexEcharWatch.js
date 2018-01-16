/**
 * 实时拦截量
 */
require(['../require.config'], function () {
    require(['echarts'], function (echarts) {
        option = {
            title: {
                text: '实时拦截量',
                x: 'center',
                textStyle: {
                    color: '#fff'
                },
                top:'5%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
            }],
            series: [{
                name: '实时拦截量',
                type: 'line',
                stack: '总量',
                areaStyle: {
                    normal: {}
                },
                data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 200, 150]
            }]
        };

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('watch'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
})