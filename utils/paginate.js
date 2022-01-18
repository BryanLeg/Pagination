const paginate = (profils) => {
    const profilsPerPages = 9;
    const pages = Math.ceil(profils.length / profilsPerPages);
    const newProfils = Array.from({ length: pages }, (_, index) => {
        const start = index * profilsPerPages;
        const end = start + profilsPerPages;
        return profils.slice(start, end);
    })
    return (newProfils)
}

export default paginate;