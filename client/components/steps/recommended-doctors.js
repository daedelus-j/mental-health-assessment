'use strict';

import React from 'react';


const RecommendedDoctor = (props) => {
  const {
    name,
    phone_number
  } = props;

  return (
    <div className='doctors__doctor container--raised'>
      {name}
      <br />
      {phone_number}
    </div>
  );
}

export default ({ doctors }) => {

  return (
    <div className='doctors center'>
      <h2 className='header--2 main-question spacer'>
        Here are our recommended doctors:
      </h2>
      {
        doctors.map(doctor => <RecommendedDoctor 
          key={doctor.id}
          {...doctor} />)
      }
    </div>
  );
}
