// import React, { useState } from "react";
// import { ResultCard } from "../components/ResultCard";

// export const Add = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const onChange = (e) => {
//     e.preventDefault();

//     setQuery(e.target.value);

//     fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "8ca2b61598mshcbf02117ba11b57p16b0b8jsn50617050e449",
//         "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         if (!data.errors) {
//           setResults(data.results);
//         } else {
//           setResults([]);
//         }
//       });
//   };

//   return (
//     <div className="add-page">
//       <div className="container">
//         <div className="add-content">
//           <div className="input-wrapper">
//             <input
//               type="text"
//               placeholder="Search for a movie"
//               value={query}
//               onChange={onChange}
//             />
//           </div>

//           {results.length > 0 && (
//             <ul className="results">
//               {results.map((movie) => (
//                 <li key={movie.id}>
//                   <ResultCard movie={movie} />
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
// import "./styles.css";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8ca2b61598mshcbf02117ba11b57p16b0b8jsn50617050e449",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (!isLoading)
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
      );
  }
}

export default Add;
