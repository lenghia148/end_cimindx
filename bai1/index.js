const myArray = [2, 3, -5, -2, 4]
let max =0 
const adjacentElementsProduct=(inputArray)=>
{
    
    for (let i =0;i<inputArray.length;i++)
    {   
        let maxArray = inputArray[i]*inputArray[i+1]
        if( maxArray> max)
        {
            max = maxArray
        }
    }
    return max
}

console.log(adjacentElementsProduct(myArray));
