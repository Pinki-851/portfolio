import data from "../../data/cardData.json";
const initialstate = {
  cardData: data,
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
