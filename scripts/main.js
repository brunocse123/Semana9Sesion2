/*
For

*/
console.log('-----------  For Numero  ------------')
const numbers = [0, 1, 2, 3, 4];
let suma = 0;

const alumnos = [
  {
    name: "Bruno",
    lastname: "Sánchez",
    age: 33,
  },
  {
    name: "Wendy",
    lastname: "Flores",
    age: 23,
  },
  {
    name: "Mariella",
    lastname: "Salazar",
    age: 34,
  },
];

for (let index = 0; index < numbers.length; index++) {
  console.log(index);
  suma = suma + index;
}
console.log(suma);

console.log('-----------  For Objeto  ------------')
function imprimirAlumnos(alumno) {
  console.log(alumno);
}
for (let alumno = 0; alumno < alumnos.length; alumno++) {
  imprimirAlumnos(alumnos[alumno]);
}
console.log('-----------  While  ------------')
/*
While
*/

let n = 0;
while (n < 3) {
  n++;
  console.log("ejecuta", n);
}
console.log('-----------  DoWhile  ------------')
/*
Do While
*/
let m = 11;
do {
  n++;
  console.log("Esto es ejecutara aunque sea una vez!");
} while (m < 11);

console.log('-----------  Break  ------------')
/**
 * Break
 */

for (let index = 0; index < 20; index++) {
    console.log('Index=', index)
    if (index===2) {
        break;
    }
}
console.log('-----------  Continue  ------------')
/**
 * Loops Continue
 */
for (let index = 0; index < 6; index++) {
    if (index<3) {   
        continue;
    }
    console.log('Index=', index)
}

/**
 * For In
 */
console.log('-----------  For In  ------------')

const usuario = 
    {
        name: "Bruno",
        lastname: "Sánchez",
        age: 33,
        sexo: 'M',
        getName: function(){
            return `Mi nombre es ${this.name} ${this.lastname}`
        }
    }

for (const key in usuario) {
    console.log('key=', key)
    console.log('key=', usuario[key])
}
console.log('-----------  For Objects  ------------')

const usuarios = 
[
    {
        name: "Bruno",
        lastname: "Sánchez",
        age: 33,
        sexo: 'M',
        getName: function(){
            return `Mi nombre es ${this.name} ${this.lastname}`
        }
    },
    {
        name: "Wendy",
        lastname: "Flores",
        age: 33,
        sexo: 'M',
        getName: function(){
            return `Mi nombre es ${this.name} ${this.lastname}`
        }
    }
]

for (let index = 0; index < usuarios.length; index++) {
    console.log('Objeto', usuarios[index])    
}

for (const iterator of usuarios) {
    console.log('Objeto', iterator)
}