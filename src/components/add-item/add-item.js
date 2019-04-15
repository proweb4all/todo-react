import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {
  state = {
    label: ''
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({ label: '' });
  }
  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
    console.log(e.target.value);
  }
  render() {
    return (
      <form className='item-add-form d-flex'
        onSubmit={this.onSubmit}>
        <input type='text' className='form-control'
          onChange={this.onLabelChange}
          value={this.state.label}
          placeholder='What needs to be done' />
        <button type="submit"
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-plus" />
          Add Item
        </button>
      </form>
    );    
  }
}