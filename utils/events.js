import displayProfils from "./displayProfils.js"

const btnDiv = document.querySelector('.btn-container')

export default btnDiv.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    displayProfils(page[index])
})

