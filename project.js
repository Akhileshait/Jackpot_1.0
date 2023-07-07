// 1. Deposit some money
// 2. Determine no of line he is betting
// 3. collect a bet amount
// 4. spin the slot machine
// 6. give the user their winning
// 7. play again 

const prompt=require("prompt-sync")();

const rows=3;
const cols=3;

const symbols_ct={
    "A":2,
    "B":4,
    "C":6,
    "D":8
}

const symbol_val={
    "A":5,
    "B":4,
    "C":3,
    "D":2
}

const deposit=()=>{
    while (true) {
        const depositAmount=prompt("Enter a deposit amount: ");
        const dAmount=parseFloat(depositAmount);
    
        if (isNaN(dAmount) || dAmount<=0){
            console.log("Invalid Deposit Amount!! Try Again");
        }else{
            return dAmount;
        }
    }
}

const getLines=()=>{
    while (true) {
        const lines=prompt("Enter the number of lines you want to bet on (1-3): ");
        const noflines=parseFloat(lines);
    
        if (isNaN(noflines) || noflines<=0 || noflines>3){
            console.log("Invalid Deposit Amount!! Try Again");
        }else{
            return noflines;
        }
    }
}

const getBet=(balance, lines)=>{
    while (true) {
        const bet=prompt("Enter the bet per line: ");
        const betAmt=parseFloat(bet);
    
        if (isNaN(betAmt) || betAmt<=0 || betAmt*lines>balance){
            console.log("Invalid Deposit Amount!! Try Again");
        }else{
            return betAmt;
        }
    }
}

const spin=()=>{
    const symbols=[];
    for (const [key, val] of Object.entries(symbols_ct)) {
        for (let i = 0; i < val; i++) {
            symbols.push(key);
            
        }
    }
    const reels=[[], [], []];
    for (let i = 0; i < cols; i++) {
        const reels_sym=[...symbols];
        for (let j = 0; j < rows; j++) {
            const randomInd=Math.floor(Math.random()*reels_sym.length);
            const selectedSymbol=reels_sym[randomInd];
            reels[i].push(selectedSymbol);
            reels_sym.splice(randomInd, 1);
            
        }
        
    }
    return reels;
}


const print=(reels)=>{
    for (let i = 0; i < rows; i++) {
        let rowStr="| ";
        for (const colm of reels) {
            rowStr+=colm[i]
            rowStr+=" | "
        }
        console.log(rowStr);
    }
}



const reels=spin();
console.log(reels);
let balance=deposit();
const lines=getLines();
const bet=getBet(balance, lines);
print(reels)