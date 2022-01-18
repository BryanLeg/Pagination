const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const getProfils = async () => {
    try {
        const response = await fetch(url);
        const profils = await response.json();
        return profils;

    } catch (error) {
        console.log(error);
    }
}

export default getProfils;