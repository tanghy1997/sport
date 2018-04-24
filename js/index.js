var showMask = function(){
    $('.apply').addClass('open').removeClass('close')
}
$(function(){
    if(!sessionStorage.name){
        showMask();
        sessionStorage.name = 'jinghuang';
    }
})

$(function(){
    $('#ngpic').on('click',function(){
        $('.apply').addClass('close').removeClass('open')
    })
})