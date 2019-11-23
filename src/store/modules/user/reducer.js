import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  profiles: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.profiles = null;
        break;
      }
      case '@user/GET_PROFILES_SUCCESS': {
        draft.profiles = action.payload.profiles;
        break;
      }
      default:
    }
  });
}
