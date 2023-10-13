import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/correos.jpg'
import IMG2 from '../../assets/power-bi.jpeg'
import IMG3 from '../../assets/POS.jpeg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Correos Masivos',
    github: 'https://github.com/Torvic12/Correos_Masivos',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Dashboard BI',
    github: 'https://www.canva.com/design/DAFxGAZLoVY/DwRwgd9jsYq96o9pU6lHbQ/edit?utm_content=DAFxGAZLoVY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Movil POS',
    github:  'https://www.canva.com/design/DAFxGB3betk/84Nf35neGKLPfzc5FYEOgw/edit?utm_content=DAFxGB3betk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    demo:  '#',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coming Soon',
    github:  '#',
    demo:  '#',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Coming Soon',
    github:  '#',
    demo:  '#',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Coming Soon',
    github:  '#',
    demo: '#',
  }
]
  

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target="_blank">Proyecto</a>
                    <a href={demo} className='btn btn-primary' target="_blank">Proximamente</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio