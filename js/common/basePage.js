require(['../require.config'], function () {
    require(['layui'], function () {
        layui.use('laypage', function () {
            var laypage = layui.laypage;
            // 分页
            laypage.render({
                elem: 'page-num', //注意，这里的 test1 是 ID，不用加 # 号
                count: 50 //数据总数，从服务端得到
            })
        });
    })
})