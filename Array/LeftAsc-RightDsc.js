
// Approach 1

function AscDsc(arr){

    let mid = Math.floor(arr.length/2)
    let leftSide = arr.slice(0,mid).sort((a,b)=>a-b)

    let rightSide = arr.slice(mid).sort((a,b)=>b-a)

    return leftSide.concat(rightSide)
} 

console.log(AscDsc([1,2,3,4,5,6,7,8]));

// Complexity is O(nlog n)T and O(n)S
