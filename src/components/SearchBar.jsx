import { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const Navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault()
    Navigate(`/search?q=${term}`)



  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          search:
          <input
            type="text"
            id="search"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            required
          />
        </label>
      </form>
    </div>
  );
}
