import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faCartShopping,faCircleInfo,faAddressBook } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
      <nav class="bg-gray-800 p-4">
        <ul class="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-white">
            <FontAwesomeIcon icon={faCartShopping} /> Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
            <FontAwesomeIcon icon={faCircleInfo} /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
            <FontAwesomeIcon icon={faAddressBook} /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Header;