import React, { Component } from 'react';

import './create_form.css';

class CreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        brand: '',
        product: '',
        image: '',
        price: '',
        cents: '',
        category_name: '',
        subcategory_name: '',
        condition: '',
        availability: ''
      },
      options: 'Select a category' };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    let form = this.state.form;
    form[name] = value;

    this.setState({ form: form })
    console.log(this.state.form)
  }

  render() {
    const renderCategories = this.props.categories.map((category) => {
      return (
        <option key={category.CategoryId}>{category.CategoryName}</option>
      );
    });
    const renderSubcategories = this.props.subcategories.map((subcategory) => {
      return (
        <option key={subcategory.SubcategoryId}>{subcategory.SubcategoryName}</option>
      );
    });
    const renderConditions = this.props.conditions.map((condition) => {
      return (
        <option key={condition.ConditionId}>{condition.ConditionType}</option>
      );
    });
    const renderAvailabilities = this.props.availabilities.map((availability) => {
      return (
        <option key={availability.ProductAvailabilityId}>{availability.ProductAvailabilityType}</option>
      );
    });
    return (
      <div className="container product-form d-none d-sm-block">
          <div className="form-row">
              <div className="form-group col-3">
                  <label htmlFor="brand_field">Brand/Author</label>
                  <input
                    id="brand_field"
                    type="text"
                    name="brand"
                    className="form-control"
                    value={this.state.form.brand}
                    onChange={this.handleUserInput.bind(this)} />
              </div>
              <div className="form-group col-9">
                  <label htmlFor="product_field">Product</label>
                  <input
                    id="product_field"
                    type="text"
                    name="product"
                    className="form-control"
                    value={this.state.form.product}
                    onChange={this.handleUserInput.bind(this)} />
              </div>
          </div>
          <div className="form-row">
              <div className="form-group col-8">
                  <label htmlFor="image_field">Product image (URL)</label>
                  <input
                    id="image_field"
                    type="text"
                    name="image"
                    className="form-control"
                    value={this.state.form.image}
                    onChange={this.handleUserInput.bind(this)} />
              </div>
          </div>
          <div className="form-row">
              <div className="form-group col-1">
                  <label htmlFor="price_field">Dollars ($)</label>
                  <input
                    id="price_field"
                    type="text"
                    name="price"
                    className="form-control"
                    value={this.state.form.price}
                    onChange={this.handleUserInput.bind(this)} />
              </div>
              <div className="input-group-append price-separator-box">
                  <span className="input-group-text price-separator">.</span>
              </div>
              <div className="form-group col-1">
                  <label htmlFor="cents_field">Cents (¢)</label>
                  <input
                    id="cents_field"
                    type="text"
                    name="cents"
                    className="form-control"
                    value={this.state.form.cents}
                    onChange={this.handleUserInput.bind(this)} />
              </div>
          </div>
          <div className="form-row">
              <div className="form-group col-4">
                  <label htmlFor="category_name_field">Category</label>
                  <select value={this.state.form.category_name} onChange={this.handleUserInput.bind(this)}
                    id="category_name_field" className="form-control" name="category_name">
                    {renderCategories}
                  </select>
              </div>
              <div className="form-group col-4">
                  <label htmlFor="subcategory_name_field">Subcategory</label>
                  <select value={this.state.form.subcategory_name} onChange={this.handleUserInput.bind(this)}
                    id="subcategory_name_field" className="form-control" name="subcategory_name">
                    {renderSubcategories}
                  </select>
              </div>
              <div className="form-group col-2">
                  <label htmlFor="condition_field">Condition</label>
                  <select value={this.state.form.condition} onChange={this.handleUserInput.bind(this)}
                    id="condition_field" className="form-control" name="condition">
                    {renderConditions}
                  </select>
              </div>
              <div className="form-group col-2">
                  <label htmlFor="availability_field">Availability</label>
                  <select value={this.state.form.availability} onChange={this.handleUserInput.bind(this)}
                    id="availability_field" className="form-control" name="availability">
                    {renderAvailabilities}
                  </select>
              </div>
          </div>
          <div className="submit-button-box">
              <button type="submit" className="btn btn-primary">Save</button>
          </div>
      </div>
    );
  }
}

export default CreateForm;
