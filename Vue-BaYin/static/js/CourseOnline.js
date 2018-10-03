

function onload_in(user_id){
    for (var i=0;i<user_id.length;i++){
        user_xin(user_id[i]);
    }
}
//用户评论红心
function user_xin(user_id){
    var ss = '.user_comment_all_'+user_id;
    var xin_num = $(ss).attr("data-xin_light");
    for (var i= 0;i<=xin_num;i++){
        var xin_light = '.user_comment_xin_img_'+i+'_'+user_id;
        $(xin_light).attr("src","static/images/star/xin_red.png");
    }
}
//视频播放去遮罩层
$('.top_video_zc_txt').click(function(){
    $('.top_video_c').trigger('play');
    $('.top_video_zc').attr('style','display:none');
    $('.top_video_zc_txt').attr('style','display:none');
});
$('.top_video_c').click(function(){
    $('.top_video_c').trigger('pause');
    $('.top_video_zc').attr('style','display:block');
    $('.top_video_zc_txt').attr('style','display:block');
});
//底部收藏
$('.bottom_fixed_shop').click(function(){
    $('.bottom_fixed_shop_l_sc').addClass('bottom_fixed_shop_l_sc_sc');
    $('.bottom_fixed_shop_l_sc').text('已收藏');
    $('.bottom_fixed_shop_r_img').attr('src','static/images/shoucang_light.png')
});
//课程介绍--查看更多
$('.class_details_content_more_btn').click(function(){
    var sas = $('.class_details_content_more_btn').text();
    if(sas == "查看更多") {
        $('.class_details_content').attr('style', 'max-height:600px;');
        $('.class_details_content_more_btn').text("收起更多");
    }else{
        $('.class_details_content').attr('style', 'max-height:0.61rem;');
        $('.class_details_content_more_btn').text("查看更多");
    }
});
//轮播
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container_you_like', {
        direction: 'horizontal',
        loop: false,
        slidesPerView :'auto'
    });
});
//评论--加载更多
$('.user_comment_more').click(function(){
    var list_height = $('.user_comment_list').outerHeight();
    if (list_height <= 180){
        $('.user_comment_list').attr('style','max-height:3.2rem;');
    }else{
        $('.user_comment_more').text("————没有了————");
    }
});
//猜你喜欢--课程跳转
$(".like_class_all").click(function () {
    window.location = "CourseOnline.html";
});
//购买
$(".bottom_fixed_buy").click(function () {
    alert("暂无法购买，请您静候更新哦~");
});

















