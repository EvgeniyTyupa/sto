import { orderApi } from "../Api/api";

const SET_IS_FETCHING = 'SET_IS_FETCHING'; 
const SET_IS_ORDERED = 'SET_IS_ORDERED';

let initialState = {
    isFetching: false,
    isOrdered: false
}

const commonReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_IS_ORDERED: {
            return { ...state, isOrdered: action.isOrdered }
        }
        default: 
            return state;
    }
}

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING, isFetching
});
export const setIsOrdered = (isOrdered) => ({
    type: SET_IS_ORDERED, isOrdered
});

export const makeOrder = (formData) => async (dispatch) => {
    dispatch(setIsFetching(true));
    try{
        await orderApi.makeOrder(formData);
        dispatch([setIsOrdered(true), setIsFetching(false)]);
    }catch(err){
        dispatch(setIsFetching(false));
    }
}

export default commonReducer;