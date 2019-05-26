const stateGame = {
    mangCuoc: [
        {ma:'bau',hinhAnh: './img/imgGame/bau.PNG',diemCuoc:0},
        {ma:'cua',hinhAnh: './img/imgGame/cua.PNG',diemCuoc:0},
        {ma:'tom',hinhAnh: './img/imgGame/tom.PNG',diemCuoc:0},
        {ma:'ca',hinhAnh: './img/imgGame/ca.PNG',diemCuoc:0},
        {ma:'nai',hinhAnh: './img/imgGame/nai.PNG',diemCuoc:0},
        {ma:'ga',hinhAnh: './img/imgGame/ga.PNG',diemCuoc:0},

    ],
    tongDiem:100,
    xucXac: [
        {ma:'ga',hinhAnh: './img/imgGame/ga.PNG'},
        {ma:'ga',hinhAnh: './img/imgGame/ga.PNG'},
        {ma:'ga',hinhAnh: './img/imgGame/ga.PNG'}
    ]
}

const gamePlayStorePreducer = (state = stateGame, action)=>{

    switch(action.type) 
    {
        case 'DAT_CUOC' :{
            let mangCuocUpdate = [...state.mangCuoc];
            let index = mangCuocUpdate.findIndex((item) => item.ma === action.ma);
            if(index !== -1 ){
                if(state.tongDiem>0){
                mangCuocUpdate[index].diemCuoc+=10;
                state.tongDiem-=10;
                }
            }
            state.mangCuoc = mangCuocUpdate;
            return {...state};
        };
            case 'PLAY_GAME' : {
                //mang cuoc update
                // let mangCuocUpdate = [...state.mangCuoc];
                //
                let mangRandom= []
                for (let i = 0; i < 3; i++) {
                let index = Math.floor(Math.random()*6);
                let xucXacMoi = {
                    ma:state.mangCuoc[index].ma,
                    hinhAnh:state.mangCuoc[index].hinhAnh,

                };
                mangRandom.push(xucXacMoi)
                    if(state.mangCuoc[index].diemCuoc>0){
                        state.tongDiem+=state.mangCuoc[index].diemCuoc*2;
                    }
                }
                state.mangCuoc = [
                    {ma:'bau',hinhAnh: './img/imgGame/bau.PNG',diemCuoc:0},
                    {ma:'cua',hinhAnh: './img/imgGame/cua.PNG',diemCuoc:0},
                    {ma:'tom',hinhAnh: './img/imgGame/tom.PNG',diemCuoc:0},
                    {ma:'ca',hinhAnh: './img/imgGame/ca.PNG',diemCuoc:0},
                    {ma:'nai',hinhAnh: './img/imgGame/nai.PNG',diemCuoc:0},
                    {ma:'ga',hinhAnh: './img/imgGame/ga.PNG',diemCuoc:0},
            
                ];
                state.xucXac = mangRandom;
                
                return {...state};
            }
    }

    return {...state}


}

export default gamePlayStorePreducer;