import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Birthday.css';

const Birthday = () => {
  const cards = [
    { images: ['images/Birthday/i1/a1.webp', 'images/Birthday/i1/a2.webp', 'images/Birthday/i1/a3.webp', 'images/Birthday/i1/a4.webp'] },
    { images: ['images/Birthday/i2/b1.webp', 'images/Birthday/i2/b2.webp', 'images/Birthday/i2/b3.webp', 'images/Birthday/i2/b4.webp'] },
    { images: ['images/Birthday/i3/a1.webp', 'images/Birthday/i3/a2.webp', 'images/Birthday/i3/a3.webp', 'images/Birthday/i3/a4.webp'] },
    { images: ['images/Birthday/i4/a1.webp', 'images/Birthday/i4/a2.webp', 'images/Birthday/i4/a3.webp', 'images/Birthday/i4/a4.webp'] },

    { images: ['images/Birthday/i1/a1.webp', 'images/Birthday/i1/a2.webp', 'images/Birthday/i1/a3.webp', 'images/Birthday/i1/a4.webp'] },
    { images: ['images/Birthday/i2/b1.webp', 'images/Birthday/i2/b2.webp', 'images/Birthday/i2/b3.webp', 'images/Birthday/i2/b4.webp'] },
    { images: ['images/Birthday/i3/a1.webp', 'images/Birthday/i3/a2.webp', 'images/Birthday/i3/a3.webp', 'images/Birthday/i3/a4.webp'] },
    { images: ['images/Birthday/i4/a1.webp', 'images/Birthday/i4/a2.webp', 'images/Birthday/i4/a3.webp', 'images/Birthday/i4/a4.webp'] },

    { images: ['images/Birthday/i1/a1.webp', 'images/Birthday/i1/a2.webp', 'images/Birthday/i1/a3.webp', 'images/Birthday/i1/a4.webp'] },
    { images: ['images/Birthday/i2/b1.webp', 'images/Birthday/i2/b2.webp', 'images/Birthday/i2/b3.webp', 'images/Birthday/i2/b4.webp'] },
    { images: ['images/Birthday/i3/a1.webp', 'images/Birthday/i3/a2.webp', 'images/Birthday/i3/a3.webp', 'images/Birthday/i3/a4.webp'] },
    { images: ['images/Birthday/i4/a1.webp', 'images/Birthday/i4/a2.webp', 'images/Birthday/i4/a3.webp', 'images/Birthday/i4/a4.webp'] },

    { images: ['images/Birthday/i1/a1.webp', 'images/Birthday/i1/a2.webp', 'images/Birthday/i1/a3.webp', 'images/Birthday/i1/a4.webp'] },
    { images: ['images/Birthday/i2/b1.webp', 'images/Birthday/i2/b2.webp', 'images/Birthday/i2/b3.webp', 'images/Birthday/i2/b4.webp'] },
    { images: ['images/Birthday/i3/a1.webp', 'images/Birthday/i3/a2.webp', 'images/Birthday/i3/a3.webp', 'images/Birthday/i3/a4.webp'] },
    { images: ['images/Birthday/i4/a1.webp', 'images/Birthday/i4/a2.webp', 'images/Birthday/i4/a3.webp', 'images/Birthday/i4/a4.webp'] },
  
  ];

  return (
    <div>
      <br /><br />
      <Container className='Birthday_Container'>
        <div>
          <h3 style={{ display: 'inline-block' }}>Ganesh Chaturthi Gifts</h3>
          <p style={{ display: 'inline-block', marginLeft: '2rem' }}>21 Reviews  |  72 of 192 Gifts</p>

          <Nav fill variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link href="/home">Recommended</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">New</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Price: Low to High</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Price: High to Low</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Container>

      <br></br>

      <Container className='Birthday_Container'>
        <div className="grid-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="image-container">
                {card.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`Card ${index + 1} - Image ${imgIndex + 1}`}
                    className={`image ${imgIndex === 0 ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Birthday;
