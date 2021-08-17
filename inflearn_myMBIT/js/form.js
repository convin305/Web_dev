// 스크롤업 & 다운 : 전체 높이를 계산해서 올리고 내림.

function scrollUp(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop()/ vheight) - 1 ) * vheight)
    }, 500);
}

function scrollDown(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop()/ vheight) + 1 ) * vheight)
    }, 500);

}

// preventDefault()를 이용해서 버튼 클릭시 나타날 수 있는 기본 동작 중단하고 나서 스크롤 업다운을 한다.

$(function(){
    $('.next_btn').click(function(e){
        let divs = $(this).parent().prev().children();
        let inputs = divs.find('input:checked');
        if(inputs.length <1) {
            alert('문항이 선택되지 않았습니다.');
            return False;
        }
        e.preventDefault();
        scrollDown();
    });
    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    });
    
    $('#form').submit(function(e){
        let radios = $('input[type=radio]:checked');
        if(radios.length < 3) {
            alert('문항이 선택되지 않았습니다.');
            return False;
        }
        return true;

    });
    
    $('html, body').animate({
        scrollTop: 0 
    },500);
});