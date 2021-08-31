import { FAVES_ADD_ITEM, FAVES_REMOVE_ITEM  } from '../constants/favesConstants'

export const favesReducer = (state = { faveItems: [] }, action) => {
    switch(action.type) {
        case FAVES_ADD_ITEM: 
            const item = action.payload
            const existItem = state.faveItems.find(x => x.product === item.product)
            if (existItem) {
                return {
                ...state,
                faveItems: state.faveItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                ...state,
                faveItems: [...state.faveItems, item]
                }
            }
            case FAVES_REMOVE_ITEM: 
        return {
            ...state, 
            faveItems: state.faveItems.filter(x => x.product !== action.payload),
        }
        default:
            return state
    }
} 