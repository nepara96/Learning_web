waitUntil();


function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

$(document).ready(function() {
    if(typeof YOUTUBE_VIDEO_MARGIN == 'undefined') {
      YOUTUBE_VIDEO_MARGIN=5;
    }
    $('iframe').each(function(index,item) {
      if($(item).attr('src').match(/(https?:)?\/\/www\.youtube\.com/)) {
        var w=$(item).attr('width');
        var h=$(item).attr('height');
        var ar = h/w*100;
        ar=ar.toFixed(2);
        //Style iframe    
        $(item).css('position','absolute');
        $(item).css('top','0');
        $(item).css('left','0');    
        $(item).css('width','100%');
        $(item).css('height','100%');
        $(item).css('max-width',w+'px');
        $(item).css('max-height', h+'px');        
        $(item).wrap('<div style="max-width:'+w+'px;margin:0 auto; padding:'+YOUTUBE_VIDEO_MARGIN+'px;" />');
        $(item).wrap('<div style="position: relative;padding-bottom: '+ar+'%; height: 0; overflow: hidden;" />');
      }
    });
  });