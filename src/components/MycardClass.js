import React from 'react';

export class MycardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      type: '',
    };
  }

  componentDidMount() {
    const idCard = localStorage.getItem('id');
    const typeCard = localStorage.getItem('type');
    const titleCard = localStorage.getItem('name');

    this.setState({ id: idCard, type: typeCard, title: titleCard });
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card bg-white rounded shadow'>
                <div className='card-header'>{this.state.title}</div>
                <div className='card-body'>{this.state.type}</div>
                <div className='card-footer'>
                  <button className='btn btn-primary'>Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
