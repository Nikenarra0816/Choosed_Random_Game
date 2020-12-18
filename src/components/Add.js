import React from "react";


class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      randomNumber: 0,
      loadType: false
    };

    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const res = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", { method: "GET", headers: {
        "x-rapidapi-key": "8ca2b61598mshcbf02117ba11b57p16b0b8jsn50617050e449",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    })

    const value = await res.json()
    this.setState({isLoading: false, data: value})
  }


  getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick() {
    const getRandom = this.getRandomNumber(this.state.data.Basic.length)
    this.setState({loadType: true})
    setTimeout(() => {
      alert(`Anda Mendapatkan Kartu Type ${this.state.data.Basic[getRandom].type}`)
      this.setState({loadType: false})
    }, 3000);
  }

  render() {
    const { data, isLoading, loadType } = this.state;
    if (isLoading) return <p>Loading...</p>;
    console.log(data)
    if (!isLoading)
      return (
        <div className="add-page">
          <div className="container">
            <div className="add-content">
              <div className="input-wrapper">
                <input type="text" placeholder="Search" />
                    <div className="card p-3 bg-white shadow rounded">
                      <div className="card-header">Get Your Card Here</div>
                      <div className="card-body">
                        <h3>Click Here To Get Your Card Type</h3>
                        <button className={`btn btn-primary ${loadType ? "disabled" : ""}`} onClick={this.handleClick}>Click </button>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Add;
