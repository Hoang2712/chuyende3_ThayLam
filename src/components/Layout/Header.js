import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/logone.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes['logo']} width={80} src={mealsImage} alt="" />
        <h1>ClothingStore</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>

        {/* <img 
         src="https://images.unsplash.com/photo-1617286647344-95c86d56748a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
         alt='A table full of delicious food!' /> */}
         <div className={classes['slogan']}>
         <h2 className={classes['slogan-text1']}>Clothing Store</h2>
           <h2 className={classes['slogan-text2']}>NƠI THỎA MẢN ĐAM MÊ MUA SẮM CỦA BẠN</h2>
           <p>Chúng tôi sẽ luôn cố gắng để đáp ứng nhu cầu mua sắm cho bạn. Những mẫu hàng mới nhất, đáng được trông chờ nhất sẽ được cập nhật liên tục.
              Nếu các bạn vẫn luôn tin tưởng thì chúng mình sẽ luôn luôn cố gắng để mang cho bạn trải nghiệm tốt nhất.
           </p>
         </div>
      </div>
    </Fragment>
  );
};

export default Header;
