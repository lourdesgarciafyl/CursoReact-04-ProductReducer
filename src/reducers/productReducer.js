export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "[Product] - ADD-PRODUCT":
      return [
        ... state,
        action.payload
      ]

    case "[Product] - EDIT-PRODUCT":
      console.log("Editar");
      break;

    case "[Product] - DELETE-PRODUCT":
     return action.payload

    default:
      return state;
  }
};
