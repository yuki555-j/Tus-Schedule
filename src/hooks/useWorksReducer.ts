import { useReducer, useEffect } from "react";
import { Works } from "types/types";
import { Fetch } from "service/wrapperFetch";

const InitialState: Works[] = [];

enum WorksActionType {
  GET = "GET_WORKS",
}

const get = (res: Works) => ({
  type: WorksActionType.GET,
  res,
});

const reducer = (state, action) => {
  switch (action.type) {
    case WorksActionType.GET:
      return [...state, ...action.res];
    default:
      return state;
  }
};

export const useWorks = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  useEffect(() => {
    handleGetWorks();
  }, []);

  const handleGetWorks = async () => {
    const { subjects } = await Fetch("/works", "GET");
    dispatch(get(subjects));
  };
  return [state, handleGetWorks];
};
