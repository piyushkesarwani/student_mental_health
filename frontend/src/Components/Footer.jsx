import React from "react";

export const Footer = () => {
  return (
    <footer className="footer bg-blue-500 text-white p-5 rounded-lg mt-4 mb-4 ">
      <div className="container">
        <div className="row">
          <h2 className="mb-3">MindHealth</h2>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="no-underline text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">Contact Us</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="no-underline text-white">Legal Policy</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">More</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="no-underline text-white">Twitter</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">Linkedin</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">Instagram</a>
              </li>
              <li>
                <a href="#" className="no-underline text-white">YouTube</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-3 mb-0">
            <p>Copyright &copy; 2023 MindHealth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
