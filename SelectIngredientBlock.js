import React from 'react';

class SelectIngredientBlock extends React.Component
{
	constructor(){
		super();
	}
	
	render(){
			let arr = [];
			for(let i = 0; i < this.props.counter; i++){
				arr.push(i);
			}
			
			let smallIngredientImgs = null;
			if(this.props.ingredientName != 'Размер'){
				smallIngredientImgs = arr.map((item, index) => {
					return <li key = {index}>
								<img src = {this.props.src}/>
						   </li>
				});
			}
			
			return 	<div 
						className = 'selectIngredientBlock'
						onClick = {this.props.showCheck}
					>
						<img className = 'selectIngredientImg' src = {this.props.src}/>
						<div>
							{this.props.ingredientName}
							<p className = 'addedIngredients'>{this.props.added_ingredients}</p>
						</div>
						<ul className = 'smallImgs'> {smallIngredientImgs} </ul>
					</div>  
	}
}

export default SelectIngredientBlock;