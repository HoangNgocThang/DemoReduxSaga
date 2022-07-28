import { TEST_FETCH_DATA_FAILURE, TEST_FETCH_DATA_SUCCESS } from "../../constants/constRedux";

const initialState = {
    data: []
};
const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_FETCH_DATA_SUCCESS:
            return {
                ...state,
            };
        case TEST_FETCH_DATA_FAILURE:
            return {
                ...state,
                data: []
            }
        default:
            return state;
    }
}
export default testReducer;