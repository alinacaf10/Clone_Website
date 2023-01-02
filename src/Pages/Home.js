import React from 'react'
import first from "../IMG/carousel-2.jpg"
import second from "../IMG/last4.jpg"
import "./Home.css"



function Home() {
  return (

    <div className='home'>

 
    <div className='photo'>
     <img src={first} alt="new photo"/>
    </div>
    <div className='main'>
      <div className='img'>
     <img src={second} alt="new photo"/>

      </div>
      <div className='about'>
        <h1>Haqqinda</h1>
        <p>Konfransın keçirilməsinin əsas məqsədi Türk Dünyası aydınlarını bir araya toplayaraq sosial elmlər sahəsində əldə etdikləri bilikləri paylaşmaq, geniş fikir mübadiləsi etmək, elmi-texniki tərəqqinin təsiri ilə yaranmış yeni paradiqmaları müəyyən etmək, humanist məqsədləri rəhbər tutaraq milli maraq və mənafeyə üstünlük vermək, beynəlxalq standartları nəzərə almaqla cəmiyyətin inkişaf vektoruna uyğun gələn yeni ideyaları qarşılıqlı dialoqa əsaslanmaqla dəstəkləmək və təbliğ etmək, maraqlı təklifləri lazımi qurumlara çatdırmaqdır.</p>
        <div className='timer'>
          <div>
        <h1>-95</h1>
        <h2>Gun</h2>
        </div>
        <div>
        <h1>-22</h1>
        <h2>Saat</h2>
        </div>
        <div>
        <h1>-60</h1>
        <h2>Deqiqe</h2>
        </div>
        <div>
        <h1>-3</h1>
        <h2>Saniye</h2>
        </div>
        </div>
        <a href='https://aesma.edu.az/'><button className='more'>Daha Etrafli</button></a>
      </div>
    </div>
    
  </div>
  )
}

export default Home