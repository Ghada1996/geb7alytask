export function item(state, action) {
    switch (action.type) {
      case 'ADD_TO_CART':{
        return { 
          ...state,
          items:[...state.items, action.payload]
         }
      }
      case 'REMOVE_ITEM':{
          let newitems  = [...state.items];
          const index = state.items.findIndex((item) => item.id === action.payload.id);
        if(index >= 0) {
            //item exist in the basket, remove it
            newitems.splice(index, 1) 
        } else {
            console.warn (
                `Can't remove product{id: ${action.payload.id}} as it is not in the cart`
            );
        }
        return{
            ...state,
            items: newitems
        }
      }
        default:
          return state;
    
    }
}
