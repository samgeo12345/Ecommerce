import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh, faSpinner, faStar } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
function Maincontents({searchTerm}){
  const [Recipies, setRecipes] = useState(null);

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

  if (!Recipies){ return <div className="loadingdiv">
    <h2><FontAwesomeIcon icon={faSpinner} spin/> Loading</h2>
    </div>
  };
  
  const filteredRecipies = Recipies.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if(filteredRecipies.length===0){
    return <div className="noitemdiv">
        <FontAwesomeIcon icon={faFaceMeh} className="i" shake/>
        <h2>No Items Found</h2>
        </div>
  }

  return (
    <div className="maincontentdiv">
        {filteredRecipies.map((p)=>(
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
            <Link to={`/recipe/${p.id}`} className="see">Select</Link>
            </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Maincontents