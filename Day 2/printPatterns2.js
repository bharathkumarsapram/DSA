const printHalfDaimondStar = (n) => {
    for (let i = 0; i <= 2 * n - 1; i++) {
        let row = '';
        let stars = i;
        if (i > n) stars = 2 * n - i
        for (let j = 0; j < stars; j++) {
            row += '*'
        }
        console.log(row)
    }
}
printHalfDaimondStar(10);

const printBrinaryTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += (i + j) % 2 === 0 ? 1 : 0;
        }
        console.log(row);
    }
}
printBrinaryTriangle(10);

const returnNumberCrown = (n) => {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < 2 * n; j++) {
            if (j <= i && j < n) {
                row += j + 1;
            } else if (j > n - 1 && 2 * n - j - 1 <= i) {
                row += 2 * n - j;
            }
            else {
                row += ' '
            }
        }
        console.log(row)
    }
}
returnNumberCrown(4)

const returnNumberTriangle2 = (n) => {
    for (let i = 1; i < n; i++) {
        const space = 2 * n - 2 * (i + 1);
        let row = '';
        //number 
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        //spaces
        for (let l = 0; l < space; l++) {
            row += ' ';
        }
        //numbers
        for (let k = i; k >= 1; k--) {
            row += k;
        }
        console.log(row)
    }
}
returnNumberTriangle2(5)

const returnNumberTriangle = (n) => {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        let row = '';
        // numbers
        for (let j = 1; j <= i; j++) {
            row += num + ' ';
            num = num + 1;
        }
        console.log(row)
    }
}
returnNumberTriangle(5);

const printAlphabetTriangle = (n) => {
    const char = 65;
    for (let i = 0; i <= n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(char + j);
        }
        console.log(row)
    }
}
printAlphabetTriangle(5);

const printReverseAlphabetTriangle = (n) => {
    const char = 65;
    for (let i = 0; i <= n; i++) {
        let row = '';
        for (let j = 0; j <= n-i; j++) {
            row += String.fromCharCode(char + j);
        }
        console.log(row)
    }
}
printAlphabetTriangle(5);

const printAlphabetRamp = (n) => {
    const char = 65;
    for (let i = 0; i <= n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(char + i);
        }
        console.log(row)
    }
}
printAlphabetRamp(5);

const printAlphabetPyramid = (n) => {
    const char = 65;
    for (let i = 0; i <=n; i++) {
        let row = '';
        //spaces 
        for (let j=0; j<=n-i; j++) {
            row+=' '    
        }
        let x=0
        for (let k = 0; k<2*i+1; k++) {
            if(k<=(2*i+1)/2){
                x+=1
                row += String.fromCharCode(char + x-1);
            }else{
                x-=1
                row += String.fromCharCode(char + x-1);
            }
        }
        
        for (let l=0; l<=n-i; l++) {
            row+=' '    
        }
        console.log(row)
    }
}
printAlphabetPyramid(5);