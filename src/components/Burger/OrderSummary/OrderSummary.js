import React, {Component} from "react"

import Auxiliary from "../../../hoc/Auxiliary/Auxiliary"
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
  
  // This could be a functional component, does'nt have to be a class component.

  // componentWillUpdate(){
  //   console.log("[Order Summary] update")
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients) // object into an array
    .map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return(
        <Auxiliary>
          <h3>Siparişiniz</h3>
          <p>Hamburgeriniz için tercih ettiğiniz malzemelerimiz:</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Toplam fiyat: {this.props.price.toFixed(2)}</strong></p>
          <p>Ödeme yapın</p>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>İptal</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>Devam et</Button>
        </Auxiliary>
    )
  }
}

export default OrderSummary
