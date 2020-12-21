import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards } from '../actions';

const Add = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataAll);
  const isLoading = useSelector((state) => state.isLoading);

  const [loadType, setLoadType] = useState(false);

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const handleClick = () => {
    const getRandom = getRandomNumber(data.length);
    setLoadType(true);
    setTimeout(() => {
      alert(`Anda Mendapatkan Kartu Type ${data[getRandom].type}`);
      localStorage.setItem('id', data[getRandom].cardId);
      localStorage.setItem('name', data[getRandom].name);
      localStorage.setItem('type', data[getRandom].type);
      setLoadType(false);
    }, 3000);
  };

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='add-content'>
              <div className='input-wrapper'>
                <input type='text' placeholder='Search' />
                <div className='card p-3 bg-white shadow rounded'>
                  <div className='card-header'>Get Your Card Here</div>
                  <div className='card-body'>
                    <h3>Click Here To Get Your Card Type</h3>
                    <button
                      className={`btn btn-primary ${loadType && 'disabled'}`}
                      onClick={() => handleClick()}
                    >
                      Click
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='card'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
