import React from 'react';

class CheckParametersBlock extends React.Component
{
	constructor(){
		super();
		this.state = {
						checked : [],
						//число отмеченных чекбоксов
						counter : 0
					 };
	}
	
	componentDidMount(){
		const checkedArr = Array(this.props.inputsNumber).fill(false);
		this.state.checked = checkedArr;
		this.setState({checked : this.state.checked});
		console.log(this.state.checked );
	}
	
	changeCheckHandler(event){
		this.state.checked[event.target.id] = !this.state.checked[event.target.id];
		this.setState({	checked : this.state.checked});
		console.log(this.state.checked);
		let checked = this.state.checked[event.target.id];

		if(checked){
			this.state.counter++;
			this.setState({counter : this.state.counter});
			this.props.addIngredientToBigPizza(this.props.addImageSrc);
			
			this.props.changeTotalPrice(this.props.sum);
			
		}
		else{
			this.state.counter--;
			this.setState({counter : this.state.counter});
			this.props.deleteIngredient(this.props.addImageSrc);
			
			this.props.changeTotalPrice(-this.props.sum);
		}
		
		if(this.props.parameterName == 'Размер')
			this.props.checkIngredient(event.target.dataset.pizza_size, this.state.counter);
		else if(this.props.parameterName == 'Cоус'||this.props.parameterName == 'Сыры') 
			this.props.checkIngredient(this.props.checkParameter, this.state.counter);
		else
			this.props.checkIngredient(this.props.parameterName, this.state.counter);
	}
	
	render(){
		const pizzaSizes = ['23см','31см','43см'];
		const inputs = this.state.checked.map((checked, index) => {
			return <input 
							key = {index}
							type = 'checkbox'
							id = {index}
							checked = {checked}
							data-pizza_size = {pizzaSizes[index]}
					/>
		});
		
			return 	<div id = {this.props.id}
						 className = 'checkParametersBlock' 
						 onChange = {this.changeCheckHandler.bind(this)}>
						<div className = 'parameterName'>{this.props.checkParameter}</div>
						{inputs}
					</div>
	}
}

export default CheckParametersBlock;