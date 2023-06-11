const CategoryCard = ({category}) => {
  const { image, categoryName, description } = category;
//   console.log({ category });
  return (
    <div className='category-card'>
      <img src={image} alt={categoryName} />
      <p className="category-title">{categoryName}</p>
      {/* <p className="category-desc">{description}</p> */}
    </div>
  );
};

export default CategoryCard;
