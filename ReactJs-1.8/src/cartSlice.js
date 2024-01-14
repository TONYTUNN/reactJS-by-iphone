import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name : 'cart',
    initialState : {listSP: [],},
    reducers:{
        themSP : (state,param) => {
            let sp = param.payload; // tham số là 1 sp . vd {'id_sp':1,'ten_sp'=>'A}
            let index = state.listSP.findIndex(s=>s.id_sp === sp.id_sp);
            if(index === -1){ // sp chua co trong gio hang
                sp['soluong']=1;
                state.listSP.push(sp);
            }else state.listSP[index]['soluong']++;
            console.log("Đã thêm sp. Số SP =", state.listSP.length)
        },
        suaSL : (state,param) => { // tham so la mang 2 phan tu id_sp va sl [1,5]
            let id_sp = param.payload[0];
            let soluong = param.payload[1];
            let index = state.listSP.findIndex(s => s.id_sp === id_sp);
            if(index !== -1) state.listSP[index].soluong = Number(soluong);
            console.log("Đã sữa sp",param)
        },
        xoaSP :(state,param) =>{// tham so la id_sp.
            let id_sp = param.payload;
            const index = state.listSP.findIndex( s => s.id_sp === id_sp);
            if(index!==-1) state.listSP.splice(index,1);
        },
        xoaGH : state => {state.listSP = [];}
    },
});
export const {themSP,suaSL,xoaGH,xoaSP} = cartSlice.actions
export default cartSlice.reducer;