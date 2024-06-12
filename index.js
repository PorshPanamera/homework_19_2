const link = document.getElementById("js_btn");
link.addEventListener("click", function () {
  let url = document.getElementById("urlInput").value.trim();

  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  window.location.href = url;
});
