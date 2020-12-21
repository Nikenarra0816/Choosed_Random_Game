import React from 'react';
import { connect } from 'react-redux';
import { getCards } from '../actions';

class EnhanctmentClass extends React.Component {
  componentDidMount() {
    const { getCards } = this.props;
    getCards('Enchantment');
  }
  render() {
    const { data, isLoading } = this.props;
    if (isLoading) return <p>Loading..</p>;
    if (!isLoading)
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
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  data: state.data,
});

export default connect(mapStateToProps, { getCards })(EnhanctmentClass);
