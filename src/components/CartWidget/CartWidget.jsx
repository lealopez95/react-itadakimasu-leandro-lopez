import basket from '../../img/shopping-basket.svg';
import './CartWidget.css';

const CartWidget = () => (
    <div className="cart-wrapper">
        <button className="cart-button">
            <img src={basket} alt="Canasta de compras" />
        </button>
        <p>0</p>
    </div>
);

export default CartWidget;