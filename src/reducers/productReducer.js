export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "[Product] - ADD-PRODUCT":
      console.log("Agregar");
      break;

    case "[Product] - EDIT-PRODUCT":
      console.log("Editar");
      break;

    case "[Product] - DELETE-PRODUCT":
      console.log("Eliminar");
      break;

    default:
      return state;
  }
};
