import { useReducer, useEffect } from "react";
import { Works } from "types/types";
import { Fetch } from "service/wrapperFetch";

const InitialState: Works[] = []

enum WorksActionType {
  GET = "GET_WORKS"
}

const get = (res: Works) => ({
  type: WorksActionType.GET,
  res
})

const reducer = (state, action) => {
  switch (action.type) {
    case WorksActionType.GET:
      return state;
    default:
      return state;
  }
}

export const useWorks = () => {
  const [state, dispatch] = useReducer(reducer, InitialState)

  const handleGetWorks = (res) => {
    //Fetch("works", res);
    dispatch(get(res))
  }
  return [state, handleGetWorks];
}