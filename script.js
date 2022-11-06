var form = document.querySelector("form"); //querySelector aqui está sendo usado para "puxar" as informações do form do html

form.addEventListener("submit", function(evento){
    evento.preventDefault(); //Previnir da pagina não ficar atualizando sempre

    for(var i=0; i < this.elements.length; i++){ //O form do html possui 3 elementos (email, password e botão), então aqui percorremos esses elementos para a verificação
        var item = this.elements[i];


        if(item.type !== "submit" && item.value == ""){ //o botão não entra na alteração, somente inputs que estão vazios
                item.classList.add('error'); //adicionando uma nova classe ao elemento vazio, que está definida no css 
        }
        if(item.type !== "submit" && item.value !== ""){ //Conferindo se o campo está preenchido
            item.classList.remove('error'); //removendo a classe erro do elemento quando é preenchido
    }
    }
})