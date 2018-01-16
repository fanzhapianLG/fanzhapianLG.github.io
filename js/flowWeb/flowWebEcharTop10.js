require(['../require.config'], function () {
    require(['echarts'], function (echarts) {
        let option = {
            title: {
                text: '钓鱼网站TOP10',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['www.baidu.com', 'www.ss.com', 'www.ssf.com', 'www.asdfa.com', 'www.ssf.com', 'www.asdfa.com', 'www.ssf.com', 'www.asdfa.com', 'www.ssf.com', 'www.asdfa.com']
            },
            series: [{
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230, 29034, 104970, 131744, 630230]
            }, ]
        };
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('top10'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
})