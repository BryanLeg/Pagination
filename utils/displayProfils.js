const container = document.querySelector('.container');

const displayprofils = async (profils) => {
    const profil = profils.map((profil) => {
        const { login: name } = profil;
        const { avatar_url: image } = profil;
        const { html_url: lien } = profil;
        return `<article class="card"><img src="${image}" alt="${name}" /><h4>${name}</h4><a class="btn" href="${lien}">view profil</a></article>`
    }).join('');
    container.innerHTML = profil;
};

export default displayprofils;