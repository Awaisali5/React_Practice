import "./Card.css";
function Card({ title = "React", Description = "lorem", locations}) {
 
  return (
    
    <div className="card">
      <img src="vite.svg" alt="some img" className="card-img" />
      <h1>{title}</h1>
      <p className="description">{Description}</p>
      {locations}  
{/* 
      <p>
        {locations.map((location)=>{
          <li>{location}</li> this code is not working it displau map is not define
        })}
      </p> */}
    
        

    </div>
  );
}

export default Card;
