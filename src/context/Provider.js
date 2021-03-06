import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [requestApi, setRequestApi] = useState();
  const [btnCategory, setBtnCategory] = useState('');
  const [redirectDisable, setRedirectDisable] = useState(false);
  const [loadFirstTime, setLoadFirstTime] = useState(true);

  const context = {
    requestApi,
    setRequestApi,
    btnCategory,
    setBtnCategory,
    redirectDisable,
    setRedirectDisable,
    loadFirstTime,
    setLoadFirstTime,
  };
  return (

    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
