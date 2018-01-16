require(['../require.config'], function () {
    require(['layui'], function () {
        layui.use('laydate', function () {
            var laydate = layui.laydate;
            laydate.render({
                elem: '#time-scope',
                type: 'datetime',
                range: '至',
                format: 'yyyy年M月d日'
            });
        });
    })
})