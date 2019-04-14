import React from 'react';
import Day from '../Day/Day';

const weatherbody = (props) => {
  return (
    <div className="row text-center">
    {props.days.map((value, index) => {
      return <Day key={index} date={value.dt_txt} main={value.main} weather={value.weather}/>
    })}
    </div>
);
};

export default weatherbody;
