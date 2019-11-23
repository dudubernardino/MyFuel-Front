import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
  getProfilesSuccess,
  getProfilesFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, id, admin, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, admin },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, `users/${id}`, profile);

    setTimeout(() => {
      window.location.reload();
    }, 3000);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export function* getProfiles() {
  try {
    const response = yield call(api.get, 'users');

    yield put(getProfilesSuccess(response.data));
  } catch (err) {
    yield put(getProfilesFailure());

    toast.error('Erro ao carregar os usuários');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/GET_PROFILES_REQUEST', getProfiles),
]);
