let arr = [123,4,2344,56,7,8]
 let largest =  -Infinity
 let second  = -Infinity
   for (i = 0;i<arr.length;i++){
            if (arr[i]>largest){
                largest = arr[i];
            }
        }
   
        // Now find the second largest element
        for (i = 0 ;i<arr.length;i++){
            if (arr[i]>second && arr[i]<largest){
                second = arr[i];
            }
        }
  
  console.log(largest,second)