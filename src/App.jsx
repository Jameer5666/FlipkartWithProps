import './App.css'
import Mobile from './componant/Mobile'

function App() {
  const mob = [
    {
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/0/e/-original-imahagbrshzhznjc.jpeg?q=70",
      mobile: "SAMSUNG Galaxy F06 5G (Lit Violet, 128 GB)  (4 GB RAM)",
      rating: "4.21,353 Ratings & 102 Reviews",
      storage: "4 GB RAM | 128 GB ROM | Expandable Upto 1500 GB",
      size: "17.02 cm (6.7 inch) HD+ Display",
      camera: "50MP + 2MP | 8MP Front Camera",
      battery: "5000 mAh Battery",
      processor: "Dimensity 6100+ Processor",
      price: "14999",
      mrp: "13999"
    },
    {
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/p/c/-original-imah9khhnfvstqka.jpeg?q=70",
      mobile: "Apple iPhone 16e (Black, 128 GB)",
      rating: "4.21,353 Ratings & 102 Reviews",
      storage: "128 GB ROM",
      camera: "48MP + 12MP | 12MP Front Camera",
      size: "15.49 cm (6.1 inch) Super Retina XDR Display",
      battery: "5000 mAh Battery",
      processor: "A18 Chip, 6 Core Processor",
      price: "56999",
      mrp: "79900"
    },
    {
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/c/a/t4x-5g-v2437-vivo-original-imah9ytgyyfyfkqr.jpeg?q=70",
      mobile: "Vivo T4x 5G",
      rating: "4.55,804 Ratings & 444 Reviews",
      storage: "8 GB RAM | 128 GB ROM",
      size: "17.07 cm (6.72 inch) Display",
      camera: "50MP + 2MP | 8MP Front Camera",
      battery: "6500 mAh Battery",
      processor: "Dimensity 7300 5G Processor",
      price: "18999",
      mrp: "19499"
    },
    {//ch
      src:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/q/m/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg?q=70",
      mobile:"MOTOROLA g35 5G (Midnight Black, 128 GB)  (4 GB RAM)",
      rating:"4.229,318 Ratings & 2,442 Reviews",
      storage:"4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      size:"17.07 cm (6.72 inch) Full HD+ Display",
      camera:"50MP + 8MP | 16MP Front Camera",
      battery:"5000 mAh Battery",
      processor:"T760 Processor",
      price:"9,999",
       mrp: "12499"
    },
    {
      src:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70",
      mobile:"SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)  (12 GB RAM)",
      rating:"4.61,560 Ratings & 144 Reviews",
      storage:"12 GB RAM | 256 GB ROM",
      size:"17.27 cm (6.8 inch) Quad HD+ Display",
      camera:"200MP + 50MP + 12MP + 10MP | 12MP Front Camera",
      battery:"5000 mAh Battery",
      processor:"Snapdragon 8 Gen 3 Processor",
      price:"1,02,990",
       mrp: "1,34,499"
    },
    {
      src:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/5/h/-original-imahyvnuta2aadbw.jpeg?q=70",
      mobile:"SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)  (12 GB RAM)",
      rating:"4.61,560 Ratings & 144 Reviews",
      storage:"12 GB RAM | 256 GB ROM",
      size:"17.27 cm (6.8 inch) Quad HD+ Display",
      camera:"200MP + 50MP + 12MP + 10MP | 12MP Front Camera",
      battery:"5000 mAh Battery",
      processor:"Snapdragon 8 Gen 3 Processor",
       price:"1,02,990",
       mrp: "1,34,499"
    },
    {
      src:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/5/h/-original-imahyvnuta2aadbw.jpeg?q=70",
      mobile:"SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)  (12 GB RAM)",
      rating:"4.61,560 Ratings & 144 Reviews",
      storage:"12 GB RAM | 256 GB ROM",
      size:"17.27 cm (6.8 inch) Quad HD+ Display",
      camera:"200MP + 50MP + 12MP + 10MP | 12MP Front Camera",
      battery:"5000 mAh Battery",
      processor:"Snapdragon 8 Gen 3 Processor",
       price:"1,02,990",
       mrp: "1,34,499"
    }

  ];

  return (
    <div className='main'>
      <h1 className='titl'>FlipKart</h1>
      {mob.map((item, index) => (
        <Mobile
          key={index}
          src={item.src}
          mobile={item.mobile}
          rating={item.rating}
          storage={item.storage}
          size={item.size}
          camera={item.camera}
          battery={item.battery}
          processor={item.processor}
          price={item.price}
          mrp={item.mrp}
        />
      ))}
    </div>
  );
}

export default App;
