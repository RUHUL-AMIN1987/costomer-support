import React from 'react';
import vector1 from '../../assets/vector1.png';

const Form = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className=' container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 grid gap-10 grid-cols-1 md:grid-cols-2'>
          <div
              className=" rounded-md p-10 text-white h-[250px] relative flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${vector1}), url(${vector1}), linear-gradient(135deg, #632EE3, #9F62F2)`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'left, right'}}>
              <h3 className="text-[24px]">In-Progress</h3>
              <span className="font-semibold text-[60px]">{inProgressCount}</span>
          </div> 
          <div className="rounded-md p-10 text-white h-[250px] relative flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${vector1}), url(${vector1}), linear-gradient(135deg, #54CF68, #00827A)`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `left , right`}}>
              <h3 className="text-[24px]">Resolved</h3>
              <span className="font-semibold text-[60px]">{resolvedCount}</span>
          </div>
        </div>
    );
};

export default Form;