import React, { useEffect, useState } from 'react';

const Mycard = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    const idCard = localStorage.getItem('id');
    const titleCard = localStorage.getItem('name');
    const typeCard = localStorage.getItem('type');

    setId(idCard);
    setTitle(titleCard);
    setType(typeCard);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card bg-white rounded shadow'>
              <div className='card-header'>{title}</div>
              <div className='card-body'>{type}</div>
              <div className='card-footer'>
                <button className='btn btn-primary'>Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mycard;
