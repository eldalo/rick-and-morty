import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Profile = () => {
  return (
    <Container className='pt-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <h1 className='main__card main__title p-3 p-md-4 text-center'>
            Rick and Marty
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
