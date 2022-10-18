const form = document.querySelector('#formu');
form.addEventListener('submit', validarForm);

function validarForm(event){
    event.preventDefault();
    /*tomar los datos ingresados*/
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const mail = document.querySelector("#mail").value;
    const cantidad = document.querySelector("#cantidad").value;
    const categoria = document.querySelector("#categoria").value;
    
    
    
    /*descuentos*/
    const ticket = 200;

    let precio = ticket*cantidad;
    let desc = 0;
    switch(categoria){
        case 'estudiante': 
            desc = precio*0.8;
            break;
        case "trainee":
            desc = precio*0.5;
            break;
        case "junior":
            desc = precio*0.15;
            break;
    }
    
    let total = precio-desc;

    
    
    const mostrar = document.getElementById("azul");
    mostrar.textContent = "Total a Pagar: $"+ total;

  
}

function borrar(){
    const mostrar = document.getElementById("azul");
    mostrar.textContent = "Total a Pagar: $0";
}


