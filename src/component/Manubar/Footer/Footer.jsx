import React from 'react';

const Footer = () => {
    return (

        <footer className="footer bg-neutral text-neutral-content p-10">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                    
                    {/* Logo + About */}
                    <div>
                    <h6 className="font-bold text-2xl text-white">CS — Ticket System</h6>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    </div>

                    {/* Company 1 */}
                    <nav className="flex flex-col space-y-2">
                    <h6 className="font-bold text-2xl text-white">Company</h6>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                    </nav>

                    {/* Services */}
                    <nav className="flex flex-col space-y-2">
                    <h6 className="font-bold text-2xl text-white">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                    </nav>

                    {/* Information */}
                    <nav className="flex flex-col space-y-2">
                    <h6 className="font-bold text-2xl text-white">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                    </nav>

                    {/* Social Links */}
                    <nav className="flex flex-col space-y-2">
                    <h6 className="font-bold text-2xl text-white ">@CS — Ticket System</h6>
                    <a className="link link-hover">@CS — Ticket System</a>
                    <a className="link link-hover">@CS — Ticket System</a>
                    <a className="link link-hover">support@cst.com</a>
                    </nav>
                </div>
                

        </footer>
    );
};

export default Footer;