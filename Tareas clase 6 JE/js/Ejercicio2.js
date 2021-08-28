
function ObtenerDatos(){
   let NumeroTablas= document.getElementById('Numero').value;   
   console.log(NumeroTablas);

function sumar(Numerito){  
    var html=""; 
for(i=0;i<=10;i++){
let aux= 
`<tr>
<td>${i}</td>
<td>+</td>
<td>${Numerito}</td>
<td>=</td>
<td>${parseFloat(i)+parseFloat(Numerito)}</td>
</tr>
`
html=html+aux;
}
return html;
}

function restar(Numerito){  
    var html=""; 
for(i=Numerito;i<=parseFloat(Numerito)+10;i++){
let aux= 
`<tr>
<td>${i}</td>
<td>-</td>
<td>${Numerito}</td>
<td>=</td>
<td>${parseFloat(i)-parseFloat(Numerito)}</td>
</tr>
`
html=html+aux;
}
return html;
}

function multiplicar(Numerito){  
    var html=""; 
for(i=0;i<=10;i++){
let aux= 
`<tr>
<td>${i}</td>
<td>*</td>
<td>${Numerito}</td>
<td>=</td>
<td>${parseFloat(i)*parseFloat(Numerito)}</td>
</tr>
`
html=html+aux;
}
return html;
}

function dividir(Numerito){  
    var html=""; 
for(i=0;i<=parseFloat(Numerito)*10;i=i+parseFloat(Numerito)){
let aux= 
`<tr>
<td>${i}</td>
<td>÷</td>
<td>${Numerito}</td>
<td>=</td>
<td>${parseFloat(i)/parseFloat(Numerito)}</td>
</tr>
`
html=html+aux;
}
return html;
}

   let html=
   `
   <div class="container">
   <div class="alert alert-primary" ><h1 style="text-align: center;">Tablas del ${NumeroTablas}</h1></div>
   <div class="row">
   <div class= "col col-12, p-3 mb-2 bg-info text-white"><b><h4>Tabla de Sumar</b><table>${sumar(NumeroTablas)}</table></div>
   <div class= "col col-12, p-3 mb-2 bg-danger text-white"><b><h4>Tabla de Restar</b><table>${restar(NumeroTablas)}</table></div>
   <div class= "col col-12,p-3 mb-2 bg-light text-dark"><b><h4>Tabla de Multiplicar</b><table>${multiplicar(NumeroTablas)}</table></div>
   <div class= "col col-12, p-3 mb-2 bg-warning text-dark"><b><h4>Tabla de Dividir</b><table>${dividir(NumeroTablas)}</table></div>
   </div>
   </div>`

   const contenedor= document.querySelector("#tablas");
   contenedor.innerHTML = html;
}

