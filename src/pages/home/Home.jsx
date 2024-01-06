import { useEffect, useState } from "react";
import { useFetch } from "../../hook/useFetch";
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const [url, setUrl] = useState("http://localhost:3000/recipes");
  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <div className="home">
   
      {error && <div className="error"></div>}
      {isPending && <div className="loading">loading...</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
