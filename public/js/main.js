(function () {
  "use strict";

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".acc-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".acc-item");
      var open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      var icon = btn.querySelector(".acc-icon");
      if (icon) icon.textContent = open ? "–" : "+";
    });
  });

  var quotes = Array.prototype.slice.call(document.querySelectorAll(".quote"));
  if (!quotes.length) return;

  var index = quotes.findIndex(function (q) {
    return q.classList.contains("is-active");
  });
  if (index < 0) index = 0;

  var dotsWrap = document.querySelector(".dots");
  if (dotsWrap && !dotsWrap.children.length) {
    quotes.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Show testimonial " + (i + 1));
      if (i === index) b.classList.add("is-active");
      b.addEventListener("click", function () {
        show(i);
      });
      dotsWrap.appendChild(b);
    });
  }

  function show(next) {
    quotes[index].classList.remove("is-active");
    index = (next + quotes.length) % quotes.length;
    quotes[index].classList.add("is-active");
    if (dotsWrap) {
      Array.prototype.forEach.call(dotsWrap.children, function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });
    }
  }

  var prev = document.querySelector("[data-carousel-prev]");
  var next = document.querySelector("[data-carousel-next]");
  if (prev) prev.addEventListener("click", function () { show(index - 1); });
  if (next) next.addEventListener("click", function () { show(index + 1); });

  setInterval(function () {
    if (document.hidden) return;
    show(index + 1);
  }, 8000);
})();
