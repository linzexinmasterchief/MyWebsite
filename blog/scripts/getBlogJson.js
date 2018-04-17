$(function() {
    $.ajax({
        type: "get",                //请求方式为get，也可以是设置为post
        url: "json/blog.json",      //所要获取的json文件相对地址，注意不要写错了，我这里放在同一个目录下的
        async: true,　　　　　　　　 //是否为异步请求，ture为异步请求，false为同步请求

        success: function(d) {     //当请求之后调用。传入返回后的数据，以及包含成功代码的字符串
            var d = eval(d);       // 将json字符串数据解析成对象
            var blogStr = "<h3 class=\"subTitle\">Stream record</h3>";
            var menuStr = "menu";
            var arr = d.list;

            if (arr != null) {
                for (var i = 0; i < arr.length; i++) {
                    blogStr = blogStr + "<div id=" + arr[i].dateID.slice(0,6) + " class=\"blogs\"><p class=\"blogID\">" + arr[i].dateID + " </p><p class=\"blogText\">" + arr[i].content + "</p></div>";
                    menuStr = menuStr + "<br> <a href=\"#" + arr[i].dateID.slice(0,6) + "\">" + arr[i].dateID + "</a>"
                }
                
                $("#blogContainer").html(blogStr);
                $("#menubar").html(menuStr);
            }
        }
    });
});