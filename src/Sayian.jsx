//react
import { useState } from "react";

// CSS
import './Sayian.css';

function Sayian() {
  const star = 'public/IMAGES/stars.webp';

  const flavourChoice = [
    { id: '1', span: 'PEACH', IMG: 'public/IMAGES/peach_flavour.webp', color: '#f98a03', soda: 'public/IMAGES/dragon__.webp' },
    { id: '2', span: 'LIME', IMG: 'public/IMAGES/lime_flavour.webp', color: '#69ac0b', soda: 'public/IMAGES//lime__.webp' },
    { id: '3', span: 'DRAGONFRUIT', IMG: 'public/IMAGES/dragon_flavour.webp', color: '#ff21ce', soda: 'public/IMAGES/dragon__.webp' },
    { id: '4', span: 'LEMON', IMG: 'public/IMAGES/lemon_flavour.webp', color: '#dfc129', soda: 'public/IMAGES/lemon__.webp' },
    { id: '5', span: 'STRAWBERRY', IMG: 'public/IMAGES/strawberry_flavour.webp', color: '#e0241d', soda: 'public/IMAGES/strawberry__.webp' },
    { id: '6', span: 'GRAPE', IMG: 'public/IMAGES/grape_flavour.webp', color: '#6b32ce', soda: 'public/IMAGES/grape__.webp' },
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
