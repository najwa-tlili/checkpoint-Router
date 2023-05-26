import React from "react";

const Rate = ({ rating, setRating }) => {
  const stars = (star) => {
    const ArrayOfStar = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= star) {
        ArrayOfStar.push(
          <span 
            key={i}
            style={{ color:"gold", fontSize: "30px", cursor: "pointer" }}
            onClick={() => setRating(i)}
          >
          ★
          </span>
        );
      } else {
       ArrayOfStar.push(
          <span
            key={i}
            style={{color: "silver", fontSize: "30px", cursor: "pointer"}}
            onClick={() => setRating(i)}
          >
         ☆
          </span>
        );
      }
    }
    return ArrayOfStar;
  };
  return <div style={{ height: "45px" }} >{stars(rating)}</div>;
};

Rate.defaultProps = {
    setRating: () => {},
  };


export default Rate;