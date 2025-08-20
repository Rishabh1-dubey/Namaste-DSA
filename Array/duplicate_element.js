const arr =[1,2,3,4,5,5,5,6,7]
 const val =5
const removeElement = function(arr,val){
    let x =0;
    for(let i =0; i<arr.length;i++){
        if(arr[i] !==val){
            arr[x]= arr[i]
            x=x+1
        }
    }
     return x+1
}
console.log(removeElement(arr,val))