import React from 'react';
import { connect } from 'react-redux';
import { getAllCards } from '../actions';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      randomNumber: 0,
      loadType: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { getAllCards, data } = this.props;
    data.length === 0 && getAllCards();
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick() {
    const { data } = this.props;
    const getRandom = this.getRandomNumber(data.length);
    this.setState({ loadType: true });
    setTimeout(() => {
      alert(`Anda Mendapatkan Kartu Type ${data[getRandom].type}`);
      localStorage.setItem('id', data[getRandom].cardId);
      localStorage.setItem('name', data[getRandom].name);
      localStorage.setItem('type', data[getRandom].type);
      this.setState({ loadType: false });
    }, 3000);
  }

  render() {
    const { data, isLoading } = this.props;
    const { loadType } = this.state;
    if (isLoading) return <p>Loading...</p>;
    console.log(data);
    if (!isLoading)
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
                          className={`btn btn-primary ${
                            loadType ? 'disabled' : ''
                          }`}
                          onClick={this.handleClick}
                        >
                          Click{' '}
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
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  data: state.dataAll,
});

export default connect(mapStateToProps, { getAllCards })(Add);
