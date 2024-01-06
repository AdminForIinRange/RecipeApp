import { useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipes, isPending, error } = useFetch(url);


 



  return (
    <div className="recipe">
      {error && <div className="error"></div>}
      {isPending && <div className="loading">loading...</div>}
      {recipes && (
        <>
          <h2 className="page-title">{recipes.title}</h2>
          <p>Takes {recipes.cookingTime} to cook.</p>

          <ul>
            {recipes.ingredients.map(ingredient => (
             <li key={ingredient}> {ingredient}</li>
              
            ))}
          </ul>
          <p className="method">
            {recipes.method}
          </p>
        </>
      )}
    </div>
  );
}
