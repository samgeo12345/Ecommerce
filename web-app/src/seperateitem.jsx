import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import './seperateitems.css'
import Counter from './counters.jsx'

function RecipeItems() {
  const [Recipe, setRecipe]= useState(null);
  const{id} = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, []);

  if (!Recipe) return <p>Loading…</p>;

  return (
    <div className="maincontentdiv2">
          <div className="contentdiv2" key={Recipe.id}>
            <div className="imgdiv2">
            <img src={Recipe.image} alt="" />
            </div>
            <div className="itemdetaildiv2">
            <h3>{Recipe.name}</h3>
            <p>{Recipe.ingredients}</p>
            <p className="ratingp2">Rating ({Recipe.rating})
              <div>
                <FontAwesomeIcon icon={faStar} className="i rated" />
                <FontAwesomeIcon icon={faStar} className="i rated" />
                <FontAwesomeIcon icon={faStar} className="i rated" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
              </div>
            </p>
            <div className="rupcuisinediv2">
            <h3>₹ {Recipe.caloriesPerServing-1}</h3>
            <p>{Recipe.cuisine}</p>
            </div>
            <div className="btns2">
            <div className="countersdiv">
              <Counter/>
            </div>
            <button className="button">Order now</button>
            </div>
            </div>
          </div>
    </div>
  );
}

export default RecipeItems;
