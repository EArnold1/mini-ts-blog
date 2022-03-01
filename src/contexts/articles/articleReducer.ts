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
    case ActionTypes.GET_APPLICATION:
      return {
        ...state,
        appication: action.payload,
        loading: false,
      };
    case ActionTypes.GET_DESIGN:
      return {
        ...state,
        design: action.payload,
        loading: false,
      };
    case ActionTypes.GET_MARKETING:
      return {
        ...state,
        marketing: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
