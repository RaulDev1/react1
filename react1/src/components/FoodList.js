import FoodShow from './FoodShow';

const FoodList = ({ food, onDelete, onEdit}) => {
    const renderedFood = food.map((meal) => {
        return <FoodShow onEdit={onEdit} onDelete={onDelete} key={meal.id} meal={meal} />;
    });
    return (
        <div className='food-list'>
            {renderedFood}
        </div>
    );
}

export default FoodList;