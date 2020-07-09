import React from 'react';
import SelectIngredientBlock from './SelectIngredientBlock.js';
import CheckParametersBlock from './CheckParametersBlock.js';

class IngredientBlock extends React.Component
{
	constructor(){
		super();
		
		this.state = {
						checkedIngredients : '',
						counter : 0,
					 };
	}
	
	checkIngredient(ingredients, counter){
			if(counter == 0)
				this.state.checkedIngredients = '';
			else{
				if(this.props.parameterName == 'Размер' || this.props.parameterName == 'Сыры'||
				this.props.parameterName == 'Соус'){
					this.state.checkedIngredients = ingredients;
				}
				else{
					this.state.checkedIngredients = ingredients + ' x' + counter;
				}
			}
			this.state.counter = counter;
			this.setState({counter : this.state.counter, checkedIngredients : this.state.checkedIngredients});
	}
	
	showCheck(){
		let elem = document.getElementById(this.props.id);
		this.animate({
		//здесь задаётся общая длительность анимации
        duration: 500,
		
		//функция скорости (вычисляет прогресс анимации в зависимости от прошедшего времени)
		// например, при линейной функции скорость анимации постоянная
        timing: function(timeFraction) {
          return timeFraction;
        },
		
		//функция отрисовки (здесь задаётся, какой парамет будет меняться во время анимации)
        draw: function(progress) {
          elem.style.height = progress * 70 + 'px';
		  elem.style.padding = progress * 20 + 'px';
        }
      });
	}
	
	animate({duration, draw, timing}) {

	  let start = performance.now();//время, прошедшее с начала загрузки страницы

	//с помощью функции requestAnimationFrame запуск анимации планируется на ближайшее подходящее время
	  requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		let progress = timing(timeFraction)

		draw(progress);

		if (timeFraction < 1) {
		  requestAnimationFrame(animate);
		}

	  });
	}

	render(){
			return 	<div> 
						<SelectIngredientBlock 
							src = {this.props.imgSrc}
							ingredientName = {this.props.parameterName}
							added_ingredients = {this.state.checkedIngredients}
							showCheck = {this.showCheck.bind(this)}
							counter = {this.state.counter}
						/>
						<div>
							<CheckParametersBlock
								id = {this.props.id}
								parameterName = {this.props.parameterName}
								checkParameter = {this.props.checkParameter}
								addImageSrc = {this.props.imgSrc}
								addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
								deleteIngredient = {this.props.deleteIngredient.bind(this)}						
								checkIngredient = {this.checkIngredient.bind(this)}
								sum = {this.props.sum}
								changeTotalPrice = {this.props.changeTotalPrice}
								inputsNumber = {this.props.inputsNumber}
							/>
						</div>
					</div>  
	}
}


export default IngredientBlock;