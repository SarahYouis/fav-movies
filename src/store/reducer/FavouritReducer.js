const initial = {
    Fav:[]
};
export default function FavReducer(state = initial, action)
{
    switch(action.type)
    {
        case "ADD_FAV":
            return{
                ...state,
                Fav:[...state.Fav, action.payload]
            }
        case "REMOVE_FAV":
            return{
                ...state,
                Fav:state.Fav.filter((mov)=>mov.id!==action.payload.id)
            };
        default:
            return state
    }
}