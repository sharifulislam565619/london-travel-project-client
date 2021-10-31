import React from 'react';
import img from '../../../images/sharif.png';
import './About.css';

const About = () => {
   return (
      <div className="pb-3 mt-3 about">
         <h2 className="pt-4 text-primary">About us</h2>
         <hr />
         <div className="row">
            <div className="col-md-5">
               <img src={img} alt="" />
            </div>
            <div className="col-md-7">
               <p className="text-start p-3">
                  Founded in 2015 in Amsterdam, london-travel.com has grown from a small Dutch start-up to one of the world’s leading digital travel companies. Part of Booking Holdings Inc.  london-travel.com’s mission is to make it easier for everyone to experience the world.

                  By investing in technology that takes the friction out of travel, london.com seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, london-travel.com enables properties around the world to reach a global audience and grow their businesses.
               </p>
            </div>
         </div>
      </div>
   );
};

export default About;