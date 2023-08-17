import type { PiniaPlugin, PiniaPluginContext } from "pinia";

export function persiste(context:PiniaPluginContext){
    context.store.$subscribre((_storem,state)=>{

    })
}