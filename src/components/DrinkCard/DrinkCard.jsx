import React from 'react'

const DrinkCard = ({drinkInfo}) => {
  const drinkCard = {...drinkInfo, favorited:true}


  return (
    <div className="drink-card" data-favorite={drinkCard.favorited}>
      <h3>{drinkCard.drinkName}</h3>
      <div className="drink-card-info">
        <img src={drinkCard.drinkImageSource} alt={`${drinkCard.drinkName}`} />
        <p>glass: {drinkCard.glass}</p>
        <p>{drinkCard.alcoholic}</p>
      </div>
      <div className='drink-card-instructions'>
        {drinkCard.instructions}
        {drinkCard.ingredients.map(item => {
          if (item.ingredient) {
            return <p>{item.ingredient} : {item.amount}</p>
          }
        })}
      </div>
    </div>
  ) 
}

export default DrinkCard
