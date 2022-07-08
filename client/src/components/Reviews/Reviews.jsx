import React from 'React';
import axios from 'axios';
// import ReviewMapper from './ReviewMapper.jsx';

//hooks only in stateless components aka not classes

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      etc: '',
    };
  }

  // getReviews() {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=`)
  // }

  componentDidMount() {

  }

  render() {
    return (
      <div>Almost</div>
    );
  }
}

export default Reviews;


