import React from "react";
import { BookContext } from "./context";

export const updateContext = () => {
    const context = React.useContext(BookContext);
    const BookState = context['BookState'];
    const BookDispatch = context['dispatch'];
    return { BookState, BookDispatch }
}

export const updateStore = (dispatch, actionPayload) => {
    dispatch({type: 'bookActionState', payload: actionPayload });
}

export const newUser = (dispatch, actionPayload) => {
    dispatch({type: 'addMembers', payload: actionPayload });
}