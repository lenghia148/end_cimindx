const myArray =  [60, 40, 55, 75, 64]
let sumArray = []
let columeOne = 0;
let columeTwo = 0;
const alternatingSums=(inputArray)=>
{
    
    for (let i =0;i<inputArray.length; i++)
    {   
        if(i%2===0)
             {
                columeOne+=inputArray[i]
             }
        else {
                columeTwo+=inputArray[i]
             }     
    }
    sumArray.push(columeOne)
    sumArray.push(columeTwo)

    return sumArray
}

console.log(alternatingSums(myArray));
