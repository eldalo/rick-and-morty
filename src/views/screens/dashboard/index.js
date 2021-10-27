import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {
  getProfilesItems,
  isProfilesLoading,
} from 'modules/rick-morty/selectors';

import Item from './item';

const Dashboard = () => {
  const loading = useSelector(isProfilesLoading);
  const profiles = useSelector(getProfilesItems);

  return (
    <Container className='pt-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <h1 className='main__card main__title animate__animated animate__heartBeat p-3 p-md-4 text-center'>
            Rick and Morty
          </h1>
        </Col>
      </Row>
      <Row className='justify-content-center my-5'>
        {!loading && (
          <>
            {profiles.map((item) => (
              <Item
                key={item?.id}
                id={item?.id}
                name={item?.name}
                species={item?.species}
                delay={1}
                image={item?.image}
              />
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Dashboard;
