$(function(){
    $.ajax({
        url:'http://127.0.0.1:3000/api/getindexmenu',
        success: function(data){
            var mTemp = template('menuTemp', data);
            $('#mainMenu').html(mTemp);
            $('#mainMenu > .row >div:nth-last-child(-n+4)').css("display","none");
            $('#mainMenu > .row > div:nth-child(8)').on('click', function(){
                $('#mainMenu > .row >div:nth-last-child(-n+4)').toggle()
            })
        }
    })
    $.ajax({
        url:'http://127.0.0.1:3000/api/getmoneyctrl',
        success: function(prodata){
            var pTemp = template("productTemp",prodata);
            $('#product').html(pTemp);
        }
    })
})