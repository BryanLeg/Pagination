const displayButtons = (container, btnNumber, pageIndex) => {
    const btns = btnNumber.map((_, index) => {
        return `<button class="page-btn ${pageIndex == index ? "active-btn" : ""}" data-index="${index}">${index + 1}</button>`;
    });
    container.innerHTML = `<button class="prev-btn">prev</button>${btns.join('')}<button class="next-btn">next</button>`;
}

export default displayButtons;