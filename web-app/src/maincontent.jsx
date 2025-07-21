import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
function Maincontents(){
  const [Recipies, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((result) => {
          setRecipes(result.data.recipes);
      })
      .catch((e) => {
        console.error("Error Fetching ", e);
      });
  }, []);

  

  return (
    <div className="maincontentdiv">
        { Recipies.map((p)=>(
          <div className="contentdiv" key={p.id}>
            <img src={p.image} alt="" />
            <div className="itemdetaildiv">
            <h3>{p.name}</h3>
            <p className="ratingp">Rating ({p.rating})
              <div>
                <FontAwesomeIcon icon={faStar} className="i rated" />
                <FontAwesomeIcon icon={faStar} className="i rated" />
                <FontAwesomeIcon icon={faStar} className="i rated" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
              </div>
            </p>
            <div className="rupcuisinediv">
            <h3>₹ {p.caloriesPerServing-1}</h3>
            <p>{p.cuisine}</p>
            </div>
            <div className="btns">
            <Link to={`/pro/${p.id}`} className="see">See details</Link>
            <button>Order now</button>
            </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Maincontents