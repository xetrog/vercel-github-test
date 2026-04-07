window.addEventListener("DOMContentLoaded", () => {
  const statusEl = document.getElementById("status");
  const btn = document.getElementById("btn");

  if (!statusEl || !btn) {
    console.error("Missing #status or #btn in the page");
    return;
  }

  statusEl.textContent = "Connected";

  btn.addEventListener("click", () => {
    const now = new Date().toLocaleString();
    statusEl.textContent = `Button clicked at ${now}`;
    console.log("Button click worked");
  });
});
