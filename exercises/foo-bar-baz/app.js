const input = {
    "Foo": 2,
    "Bar": 1,
    "Baz": 7
}

let newArr = []

let fooBarBaz = () => {
    newArr.splice(0, input.Foo, "Foo")
    return newArr
}

fooBarBaz()
console.log(newArr);
