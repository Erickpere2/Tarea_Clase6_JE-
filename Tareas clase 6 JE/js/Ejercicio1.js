

const EstudiantesDesarrollo =

{
    Curso: 'Desarrollo Web:',
    nom: 'Nombre',
    nota: 'Nota',
    Alumno1: {
        Nombre: 'Juan',
        Nota: '10'
    },
    Alumno2: {
        Nombre: 'Maria',
        Nota: '30'
    },
    Alumno3: {
        Nombre: 'Carlos',
        Nota: '20'
    },
    Alumno4: {
        Nombre: 'Karla',
        Nota: '40'
    }
}

const EstudiantesProgra =

{
    Curso: 'Programacion 2:',
    nom: 'Nombre',
    nota: 'Nota',
    Alumno1: {
        Nombre: 'Lili',
        Nota: '30'
    },
    Alumno2: {
        Nombre: 'Cleo',
        Nota: '40'
    },
    Alumno3: {
        Nombre: 'Pedro',
        Nota: '33'
    },
    Alumno4: {
        Nombre: 'Marco',
        Nota: '21'
    }
}

function ObtenerColor(Numero) {
    if (Numero <= 10) { return `<td style="color: red;">${Numero}</td>`} 
        else if (Numero <= 20 && Numero >= 11){return `<td style="color: green;">${Numero}</td>`}
        else {return `<td style="color: blue;">${Numero}</td>` }
}
const contenedor = document.querySelector('#principal');
const contenedor2 = document.querySelector('#principal2');

let html = ` <caption><b>Curso: Desarrollo Web</b></caption>
<table>
<tr>
<th>Nombre</th>
<th>Nota</th>
</tr>

<tr>
<td>${EstudiantesDesarrollo.Alumno1.Nombre}</td>
${ObtenerColor(EstudiantesDesarrollo.Alumno1.Nota)}
</tr>

<tr>
<td>${EstudiantesDesarrollo.Alumno2.Nombre}</td>
${ObtenerColor(EstudiantesDesarrollo.Alumno2.Nota)}
</tr>

<tr>
<td>${EstudiantesDesarrollo.Alumno3.Nombre}</td>
${ObtenerColor(EstudiantesDesarrollo.Alumno3.Nota)}
</tr>

<tr>
<td>${EstudiantesDesarrollo.Alumno4.Nombre}</td>
${ObtenerColor(EstudiantesDesarrollo.Alumno4.Nota)}
</tr>
</table>`

let html2= ` <br><br>

<caption><b>Curso: Programacion 2</b></caption>
<table>
<tr>
<th>Nombre</th>
<th> Nota</th>
</tr>

<tr>
<td>${EstudiantesProgra.Alumno1.Nombre}</td>
${ObtenerColor(EstudiantesProgra.Alumno1.Nota)}
</tr>

<tr>
<td>${EstudiantesProgra.Alumno2.Nombre}</td>
${ObtenerColor(EstudiantesProgra.Alumno2.Nota)}
</tr>

<tr>
<td>${EstudiantesProgra.Alumno3.Nombre}</td>
${ObtenerColor(EstudiantesProgra.Alumno3.Nota)}</td>
</tr>

<tr>
<td>${EstudiantesProgra.Alumno4.Nombre}</td>
${ObtenerColor(EstudiantesProgra.Alumno4.Nota)}
</tr>
</table>`

contenedor.innerHTML = html;
contenedor2.innerHTML = html2;
