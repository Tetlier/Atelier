import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Components
import ReviewMapper from './ReviewMapper.jsx';
import MetaReview from './MetaReview.jsx';
import Form from './Form.jsx';
import SearchBar from './SearchBar.jsx';
//styled components
import { Button } from '../styles/Button.styled.js';
import { Grid, Row, Col, Scroll } from '../styles/reviewstyles/reviewWidget.styled.js';

const Reviews = ({ currentProductId, currentProductRating, totalReviews }) => {

  //hooks related to the review list and restrictions
  const [startPoint, setStart] = useState(0);
  const [filterRating, setFilterRating] = useState([]);
  const [noMoreResults, setNoMoreResults] = useState(false);

  //hooks related to controlling parameters for review GET requests
  const [count, setCount] = useState(10);
  const [reviewList, setReviewList] = useState([]);
  const [dropDownSort, setDropDownSort] = useState('relevant');

  //metaReview and form hooks
  const [metaReview, setMetaReview] = useState({});
  const [totalRatings, setTotalRatings] = useState(0);
  const [form, formClick] = useState(false);

  //search hook
  const [currentSearch, setCurrentSearch] = useState('');

  //Submits GET request to results and obtains 2 new reviews
  let getTwoReviews = () => {
    axios.get('/reviews', { params: { id: currentProductId, count: count, sort: dropDownSort } })
      .then(results => {
        if (results.data.results) {
          let updatedPage = reviewList.concat(results.data.results.slice(startPoint, (startPoint + 2)));
          setReviewList(updatedPage);
          setStart(prevState => prevState += 2);
        } else {
          setnoMoreResults(true);
        }
      })
      .catch(err => console.log(err));
  };

  //Submits GET request to results and obtains ALL new reviews
  let getPageReviews = () => {
    axios.get('/reviews', { params: { id: currentProductId, count: count, sort: dropDownSort } })
      .then(results => {
        let updatedPage = (results.data.results.slice(0, startPoint));
        setReviewList(updatedPage);
      })
      .catch(err => console.log(err));
  };

  //Submits GET request to meta and obtains meta information for the product
  let getMetaReview = (id) => {
    axios.get('/meta', { params: { id: id } })
      .then(results => { setMetaReview(prevState => results.data); })
      .catch(err => console.log(err));
  };

  //toggles opening and closing of form
  let closeForm = () => {
    formClick(false);
  };

  //On initialization, gets metareview and two reviews
  useEffect(() => {
    getTwoReviews(currentProductId);
    getMetaReview(currentProductId);
  }, []);

  //increases count state when startPoint reaches the same value
  useEffect(() => {
    if (startPoint === count) {
      setCount(prevState => prevState += 10);
    }
  }, [startPoint]);

  //Monitors for changes in dropDownSort after initialization and gets new sorted info on change
  //tech debt-temporary fix?
  useEffect(() => {
    startPoint >= 2 ? getPageReviews() : null;
  }, [dropDownSort]);

  //Adds and removes rating filters
  let toggleFilter = async (rating) => {
    if (filterRating.includes(rating)) {
      let position = filterRating.indexOf(rating);
      filterRating.splice(position, 1);
      setFilterRating(filterRating);
    } else {
      filterRating.push(rating);
      setFilterRating(filterRating);
    }
    getPageReviews();
  };

  return (
    <Grid>
      <Row>
        <Col>
          <MetaReview
            metaReview={metaReview}
            currentProductRating={currentProductRating}
            getPageReviews={getPageReviews}
            toggleFilter={toggleFilter}
            setFilterRating={setFilterRating}
            filterRating={filterRating}
            setTotalRatings={setTotalRatings}
            totalRatings={totalRatings} />
        </Col>
        <Col size='1.8'>
          <label> {totalRatings} reviews, sorted by: </label>
          <select value={dropDownSort} onChange={event => setDropDownSort(event.target.value)}>
            <option value='helpful'>Helpfulness</option>
            <option value='newest'>Newest</option>
            <option value='relevant'>Relevance</option>
          </select>
          <SearchBar setCurrentSearch={setCurrentSearch} />
          <Scroll> {
            reviewList.length > 1 ?
              <ReviewMapper
                reviewList={reviewList}
                filterRating={filterRating}
                currentSearch={currentSearch} /> : null}
          </Scroll>
          <div><Form closeForm={closeForm.bind(this)} form={form} metaReview={metaReview} currentProductId={currentProductId} /></div>
          <div> {!noMoreResults ? <Button
            onClick={() => getTwoReviews(currentProductId)}>More Reviews</Button> : null}
            <Button
              data-testid='addReview'
              onClick={() => formClick(true)}>Add a Review + </Button></div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Reviews;


