let a = ["Yateen", "Yogesh", "Amit"];
console.log(a);

const [a1, a2, a3] = a;
console.log(a1);

//object destructure
let ob = [
    {name : "Yogesh", branch : "Kandivali"}
];
console.log(ob);

let [{name, branch}] = ob;
console.log(name);
console.log(branch);


