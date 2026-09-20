/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1,2,3,{a:5}]
// console.log(...array)

const shallowArraycopy = [...array,4,5,6]
array[3].a = 555
// console.log(shallowArraycopy)

const obj = {
    name: "Laura",
    age: 26
}
const shallowObjCopy = {...obj, dogNma:"Tim"}
console.log(shallowObjCopy)

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.
const shallowObjCopy2 = {...obj, name:"Anna", age:99}
console.log(shallowObjCopy2)


// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."
const strCoppyArray = [...str]
console.log(strCoppyArray)
