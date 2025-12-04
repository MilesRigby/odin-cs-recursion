function mrgSort(arr) {
    // Base case - if length is 1, list is already sorted
    if (arr.length <= 1) { return arr; }

    // Otherwise, we need to split the array into two halves, sort the halves, then merge
    else {
        // Solve the two halves
        let leftHalf  = mrgSort(arr.slice(0                        , Math.floor(arr.length/2)));
        let rightHalf = mrgSort(arr.slice(Math.floor(arr.length/2)));

        // Merge the halves
        let merged = [];
        let l = 0;
        let r = 0;

        while ( true ) {

            // Add largest element to new list, and increment relevant position
            if ( leftHalf[l] < rightHalf[r] ) { merged.push(leftHalf[l++]); }
            else                              { merged.push(rightHalf[r++]); }

            // If there are no more items in one side, concatenate the whole other side onto the end of the merged list
            if ( l >= leftHalf.length ) { return merged.concat(rightHalf.slice(r)); }
            if ( r >= rightHalf.length ) { return merged.concat(leftHalf.slice(l)); }

        }
    }
}