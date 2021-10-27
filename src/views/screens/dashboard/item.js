import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imageDefault from 'assets/images/default.png';

const Item = ({ id, name, species, image = null, delay = null }) => {
  const delayCss = delay
    ? `animate__animated animate__fadeIn animate__delay-${delay}s`
    : null;

  return (
    <Col xs={10} sm={6} md={4} lg={3} className={delayCss}>
      <motion.div
        className='main__card mb-4 p-3 text-center'
        whileHover={{
          background: 'white',
          filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(0) contrast(100%)',
          ],
          position: 'relative',
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1.2],
          transition: {
            duration: 0.2,
          },
          zIndex: 1,
        }}
      >
        <figure className='main__image d-block mb-2'>
          <img
            className='d-block img-fluid m-auto rounded'
            src={image || imageDefault}
            alt={name}
            title={name}
          />
        </figure>
        <h3 className='main__subtitle mb-2'>{name}</h3>
        <p className='main__text mb-2'>Species: {species}</p>
        <Link
          to={`/profile/${id}`}
          type='button'
          className='main__btn btn btn-block btn-md mb-0'
        >
          View Profile
        </Link>
      </motion.div>
    </Col>
  );
};

export default Item;
