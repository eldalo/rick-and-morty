import React from 'react';
import { Col } from 'reactstrap';
import { motion } from 'framer-motion';
import imageDefault from 'assets/images/default.png';

const Item = ({ id, title, image = null, delay = null }) => {
  const delayCss = delay
    ? `animate__animated animate__fadeIn animate__delay-${delay}s`
    : null;

  const handleViewProfile = (e) => {
    // eslint-disable-next-line no-console
    console.log('e', e.target.dataset.id);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={4} className={delayCss}>
      <motion.div
        className='main__card p-3 text-center'
        whileHover={{
          position: 'relative',
          zIndex: 1,
          background: 'white',
          scale: [1, 1.1, 1.2],
          rotate: [0, 10, -10, 0],
          filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(0) contrast(100%)',
          ],
          transition: {
            duration: 0.2,
          },
        }}
      >
        <figure className='main__image d-block mb-2'>
          <img
            className='d-block img-fluid m-auto rounded'
            src={image || imageDefault}
            alt={title}
            title={title}
          />
        </figure>
        <h3 className='main__subtitle mb-2'>{title}</h3>
        <button
          type='button'
          className='main__btn btn btn-block btn-md mb-0'
          onClick={handleViewProfile}
          data-id={id}
        >
          View Profile
        </button>
      </motion.div>
    </Col>
  );
};

export default Item;
