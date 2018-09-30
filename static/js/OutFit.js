
function onload_in(user_id){
    for (var i=0;i<user_id.length;i++){
        user_xin(user_id[i]);
    }
}
//用户评论的红心
function user_xin(user_id){
    var ss = '.user_comment_all_'+user_id;
    var xin_num = $(ss).attr("data-xin_light");
    for (var i= 0;i<=xin_num;i++){
        var xin_light = '.user_comment_xin_img_'+i+'_'+user_id;
        $(xin_light).attr("src","static/images/star/xin_red.png");
    }
}
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView :'auto',
        pagination:{
            el:'.swiper-pagination'
        }
    });
});
//拨打电话     outfit_msg_r_top_r





