/**
 * Prints a reversed triangle pattern of asterisks.
 * @param {*} n - The height of the triangle.
 */
const printReversedTriangleExample1 = (n) =>{
    for (let i=0; i<n; i++){
        let row ='';
        for(let j=0; j<n-i; j++){
            row+='*';
        }
        console.log(row)
    }
}
printReversedTriangleExample1(10);

/**
 * Prints a reversed triangle pattern of asterisks.
 * @param {*} n - The height of the triangle.
 */
const printReversedTriangleExample2 = (n) =>{
    for (let i=0; i<n; i++){
        const row = new Array(n-i).fill('*').join('');
        console.log(row)
    }
}
printReversedTriangleExample2(10);

/**
 * Prints a reversed triangle pattern of numbers.
 * @param {*} n - The height of the triangle.
 */
const printReversedTriangleNumbers = (n) =>{
    for (let i=0; i<n; i++){
        let row = '';
        for (let j=0; j<n-i; j++){
            row+=j+1;
        }
        console.log(row)
    }
}
printReversedTriangleNumbers(10);


// Example : 1
/**
 * Prints a right-aligned triangle pattern of spaces and asterisks.
 * @param {*} n - The height of the triangle.
 */
const printStartTraingle = (n)=>{
    for (let i=0; i<n; i++){
        let row =''
        for(let j=0; j<n-i-1; j++){
            row+=' ';   
        }
        for(let k=0; k<2*i+1; k++){
            row+='*';
        }
        console.log(row)
    }
}
printStartTraingle(4);

// Example : 2
// for the above example we can do like this also by using repeat method to add spaces. 
const printStarTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(n - i - 1); // Create a string of spaces
        const stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }
};

printStarTriangle(4);

/**
 * Prints a reversed triangle pattern of spaces and asterisks.
 * @param {*} n - The height of the triangle.
 */
const printReverseTraingle = (n)=>{
    for (let i=0; i<=n; i++){
        let row =''
        for(let j=0; j<i; j++){
            row+=' ';   
        }
        for(let k=0; k<2*n - (2*i+1); k++){
            row+='*';
        }
        console.log(row)
        
    }
}
printReverseTraingle(4)

const printDaimond = (n)=>{
    printStarTriangle(n)
    printReverseTraingle(n)
}
printDaimond(4);