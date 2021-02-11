import {
  LoadingActionType,
  UPDATE_INITIAL_DATA_LOADING,
} from '../actions/loading';
import StateTypes from './stateTypes';

type LoadingStateType = StateTypes['loading'];

const initState: StateTypes['loading'] = {
  initialData: true,
};

export default (
  state: LoadingStateType = initState,
  action: LoadingActionType,
): LoadingStateType => {
  const {type, loading} = action;
  switch (type) {
    case UPDATE_INITIAL_DATA_LOADING: {
      return {
        ...state,
        ...loading,
      };
    }
    default: {
      return state;
    }
  }
};
