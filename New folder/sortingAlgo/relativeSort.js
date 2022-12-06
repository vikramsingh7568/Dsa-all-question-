
let arr1 = [2,3,1,3,2,4,6,7,9,2,19]; 
let arr2 = [2,1,4,3,9,6]; 

const relativeSort = (arr1,arr2) => {
    
    const hash = new Array(1001).fill(0);
    
    for(let i =0;i<arr1.length;i++)
    {
        hash[arr1[i]]++;
    }
    
    let indexSortedArray = 0;
    for(let i =0;i<arr2.length;i++){
        
        while(hash[arr2[i]] > 0) //100*n
        {
            arr1[indexSortedArray] = arr2[i];
            indexSortedArray++;
            hash[arr2[i]]--;
        }
    }
    
    for(i=0;i<1001;i++) //hash array 
    {
        while(hash[i]>0) 
      {  
          arr1[indexSortedArray] = i;
          hash[i]--;
          indexSortedArray++
      }
    }
    return arr1;
}

console.log(relativeSort(arr1, arr2));
