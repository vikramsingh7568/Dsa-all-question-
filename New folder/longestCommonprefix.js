var longestCommonPrefix = function(a) {
    let size = a.length-1;
        /* if size is 0, return empty string */
        if (size == 0)
            return "";
   
        if (size == 1)
            return a[0];
   
        /* sort the array of strings */
        a.sort();
    // console.log(a)
        /* find the minimum length from first and last string */
        let end = Math.min(a[0].length, a[size].length);
                console.log(end) 
        /* find the common prefix between the first and
           last string */
        let i = 0;
        while (i < end && a[0][i] == a[size][i] ){
            i++;
}
        let pre = a[0].substring(0, i);
         
        return pre;
    }
    let strs = ["flllower","flllow","fllllight"]
    console.log(longestCommonPrefix(strs))