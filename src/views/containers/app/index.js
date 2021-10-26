import React from 'react';

const ContainerApp = ({ children }) => {
  return (
    <main className='main'>
      {children}
      <footer className='main__footer p-3 text-center'>
        Diego Alexander Londoño |{' '}
        <a
          href='mailto:dlondonom@gmail.com'
          title='dlondonom@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          dlondonom@gmail.com
        </a>
      </footer>
    </main>
  );
};

export default ContainerApp;
