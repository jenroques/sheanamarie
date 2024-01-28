
import './App.css';

function App() {

  return (
    <div className="App">
      <section class="header">

        <a href="#" class="logo"> Welcome </a>

        <nav class="navbar">
          <div id="close-navbar" class="fas fa-times"></div>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#visit">Contact</a>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>
      </section>

      <section class="home" id="home">
        <div class="content">
        </div>
      </section>

      <section class="about" id="about">

        <div class="row">
          <div class="image">
          </div>

          <div class="content">
            <h3 class="title">Sheana Marie Artistry</h3>
            <p>
              Sheana Marie Artistry is owned and operated by Sheana Helton, a
              licensed and insured Cosmetologist. Sheana has specialized in the
              bridal industry for close to ten years, and has provided exquisite
              hair and makeup services for hundreds of brides. Sheana also owns
              The Sapphire Studio, a private, appointment only, salon in the South
              County area in St. Louis. Inspired by clean, classic bridal looks,
              Sheana's Brides exude the definition of elegance and beauty. With
              Sheana's experience and knowledge, Sheana and her team offer the
              bride a special day that is enjoyable, smooth, and stress free. She
              strives to make the bride and her party feel comfortable and
              extraordinary.
            </p>
            <p>
              Sheana's artistry has earned her opportunities to work on the sets
              of Dateline, ESPN, Turner Classic Movies, and other commercial
              endeavors. She has educated fellow peers on hair styling and makeup
              applications, and offers one on one and group classes several times
              a year. Through social media, Sheana proudly shares her craft and
              aims to present a Bride that radiates love, happiness, and a
              hopefulness to a bright and prosperous future in their new lives
              with their forever companion. Sheana absolutely loves her
              occupation, and is extremely grateful to be a part of such a
              memorable day. Thank you for choosing Sheana Marie Artistry.
            </p>
          </div>

        </div>
      </section>

      <section class="services" id="services">
        <div class="box-container">
          <div class="box">
            <img src={require("./images/wed3.jpeg")} alt="" />
            <div class="content">

            </div>
          </div>

          <div class="box">
            <img src={require("./images/wed4.jpeg")} alt="" />
            <div class="content">

            </div>
          </div>

          <div class="box">
            <img src={require("./images/wed5.jpeg")} alt="" />
            <div class="content">

            </div>
          </div>

        </div>
      </section>

      <section class="styles" id="styles">

        <div class="box-container">

          <div class="box">
            <div class="image">
              <a
                href="https://www.theknot.com/marketplace/sheana-marie-artistry-llc-saint-louis-mo-2040557"
                class="img"
              >
                <img src={require("./images/BOW_Alternate_DigitalBadge_2023-120.png")} alt="The Knot - Best of Weddings winner 2023" width="170" height="170" />
              </a>
            </div>
            <div class="box">
              <div class="image">
                <a
                  href="https://www.theknot.com/marketplace/sheana-marie-artistry-llc-saint-louis-mo-2040557"
                  class="img"
                >
                  <img src="https://d13ns7kbjmbjip.cloudfront.net/bow_2024/section_4_3.png" alt="The Knot - Best of Weddings winner 2023" width="70" height="70" />
                </a>
              </div>

              <div class="heading">
                <h3>The Knot - Best of Weddings Winner: 2024, 2023, 2022 & 2021</h3>

              </div>
            </div>
          </div>

        </div>

      </section>

      <section class="visit" id="visit">
        <h1 class="heading2">Schedule a Consultation</h1>

        <div class="row">
          <a href="mailto:sheanahelton@gmail.com">
            <input type="submit" value="Send A Message" class="btn" />
          </a>
        </div>
      </section>


      <section class="review" id="review">
        <h1 class="heading">Reviews</h1>

        <div class="box-container">

          <div class="box">
            <img src="images/quote-img.png" alt="" class="quote" />
            <p>
              I am so glad I found Sheana! Sheana was an absolute lifesaver on my wedding day. Her calm and peaceful presence while styling my hair allowed me to create beautiful memories with my mom and best friend while getting ready for my wedding day. I also loved how my hair turned out, and it stayed/looked good all day! I appreciated Sheana's openness to my feedback during the trial. I felt like she really cared about my opinions. Sheana also did my mom's hair for my wedding. My mom felt confident all night because she loved her hair so much!! Highly recommended!
            </p>
            <img src="images/review-2.png" class="user" alt="" />
            <h3>Sloane H. 9/09/23 </h3>
          </div>


          <div class="box">
            <img src="images/quote-img.png" alt="" class="quote" />
            <p>
              Working with Sheana was such a wonderful experience. Not only is she such an easy person to talk to and a fun person to have around the morning of your wedding, but she did such a beautiful job with our hair and makeup. I don't wear a lot of makeup and did not have a lot of reference photos for her to go off, but Sheana got the vibes from our dresses, venue, and other details and completely nailed what I wanted. Could not recommend her more highly!
            </p>
            <img src="images/review-1.png" class="user" alt="" />
            <h3>Liz A. 11/29/2023</h3>
          </div>

          <div class="box">
            <img src="images/quote-img.png" alt="" class="quote" />
            <p>
              I used Sheana years ago for my sisters wedding and loved her work so much i was excited to use her again 6 years later for my wedding! Sheana and her crew did both hair and makeup for me and my whole bridal party (including flower girls & moms) and we all LOVED their work. They are great to work with and will turn your hair & makeup wants/needs into a reality. I did a trial with Sheana before the wedding which went great but the day of my wedding i changed my mind of what hairstyle i wanted. I showed her a whole new hairstyle and she was flexible and still created exactly what i wanted with no issues on my wedding day. She will make any bride and their party look and feel absolutely stunning. Highly recommed her!
            </p>
            <img src="images/review-3.png" class="user" alt="" />
            <h3>Savanna P. 9/04/23 </h3>
          </div>
        </div>
      </section>

      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>Follow Us</h3>
            <div class="share">
              <a
                href="https://www.theknot.com/marketplace/sheana-marie-artistry-llc-saint-louis-mo-2040557"
                class="fab fa-facebook-f"
              >
                <img src={require("./images/BOW_DigitalBadge_2023-36.png")} alt="" width="50" />
              </a>
              <a
                href="https://www.facebook.com/SheanaMarieArtistryLLC"
                class="fab fa-facebook-f"
              >
                <img src={require("./images/icons8-facebook-50.png")} alt="" />
              </a>
              <a
                href="https://www.instagram.com/sheanamarie_artistryllc"
                class="fab fa-instagram"
              >
                <img src={require("./images/icons8-instagram-50.png")} alt="" />
              </a>
            </div>
          </div>

          <div class="box">
            <h3>contact us</h3>
            <p>(314)287-0271</p>
          </div>

          <div class="box">
            <h3>Location</h3>
            <p>
              11720 Baptist Church Rd<br />
              St. Louis, MO 63128<br />
              United States
            </p>
          </div>
        </div>

        <div class="credit">
          created by <span>Sheana Marie Artistry</span> | all rights reserved 2023
        </div>
      </section>

      <script src="js/script.js"></script>
    </div>
  );
}

export default App;
