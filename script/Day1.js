//Arrays
var arr = [1,2,3,4,5];
console.log(arr);
//shift() - Left shifts all elements by 1
arr.shift();
console.log(arr);
//unshift() - Inserts a element to first pos
arr.unshift(1);
console.log(arr);
//pop() - Deletes first element
arr.pop();
console.log(arr);
//push() - Inserts a element to last pos
arr.push(4);
console.log(arr);

//Loops in array
//For
console.log("By for")
var arr1 = [5,6,1,7,3,8,2,6];
for(let i=0;i<arr1.length;i++){
        console.log(`Ele-${arr1[i]} index-${i} - arr-${arr1}`);
}
console.log("By for-each")
//Foreach
arr1.forEach((ele,ind,arr1)=>{
    console.log(`Ele-${ele} index-${ind} - arr-${arr1}`)
})

//Misc
var arr2 = [2,6,1,5,4,9];
//Splice(start,deletecount,insertions) - Deletes and inserts from the start index
arr2.splice(0,3,7,9);
console.log(arr2);
//splice(start,end) - Splices elements from start to end-1
var arr3 = [2,6,1,5,4,9];
var ex = arr3.slice(1,4);
console.log(ex);

//Some Prototypes
//Foreach is similar to these but it doesn't return 
//Map() - returns the array elements to another one
const newarr1 = arr1.map((ele,ind,arr)=>{
    return ele*2;
});
console.log(newarr1);
//Filter() - returns the condition elements
const newarr2 = arr2.filter((ele,ind,arr)=>{
    return ele>6;
});
console.log(newarr2);
//Reduce() - returns & stores some values
//Accumulator is a variable that can be assigned
const newarr3 = arr3.reduce((acc,ele,ind,arr)=>{
    return acc+ele;
},0);
console.log(newarr3);