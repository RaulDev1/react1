import { useState } from "react";

const FoodEdit = ({ meal, onSubmit }) => {
    const [title, setTitle] = useState(meal.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(meal.id, title);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="Food-Edit">
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">
                    Save
                </button>
            </form>
        </div>
    );
}

export default FoodEdit;