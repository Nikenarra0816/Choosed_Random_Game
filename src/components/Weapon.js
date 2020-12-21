import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../actions';

const Weapon = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getCards('Weapon'));
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          {data.map((v) => {
            return (
              <div className='col-md-4' key={v.cardId}>
                <div className='card bg-white p-3 shadow' key={v.cardid}>
                  <div className='card-header'>{v.name}</div>
                  <div className='card-body'>
                    <p>{v.type}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Weapon;
