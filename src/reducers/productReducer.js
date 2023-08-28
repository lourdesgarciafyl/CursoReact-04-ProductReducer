import { types } from "../types/types";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case types.products.addType:
      return [
        ... state,
        action.payload
      ]

    case "[Product] - EDIT-PRODUCT":
      console.log("Editar");
      break;

    case types.products.deleteType:
     return action.payload

    default:
      return state;
  }
};
