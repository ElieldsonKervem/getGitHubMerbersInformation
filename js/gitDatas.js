const fetchGit = async (user) => {
    return fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => {
            const valorData = JSON.stringify(data);
            return valorData;
        });
}

export default fetchGit;