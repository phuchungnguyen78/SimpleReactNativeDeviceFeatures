import { ADD_PLACE, SET_PLACES } from "./action";
import Place from "../models/Place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return { 
        places: action.places.map(
          (node) => new Place(node.id.toString(), node.title, node.imageUri)
        ),
      };
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image
      );
      return {
        places: state.places.concat(newPlace),
      };
  }
  return state;
};
