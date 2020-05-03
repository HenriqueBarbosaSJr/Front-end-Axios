//import api from '../html/services/api';



// Referencias do HTML

const formDados = document.getElementById('frmdados');
const inputUser = document.getElementById('impName');
const btnConst = document.getElementById('btnConst');
const btnCad = document.getElementById('btnCad');


btnConst.onclick = function(){
    
    axios({
        method: 'GET',
        url: 'http://localhost:3333/users'
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))

};

btnCad.onclick = function(){
    console.log('Botão Cadastro')
    var nameUser = inputUser.value;
    axios({
        method: 'POST',
        url: 'http://localhost:3333/users',
        data: {
            "username": nameUser,
        }
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))

};