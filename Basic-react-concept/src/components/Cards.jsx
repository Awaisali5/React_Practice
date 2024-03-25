import React from "react";
import Card from "./Card";
import "./Cards.css"

function Cards(){
    return (
        <div className="cards">
        <Card  title="Props" Description="Props are like argument in the function " locations={['Pakistan  ', 'United state']}/>
        <Card title="React" Description="It is the JS library which is mainly based on the component" locations={['India  ', 'United state']} />
        <Card title="Practice" Description="Practice Practice Practice" locations={['Canada  ', 'United state']} />

        </div>
    )
}

export default Cards;