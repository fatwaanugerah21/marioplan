import React from 'react';

function Square(props) {
   return (
      <button className="no-style" onClick={() => {
         props.onClick()
         // alert(this.props.value)
      }}>
         {props.value}
      </button>
   );
}

export default Square