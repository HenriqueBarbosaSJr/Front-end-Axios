//import api from '../html/services/api';



// Referencias do HTML

const formDados = document.getElementById('frmdados');
const inputUser = document.getElementById('inpName');
const inpId = document.getElementById('inpId');
const btnConst = document.getElementById('btnConst');
const btnCad = document.getElementById('btnCad');
const btnUpdate = document.getElementById('btnUpdate');
const btndel = document.getElementById('btndel');


btnConst.onclick = function(){
    
    axios({
        method: 'GET',
        url: 'http://localhost:3333/users'
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))

};

btnCad.onclick = function(){
    console.log('Botão Cadastro exercutado')
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

btnUpdate.onclick = function(){
    console.log('Botão Updade executado')
    var nameUser = inputUser.value;
    var idupdate = inpId.value;
    axios({
        method: 'put',
        url: 'http://localhost:3333/users/' + idupdate,
        data: {
            "username": nameUser,
        }
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))

};

btndel.onclick = function(){
    console.log('Botão Updade executado')
    var nameUser = inputUser.value;
    var iddel = inpId.value;
    axios({
        method: 'delete',
        url: 'http://localhost:3333/users/' + iddel,
     
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))
};

