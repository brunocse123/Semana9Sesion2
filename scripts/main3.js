let arraynumero = [1,2,3,4,5,6,7,8]

for (let index = 0; index < arraynumero.length; index++) {
    console.log('Número ' +index + '+2',index +2)    
}


let persona = {
    nombre: 'Bruno',
    apellido: 'Sánchez',
    edad: 14,
    dirección: 'Av. Javier Prado 2334',
    distrito: 'La Molina'
}

for (const key in persona) {
    persona.key = 'prueab'
    persona[key].nombre = 'Priueba'
    console.log('key=', persona[key])
}