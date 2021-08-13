import React from 'react';
import './NavTab.css';

function NavTab({children}) {
  return (
    <div className="nav-tab">
      {children}
    </div>
  )
}

export default NavTab