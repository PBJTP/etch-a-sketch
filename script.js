function drawGrid() {
    for (i = 0; i < 16; i++) {
        let pixel = document.createElement('div');
        pixel.className = "pixel";
        gridContainer.appendChild(pixel);
    }
}

drawGrid();