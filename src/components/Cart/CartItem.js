import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${parseInt(props.price).toFixed()}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <div className={classes.formtop}>
          <h2>{props.name}</h2> 
          <button onClick={props.onRemoveProduct} className={classes.x}>X</button>
        </div>
        <div className={classes.summary}>
          <img className={classes.imge} src={props.image} alt="" />
          <div className={classes.container_info}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
