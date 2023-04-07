$(function () {
  // nav add class
  $("nav ul").on("click", "li", function () {
    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");
  });
  // end of nav dd class
});
