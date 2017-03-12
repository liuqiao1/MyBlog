//通用函数

//window.onload
function addLoadEvent(func) {
  //alert("addLoadEvent");
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
};

//在tartgetElemnt 后插入 new Elemnt
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

//给元素添加一套样式
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
};

//移动元素
function moveElement(Id,final_x,final_y,interval){
    //alert(Id);
    var element = document.getElementById(Id);
    if(!element)return false;

    if(element.movement)clearTimeout(element.movement);

    if(!element.style.position)element.style.position="absolute";
    if(!element.style.left)element.style.left=0;
    if(!element.style.top)element.style.top=0;

    var pos_x = parseInt(element.style.left);//不能读外部CSS 必须要在标签里写style属性
    var pos_y = parseInt(element.style.top);//本来是0px 转数字会去掉px

    //alert(element.style.left);

    if(pos_x == final_x && pos_y == final_y)return false;

    if(pos_x<final_x){
        pos_x+=5;
    }
    if(pos_y<final_y){
        pos_y+=5
    }
    if(pos_x>final_x){
        pos_x-=5;
    }
    if(pos_y>final_y){
        pos_y-=5;
    }

    element.style.top=pos_y+"px";
    element.style.left=pos_x+"px";

    var func = "moveElement('"+Id+"',"+final_x+","+final_y+","+interval+")";
    //此坑！ Id 要加'', 在JS中参数没有指定类型 都当作object 那为什么不加''可以
    //打印出 object HTMLImageElement?

    //alert(func);
    element.movement = setTimeout(func,interval);//只运行了两次
    //等待interval毫秒后再执行func
    //如果要多次调用，请使用 setInterval() 或者让 code 自身再次调用 setTimeout()。
    //如果用内部变量movement记录 再次执行该方法，值就会丢掉。
    //用全局变量呢？在第一次执行该方法时,变量还没有设置就使用 会出错
    //setTimeout不允许多个并行吗？  有setTime队列是肿么回事
}



//点击哪个nav-a 则把它点亮
function highlightPage(){
    //alert("highlightPage");
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("navigation"))return false;
    var nav=document.getElementById("navigation");

    var links=nav.getElementsByTagName("a");
    //var currentUrl=window.location.href;

    //获取当前url"file:///F:/%E7%8E%A9%E5%89%8D%E7%AB%AF/Practice/Player/*.html"
    //alert(currentUrl);
    for(var i=0;i<links.length;i++){
        var linkUrl=links[i].getAttribute("href");
        var currentUrl=window.location.href;
        //alert(linkUrl);
        // if(linkUrl == currentUrl){
        //   links[i].className="here";
        // }

        if(currentUrl.indexOf(linkUrl)!=-1){
           links[i].className="here";//不会改变源文件 本次加样式是一次性的
        }//但是以前点过的不会熄灭 错 ！
      
        //alert(linkUrl);
        //for(var j=0;j<links.length;j++){
       //    if(links[j].getAttribute("href") == currentUrl){
        //      links[j].className="here";
        //   }
       // } 
    }
};
