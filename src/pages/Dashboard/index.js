import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaUserAlt,
  FaUserSecret,
  FaMoneyBillAlt,
  FaWineBottle,
} from 'react-icons/fa';
import { MdEmail, MdLocalGasStation } from 'react-icons/md';

import { getProfilesRequest } from '~/store/modules/user/actions';

import { Container, Card, Fuel } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.user.profiles);

  useEffect(() => {
    function getUsers() {
      dispatch(getProfilesRequest());
    }

    getUsers();
  }, [dispatch]);

  return (
    <Container>
      <h2>Usuários</h2>

      {profiles.reverse().map(profile => (
        <Card key={profile.id}>
          <div className="content">
            <FaUserAlt size={20} color="#000" />
            <span>{profile.name}</span>
          </div>
          <div className="content">
            <MdEmail size={20} color="#000" />
            <span>{profile.email}</span>
          </div>
          <div className="content">
            <FaUserSecret size={20} color="#000" />
            <span>{profile.admin ? 'Sim' : 'Não'}</span>
          </div>

          {profile.fuels.length > 0 ? (
            <Fuel id={profile.fuels.id}>
              <div className="content">
                <FaMoneyBillAlt size={20} color="#000" />

                <span>
                  R${' '}
                  {profile.fuels.reduce(
                    (acc, item) => acc + item.total_price,
                    0
                  )}
                </span>
              </div>

              <div className="content">
                <MdLocalGasStation size={20} color="#000" />
                <span>
                  {profile.fuels.reduce(
                    (acc, item) => acc + item.liters_of_gasoline,
                    0
                  )}{' '}
                  Litros
                </span>
              </div>
              <div className="content">
                <FaWineBottle size={20} color="#000" />

                <span>
                  {profile.fuels.reduce(
                    (acc, item) => acc + item.liter_of_alcohol,
                    0
                  )}{' '}
                  Litros
                </span>
              </div>
            </Fuel>
          ) : null}
        </Card>
      ))}
    </Container>
  );
}
