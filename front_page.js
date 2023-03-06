function scrollDown()
{
    let screen_width = window.innerWidth;

    if (screen_width >= 600)
    {
        window.scroll(0,661);
    }

    if (screen_width <= 600)
    {
        /*Mobile*/
        window.scroll(0,912);
    }
}

function GoHome()
{
    window.scroll(0,0);
}

function GoMyWorks()
{
    let screen_width = window.innerWidth;

    if (screen_width >= 600)
    {
        window.scroll(0,661);
    }

    if (screen_width <= 600)
    {
        /*Mobil*/
        window.scroll(0,912);
    }
}

window.onload = function() {
    window.onscroll = function() {get_scroll()};
};

//function for animating elements when on screen after scrolled.
function get_scroll() {
        //get scroll position
        window_scroll_top = $(window).scrollTop();

        //get element to animate on scroll top offset
        godot_progress_bar = $(".godot-progress-bar");
        //get element top offset
        godot_progress_bar_top_offset = godot_progress_bar.offset().top;

        //calculate the distance between the top of the window and the element to animate on scroll
        godot_distance_to_screen = godot_progress_bar_top_offset - window_scroll_top

        //check if the distance off element to screen is less then window height, and if true animate it. if negative or more deanimate it.
        if (godot_distance_to_screen < $(window).height()) {
            godot_progress_bar.css("animation-name","godot-progress-bar");
        } else {
            godot_progress_bar.css("animation-name","none");
        } if (godot_distance_to_screen <= 0) {
            godot_progress_bar.css("animation-name","none");
        }

        html_progress = $(".html-progress");
        html_progress_top_offset = html_progress.offset().top;
        html_distance_to_screen = html_progress_top_offset - window_scroll_top;

        css_progress = $(".css-progress");
        css_progress_top_offset = css_progress.offset().top;
        css_distance_to_screen = css_progress_top_offset - window_scroll_top;

        js_progress = $(".js-progress");
        js_progress_top_offset = js_progress.offset().top;
        js_distance_to_screen = js_progress_top_offset - window_scroll_top;

        if (html_distance_to_screen < $(window).height()) {
            html_progress.css("animation-name","html-progress");
        } else {
            html_progress.css("animation-name","none");
        } if (html_distance_to_screen <= 0) {
            html_progress.css("animation-name","none");
        }

        if (css_distance_to_screen < $(window).height()) {
            css_progress.css("animation-name","css-progress");
        } else {
            css_progress.css("animation-name","none");
        } if (css_distance_to_screen <= 0) {
            css_progress.css("animation-name","none");
        }

        if (js_distance_to_screen < $(window).height()) {
            js_progress.css("animation-name","js-progress");
        } else {
            js_progress.css("animation-name","none");
        } if (js_distance_to_screen <= 0) {
            js_progress.css("animation-name","none");
        }

        premiere_progress = $(".premiere-progress");
        premiere_progress_top_offset = premiere_progress.offset().top;
        premiere_distance_to_screen = premiere_progress_top_offset - window_scroll_top;

        after_progress = $(".after-progress");
        after_progress_top_offset = after_progress.offset().top;
        after_distance_to_screen = after_progress_top_offset - window_scroll_top;

        audition_progress = $(".audition-progress");
        audition_progress_top_offset = audition_progress.offset().top;
        audition_distance_to_screen = audition_progress_top_offset - window_scroll_top;

        if (premiere_distance_to_screen < $(window).height()) {
            premiere_progress.css("animation-name","premiere-progress");
        } else {
            premiere_progress.css("animation-name","none");
        } if (premiere_distance_to_screen <= 0) {
            premiere_progress.css("animation-name","none");
        }

        if (after_distance_to_screen < $(window).height()) {
            after_progress.css("animation-name","after-progress");
        } else {
            after_progress.css("animation-name","none");
        } if (after_distance_to_screen <= 0) {
            after_progress.css("animation-name","none");
        }

        if (audition_distance_to_screen < $(window).height()) {
            audition_progress.css("animation-name","audition-progress");
        } else {
            audition_progress.css("animation-name","none");
        } if (audition_distance_to_screen <= 0) {
            audition_progress.css("animation-name","none");
        }
}


current_images_slide = 0;

function change_images_slide(n) {
    slide_1 = $("#slide-1");
    slide_2 = $("#slide-2");
    slide_3 = $("#slide-3");
    slides = [slide_1,slide_2,slide_3];

    dot_1 = $("#dot-image-1");
    dot_2 = $("#dot-image-2");
    dot_3 = $("#dot-image-3");
    dots = [dot_1,dot_2,dot_3];

    link_1 = $("#wide-putin-link");
    link_2 = $("#risiko-link");
    link_3 = $("#just-survive-bro-link");
    links = [link_1,link_2,link_3];

    current_images_slide += n;

    if (current_images_slide > slides.length-1)
    {
        current_images_slide = 0;
    }

    if (current_images_slide < 0)
    {
        current_images_slide = slides.length-1;
    } 

    console.log("changing slide: ",n);
    console.log("current_images_slide: ",current_images_slide);

    slides[current_images_slide].css("display","block");
    for (i of slides)
    {
        if (i == slides[current_images_slide])
        {
            continue;
        } else {
            i.css("display","none");
        }
    }

    dots[current_images_slide].css("background-color","black");
    for (i of dots)
    {
        if (i == dots[current_images_slide])
        {
            continue;
        } else {
            i.css("background-color","gray");
        }
    }

    links[current_images_slide].css("display","block");
    for (i of links)
    {
        if (i == links[current_images_slide])
        {
            continue;
        } else {
            i.css("display","none");
        }
    }
}

current_videos_slide = 0

function change_videos_slide(n)
{
    slide_1 = $("#vid-1");
    slide_2 = $("#vid-2");
    slide_3 = $("#vid-3");
    slides = [slide_1,slide_2,slide_3];

    dot_1 = $("#dot-video-1");
    dot_2 = $("#dot-video-2");
    dot_3 = $("#dot-video-3");
    dots = [dot_1,dot_2,dot_3];

    current_videos_slide += n;



    if (current_videos_slide > slides.length-1)
    {
        current_videos_slide = 0;
    }

    if (current_videos_slide < 0)
    {
        current_videos_slide = slides.length-1;
    } 

    console.log("changing slide: ",n);
    console.log("current_videos_slide: ",current_videos_slide);

    slides[current_videos_slide].css("display","block");

    for (i of slides)
    {
        console.log(i);
        if (i == slides[current_videos_slide])
        {
            continue;
        } else {
            i.css("display","none");
        }
    }

    dots[current_videos_slide].css("transform","scale(1.5,1.5)");

    for (i of dots)
    {
        if (i == dots[current_videos_slide])
        {
            continue;
        } else {
            i.css("transform","scale(1,1)");
        }
    }
}

function showContacts()
{
    let screen_width = window.innerWidth;
    if (screen_width >= 600)
    {
        contacts_tab = $(".contacts");
        hover_cover = $(".hover-cover");
    
        hover_cover.css("display", "block");
        contacts_tab.css("left", "0vw");
        contacts_tab.css("width", "40vw");
        contacts_tab.css("height", "100vh");
    }

    if (screen_width <= 600)
    {
        contacts_tab = $(".contacts");
        hover_cover = $(".hover-cover");
        
        hover_cover.css("display", "block");
        contacts_tab.css("left", "0vw");
        contacts_tab.css("width", "100vw");
        contacts_tab.css("height", "100vh");
    }
}

function hideContacts()
{
    contacts_tab = $(".contacts");
    hover_cover = $(".hover-cover");

    contacts_tab.css("left", "-100vw");
    hover_cover.css("display", "none");
}

function showAbout()
{
    about_tab = $(".about-tab");
    hover_cover = $(".hover-cover");

    about_tab.css("right", "0vw");
    hover_cover.css("display", "block");
}

function hideAbout()
{
    about_tab = $(".about-tab");
    hover_cover = $(".hover-cover");

    about_tab.css("right", "-100vw");
    hover_cover.css("display", "none");
}

function showNavMobile()
{
    nav_items = $(".nav > p");
    nav_items.toggle(500)
}