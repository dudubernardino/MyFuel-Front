import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProfilesRequest } from '~/store/modules/user/actions';

// import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.user.profiles);

  useEffect(() => {
    function getUsers() {
      dispatch(getProfilesRequest());
    }

    getUsers();
  }, [dispatch]);

  return <h1>Dashboard</h1>;
}
