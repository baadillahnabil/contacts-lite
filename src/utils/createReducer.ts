import { produce, Immutable, Draft } from 'immer';
import { Reducer } from 'redux';

interface CustomAction {
  type: string;
  payload?: any;
  error?: Error;
}

interface FnMap<T> {
  [key: string]: (draft: Draft<T>, action: CustomAction) => void;
}

const createReducer = <T>(initialState: T, fnMap: FnMap<T>) =>
  produce((draft: Draft<T>, action: CustomAction) => {
    const callback = fnMap[action.type];
    if (callback) {
      return callback(draft, action);
    }
    return undefined;
  }, initialState as Immutable<T>) as Reducer<T, CustomAction>;

export default createReducer;
