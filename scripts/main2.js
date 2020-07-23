let name = 'Sebastian';
let name2 = name;

console.log('name', name);
console.log('name2', name2);

name = 'Bruno Sánchez'
console.log('name', name);
console.log('name2', name2);



let obj1 = {
    name: 'Bruno Sánchez'
}

let obj2 = Object.assign({},obj1) ;

console.log('obj1',obj1)
console.log('obj2',obj2)

obj1.name = 'Jose Luis'
console.log('obj1',obj1)
console.log('obj2',obj2)