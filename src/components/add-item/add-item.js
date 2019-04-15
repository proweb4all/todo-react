import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {

  render() {
    const { onAdd } = this.props;
    let classNames = 'add-item';
    return (
      <div className={classNames}>
        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={() => onAdd('NewItem')}>
          <i className="fa fa-plus" />
          Add Item
        </button>
      </div>
    );    
  }
}