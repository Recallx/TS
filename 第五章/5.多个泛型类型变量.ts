

/*
    泛型的类型变量可以有多个，并且类型变量之间还可以约束。
*/
// keyof关键字接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型
// 这里的keyof Type 实际获取的是传入的对象中的name和age。
// key受Type约束，理解为Key只能是Type对象中所有键的任意一个。
function getProp<Type, key extends keyof Type>(obj: Type, key: key){
    return obj[key]
}

getProp({name:'今晚打老虎',age: 20}, 'name')


