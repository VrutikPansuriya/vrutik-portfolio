(function () {
  document.querySelectorAll('img[data-loop-gif]').forEach(function (img) {
    var gifUrl = img.getAttribute('data-loop-gif');
    if (!gifUrl) return;
    var probe = new Image();
    probe.onload = function () { img.src = gifUrl; };
    probe.onerror = function () { /* Keep the supplied static project image. */ };
    probe.src = gifUrl;
  });
})();
