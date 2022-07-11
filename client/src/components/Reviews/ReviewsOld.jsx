// import React from 'React';
// import axios from 'axios';
// import ReviewMapper from './ReviewMapper.jsx';
// import MetaReview from './MetaReview.jsx';

// class Reviews extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       reviewList: [],
//       metaReview: [],
//       startPoint: 2,
//     };
//   }

//   getMetaReview(id) {
//     axios.get('/meta', { params: { id: id } })
//       .then(results => this.setState({ metaReview: results.data}))
//       .catch(err => console.log(err));
//   }

//   getTwoReviews(id) {
//     axios.get('/reviews', { params: { id: id } })
//       .then(results => this.setState({ reviewList: results.data.results.splice(0, this.state.startPoint)}))
//       .catch(err => console.log(err));
//   }

//   //to be used in db

//   componentDidMount() {
//     this.getMetaReview(this.props.currentProductId);
//     this.getTwoReviews(this.props.currentProductId);
//   }

//   render() {
//     return (
//       <div>
//         <div>{console.log('rendered')}</div>
//         <div><MetaReview metaReview={this.state.metaReview}/></div>
//         <div><ReviewMapper reviewList={this.state.reviewList} /></div>
//       </div>
//     );
//   }
// }

// export default Reviews;


