function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    let qtdEnrtada = document.getElementById('qdt');

    if (isNaN(qtd) || qtd <=0 ){
        
        alert('Digite uma quantidade Válida');
        limparQtd();                         

        return;
    }    
        if (tipo.value == 'pista'){
                comprarPista(qtd);

        }else if(tipo.value =='superior'){
                comprarSuperior(qtd);
        }else{
                comprarInferior(qtd);
        }   
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista){
        alert('Quantidade indisponivel para o tipo de pista');
    }else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra relalizada com sucesso');
        qtd=0;
        limparQtd();
    }               
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior){
        alert('Quantidade indisponivel para o tipo de pista');
    }else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra relalizada com sucesso');
        qtd = 0;
        limparQtd();
    }
}
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior){
        alert('Quantidade indisponivel para o tipo de pista');
    }else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra relalizada com sucesso');
        qtd = 0;
        limparQtd();
    }
}
function limparQtd(){
    document.getElementById('qtd').value = '';
}