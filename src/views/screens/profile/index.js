import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  getProfilesItem,
  isProfilesLoading,
} from 'modules/rick-morty/selectors';

const Profile = () => {
  const loading = useSelector(isProfilesLoading);
  const profile = useSelector(getProfilesItem);

  return (
    <Container className='mb-5 pt-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <h1 className='main__card main__title p-3 p-md-4 text-center'>
            Rick and Marty
          </h1>
        </Col>
      </Row>
      {!loading && (
        <Row className='justify-content-center mt-5'>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className='main__card mb-5 p-3 text-center'>
              <figure className='main__image d-block mb-2'>
                <img
                  className='d-block img-fluid m-auto rounded'
                  src={profile?.image}
                  alt={profile?.name}
                  title={profile?.name}
                />
              </figure>
              <h3 className='main__subtitle mb-2'>{profile?.name}</h3>
              <p className='main__text mb-2'>Species: {profile?.species}</p>
              <p className='main__text mb-2'>Gender: {profile?.gender}</p>
              <p className='main__text mb-2'>Status: {profile?.status}</p>
            </div>
          </Col>
        </Row>
      )}
      <Row className='justify-content-center mb-5'>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Link
            to='/'
            type='button'
            className='main__btn btn btn-block btn-md mb-0'
          >
            Back
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
