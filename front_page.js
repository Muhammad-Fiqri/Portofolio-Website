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
    godot_progress_bar = $(".progress-bar");
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
}


current_slide = 0;

function change_slide(n) {
    slide_1 = $("#slide-1");
    slide_2 = $("#slide-2");
    slide_3 = $("#slide-3");
    slides = [slide_1,slide_2,slide_3];

    dot_1 = $("#dot-1");
    dot_2 = $("#dot-2");
    dot_3 = $("#dot-3");
    dots = [dot_1,dot_2,dot_3];

    link_1 = $("#wide-putin-link");
    link_2 = $("#risiko-link");
    link_3 = $("#just-survive-bro-link");
    links = [link_1,link_2,link_3];

    current_slide += n;

    if (current_slide > slides.length-1)
    {
        current_slide = 0;
    }

    if (current_slide < 0)
    {
        current_slide = slides.length-1;
    } 

    console.log("changing slide: ",n);
    console.log("current_slide: ",current_slide);

    slides[current_slide].css("display","block");
    for (i of slides)
    {
        if (i == slides[current_slide])
        {
            continue;
        } else {
            i.css("display","none");
        }
    }

    dots[current_slide].css("background-color","black");
    for (i of dots)
    {
        if (i == dots[current_slide])
        {
            continue;
        } else {
            i.css("background-color","gray");
        }
    }

    links[current_slide].css("display","block");
    for (i of links)
    {
        if (i == links[current_slide])
        {
            continue;
        } else {
            i.css("display","none");
        }
    }
}