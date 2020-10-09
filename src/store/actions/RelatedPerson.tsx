import { Dispatch } from "redux";

export const ADD_RELATED_PERSON = "ADD_RELATED_PERSON";
export const EDIT_RELATED_PERSON = "EDIT_RELATED_PERSON"; 
export const OPEN_DRAWER = 'OPEN_DRAWER';
  
  const addItemSuccess = (data: any) => ({
    type: ADD_RELATED_PERSON,
    payload: data
  });
  
  export function addRelatedPerson(item:any) {
    return (dispatch: Dispatch) => {
      dispatch(addItemSuccess(item));      
    };
  }

  const editItemSuccess = (data: any) => ({
    type: EDIT_RELATED_PERSON,
    payload: data
  });

  export function editRelatedPerson(item:any) {
  return (dispatch: Dispatch) => {
    dispatch(editItemSuccess(item));      
  };
}

const openDrawerItemSuccess = (data: Boolean) => ({
  type: OPEN_DRAWER,
  payload: data
});

export function openDrawer(item:boolean) {
return (dispatch: Dispatch) => {
  dispatch(openDrawerItemSuccess(item));      
};
}