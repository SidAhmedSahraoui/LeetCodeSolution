/*const sol = (s) => {
    let a = s.substr(0,s.length/2)
    let b = s.substr(s.length/2)
    let ai = 0;
    let bj = 0;
    for(let i=0; i<= a.length; i++) {
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(a[i]) ) ai++;
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(b[i]) ) bj++;

    }
    if (ai === bj) return true;
    return false;
}

console.log(sol("abazdzaab"))
*/
/*
const grid = (m, n, memo={} ) => {
    
    const key = m + ',' + n;
    if (key in memo) return memo[key];

    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;
    
    memo[key] =  grid(m-1,n, memo) + grid(m, n-1, memo);
    return memo[key];
}

console.log(grid(1,1))
console.log(grid(2,3))
console.log(grid(3,2))
console.log(grid(3,3))
console.log(grid(900,900))
*/

/*const canSum = (target, numbers, memo={}) => {
    if(target in memo) return memo[target]
    if(target === 0) return true;
    if(target < 0) return false;
    for(let num of numbers) {
        const remainder = target - num;
        if(canSum(remainder, numbers, memo)) {
            memo[target] = true;
            return true
        }
    }
    memo[target] = false
    return false;
}

console.log(canSum(7, [2,3]))
console.log(canSum(7, [5,3,4,7]))
console.log(canSum(7, [2,4]))
console.log(canSum(7, [2,3,4,5]))
console.log(canSum(300, [7,14]))
*/
/*
const howSum = (tar, numbers, memo) => {
    
    if(tar in memo) return memo[tar];
    if(tar === 0) return [];
    if(tar < 0) return null;

    for(let num of numbers) {
        const rem = tar - num;
        const res = howSum(rem, numbers, memo);
        if(res !== null){
            memo[tar] = [...res, num]
            return memo[tar];
        }
    }

    memo[tar] = null;
    return null;
}

console.log(howSum(7, [2,3]))
console.log(howSum(7, [5,3,4,7]))
console.log(howSum(7, [2,4]))
console.log(howSum(7, [2,3,4,5]))
console.log(howSum(100, [7,14]))

*/
const con = (s,r) => {
    const st = []
    let res = ''
    for(let m of s){
        st.push(m)
    }
    const arr = []
    for(let i=0; i<r; i++){
        arr.push([])
    }
    
    while(st.length > 0) {
        for(let i=0; i < r+r-3; i++){
            if(i<r ){
                arr[i].push(st[i]);
                
            } else {
                arr[i-2*(i-r+1)].push(st[i]);
            }
        }
        for(let i=0; i < r+r-2; i++){
            st.pop(i)
        }
    }
    console.log(arr)
    for(let m of arr){
        for(let n of m){
            res = res.concat(n)
        }
    }
    console.log(res)

}

con("abcdefgh",8)