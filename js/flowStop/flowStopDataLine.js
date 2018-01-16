require(['../require.config'], function () {
    require(['echarts'], function (echarts) {
        // 数据折线图
        let option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['拦截总次数', '继续访问', '关闭访问', '申述次数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2017/12/11', '2017/12/12', '2017/12/13', '2017/12/14', '2017/12/15', '2017/12/16']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    name: '拦截总次数',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230]
                },
                {
                    name: '继续访问',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330]
                },
                {
                    name: '关闭访问',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330]
                },
                {
                    name: '申述次数',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330]
                }
            ]
        };
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echar-data-line'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
})