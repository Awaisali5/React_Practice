import "./Card.css";
function Card({ title = "React", Description = "lorem", locations}) {
 
  return (
    
    <div className="card">
      <img src="vite.svg" alt="some img" className="card-img" />
      <h1>{title}</h1>
      <p className="description">{Description}</p>
      {/* {locations}   */}

      <p>
        {locations.map((location)=>{
         return  <li>{location}</li> 
        })}
      </p>
    
        

    </div>
  );
}

export default Card;
