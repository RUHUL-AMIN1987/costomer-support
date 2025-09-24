import React from 'react';
import vector1 from '../../assets/vector1.png';

const Form = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 gap-10 pt-20 pb-20'>
          <div
            className="rounded-md p-10 text-white h-[250px] relative flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url(${vector1}), linear-gradient(135deg, #632EE3, #9F62F2)`,
            }}>
            <h3 className="text-[24px]">In-Progress</h3>
            <span className="font-semibold text-[60px]">0</span>
          </div>
          <div
              className="rounded-md p-10 text-white h-[250px] relative flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${vector1}), linear-gradient(135deg, #54CF68, #00827A)`,
              }}>
              <h3 className="text-[24px]">In-Progress</h3>
              <span className="font-semibold text-[60px]">0</span>
          </div>
        </div>
    );
};

export default Form;