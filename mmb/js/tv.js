/*
* @Author: yym
* @Date:   2017-04-14 11:03:57
* @Last Modified by:   yym
* @Last Modified time: 2017-04-20 15:28:06
*/

$(function(){
    var page = 1;
    var maxpage;
    function getQueryString(name) { //pageid
            // name="xxxx"& 
            // i,不严格区分大小写  
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                // console.log(r);
                return unescape(r[2]);
            }
            return null;
        }
        
    var id = getQueryString("categoryId");
    console.log(id)
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcategorybyid",
        data:{"categoryid":id},
        success:function (data){
            console.log(data);
            console.log(data.result["0"].category);
            var data = data.result["0"].category;
            var aTemp = template('areTemp',data);
            $(".context-header > span").html(aTemp);
        }
    })
     function get(){
        $.ajax({
            url:"http://127.0.0.1:3000/api/getproductlist",
            data:{"categoryid":id,"pageid":page},
            success:function (data){
                console.log(data);
                maxpage = Math.ceil(data.totalCount/data.pagesize);
                var tag = template('allTemp',data);
                $('.context').html(tag);
            }
        })
     }
     get();
     $('#prev').on('click', function () {
        if(page==1){
            alert("这已经是最前面一页了");
            return;
        }
        page--;
        get();
    });
    $('#next').on('click', function () {
        if(page==maxpage){
            alert("已经是最后一页了");
            return;
        }
        page++;
        get();
    })

})




