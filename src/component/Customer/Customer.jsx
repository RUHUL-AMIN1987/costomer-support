import React from 'react';
import Ellipse22 from '../../assets/vector1.png';
import Vector from '../../assets/Vector.png'

const Customer = ({ customer, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg cursor-pointer'>
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl">{customer.title}</h3>

               <span
                    className={`flex items-center gap-2 px-2 py-2 rounded-2xl font-semibold ${
                            customer.status === "Open"
                                ? "bg-[#B9F8CF] text-black"
                                : customer.status === "In-Progress"
                                ? "bg-[#F8F3B9] text-[#9C7700]"
                                : "bg-gray-200 text-gray-500"
                            }`}>
                    <img src={Ellipse22} alt=""
                        className={`w-3 h-3 rounded-full ${
                            customer.status === "Open"
                            ? "bg-[#02A53B]"
                            : customer.status === "In-Progress"
                            ? "bg-[#FEBB0C]"
                            : "bg-gray-400"
                        }`}/>
                        {customer.status}
                </span>
            </div>


                <p className='text-[18px] text-gray-400 mt-2'>{customer.description}</p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2 justify-between">
                    <div className='flex items-center gap-5'>
                        <span>{customer.id}</span>
                        <span className={
                            customer.priority === 'HIGH PRIORITY'
                                ? 'text-red-600 font-semibold'
                                : customer.priority === 'MEDIUM PRIORITY'
                                ? 'text-amber-400 font-semibold'
                                : 'text-green-400 font-semibold'}>
                            {customer.priority}
                        </span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span>{customer.customer}</span>
                        <img src={Vector} alt="" />
                        <span>{customer.date}</span>
                    </div>
            </div>
        </div>
    );
};

export default Customer;
