import React, { use, useState } from 'react';
import Customer from '../Customer/Customer';
import { toast } from 'react-toastify'; 

const Customers = ({ customerPromise }) => {
  const customer = use(customerPromise);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  // Card click
  const handleSelect = (customer) => {
    if (!selectedCustomers.find(c => c.id === customer.id)) {
      setSelectedCustomers([...selectedCustomers, customer]);
      toast.success('In Progress'); 
    }
  };

  // Remove from Task Status
  const handleRemove = (id) => {
    setSelectedCustomers(selectedCustomers.filter(c => c.id !== id));
  };

  return (
    <div className="flex gap-6 container mx-auto w-9/12 mb-5">
      
      {/* Left side */}
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Customer Tickets</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customer.map((customer) => (
            <Customer
              key={customer.id}
              customer={customer}
              onClick={() => handleSelect(customer)}
            />
          ))}
        </div>
      </div>

      {/* Right side */}
        <div className="w-3/12 bg-white shadow-md hidden md:block p-4">
            <h3 className="font-semibold text-[24px]">Task Status</h3> 
            {selectedCustomers.length === 0 ? ( <p>Select a ticket to add to Task Status</p> ) : 
                ( <ul className="mt-4 space-y-3"> 
                {selectedCustomers.map((customer) =>( <li key={customer.id} 
                className="border-b pb-2 last:border-none flex justify-between items-start" > 

            <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg cursor-pointer w-full'> 
                <h4 className="font-bold">{customer.title}</h4> 
                    <button onClick={() => handleRemove(customer.id)} 
                        className="w-full mt-3 cursor-pointer text-white ml-2 bg-emerald-600 px-3 py-1 rounded" >
                        Complected
                    </button>
                </div> 
                </li> 
                ))} 
            </ul> 
            )}
        </div> 
    </div>
    );
};

export default Customers;
