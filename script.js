function unique(arr) {
    let set = new Set();
    let str = '';
    arr.forEach((item => {
        set.add(item);
    }));
    set.forEach(value => {
        str += `${value}, `;
    })
    return str;
};

let values = ["John", "Harry", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];
alert(unique(values));