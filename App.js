import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Sidebar from './Sidebar.js';

class App extends React.Component
{
	constructor(){
		super();
		
		this.state = { 
						//массив с scr для изображений, из которых будет формироваться итоговое изображение пиццы
						imgsForBigPizza : ['https://gogopizza.by/wp-content/uploads/2019/05/231.png'],
						totalPrice : 0,
					};	
	}

	addIngredientToBigPizza(imageSrc){
		this.state.imgsForBigPizza.push(imageSrc);
		this.setState({imgsForBigPizza : this.state.imgsForBigPizza});
	}
	
	deleteIngredient(imageSrc){
		let index = this.state.imgsForBigPizza.indexOf(imageSrc);
		this.state.imgsForBigPizza.splice(index,1);
		this.setState({imgsForBigPizza : this.state.imgsForBigPizza});
	}
	
	changeTotalPrice(sum){
		this.state.totalPrice += +sum;
		this.setState({totalPrice : this.state.totalPrice});
	}
	
	render(){
		let bigPizzaImg = this.state.imgsForBigPizza.map((src,index) => {
			return <img key = {index} src = {src}/>
		});
		
		return  <div id = 'parent'>	
					<Sidebar
						addIngredientToBigPizza = {this.addIngredientToBigPizza.bind(this)}
						deleteIngredient = {this.deleteIngredient.bind(this)}
						
						changeTotalPrice = {this.changeTotalPrice.bind(this)}
					/>
					
					<div id = 'totalPrice'>
						Цена: <span className = 'sum'>{this.state.totalPrice} руб.</span>
					</div>
					<div id = 'bigPizzaImg'>
						{bigPizzaImg}
					</div>
				</div>		
	}
}

export default App;
