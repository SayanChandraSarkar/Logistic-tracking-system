<?php
include("php/view.php");
head([
    "title" => "Contact | BlueWave",
    "description" => "Have any query or facing any issue while shipping your parcel. feel free to contact us.",
    "url" => "/contact",
  ]);
?>
</head>
    <body>
        <?php menu(); ?>
        
        <header class="page-header" data-background="assets/images/slide01.webp">
            <div class="containers">
            <h1>Contact</h1>
            <p>Take the complexity out of customs Freight Solutions<br> with customs brokerage services</p>
            </div>
        </header>
        


        <section class="content-section">
            <div class="containerS">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title">
                            <figure><img src="assets/ico/favicon1.png" alt="Image"></figure>
                            <h2>We’d love to hear from you</h2>
                            <p>Please send your enquiry to <u>BlueWave</u>, or reach us using the details below.</p>
                        </div>
                    </div>
            
                    <div class="col-md-8 col-xl-6">
                        <div class="contact-box">
                            <h5>Branch Office</h5>

                            <div class="row mt-5 mb-5">
                                <div class="col-md-6" style="border-right:1px dashed #ddd">
                                    <address class="mb-0">
                                    8MQ9+M7W, Panchduar, Abhayapuri, Assam 783384<br><br>
                                    </address>
                                </div>  
                                <div class="col-md-6">
                                    <div class="mb-2">
                                        <i class="lni lni-phone-set"></i> 8011658412
                                    </div>
                                    <div class="mb-2">
                                        <i class="lni lni-phone"></i> +91 988 0203 123
                                    </div>
                                    <div>
                                        <i class="lni lni-envelope"></i> <a href="mailto:ssayan025@gmail.com">ssayan025@gmail.com</a>
                                    </div>
                                </div>  
                            </div>  
                        
                                <a href="https://goo.gl/maps/8J9YCCZ2sZKHU5Yt7" class="custom-button bg-accent" target="_blank" >FIND US ON MAP</a> 
                                &nbsp;&nbsp; 
                                <a href="https://www.google.com/maps/dir/26.2042004,91.861052/8MQ9%2BM7W+Sandhan+Ch+Sarker,+Panchduar,+Abhayapuri,+Assam+783384/@26.1376624,90.5438245,9z/data=!3m1!4b1!4m17!1m7!3m6!1s0x3759ab9bb1efbda3:0x928d206a39375817!2sSandhan+Ch+Sarker!8m2!3d26.3392275!4d90.6681955!16s%2Fg%2F11tc1yg4x1!4m8!1m1!4e1!1m5!1m1!1s0x3759ab9bb1efbda3:0x928d206a39375817!2m2!1d90.6682664!2d26.3392128"  class="custom-button" target="_blank">GET DIRECTION</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    <section class="content-section no-bottom-spacing" data-background="#f9f7ef">
    <div class="containers">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-left">
            <h2>Have Any Question?</h2>
            <h6>If you would like to know more about our services, <br>
              please contact us using this form
            </h6>
          </div>
        </div>

        <div class="col-12">
          <div class="contact-form">
            <form id="form-contact" class="row inner xblform m-auto" action="api/contact.php" method="POST" processing="0">
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
                  <input type="submit" value="SEND MESSAGE" class="bg-primary">
                </div>
                <div class="loader"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div style="height:200px;"></div>
  <div class="google-maps">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6068419283956!2d90.66562057486607!3d26.3392274769936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3759ab9bb1efbda3%3A0x928d206a39375817!2sSandhan%20Ch%20Sarker!5e0!3m2!1sen!2sin!4v1681548719960!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

      <?php
        footer();
      ?>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/fancybox.min.js"></script>
        <script src="assets/js/swiper.min.js"></script>
        <script src="assets/js/odometer.min.js"></script>
        <script src="assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="assets/js/isotope.min.js"></script>
        <script src="assets/js/scripts.js"></script>
        <script src="assets/js/flickity.pkgd.min.js"></script>
    </body>
</htmL>

