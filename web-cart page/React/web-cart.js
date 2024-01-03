import CartContainer from "../components/cart-container";
import CheckoutForm from "../components/checkout-form";
import LayoutheaderAlibaba from "../components/layoutheader-alibaba";
import LayoutfooterAlibaba from "../components/layoutfooter-alibaba";
import MoveToCartForm from "../components/move-to-cart-form";
import ShopNowForm from "../components/shop-now-form";
import FormContainer from "../components/form-container";
import "./web-cart.css";

const WebCart = () => {
  return (
    <div className="web-cart">
      <CartContainer />
      <CheckoutForm />
      <LayoutheaderAlibaba
        bG="/bg@2x.png"
        vector="/vector@2x.png"
        vector1="/vector@2x.png"
        vector2="/vector@2x.png"
        vector3="/vector@2x.png"
        background="/-background@2x.png"
        iconcontrolexpandMore="/iconcontrolexpand-more@2x.png"
        background1="/-background@2x.png"
        icon0="/icon0@2x.png"
        background2="/-background@2x.png"
        brand="/brand@2x.png"
        brandlogoSymbol="/brandlogosymbol@2x.png"
        showSearchForm={false}
        layoutheaderAlibabaPosition="absolute"
        layoutheaderAlibabaTop="0px"
        layoutheaderAlibabaLeft="0px"
      />
      <LayoutfooterAlibaba
        brand="/brand@2x.png"
        brandlogoSymbol="/brandlogosymbol@2x.png"
        iconContactsocialfacebook="/iconcontactsocialfacebook3@2x.png"
        iconContactsocialtwitter3="/iconcontactsocialtwitter3@2x.png"
        iconContactsociallinkedin="/iconcontactsociallinkedin3@2x.png"
        iconContactsocialinstagra="/iconcontactsocialinstagram3@2x.png"
        iconContactsocialyoutube3="/iconcontactsocialyoutube3@2x.png"
        uS2x="/us2x@2x.png"
        iconcontrolexpandLess="/iconcontrolexpand-less@2x.png"
        subtract="/subtract@2x.png"
        logo="/logo@2x.png"
        layoutfooterAlibabaPosition="absolute"
        layoutfooterAlibabaTop="1483px"
        layoutfooterAlibabaLeft="0px"
      />
      <MoveToCartForm />
      <ShopNowForm />
      <div className="my-cart-3">My cart (3)</div>
      <div className="group-parent">
        <div className="description-parent">
          <div className="description">{`Have you ever finally just `}</div>
          <div className="name">Secure payment</div>
        </div>
        <img className="icon" alt="" src="/icon@2x.png" />
      </div>
      <div className="item-feature">
        <div className="description1">{`Have you ever finally just `}</div>
        <div className="name1">Customer support</div>
        <img className="icon" alt="" src="/icon@2x.png" />
      </div>
      <div className="item-feature1">
        <div className="description-group">
          <div className="description">Have you ever finally just</div>
          <div className="name2">Free delivery</div>
        </div>
        <img className="icon" alt="" src="/icon@2x.png" />
      </div>
      <FormContainer />
    </div>
  );
};

export default WebCart;
