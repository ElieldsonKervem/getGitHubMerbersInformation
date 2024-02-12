import fetchGit from './gitDatas.js';
const tbody = document.querySelector('tbody')
const inputValue = document.querySelector('input')
const subbtn = document.querySelector('.subbtn')

async function verifyChanges() {
    subbtn.addEventListener('click', async (e) => {
        const valorInput = inputValue.value;
     
        try {
            const resultado = JSON.parse(await fetchGit(valorInput));
       
            refresTbody(resultado); // Passando os dados do usuário para a função refresTbody
        } catch (error) {
            console.error(error);
        }
    });
}

function refresTbody(resultado) {
    // essa funcção recebe um objeto e cria um elemento tr com os dados do objeto
    const content = `<tr>
        <td class="userData">
        
            <img src="${resultado.avatar_url}" alt="" class="userImg">
            <span class="userNameData">${resultado.login}</span>
        </td>
        <td class="userRep">
            ${resultado.public_repos}
        </td>
        <td class="userFollowrs">
            ${resultado.followers}
        </td>
        <td>
            <button id="deletFollows">*</button>
        </td>
    </tr>`;
    tbody.innerHTML += content;
}

function input() {
    inputValue.addEventListener("focusout", (e) => {
        return e.target.value;
    });
}

export default verifyChanges;
