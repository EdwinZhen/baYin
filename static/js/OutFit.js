
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

//定位
function dingwei(){
    var geolocation = new qq.maps.Geolocation("OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77", "bayin");
    var positionNum = 0;
    var options = {timeout: 8000};
    function showPosition(position) {
        var adCode = position.adCode;//邮政编码
        var nation = position.nation;//中国
        var city = position.city; //城市
        var addr = position.addr; //详细地址
        var lat = position.lat; //
        var lng = position.lng; //火星坐标
        var detailsAddress = nation + city + addr;
        $('.outfit_msg_r_bottom').text(detailsAddress);
        console.log("lng："+lng);
        console.log("lat："+lat);
    }
    function showErr() {
        alert("定位失败，请稍后再试...");
    }
    function dingwei_c(){
        //定位
        geolocation.getLocation(showPosition, showErr, options);
    }
    dingwei_c()
}
dingwei();
/*
//定位后计算距离
function ju_li(self_lng,self_lat){
    var lat,lng;
    lat = 34.34127;
    lng = 108.93984;
    var juli = Math.sqrt(Math.pow((lat - self_lat),2) + Math.pow((lng - self_lng),2));
    console.log(juli);
}
//ju_li(34.34127,108.93984);
ju_li(108.937359,34.23058);
ju_li(108.938805,34.229237);

function distanceByLnglat(lng1, lat1, lng2, lat2) {
    //var radLat1 = lat1;
    //var radLat2 = lat2;
    //var a = radLat1 - radLat2;
    //var b = lng1 - lng2;
    //var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    //s = s * 6378137.0; // 取WGS84标准参考椭球中的地球长半径(单位:m)
    //s = Math.round(s * 10000) / 10000;
    //console.log(s);//706160.3363
    //下面为两点间空间距离（非球面体）
     var value= Math.pow(Math.pow(lng1-lng2,2)+Math.pow(lat1-lat2,2),1/2);
     console.log("js计算："+value*10000);
}
distanceByLnglat(108.93984,34.34127,108.937359,34.23058);
*/

