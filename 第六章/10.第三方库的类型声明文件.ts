
/*
    第三方库有两种类型声明文件存在形式：1.库自带类型声明文件。 2.由 DefinitelyTyped 提供自行下载。
    开发过程中使用的第三方库，如果下载的包里没有.d.ts的类型声明文件。就需要自行下载该库的类型声明文件。
    可以在https://www.typescriptlang.org/dt/search?search= 官网里面搜索要下载的第三方库的声明文件。
*/
// 如果引入的第三方内没有类型声明文件，就会出现...
// 通过 npm i -D @types/lodash 下载类型声明文件
import axios from 'axios'
import _ from 'lodash'
