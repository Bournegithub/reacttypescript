import { USERINFO_CHANGE } from '../actionTypes'

export function userInfoChange(value:any) {
    return {
        type: USERINFO_CHANGE,
        value
    }
}