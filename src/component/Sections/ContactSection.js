import React from "react";
import "../../Assets/css/style.css";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";

const ContactSection = () => {
  return (
    <>
      {/* Page Title */}
      <div
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <section className="page-title" style={{ maxWidth: "1200px" }}>
          <div className="auto-container">
            <h1>CONTACT US</h1>
            <div className="bread-crumb-outer">
              <ul className="bread-crumb clearfix">
                {/* <li><a href="index.html">Home</a></li> */}
                <li className="contact_subheading">
                  Let us know how we can help
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}

        {/* Contact Section */}
        <div className="contact-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Map Side */}
              <div className="map-column column col-lg-5 col-md-5 col-sm-12 col-xs-12 order-md-2">
                {/* Map Section */}
                <section className="map-section">
                  <div className="address_container">
                    <div className="address-text">
                      <div className="heading_img_container">
                        <img
                          src="entypo_address.png"
                          alt="Address Icon"
                          className="contactus_img"
                        />
                        <p className="contactus_address_heading">Address</p>
                      </div>

                      <p className="contactus_address">
                        Satadru Technologies Private Limited <br />
                        42/132/A New Ballygunge Road, <br />
                        New Kasba Police Station <br />
                        Kolkata, India 700039
                      </p>
                    </div>

                    <div className="address-text">
                      <div className="heading_img_container">
                        <img src="email.png" className="contactus_img" />
                        <p className="contactus_address_heading">Email Id </p>
                      </div>
                      <p className="contactus_address"> info@drivershaab.com</p>
                    </div>
                    <div className="address_text">
                      <div className="heading_img_container">
                        <img src="phone.png" className="contactus_img" />
                        <p className="contactus_address_heading">Contact No.</p>
                      </div>

                      <p className="contactus_address">8929000462</p>
                    </div>
                  </div>

                  {/* Map Content */}
                </section>
              </div>

              {/* Form Column */}
              <div className="form-column column col-lg-7 col-md-7 col-sm-12 col-xs-12 order-md-1">
                {/* Contact Form */}
                <div className="contact-form">
                  <form method="post" action="sendemail.php" id="contact-form">
                    <div className="row clearfix">
                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Name *"
                        />
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email *"
                        />
                      </div>

                      {/* <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                      />
                    </div> */}

                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <button
                          className="contactus-btn-style-one"
                          type="submit"
                          name="submit-form"
                          // style={{paddingBottom:20}}
                        >
                          SUBMIT
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Section */}
      </div>
    </>
  );
};

export default ContactSection;
