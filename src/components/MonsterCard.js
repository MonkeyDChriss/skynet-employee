import React from 'react';


const MonsterCard = ({ name, email, id }) => {
	//const Card = (props) => {
/*const { name, email, id } = props;*/
	return (

		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt ='robots' src ={`https://robohash.org/${name}?set=set2`}/>
			<div>
					<h2>{name}</h2>
					<p>{email}</p>
			</div>
		</div> 

		);
}


export default MonsterCard;