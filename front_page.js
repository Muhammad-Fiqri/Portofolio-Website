function scrollDown()
{
    window.scroll(0,661);
}

function GoHome()
{
    window.scroll(0,0);
}

function GoMyWorks()
{
    window.scroll(0,661);
}

window.onscroll = function() {get_scroll()};

function get_scroll() {
    godot_progress_bar = $(".godot-progress-bar");
    if (document.documentElement.scrollTop <= 1700 && document.documentElement.scrollTop >= 935) {
        console.log("I see the godot progress bar");
        godot_progress_bar.css("animation-name","godot-progress-bar");
    } else {
        godot_progress_bar.css("animation-name","none")
    }
    console.log("My Scroll: ", document.documentElement.scrollTop);

    html_progress = $(".html-progress")
    css_progress = $(".css-progress")
    js_progress = $(".js-progress")
    if (document.documentElement.scrollTop >= 1450 && document.documentElement.scrollTop <= 3000) {
        console.log("I see the web progress bar");
        html_progress.css("animation-name","html-progress");
        css_progress.css("animation-name","css-progress");
        js_progress.css("animation-name","js-progress");
    } else {
        html_progress.css("animation-name","none");
        css_progress.css("animation-name","none");
        js_progress.css("animation-name","none");
    }

    premiere_progress = $(".premiere-progress")
    after_progress = $(".after-progress")
    audition_progress = $(".audition-progress")

    if (document.documentElement.scrollTop >= 3660 && document.documentElement.scrollTop <= 5000) {
        console.log("I see the video editing progress bar");
        premiere_progress.css("animation-name","premiere-progress");
        after_progress.css("animation-name","after-progress");
        audition_progress.css("animation-name","audition-progress");
    } else {
        premiere_progress.css("animation-name","none");
        after_progress.css("animation-name","none");
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
    contacts_tab = $(".contacts");
    hover_cover = $(".hover-cover");

    contacts_tab.css("left", "0vw");
    hover_cover.css("display", "block");
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