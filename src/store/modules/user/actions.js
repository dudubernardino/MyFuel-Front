export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}

export function getProfilesRequest() {
  return {
    type: '@user/GET_PROFILES_REQUEST',
  };
}

export function getProfilesSuccess(profiles) {
  return {
    type: '@user/GET_PROFILES_SUCCESS',
    payload: { profiles },
  };
}

export function getProfilesFailure() {
  return {
    type: '@user/GET_PROFILES_FAILURE',
  };
}
