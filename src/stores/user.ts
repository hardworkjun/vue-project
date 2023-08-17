import{defineStore} from 'pinia'
    // 定义store 参数一：模块名 参数二：对象
export const useUserStore= defineStore('user',{
// state是一个函数，必须有返回值，返回这就是该模块的状态，并且可以推断出state的类型值
    state() {
        return{
            age:18,
            name:'jun'
        }
    },
    getters:{
        // 接收一个参数，参数为当前模块的state
        // 必须有返回值，返回值为计算属性的结果
        doubleAge:(state):number=> state.age*2,
        // 如果在getter获取其他计算属性方法，则不可以用箭头函数（this指向问题）
        // 需要自己定义返回值类型
        getNameAndAge():string{
            return this.name+this.age
        },
        // getter传参方法
        getAddAge(){
            // 计算属性内部返回方法，该方法接受参数，参数为调用时传回来的
            return (num:number)=>this.age+num
        }
    },
    // 存放相关方法和业务逻辑
    actions:{
        saveName(name:string){
            this.name=name
        }
    }
})