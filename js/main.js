$(function(){
    $('input, select').styler();
    $( ".datepicker" ).datepicker({dateFormat: "dd.mm.yy"});
    $(".fancybox").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none',
        padding : 55,
    });

    $(".compare_block .row.hider").on("click",function(e){
        var obj = $(this);
        var group = $("#"+obj.attr("for"));
        if(obj.hasClass("opened")){
            obj.removeClass("opened");
            group.removeClass("opened");
        }
        else{
            obj.addClass("opened");
            group.addClass("opened");
        }
        e.preventDefault();
    });


    $(".icon_links .subscribe").on("click",function(e){
        $.fancybox({
            autoWidth: true,
            autoHeight: true,
            fitToView : true,
            autoSize : true,
            closeClick : false,
            openEffect : 'none',
            closeEffect : 'none',
            wrapCSS : 'form',
            padding : 55,
            openSpeed: 0,
            closeSpeed: 0,
            href: "#subs_wrapper"
        });
        e.preventDefault();
        e.stopPropagation()
    });

    $(".open_popup").on("click",function(e){
        $.fancybox({
            autoWidth: true,
            autoHeight: true,
            fitToView : false,
            autoSize : true,
            closeClick : false,
            openEffect : 'none',
            closeEffect : 'none',
            wrapCSS : 'form',
            padding : 55,
            openSpeed: 0,
            closeSpeed: 0,
            href: $(this).attr("href")
        });
        e.preventDefault();
        e.stopPropagation()
    });

    $(".contacts_block .item a").on("click",function(e){

        e.stopPropagation()
    });
    $(".contacts_block .item .gal_previews a").on("click",function(e){
        $.fancybox({
            autoWidth: true,
            autoHeight: true,
            fitToView : true,
            autoSize : true,
            closeClick : false,
            openEffect : 'none',
            closeEffect : 'none',
            wrapCSS : 'form',
            padding : 55,
            openSpeed: 0,
            closeSpeed: 0,
            href: $(this).attr("href")
        });
        e.preventDefault();
        e.stopPropagation()
    });
    $(".contacts_block .item:not(.no_opener)").on("click",function(e){
        var obj = $(this);
        if(obj.hasClass("opened"))
            obj.removeClass("opened");
        else
            obj.addClass("opened");
       // e.preventDefault();
    });

    $(".photo_gallery .photo_list a").on('click',function(e){
        var obj = $(this);
        var big_pic = obj.closest(".photo_gallery").find(".big_photo img");
        var big_pic_link = obj.closest(".photo_gallery").find(".big_photo a");

        $(".photo_gallery .photo_list a").removeClass("current");
        obj.addClass('current');
        big_pic.attr("src",obj.attr("href"));
        big_pic_link.attr("href",obj.attr("href"));

        e.preventDefault();
    });

    $(".photo_gallery .big_photo a").on('click',function(e){
        var obj = $(this);
        console.log(obj.attr("href"));
        $.fancybox({
            autoWidth: true,
            autoHeight: true,
            fitToView : true,
            autoSize : true,
            closeClick : false,
            openEffect : 'none',
            closeEffect : 'none',
            wrapCSS : 'form',
            padding : 55,
            openSpeed: 0,
            closeSpeed: 0,
            href: obj.attr("href")
        });

        e.preventDefault();
    });

    $(".product .tags span").on("click",function(){
        window.location.href = $(this).data("url");
        return false
    });

    $(".tab-buttons").find("a").on("click",function(e){
        var obj = $(this);
        var buttons_wrapper = obj.closest(".tab-buttons");
        var tabs_wrapper = $(obj.closest(".tab-buttons").data("tabwrapper"));
        var obj_to_show = tabs_wrapper.find("."+obj.data("tab"));

        buttons_wrapper.find("a").removeClass("current");
        obj.addClass("current");
        tabs_wrapper.find(".tab").removeClass("current");
        obj_to_show.addClass("current");

        e.preventDefault();
    });

    $(".reviews_slider .switcher a").on("click",function(e){
        var obj = $(this);
       if(!$(".reviews_slider .slide:visible").hasClass(obj.data("slide"))){
           $(".reviews_slider .switcher a").removeClass("current");
           obj.addClass("current");
           $(".reviews_slider .slide").fadeOut(300);
           $(".reviews_slider .slide."+obj.data("slide")).fadeIn(300);
       }

        e.preventDefault();
    });

    $(".products").each(function(){
       var obj = $(this);
        obj.find(".product").matchHeight();
    });

    $(".articles").each(function(){
        var obj = $(this);
        obj.find(".new").matchHeight();
    });

    $(".managers_list").each(function(){
        var obj = $(this);
        obj.find(".manager").matchHeight();
    });

});
