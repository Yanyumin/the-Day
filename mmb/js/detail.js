$(function(){
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
        
    var id = getQueryString("productid");
    var categoryId = getQueryString("categoryid");
    console.log(categoryId);
    console.log(id)
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcategorybyid",
        data:{"categoryid":id},
        success:function (data){
            console.log(data);
            console.log(data.result["0"].category);
            var data = data.result["0"].category;
            var aTemp = template('prevTemp',data);
            $(".context-header > .h-prev").html(aTemp);
        }
    })
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getproduct',
        data: {"productid":id},

        success: function(data){
            console.log(data);
            var dTemp = template('detailTemp',data);
            $(".msg").html(dTemp);
        }
    })
    
})