import StateTypes from '../reducers/stateTypes';

export const UPDATE_INITIAL_DATA_LOADING = 'UPDATE_INITIAL_DATA_LOADING';

export interface LoadingActionType {
  type: string;
  loading: StateTypes['loading'];
}

export const updateInitialDataLoading = (state: boolean): LoadingActionType => {
  return {
    type: UPDATE_INITIAL_DATA_LOADING,
    loading: {
      initialData: state,
    },
  };
};
