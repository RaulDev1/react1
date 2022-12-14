import './App.css';
import { useState } from 'react';
import FoodCreate from './components/FoodCreate';
import FoodList from './components/FoodList';

const App = () => {
  const [food, setFood] = useState([]);

  const editMealById = (id, newTitle) => {
    const updatedFood = food.map((meal) => {
      if (meal.id === id) {
        return { ...meal, title: newTitle };
      }

      return meal;
    });

    setFood(updatedFood);
  };

  const deleteMealById = (id) => {
      const updatedFood = food.filter((meal) => {
        return meal.id !== id;
      });

      setFood(updatedFood);
  };

  const createFood = (title) => {
    const updateFood = [...food, {
      id: Math.round(Math.random() * 9999),
      title }];
    setFood(updateFood);
  };

  return (
    <div className="App">
      <FoodList onEdit={editMealById} food = {food} onDelete={deleteMealById}/>
      <FoodCreate onCreate={createFood} />
    </div>
  );
}

export default App;