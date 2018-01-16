require.config({　
    baseUrl: '../lib',
    paths: {　　　　　　
        "jquery": "jquery-3.2.1.min",
        "bootstrap": "bootstrap-3.3.7-dist/js/bootstrap.min",
        "popper": "popper.min",
        "laydate": "laydate/laydate",
        "echarts": "echarts.min",
        "dataTables": "DataTables/datatables.min",
        "layui":"layui/layui",
        "bmap":'bmap.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
        ,
        "dataTables": {
            deps: ['jquery'],
            exports: "dataTables"
        }
    }
});