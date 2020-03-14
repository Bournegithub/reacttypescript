import {USERINFO_CHANGE} from '../actionTypes';
interface IUserState {
    name: string,
    phone: string,
    address: string,
    company: string,
    avatar: string,
    loginStatus: boolean,
}
// 记录当前用户登录信息
const userState:IUserState = {
    name: '',
    phone: '',
    address: '',
    company: '',
    avatar: '',
    loginStatus: false
}
export default function userInfo(state = userState, action:any) {
    switch (action.type) {
        case USERINFO_CHANGE:
            return {
                name: action.value ? action.value.name : state.name,
                phone: action.value ? action.value.phone : state.phone,
                address: action.value ? action.value.address : state.address,
                company: action.value ? action.value.company : state.company,
                avatar: action.value ? action.value.avatar : state.avatar,
                loginStatus: action.value ? action.value.loginStatus: state.loginStatus
            };
        default:
            return state;
    }
}