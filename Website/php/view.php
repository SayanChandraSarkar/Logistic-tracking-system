<?php


function head($meta = [
  "title" => "",
  "description" => "",
  "url" => "",
])
{
  echo '<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#161659" />
  <title>' . $meta["title"] . '</title>

  <meta property="og:description" content="' . $meta["description"] . '">
  

  <link href="assets/ico/favicon1.png" rel="shortcut icon">

  <link rel="stylesheet" href="assets/css/lineicons.css">
  <link rel="stylesheet" href="assets/css/swiper.min.css">
  <link rel="stylesheet" href="assets/css/odometer.min.css">
  <link rel="stylesheet" href="assets/css/fancybox.min.css">
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/style.css">';
}


function footer()
{
  echo '<footer class="footer">
    <div class="containers">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <figure class="logo"> <img src="assets/images/logo1.png" alt="Image"> </figure>
           
        <!--h6 class="widget-title">Socials</h6-->
          <div class="d-flex social-icons mt-5">
            <a href="https://www.facebook.com/atnsocial" target="_blank" class="ic40 ic">
              <i class="lni lni-facebook-filled"></i>
            </a>
             <a href="https://api.whatsapp.com/send?phone=+919880203123&text=Hi" target="_blank" class="ic40 ic">
              <i class="lni lni-whatsapp"></i>
            </a>
            <a href="https://goo.gl/maps/iEHX4WcCyoPcFtkb6" target="_blank" class="ic40 ic">
              <i class="lni lni-map-marker"></i>
            </a>

            <!--a href="https://twitter.com/atnsocial" target="_blank" class="ic40 ic">
              <i class="lni lni-twitter-original"></i>
            </a>
            <a href="https://instagram.com/atnsocial" target="_blank" class="ic40 ic">
              <i class="lni lni-instagram-original"></i>
            </a-->
            <a href="https://www.google.com/search?q=atnsocial+bengaluru" target="_blank" class="ic40 ic">
              <i class="lni lni-google"></i>
            </a>
          </div>
        </div>



        <div class="col-lg-4 col-md-6">
          <h6 class="widget-title">Quick Links</h6>
          <ul class="footer-menu">
            <li><a href="aboutus.php">About us</a></li>
            <li><a href="service.php">Services</a></li>
            <li><a href="tracking.php">Track parcel</a></li>
             <!--li><a href="shipment-request">Shipment request</a></li-->
            <li><a href="contact.php">Contact</a></li>
          </ul>
        </div>


        <div class="col-lg-4">
          <p>
            <i class="lni lni-phone-set"></i> 080 - 4132 3634
          </p>
           <p>
            <i class="lni lni-phone"></i> +91 8011658412
          </p>
          <p>
            <i class="lni lni-envelope"></i> <a href="mailto:ssayan025@gmail.com">ssayan025@gmail.com</a>
          </p>
          <p>
            <i class="lni lni-map-marker"></i> 8MQ9+M7W, Panchduar, Abhayapuri, Assam 783384
          </p>
        </div>


        
        <div class="col-12">
          <div class="footer-bottom">
            <span>© 2023 BlueWave | A Logicstics Company</span>
            <span>
              <a href="privacy-policy">Privacy policy</a>
              &nbsp; &nbsp;
              <a href="terms-of-services">Terms of services</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  


  <div class="modal fade" id="getQuote" tabindex="-1" role="dialog" aria-labelledby="getQuoteLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-accent text-white">
          <h5 class="modal-title" id="getQuoteLabel">Get a quote</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="lni-close lni text-white"></i>
          </button>
        </div>
        <div class=" modal-body">
          <form id="form-quote" class="row inner xblform" action="api/contact" method="POST" processing="0">
            <div class="form-group col-lg-4">
              <input type="text" placeholder="Name" name="name" maxlength="50">
            </div>
            <div class="form-group col-lg-4 col-md-6">
              <input type="email" placeholder="Email Address" name="email" maxlength="50">
            </div>
            <div class="form-group col-lg-4 col-md-6">
              <input type="tel" placeholder="Phone No" name="phone" maxlength="10">
            </div>
            <div class="form-group col-12">
              <textarea placeholder="Message" class="w-100" name="message" maxlength="400"></textarea>
            </div>
            <div class="form-group col-12 text-right d-flex jcfe">
              <div class="actionBtn">
                <input type="submit" value="SUBMIT" class="bg-primary">
              </div>
              <div class="loader"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


  <div id="toast" data-show="0">
      <div class="lc1 mgs"></div>
      <div class="close" role="button">
        <i class="lni-close lni text-white"></i>
      </div>
  </div>';
}


function menu()
{
  echo '<div class="page-transition"></div>
  
  <aside class="side-widget">
    <div class="inner">
      </div>

      <div class="show-mobile">
        <div class="site-menu">
          <ul>
            <li><a href="about">About us</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="tracking">Tracking</a></li>
            <li><a href="assets/pdf/atn-express-company-profile.pdf" download>Home</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <small>© 2023 BlueWave | Logicstic Shipping Company</small>
    </div>
  </aside>

  

  <nav class="navbar overflow-hidden">
    <div class="container">
      <div class="inner">
        <div class="logo">
         <a href="/"> 
         <img src="assets/images/logo1.png" alt="Image">
          </a> 
          </div>

        <div class="site-menu">
          <ul>
          <li><a href="home">Home</li>
            <li><a href="aboutus">About us</a></li>
            <li><a href="service">Services</a></li>
            <!-- <li><a href="tracking">Tracking</a></li> -->
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>
        <div class="show-mobile">
          <div class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-button d-xl-flex ">

          <form method="get" action="tracking" class="tracking position-relative me-3 mr-3">
            <input type="text" name="awb" placeholder="AWB Number">
            <button type="submit" class="bg-transparent text-primary"><i class="lni lni-search-alt"></i></button>
          </form>

          <a role="button" data-toggle="modal" data-target="#getQuote">GET A QUOTE</a>
        </div>
      </div>
    </div>
  </nav>';
}

function counter()
{
  echo '<section class="content-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-6">
          <div class="counter-box"> <span class="odometer" data-count="6" data-status="yes">0</span>
            <h6>Domestic partners</h6>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="counter-box"> <span class="odometer" data-count="5" data-status="yes">0</span>
            <h6>International partners</h6>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="counter-box">
            <span class="odometer" data-count="26" data-status="yes">0</span>
            <span class="symbol">+</span>
            <h6>Years into business</h6>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="counter-box">
            <span class="odometer" data-count="8000" data-status="yes">0</span>
            <span class="symbol">+</span>
            <h6>Shipments annually</h6>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="counter-box">
            <span class="odometer" data-count="6000" data-status="yes">0</span>
            <span class="symbol">+</span>
            <h6>Pincodes served in India</h6>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="counter-box"> <span class="odometer" data-count="400" data-status="yes">0</span><span class="symbol"></span>
            <h6>sq.ft of
              warehousing</h6>
          </div>
        </div>
      </div>
    </div>
  </section>';
}
