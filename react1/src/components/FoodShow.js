import { useState } from "react";
import FoodEdit from "./FoodEdit";

const FoodShow = ({meal, onDelete, onEdit}) => {
const [showEdit, setShowEdit] = useState(false);

    const handleDeliteClick = () => {
        onDelete(meal.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle)
    };

    let content = <h3>{meal.title}</h3>;
    if (showEdit) {
        content = <FoodEdit onSubmit={handleSubmit} meal={meal}/>
    }

    return (
        <div className="food-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeliteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default FoodShow;