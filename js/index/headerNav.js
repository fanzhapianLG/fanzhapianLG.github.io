require(['../require.config'], function () {
    require(['jquery'], function ($) {
        let $header = $('header'),
            $aside = $('aside');
        $(document).mousemove(function (event) {
            // header显示隐藏
            if (event.pageY < 30) {

                $('header').stop().animate({
                    top: "0"
                }, 100);
            } else if (event.pageY > 200) {

                $('header').stop().animate({
                    top: "-4rem"
                }, 100);
            }
            // aside显示隐藏

            if (event.pageX < 30) {
              
                $('aside').stop().animate({
                    left: "0"
                }, 100);
            } else if (event.pageX > 200) {

                $('aside').stop().animate({
                    left: "-13rem"
                }, 100);
            }
        });
    })
})
