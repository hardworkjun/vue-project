<template>
    <div>
        <div>shop</div>
        <div>all <input v-model="shopStore.isAllSelect" @change="allSelectChange"  type="checkbox" name=""></div>
        <div>
            <div v-for="(item , index) in shopStore.goods" :key="index">
                <input type="checkbox" v-model="item.select" @change="singleChange"> 
                shopName:{{ item.name }}
                shopPrice:{{ item.price }}
                <button @click="change(index,1)">+</button>
                {{ item.num||1 }}
                <button @click="change(index,-1)">-</button>
                total{{ (item.num||1 )* item.price ||0 }}
            </div>
            <div>total--{{ useShop.total }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useShop } from "./stores/shop";
const shopStore=useShop()
const change=(index:number , num:number)=>{
    shopStore.updateNum(index,num)
}
const allSelectChange=()=>{
    shopStore.allSelectChange()
}
const singleChange=()=>{
    shopStore.singleChange()
}
</script>