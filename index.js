document.getElementById("fetch-scheme").addEventListener("click", () => {
  const selectedColor = document
    .getElementById("color-picker")
    .value.substring(1);

  const schemeType = document.getElementById("scheme-options").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${schemeType}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const schemeDisplay = document.getElementById("color-scheme-display");
      schemeDisplay.innerHTML = "";

      const colorCodeDisplay = document.getElementById("footer-content");
      colorCodeDisplay.innerHTML = "";

      data.colors.forEach((color) => {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("color-block");
        colorDiv.style.backgroundColor = color.hex.value;
        schemeDisplay.appendChild(colorDiv);

        const colorCode = document.createElement("div");
        colorCode.classList.add("color-code");
        colorCode.textContent = color.hex.value;
        colorCodeDisplay.appendChild(colorCode);
      });
    });
});
