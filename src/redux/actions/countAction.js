import { COUNTER_CHANGE } from "../../constants/constRedux";

export function changeCount(count) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}