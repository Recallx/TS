
/*
    interface 接口使用泛型
    作用：增加其灵活性，增强复用性
    使用：
    1.在接口名称的后面添加<类型变量>，就可以变成泛型接口。
    2.接口的类型变量在接口中所有其他成员可见，就是接口中的成员都可以使用。
    3.使用泛型接口的时候，一定要指定具体的类型。
*/

interface IdFunc<Type> { 
    id: (value: Type) => Type
    ids: () => Type[]
}

// 调用的时候要指定类型
let obj: IdFunc<number> = {
    id(value){
        return value
    },
    ids(){
        return [1,3,5]
    }
}



