import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Item from './item';

const Dashboard = () => {
  return (
    <Container className='pt-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <h1 className='main__card main__title animate__animated animate__heartBeat p-3 p-md-4 text-center'>
            Rick and Marty
          </h1>
        </Col>
      </Row>
      <Row className='justify-content-center mt-5'>
        <Item key={1} id={1} title='Rick' delay={1} />
        <Item key={2} id={2} title='Marty' delay={2} />
        <Item key={3} id={3} title='Marty' delay={1} />
      </Row>
    </Container>
  );
};

export default Dashboard;
