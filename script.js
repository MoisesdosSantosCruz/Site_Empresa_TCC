window.onscroll = function () {
    const button = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }