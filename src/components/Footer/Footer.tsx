import React from 'react';
import { makeStyles } from '@material-ui/core';
import { MDBFooter } from 'mdb-react-ui-kit';

const useStyles = makeStyles ({
  a: {
    paddingBottom: '0px',
    position: 'fixed'
  }
})

export const App = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://fullarmorinc.com/'>
          Fullarmorinc.com
        </a>
      </div>
    </MDBFooter>
  );
}