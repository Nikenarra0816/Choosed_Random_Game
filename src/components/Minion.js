import React from 'react';

export class Minion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {},
          isLoading: true,
          randomNumber: 0,
          loadType: false
        };
      }
    
      async componentDidMount() {
        const res = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", { method: "GET", headers: {
            "x-rapidapi-key": "8ca2b61598mshcbf02117ba11b57p16b0b8jsn50617050e449",
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          },
        })
        const value = await res.json()
        let minion =  value.Basic.filter(function(v) {
            return v.type == 'Minion';
        })
        this.setState({isLoading: false, data: minion})
        
    }

    render() {
        const {data, isLoading} = this.state
          console.log(data)
          if (isLoading) return <p>Loading..</p>

          if (!isLoading) return (
              <>
                <div className="container">
                    <div className="row">
                        {
                        data.map((v) => {
                            return (
                                <div className="col-md-4">
                                    <div className="card bg-white p-3 shadow" key={v.cardid}>
                                        <div className="card-header">{v.name}</div>
                                        <div className="card-body">
                                            <p>{v.type}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        
                        }
                        
                    </div>
                </div>
              </>
          )
    }

}
