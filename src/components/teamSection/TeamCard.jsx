import React from 'react';
import PropTypes from 'prop-types';

const TrackCard = ({ name, position }) => (
  <div className='w-32 h-40 flex-shrink-0 flex flex-col justify-evenly items-center m-4'>
    <div className='border-2 border-black rounded-full w-20 h-20' />
    <div>{name}</div>
    <div>{position}</div>
  </div>
);

TrackCard.propTypes = {
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TrackCard;
