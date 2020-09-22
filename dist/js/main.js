// Smooth Scrolling
$("#main-nav a, .btn, .btn-main").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top - 0,
    });
  }
});

// Current Links Navbar
$(document).ready(function () {
  $("#main-nav .nav-content ul li").click(function () {
    $("li").removeClass("current");
    $(this).addClass("current");
  });
});

// Isotope
$(".products").isotope({
  itemSelector: ".card",
  layoutMode: "masonry",
});

// Active Link & Data Filter
$(".products-links ul li a").click(function () {
  $(".products-links ul li a").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".products").isotope({
    filter: selector,
  });
  return false;
});

// Section C: Team Hide
$(document).ready(function () {
  $(".brad, .jane, .david").hide();
  $(".link-alice").click(function () {
    $(".brad, .jane, .david").hide();
    $(".alice").show();
  });
  $(".link-brad").click(function () {
    $(".alice, .jane, .david").hide();
    $(".brad").show();
  });
  $(".link-jane").click(function () {
    $(".alice, .brad, .david").hide();
    $(".jane").show();
  });
  $(".link-david").click(function () {
    $(".alice, .brad, .jane").hide();
    $(".david").show();
  });
});

// UP-Button
var btn = $(".btn-up");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
