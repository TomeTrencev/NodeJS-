console.log("Zdravo Svetlana");

const numberVariable = 12;
const stringVaribale = "nekoj si text";
const booleanVariable = false;
const undefinedVariable = undefined;
const zeroValue = 0;
const nullValue= null;

const niza = [1, 2, false , true, "pero", stringVaribale];

const someObject = {
    kakvoSakamime: booleanVariable
};

const randomStudent = {
    name:"Kojcin",
    hometown:"od Kochista",
    nickname:"so golemite ocista"
}

const allStudents = [randomStudent];




function oldFunction (argumentOne, argumentTwo){
    return  argumentOne+argumentTwo;
};


const newFunctionExpicit = (argumentOne, argumentTwo) =>{
    return argumentOne + argumentTwo;
};

const newFunctionImplicit = (argumentOne, argumentTwo) => argumentOne + argumentTwo; 

// console.log( oldFunction(15,79));

// console.log( newFunction(1,"1"));


// console.log( niza.map((element)=> element+1));

const arrayOfObjects = [
    {
        name:"Petko",
        hasCar:false,
    },
    {
        name:"Rajko",
        hasCar:false,
    },
    {
        name:"Stojna",
        hasCar:false,
    },
    {
        name:"Vesemir",
        hasCar:true,
    },
    {
        name:"Marija",
        hasCar:true,
    },
    {
        name:"Martin",
        hasCar:true,
    },
    {
        name:"Trajce",
        hasCar:false,
    },
    {
        name:"Stojmir",
        hasCar:false,
    },
];

// console.log( arrayOfObjects.find((person)=> person.name ==="Trajce"));

console.log( arrayOfObjects.filter((element)=>element.hasCar !==false));

niza.find((element)=>element ===false);
