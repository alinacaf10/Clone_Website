import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='elaqe'>
            <h4>Elaqe</h4>
            <hr/>
            <p>Azərbaycan Əmək və Sosial Münasibətlər Akademiyası. Bakı şəhəri, Azadlıq prospekti, 181. AZ 1130</p>
            <p>+ 994 55 569 74 74</p>
            <p>+ 994 55 569 74 74</p>
            <p>sosialelmler.aesma@gmail.com</p>
        </div>
        <div className='qisayol'>
            <h4>Qisayol</h4>
            <hr/>

           <a href='https://aesma.edu.az/'> <p className='aesma'>Azərbaycan Əmək və Sosial Münasibətlər Akademiyası. </p></a>
           <a href='https://docs.google.com/forms/d/1pwzfVfB262W8ho6uaXtaVipoHztYi0PIDWAQHLoZPQA/closedform'> <p className='muraciett'>Muraciet</p></a>
            <p className='yazi'>Yazi Qaydalari</p>
        </div>
        <div className='qrkod'>
          <h4>QR-kod</h4>
            <hr/>

            <p>I beynəlxalq sosial elmlər konfransının rəsmi səhifəsinə xoş gəlmisiniz!
QR-kodu scan etməklə bir başa səhifəyə daxil ola bilərsiz.</p>
<a href='https://docs.google.com/forms/d/1pwzfVfB262W8ho6uaXtaVipoHztYi0PIDWAQHLoZPQA/closedform'><button>Online</button></a>
        </div>
        </div>
  )
}

export default Footer