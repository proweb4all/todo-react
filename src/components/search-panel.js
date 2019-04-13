import React from 'react';
import ReactDOM from 'react-dom';

const SearchPanel = () => {
    const searchText = 'Type text to search';
    const searchStyle = { fontSize: '20px', color: 'green' };
    return <input style={searchStyle} placeholder={searchText} />
  }

export default SearchPanel;