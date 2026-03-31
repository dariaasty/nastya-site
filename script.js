const toggleButton = document.querySelector("#theme-toggle");

toggleButton?.addEventListener("click", () => {
  const body = document.body;
  const nextTheme =
    body.dataset.theme === "evening" ? "daylight" : "evening";

  body.dataset.theme = nextTheme;
});
