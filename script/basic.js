//--------------------------画带云朵的背景--------------------------------
function drawBackground(){
    //alert("drawBackground");
    //var canvas = document.createElement("canvas");
    var canvas = document.getElementById("indexBgr");
    //canvas.setAttribute("id","indexBgr");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    //canvas.style.position = "absolute";
    //canvas.style.zIndex = 0;

    //document.body.appendChild(canvas);
    //document.body.style.background = "url('"+indexBgr.toDataURL()+"')";
    var ctx = canvas.getContext("2d");

    var i=0;
    var j=canvas.width;
    window.setInterval(function(){
        //清空画布
        ctx.clearRect(0,0,canvas.width,canvas.height);
        //绘制云朵
        drawCloud(ctx,i,canvas.height*0.2,canvas.width*0.1);

        drawCloud(ctx,i,canvas.height*0.5,canvas.width*0.1);

        drawCloud(ctx,j,canvas.height*0.2,canvas.width*0.1);

        i += Math.random();
        j -= Math.random();
    },80)
   
}
/**
 * context 画布上下文
 * cx 云朵横坐标
 * cy 云朵纵坐标
 * cw 云朵宽度
 */
function drawCloud(context, cx, cy, cw){
    //云朵移动范围即画布宽度
var maxWidth = context.canvas.width;
//如果超过边界从头开始绘制
cx = cx % maxWidth;
//云朵高度为宽度的60%
var ch = cw * 0.6;
//开始绘制云朵
context.beginPath();
	context.fillStyle = "white";
    //创建渐变
    var grd = context.createLinearGradient(0, 0, 0, cy);
	grd.addColorStop(0, 'rgba(255,255,255,0.8)');
	grd.addColorStop(1, 'rgba(255,255,255,0.5)');
	context.fillStyle = grd;
	context.fill();
    //在不同位置创建5个圆拼接成云朵现状
    context.arc(cx, cy, cw * 0.19, 0, 360, false);
	context.arc(cx + cw * 0.08, cy - ch * 0.3, cw * 0.11, 0, 360, false);
	context.arc(cx + cw * 0.3, cy - ch * 0.25, cw * 0.25, 0, 360, false);
	context.arc(cx + cw * 0.6, cy, cw * 0.21, 0, 360, false);
	context.arc(cx + cw * 0.3, cy - ch * 0.1, cw * 0.28, 0, 360, false);
	context.closePath();
	context.fill();
}

//--------------------------点亮当前导航栏--------------------------------
function highlightNav(){
    var nav = document.getElementById("navigation");
    if(!nav){
        alert("no this nav");
    }
    else{
        //alert("Ok");
        var links = nav.getElementsByTagName("a");
        if(links.length <= 0){
            alert("no this link!");}
            else{
                //alert(links.length); 
                 var currentUrl=window.location.href;//当前页面的链接
                 //alert(currentUrl);
                 for(var i = 0; i<links.length; i++){
                     var href = links[i].getAttribute("href");
                     
                      if(currentUrl.indexOf(href) != -1){
                          //alert(href);
                          addClass(links[i],"current");
                  }
                    // alert(links[i].lastChild.nodeValue);
                    // alert(links[i].getAttribute("href"));
                 }     
        }
    }

}

addLoadEvent(drawBackground);
addLoadEvent(highlightNav);
// window.onload = drawBackground;
//  window.onload = highlightNav;