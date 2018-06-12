import {setStore,getStore} from '../../config/mUtils'
export default {
    state:{
        login:false,
        userInfo:null
    },
    gatters:{

    },
    mutations:{
        RECORD_USERINFO(state,info){
            console.log(info)
            state.userInfo = info;
            state.login = true;
            setStore("user_id",info.user_id);
        }
    }
}