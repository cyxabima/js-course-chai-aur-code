let isLog = true;
let Chances = 0
let totalChances = 10
while (isLog) {
    Chances++;
    console.log(`Chance remaining ${totalChances - Chances}`);
    
    if (Chances == totalChances) {
        console.log("Chances are over ");
        isLog = false;
    }


}