/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const n = nums.length;
    const mp = new Map();
    for(const num of nums){
        if (mp.has(num)) mp.set(num, mp.get(num)+1);
        else mp.set(num, 1);
    }
    const np = new Map();
    for(let i=0;i<n+1;i++){
        np.set(i, []);
    }
    for(const [key, val] of mp){
        let value = np.get(val);
        console.log(value, val, key)
        if(value && value?.length) np.set(val, [...value, key])
        else np.set(val, [key])
    }


    let ans = [];
    console.log(np, mp);
    for(let i=n+1; i>=0;i--){
        let value = np.get(i);
        if(value && value?.length  && k > 0) {
            ans.push(...value);
            k = k - value.length;
        }
    }

    return ans;
};