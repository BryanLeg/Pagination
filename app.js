import getProfils from './utils/getProfils.js'
import displayProfils from './utils/displayProfils.js'
import paginate from './utils/paginate.js';
import displayButtons from './utils/displayButtons.js';

const title = document.querySelector('.section-title');
const btnDiv = document.querySelector('.btn-container')
let index = 0;
let page = [];
console.log(title);

const showProfils = async (index) => {
    title.innerHTML = "<h1>pagination</h1><div class='underline'></div>";
    const profils = await getProfils();
    page = paginate(profils);
    displayProfils(page[index]);
    displayButtons(btnDiv, page, index)
}


window.addEventListener('DOMcontentLoaded', showProfils(index))

window.addEventListener('DOMcontentLoaded', function () {
})

btnDiv.addEventListener('click', (e) => {
    const newIndex = e.target.dataset.index;
    if (newIndex) {
        index = newIndex;
        showProfils(index);
    } else if (e.target.classList.contains('prev-btn') && index > 0) {
        index--;
        showProfils(index)
    } else if (e.target.classList.contains('next-btn') && index < page.length - 1) {
        index++;
        showProfils(index)
    }
})

