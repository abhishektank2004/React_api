import React from 'react';

function Footor() {
  return (
    <>
      <footer
        className="bg-dark text-white pt-4" style={{ marb: 'auto', position: 'relative', width: '100%' }}
      >
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                We are an online food delivery service bringing delicious meals to your doorstep. 
                Explore our menu and order now!
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">Home</a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">Menu</a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">About</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: info@fooddelivery.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Food Street, City</p>
            </div>
          </div>
          <hr className="bg-white" />
          <div className="text-center pb-3">
            <p>&copy; 2024 FoodDelivery. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footor;
