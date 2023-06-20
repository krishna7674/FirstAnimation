import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>

                    <h1>TechinalMaster</h1>
                    <p>Solution to all you problems</p>
                </main>

            </div>

            <div className="home2">
                <img src={vg} alt="Graphic" />
                <div>
                    <p> We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.</p>
                </div>

            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who are We?</h1>
                    <p>
                        We are a leading tech company dedicated to empowering children with enhanced problem-solving abilities. Our mission is to provide innovative solutions for the everyday tech problems that individuals, including children, encounter. We strive to be the one-stop destination for resolving tech-related challenges, offering reliable and user-friendly tools, resources, and services.

                    

                       

                    </p>
                </div>

            </div>
            <div className="home4" id="brands">
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
