import React from 'react';
import {useDispatch} from 'react-redux';

function Name () {
  const dispatch = useDispatch ();
  function changeHandler (e) {
    dispatch ({type: e.target.name, payload: e.target.value});
  }
  return (
    <div>
      <input
        placeholder="write your name"
        onChange={changeHandler}
        name="INPUT_NAME"
      />
      <input
        placeholder="family name"
        onChange={changeHandler}
        name="INPUT_FAMILY"
      />
    </div>
  );
}

export default Name;
