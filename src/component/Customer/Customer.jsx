import React from 'react';

const Customer = ({ customer, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg cursor-pointer'
        >
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-1xl'>{customer.title}</h3>
                <span className='bg-[#b9f8cf] p-2 rounded-2xl'>{customer.status}</span>
            </div>

            <p className='text-[18px] text-gray-400 mt-2'>{customer.description}</p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">
                <span>{customer.id}</span>
                <span className={
                    customer.priority === 'HIGH PRIORITY'
                        ? 'text-red-600 font-semibold'
                        : customer.priority === 'MEDIUM PRIORITY'
                        ? 'text-amber-400 font-semibold'
                        : 'text-green-400 font-semibold'}>
                    {customer.priority}
                </span>
                <span>{customer.customer}</span>
                <span>{customer.date}</span>
            </div>
        </div>
    );
};

export default Customer;
