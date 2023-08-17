import {defineStore} from 'pinia';
interface Goods{
    name:string,
    price:number,
    num?:number,
    select?:boolean
}

export  const useShop = defineStore('shop',{
    state(){
        return{
            goods:[
                {
                    name:"sheep",
                    price:20,
                    select:false
                },
                {
                    name:"pig",
                    price:30,
                    select:false
                }
            ] as Goods[] ,
            isAllSelect:false,
        }
    },
    actions:{
        updateNum(index:number,num:number){
            // 初始化num
            this.goods[index].num=this.goods[index].num||1
            this.goods[index].num! +=num
        },
        allSelectChange(){
            this.goods.forEach(item=>{
                item.select=this.isAllSelect
            })
        },
        singleChange(){
            this.isAllSelect=this.goods.every((item)=>item.select)
        }
    },
    getters:{
        total():number{
            return this.goods.filter(item=>item.select).reduce((total,item)=>total+= (item.num||1)*item.price,0)
        }
    }
})