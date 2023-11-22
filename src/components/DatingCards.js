import React, { useState } from 'react';
import DatingCard from 'react-tinder-card';
import './DatingCards.css';
const DatingCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Random Guy',
      imgUrl:
        'https://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg',
    },
    {
      name: 'Another Guy',
      imgUrl:
        'https://i0.wp.com/engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png?w=791&ssl=1',
    },
    {
      name: 'Random Girl',
      imgUrl:
        'https://www.freepik.com/premium-photo/ai-generated-hyperrealistic-3d-illustration-portrait-black-female-model-earrings-necklace-with-afro-braids-against-brown-background-looking-camera_37999943.htm',
    },
    {
      name: 'Another Girl',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/f/f3/Jean_Shrimpton_%281965%29_2.jpg',
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log('receiving ' + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + ' left the screen!!');
  };
  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <DatingCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;
