fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${schemeType}&count=5`)
    .then(res => {
        console.log("Response status:", res.status);
        return res.json();
    })
    .then(data => {
        console.log("Data received:", data);
        if (data && data.colors) { // Verify the data has colors
            const schemeDisplay = document.getElementById("color-scheme-display");
            schemeDisplay.innerHTML = "";
            
            const colorCodeDisplay = document.getElementById("footer-content");
            colorCodeDisplay.innerHTML = "";
            
            data.colors.forEach(color => {
                const colorDiv = document.createElement("div");
                colorDiv.classList.add("color-block");
                colorDiv.style.backgroundColor = color.hex.value;
                schemeDisplay.appendChild(colorDiv);
                
                const colorCode = document.createElement("div");
                colorCode.classList.add("color-code");
                colorCode.textContent = color.hex.value;
                colorCodeDisplay.appendChild(colorCode);
            });
        } else {
            console.log("Unexpected data format:", data);
        }
    })
    .catch(error => {
        console.error("Error fetching color scheme:", error);
        alert("Failed to retrieve color scheme. Please try again later.");
    });
