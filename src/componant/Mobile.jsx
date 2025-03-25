import '../css/Mobile.css'

function Mobile(props) {
  return (
    <div className="componant">
      <div className="child1">
        <img src={props.src} alt={props.mobile} />
      </div>
      <div className="child2">
        <h2>{props.mobile}</h2>
        <h3>{props.rating}</h3>
        <ul>
          <li>{props.storage}</li>
          <li>{props.size}</li>
          <li>{props.camera}</li>
          <li>{props.battery}</li>
          <li>{props.processor}</li>
        </ul>
      </div>
      <div className="child3">
        <div className='price'>
          <h1>₹{props.price}</h1>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="Flipkart logo" />
        </div>
        <div id='dic'>
          <span id='ac-price'>₹{props.mrp}</span>
          <h3> 34% off</h3>
        </div>
        <p>Free delivery</p>
        <p>Save extra with combo offers</p>
        <h4>Upto ₹6,250 Off on Exchange</h4>
      </div>
    </div>
  );
}

export default Mobile;
