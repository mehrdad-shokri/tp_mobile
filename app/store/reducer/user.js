import { FIRST_CONSTANT, SECOND_CONSTANT } from '../constant/user';

export default function (state = null, action) {
  switch (action.type) {
    case FIRST_CONSTANT:
      return state;
    case SECOND_CONSTANT:
      return state;
    default:
      return state;
  }
}
