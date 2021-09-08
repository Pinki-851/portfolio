import { CardData } from "../../data/CardData.js";
const initialstate = {
  cardData: CardData,
  lightMode: false,
};

const CardReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "DARK_MODE": {
      return { darkMode: true };
    }
    case "LIGHT_MODE": {
      console.log(action.payload);
      return { ...state, lightMode: action.payload };
    }
    default:
      return state;
  }
};
export default CardReducer;
