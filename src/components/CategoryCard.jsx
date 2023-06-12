const CategoryCard = ({category}) => {
  const { image, categoryName } = category;
  return (
    <div className='category-card'>
      <img src={image} alt={categoryName} />
      <p className="category-title">{categoryName}</p>
    </div>
  );
};

export default CategoryCard;
