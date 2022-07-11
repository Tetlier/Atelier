import React from 'React';
import axios from 'axios';
import ReviewMapper from './ReviewMapper.jsx';

//hooks only in stateless components aka not classes
//reviews

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewList: [],
    };
  }

  getReviews(id) {
    axios.get('/reviews', { params: { id: id } })
      .then(results => this.setState({ reviewList: results.data }))
      .catch (err => console.log(err));
  }

  //to be used in db

  // componentDidMount() {
  //   this.getReviews(40344);
  // }

  render() {
    return (
      // <div><ReviewMapper reviewList = {this.state.reviewList}/></div>
      <div>ok</div>
    );
  }
}

export default Reviews;


