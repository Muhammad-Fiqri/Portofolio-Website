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
    if (document.documentElement.scrollTop <= 1200 && document.documentElement.scrollTop >= 935) {
        console.log("I see the progress bar");
        godot_progress_bar.css("animation-name","godot-progress-bar");
    } else {
        godot_progress_bar.css("animation-name","none")
    }
    console.log("My Scroll: ", document.documentElement.scrollTop);
}
