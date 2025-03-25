import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
    state:() : { isExpend: boolean, isFresh: boolean } =>{
        return {
            isExpend: false,
            isFresh: false,
        }
    },
    actions: {
        
    },
    getters: {
        
    }
})