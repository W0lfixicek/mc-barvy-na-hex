const minecraftColors = {
    darkred: "#aa0000",
    red: "#ff5555",
    orange: "#ffaa00",
    yellow: "#ffff55",
    darkgreen: "#00aa00",
    green: "#55ff55",
    darkaqua: "#00aaaa",
    aqua: "#55ffff",
    darkblue: "#0000aa",
    blue: "#5555ff",
    purple: "#aa00aa",
    pink: "#ff55ff",
    white: "#ffffff",
    gray: "#aaaaaa",
    darkgray: "#555555",
    black: "#000000",
};

function minecraftColorToHex(minecraftColor) {
    return minecraftColors[minecraftColor.toLowerCase()] || "#FFFFFF";
}

function hexToMinecraftColor(hexColor) {
    const invertedColors = Object.fromEntries(Object.entries(minecraftColors).map(([key, value]) => [value, key]));
    return invertedColors[hexColor.toUpperCase()] || "White";
}

function updateColorDisplay() {
    const minecraftColorSelect = document.getElementById("minecraftColorSelect");
    const selectedColor = minecraftColorSelect.value;

    const hexCodeDisplay = document.getElementById("hexCodeDisplay");
    hexCodeDisplay.value = minecraftColorToHex(selectedColor);

    const hexColor = hexCodeDisplay.value;
    const minecraftColor = hexToMinecraftColor(hexColor);

    const colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.style.backgroundColor = hexColor;

    const minecraftColorDisplay = document.getElementById("minecraftColorDisplay");
    minecraftColorDisplay.textContent = `Minecraft barva: ${minecraftColor}`;
}
document.getElementById("minecraftColorSelect").addEventListener("change", updateColorDisplay);
document.getElementById("hexCodeDisplay").addEventListener("input", updateColorDisplay);
updateColorDisplay();
