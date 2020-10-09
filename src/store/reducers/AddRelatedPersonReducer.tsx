import { act } from "@testing-library/react";
import {ADD_RELATED_PERSON, OPEN_DRAWER} from "../actions/RelatedPerson";

interface Action {
  type: string;
  payload: object;
}

interface State {
  loading: boolean;
  addRelatedPerson:any;
}

const intialState = {
  loading: false,
  addRelatedPerson:[]
};



export default (state: State = intialState, action: Action) => {
  
  switch (action.type) {
    case ADD_RELATED_PERSON:
      return {
        ...state,
        addRelatedPerson: [...state.addRelatedPerson, action.payload]
      };

      case OPEN_DRAWER:
        return {
          setVisible: action.payload
        };


    default:
      return state;
  }
};