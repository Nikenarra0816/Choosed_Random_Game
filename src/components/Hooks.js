/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'

export default function Hooks() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData();
  }, [])
  
  const getData = () => {
    setIsLoading(true)
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8ca2b61598mshcbf02117ba11b57p16b0b8jsn50617050e449",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    })
    .then((res) => res.json())
    .then((res) => {
      setData(res)
      setIsLoading(false)
    })
    .catch((err) => {
      setIsError(true)
      console.error(err);
    });
  }

  if (isLoading) return <React.Fragment>Loading...</React.Fragment>
  if (isError) return <React.Fragment>Ada kesalahan mengambil data</React.Fragment>
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" placeholder="Search" />
            {data.Basic.map((v) => {
              return (
                <div className="card">
                  <p>{v.name}</p>
                  <div className="controls">
                    <button className="btn">Add to Hero</button>
                  </div>
                  <div className="controls2">
                    <button className="btn">Add to Million</button>
                  </div>
                  <div className="controls3">
                    <button className="btn">Add to Spell</button>
                  </div>
                  <div className="controls4">
                    <button className="btn">Add to Enchantment</button>
                  </div>
                  <div className="controls5">
                    <button className="btn">Add to Weapon</button>
                  </div>
                  <div className="controls6">
                    <button className="btn">Add to Hero Power</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
