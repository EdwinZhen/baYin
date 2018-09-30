

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
//轮播图
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        delay:3000,
        disableOnInteraction:true,
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        },
        centeredSlides : true,
        slidesPerView :'auto',
        centeredslides:true
    });
    var mySwiperTwo = new Swiper ('.swiper-container_you_like', {
        direction: 'horizontal',
        loop: false,
        slidesPerView :'auto'
    });
});
//详情介绍
$('.goods_details_content_more_btn').click(function(){
    var sas = $('.goods_details_content_more_btn').text();
    if(sas == "查看更多") {
        $('.goods_details_content').attr('style', 'max-height:600px;');
        $('.goods_details_content_more_btn').text("收起更多");
    }else{
        $('.goods_details_content').attr('style', 'max-height:0.61rem;');
        $('.goods_details_content_more_btn').text("查看更多");
    }
});
//测评--加载更多
$('.user_comment_more').click(function(){
    var list_height = $('.user_comment_list').outerHeight();
    if (list_height <= 180){
        $('.user_comment_list').attr('style','max-height:3.2rem;');
    }else{
        $('.user_comment_more').text("————没有了————");
    }
});
//收藏
$('.bottom_fixed_shop_r').click(function () {
    $('.bottom_fixed_shop_l_sc_img').attr('src','static/images/shoucang_light.png');
    $('.bottom_fixed_shop_l_sc').text("已收藏");
    $('.bottom_fixed_shop_l_sc').attr('style','color:#00e0a8');
});
//去店铺
$(".bottom_fixed_shop_l").click(function () {
    window.location="ShopDetails.html";
});
//购买
$(".bottom_fixed_buy").click(function () {
    alert("暂无法购买，请您静候更新哦~");
});
//猜你喜欢跳转
$(".like_goods").click(function () {
    window.location="GoodsDetails.html";
});




