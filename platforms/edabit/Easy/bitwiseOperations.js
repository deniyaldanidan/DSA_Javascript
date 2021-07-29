function bitwiseAND(n1, n2) {
    n1 = toBits(n1);
    n2 = toBits(n2);
    res = n1.map((n,i) => {
        return (n=='1' && n2[i]=='1') ? '1' : '0'
    });
    return parseInt(res.join(""),2)
}

function bitwiseOR(n1, n2) {
    n1 = toBits(n1);
    n2 = toBits(n2);
    res = n1.map((n,i) => {
        return (n=='1' | n2[i]=='1') ? '1' : '0'
    });
    return parseInt(res.join(""),2)
}

function bitwiseXOR(n1, n2) {
    n1 = toBits(n1);
    n2 = toBits(n2);
    res = n1.map((n,i) => {
        return (!(n=='1' && n2[i]=='1') && (n=='1' | n2[i]=='1')) ? '1' : '0';
    });
    return parseInt(res.join(""),2)
}

function toBits(n){
    return !(n>0 && n<255) ? "not applicable" : ("00000000" + n.toString(2)).substr(-8).split("")
}

function assertEquals(value, ans){
    console.log(value===ans);
}

assertEquals(bitwiseAND(7, 12), 4)
assertEquals(bitwiseOR(7, 12), 15)
assertEquals(bitwiseXOR(7, 12), 11)

assertEquals(bitwiseAND(32, 17), 0)
assertEquals(bitwiseOR(32, 17), 49)
assertEquals(bitwiseXOR(32, 17), 49)

assertEquals(bitwiseAND(13, 19), 1)
assertEquals(bitwiseOR(13, 19), 31)
assertEquals(bitwiseXOR(13, 19), 30)