import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faSpinner} from '@fortawesome/free-solid-svg-icons';
import { useParams,Link } from "react-router-dom";
import './seperateitems.css'
import Counter from './counters.jsx'

function RecipeItems() {
  const [Recipe, setRecipe]= useState(null);
  const [count, setCount] = useState(1);
  const{id} = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, []);

  if (!Recipe){ return <div className="loadingdiv">
    <h2><FontAwesomeIcon icon={faSpinner} spin/> Loading</h2>
    </div>
  };

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
              <Counter onCountChange={setCount}/>
            </div>
            <div className="orderbtndiv">
            <Link to={`/order/${Recipe.id}`} state={{quantity:count}} className="button">Order now</Link>
            </div>
            </div>
            </div>
          </div>
    </div>
  );
}

export default RecipeItems;
