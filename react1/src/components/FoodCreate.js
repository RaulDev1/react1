import { useState } from "react";

const FoodCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
    };

    return (
        <div className="food-create">
            <h></h>
            <form onSubmit={handleSubmit}>
                <label>Please enter food name </label>
                <input className="input-name" value={title} onChange={handleChange} />
                <button className="button">Enter</button>
            </form>
        </div>
    );
}

export default FoodCreate;