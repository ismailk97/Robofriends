import React from 'react';

const Card =(props) =>{
return(
	//className inneholder tachyon elementer for css
	//vi henta random bilder med {`nettstedt/${props.id}`}
	<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"> 
		<img alt='robots' src={`https://robohash.org/${props.id}?100x100`}/>
		<div>
		<h2>{props.name}</h2>
		<p>{props.email}</p>
		</div>
	</div>
	);
}

export default Card;