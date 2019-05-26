//Store chính: Quản lý tất cả store con (Mỗi store con quản lý dữ liệu theo nghiệp vụ)
import {combineReducers} from 'redux';
import gamePlayStorePreducer from './reducers/GamePlay.reducer'

const rootReducer = combineReducers({

    //store con (store nghiệp vụ sau này)
    //storeModalReducer:storeModalReducer
     gamePlayStorePreducer
})

export default rootReducer;