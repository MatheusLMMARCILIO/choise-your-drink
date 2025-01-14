//react
import { useState } from "react";

// CSS
import './Sayian.css';

function Sayian() {
  const star = './IMAGES/stars.webp';

  const flavourChoice = [
    { id: '1', span: 'PEACH', IMG: '/IMAGES/peach_flavour.webp', color: '#f98a03', soda: '/IMAGES/dragon__.webp' },
    { id: '2', span: 'LIME', IMG: '/IMAGES/lime_flavour.webp', color: '#69ac0b', soda: '/IMAGES//lime__.webp' },
    { id: '3', span: 'DRAGONFRUIT', IMG: '/IMAGES/dragon_flavour.webp', color: '#ff21ce', soda: '/IMAGES/dragon__.webp' },
    { id: '4', span: 'LEMON', IMG: '/IMAGES/lemon_flavour.webp', color: '#dfc129', soda: '/IMAGES/lemon__.webp' },
    { id: '5', span: 'STRAWBERRY', IMG: '/IMAGES/strawberry_flavour.webp', color: '#e0241d', soda: '/IMAGES/strawberry__.webp' },
    { id: '6', span: 'GRAPE', IMG: '/IMAGES/grape_flavour.webp', color: '#6b32ce', soda: '/IMAGES/grape__.webp' },
  ];


  const [flavour, setFlavour] = useState(flavourChoice[0].span); 
  const [background, setBackground] = useState(flavourChoice[0].color); 
  const [Soda, setSoda] = useState(flavourChoice[0].soda);

  return (
    <section className="container" style={{ backgroundColor: background }}>
      <div className="flavour__box">
        <img src={star} alt="Reviews" />
        <h1>{flavour}</h1>
        <p>$ 8.00 USD</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod tempor.
        </span>

        <div className="map__flavour">
          <ul>
            {flavourChoice.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setFlavour(item.span); // Atualiza o sabor
                  setBackground(item.color); // Atualiza a cor de fundo
                  setSoda(item.soda); // Atualiza a imagem da lata
                }}
              >
                <img src={item.IMG} alt={item.span} />
                <span>{item.span}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flavour__img">
        <img src={Soda} alt={flavour} />
      </div>
    </section>
  );
}

export default Sayian;
