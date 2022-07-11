const MetaReview = ({currentProductRating}) => {
  return (
    <div>
      <div>Average Review: {currentProductRating}</div>
      <div> % of reviewers recommend this product.</div>
    </div>
  );
};

export default MetaReview;