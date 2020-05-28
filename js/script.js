//import api from '../html/services/api';



// Referências do HTML

const formDados = document.getElementById('frmdados');
const inputUser = document.getElementById('inpName');
const inpId = document.getElementById('inpId');
const btnConst = document.getElementById('btnConst');
const btnConstId = document.getElementById("btnConstId");
const btnCad = document.getElementById('btnCad');
const btnUpdate = document.getElementById('btnUpdate');
const btndel = document.getElementById('btndel');


btnConst.onclick = function(){
    
    axios({
        method: 'GET',
        url: 'http://192.168.25.18:3333/users'
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))

};

btnConstId.onclick = function(){
    console.log('Botão consulta por Id');
    var constId = inpId.value;
    console.log(constId);
    if (constId == ''){
        alert('Digite um id para realizar a consulta ');
    }else{
        axios({
            method: 'get',
            url: 'http://192.168.25.18:3333/user/' + constId,
        }).then(res => {
            if (res.data == '') {
                alert( 'registro não encontrado ');
            }else{
                const  [ data ]  = (res.data);
                inpName.value =  data.username;
                console.log(data.username);
            }
    
        }).catch(err => console.log(err));

    }
};

btnCad.onclick = function(){
    console.log('Botão Cadastro exercutado')
    var nameUser = inputUser.value;
    axios({
        method: 'POST',
        url: 'http://192.168.25.18:3333/users',
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
        url: 'http://192.168.25.18:3333/users/' + idupdate,
        data: {
            "username": nameUser,
        }
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))

};

btndel.onclick = function(){
    console.log('Botão Deltele executado')
    var nameUser = inputUser.value;
    var iddel = inpId.value;
    axios({
        method: 'delete',
        url: 'http://192.168.25.18:3333/users/' + iddel,
     
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))
};

