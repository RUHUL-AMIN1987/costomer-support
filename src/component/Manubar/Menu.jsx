import React from 'react';

const Menu = () => {
    return (
      <nav className="navbar bg-base-100 shadow-sm">
          <div className="container mx-auto flex justify-between items-center px-4 py-3">
          
            <div className="text-2xl font-bold">CS — Ticket System</div>

          
            <ul className="hidden md:flex space-x-6 items-center">
              <li><a href="#">Home</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Contact</a></li>
              <li>
              <button className="btn btn-primary">+ New Ticket</button>
              </li>
            </ul>
          </div>

        
          <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
            <ul className="space-y-2">
              <li><a href="#" >Home</a></li>
              <li><a href="#" >About</a></li>
              <li><a href="#" >Services</a></li>
              <li><a href="#" >Contact</a></li>
            </ul>
          </div>
      </nav>
    );
};

export default Menu;