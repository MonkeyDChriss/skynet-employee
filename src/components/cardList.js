import React from "react";
import Card from "./Card.js";

// import MonsterCard from "./MonsterCard.js";

const CardList = ({ robots }) => {


  // todo: add monster card 
  // if(boolean){
  //   return(
  //     <div>
  //     {robots.map((user, i) => {
  //       return (
  //         <MonsterCard
  //           key={i}
  //           id={robots[i].id}
  //           name={robots[i].name}
  //           email={robots[i].email}
  //         />
  //       );
  //     })}
  //   </div>
  //   );
  // } else {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );}
// };

export default CardList;
