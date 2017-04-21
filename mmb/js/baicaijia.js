$(function(){
    $.ajax({
       url:'http://127.0.0.1:3000/api/getbaicaijiatitle',
       success: function(ndata){
        var i;
        var ndata = ndata;
        console.log(ndata);
        var nTemp = template('navTemp',ndata);
        $('.scroller > ul').html(nTemp);
        $(".navLi > a").on('click', function(){
            $.ajax({
                url: 'http://127.0.0.1:3000/api/getbaicaijiaproduct',
                data: {titleid:$(this).attr("titleId")},
                success: function(data){
                    console.log(data);
                    var pHtml = template('proTemp',data);
                    $('.pro > .media-body').html(pHtml);
                }
            })
        })
       }
    })
})