const MetaReview = (props) => {
  return (
    <div>
      <div>Average Review: {props.metaReview.product_id}</div>
      <div> % of reviewers recommend this product.</div>
    </div>
  );
};

export default MetaReview;