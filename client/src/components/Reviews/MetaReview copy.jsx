import React from 'react';

class MetaReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overallRating: 0
    };
  }

  getAverageRating(ratings) {
    //0.2 increments
    let avg = 0;
    let total = 0;
    let rating = {};
    let ratingvals = Object.keys(ratings);
    let ratingamounts = Object.values(ratings);

    console.log(ratingvals, ratingamounts);

    for (let i = 0; i < ratingvals.length; i++) {
      avg += (ratingvals[i] / 5 * ratingamounts[i]);
      total += ratingamounts[i];
    }
    avg *= 5;

    this.setState({overallRating: avg});
  }

  componentDidMount() {
    this.props.metaReview.length !== 0 ? this.getAverageRating(this.props.metaReview.ratings) : null;
  }

  render() {
    return (this.props.metaReview.length !== 0 ?

      <div>
        <div>{console.log('we are here meta review', this.props.metaReview.ratings)}</div>
        <div>{this.props.metaReview.product_id}</div>
        <div>Overall Rating: {this.state.overallRating}</div>
      </div>

      : <div>Nothing in metaReview</div>
    );
  }
}

export default MetaReview;