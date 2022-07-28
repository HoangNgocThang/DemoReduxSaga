import { TEST_FETCH_DATA_FAILURE, TEST_FETCH_DATA_REQUEST, TEST_FETCH_DATA_SUCCESS } from "../../constants/constRedux";

export function testFetchDataRequest(payload) {
    return {
        type: TEST_FETCH_DATA_REQUEST,
        payload: payload
    }
}
export function testFetchDataSuccess(payload) {
    return {
        type: TEST_FETCH_DATA_SUCCESS,
        payload: payload
    }
}
export function testFetchDataFailure(payload) {
    return {
        type: TEST_FETCH_DATA_FAILURE,
        payload: payload
    }
}