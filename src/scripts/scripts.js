window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("banner").style.background = "#fff";
  } else {
    document.getElementById("banner").style.background = "transparent";
  }
}