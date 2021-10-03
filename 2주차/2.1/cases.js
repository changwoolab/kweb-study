
const fac = (n) => {
    if (n == 1) return 1;
    return n * fac(n-1);
}

const permutation = (n, r) => {
    return fac(n) / fac(n-r);
}

const combination = (n, r) => {
    return fac(n) / (fac(n-r) * fac(r));
}

const multiPermutation = (n, r) => {
    return n ** r;
}

const multiCombination = (n, r) => {
    return fac(n+r-1) / (fac(n-1)*fac(r));
}


module.exports = {
    permutation: permutation,
    combination: combination,
    multiPermutation: multiPermutation,
    multiCombination: multiCombination,
}