import React from 'react';
import IngredientBlock from './IngredientBlock.js';

class Sidebar extends React.Component
{
	constructor(){
		super();
	}

	render(){
			return 	<div id = 'sidebar'>
						<IngredientBlock
							inputsNumber = {3}
							id = 'block17'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/05/231.png'
							parameterName = 'Размер'
							checkParameter = 'Размер'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {1}
							id = 'block15'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/05/233.png'
							parameterName = 'Сыры'
							checkParameter = 'Сыр'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {1}
							id = 'block16'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/05/231.png'
							parameterName = 'Соус'
							checkParameter = 'Томатный'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
			
						<IngredientBlock
							inputsNumber = {3}
							id = 'block1'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/05/226.png'
							parameterName = 'Бекон'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {30}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block2'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/05/235.png'
							parameterName = 'Свиная ветчина'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {25}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block3'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/05/237.png'
							parameterName = 'Куриная грудка'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {15}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block4'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/05/239.png'
							parameterName = 'Пепперони'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block5'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/servelat.png'
							parameterName = 'Сервелат'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block6'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/krevetki.png'
							parameterName = 'Креветки'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block7'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/tomati.png'
							parameterName = 'Томаты'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block8'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/gribi.png'
							parameterName = 'Грибы свежие'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block9'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/perechalapeniy.png'
							parameterName = 'Перец халапеньо'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block10'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/ogyrci-mar.png'
							parameterName = 'Огурцы маринованные'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block11'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/lyk-repchatiy.png'
							parameterName = 'Лук репчатый'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block12'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/ananasi.png'
							parameterName = 'Ананасы'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block13'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/maslini.png'
							parameterName = 'Маслины'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
						
						<IngredientBlock
							inputsNumber = {3}
							id = 'block14'
							addIngredientToBigPizza = {this.props.addIngredientToBigPizza.bind(this)}
							deleteIngredient = {this.props.deleteIngredient.bind(this)}
							imgSrc = 'https://gogopizza.by/wp-content/uploads/2019/06/248.png'
							parameterName = 'Брокколи'
							checkParameter = 'Количество'
							changeTotalPrice = {this.props.changeTotalPrice}
							sum = {10}
						/>
					</div>	
	}
}

export default Sidebar;