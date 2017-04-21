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
        
    var id = getQueryString("productId");
    console.log(id)
    $.ajax({
        url:'http://127.0.0.1:3000/api/getmoneyctrl',
        data: {"productid":id},
        success: function(data){
            console.log(data);
            var aTemp = template("allTemp",data);
            $(".context").html(aTemp);
        }
    })
})