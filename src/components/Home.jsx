import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillInstagram,AiFillYoutube,AiFillAmazonCircle} from 'react-icons/ai'
const Home = () => {
  return (
    <>  <div className='home' id="home">

  
    <main>
        <h1>Gamers</h1>
        <p>bestgames</p>
    </main>
  
</div>
<div className="home2">
  <img src={vg} alt="Graphics" />
<div>
  <p>
    ggwp
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse nam nisi beatae odio aut saepe, sunt laborum illo iusto. Ipsa, inventore omnis et nostrum blanditiis laudantium quidem repudiandae saepe!


  </p>
</div>
</div>

<div className="home3" id="about">
  <div>
    <h1>Games</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus autem error sed eveniet vitae. Expedita architecto temporibus exercitationem natus impedit id sapiente molestias voluptatum, delectus mollitia cupiditate culpa, voluptate ipsum obcaecati unde, quam consequatur totam doloremque? Dolore error assumenda asperiores, omnis dicta fugit nulla dolores quia, quaerat iure, inventore fuga.</p>
  </div>
</div>
<div className="home4" id ="brands">
  <div>
    <h1>Brands</h1>
    <article>
    <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
    </article>
  </div>
</div>

</>
  
  )
}

export default Home
