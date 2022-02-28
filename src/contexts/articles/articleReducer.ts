import { ArticleModel, ActionTypes, ActionValues } from './types';

export default function articleReducer(
  state: ArticleModel,
  action: ActionValues
) {
  switch (action.type) {
    case ActionTypes.GET_ILLUSTRATION:
      return {
        ...state,
        illustration: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
