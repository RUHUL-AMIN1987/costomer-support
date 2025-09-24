import React from 'react';

const Menu = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left */}
          <a className="btn btn-ghost text-xl">CS — Ticket System</a>

          {/* Right */}
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li>
              <button className="btn btn-primary">+ New Ticket</button>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Menu;