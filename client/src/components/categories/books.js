import React from 'react';
import { NavLink } from 'react-router-dom';
import './categories.css';

const Books = () => {
  return (
    <div className="categories">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron">
            <h1 className="display-4">Books</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="container category-content">
        <div className="row inner-category">
          <div className="col-4">
            <div className="category-box">
              <h4><NavLink to="/Web-development"><span className="category-title">Web-development</span></NavLink></h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
