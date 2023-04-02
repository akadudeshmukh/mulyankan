import Image from "next/image";
import { useState } from "react";

const ContactUsForm = ({ success }: { success: () => void }) => {
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      full_name: event.target.full_name.value,
      email: event.target.email.value,
      topic: event.target.topic.value,
      message: event.target.message.value,
      phone_number: event.target.phone_number.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint =
      "https://sample-apis.azurewebsites.net/api/open/contact-us";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    console.log("bodyresponse: ", response);
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    //const result = await response.json();
    if (response.status === 201) {
      success();
    }
  };
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Contact For Any Queries</span>
        </h2>
      </div>
      <div className="row px-xl-5">
        <div className="col-lg-7 mb-5">
          <div className="contact-form">
            <div id="success"></div>
            <form
              action="#"
              onSubmit={handleSubmit}
              name="sentMessage"
              id="contactForm"
            >
              <div className="control-group">
                <input
                  id="full_name"
                  className="form-control"
                  placeholder="Your Name"
                  type="text"
                  required
                  name="Your Name"
                />

                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  type="email"
                  required
                  name="Your Email"
                />

                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  id="phone_number"
                  className="form-control"
                  placeholder="Your phone number"
                  type="phone number"
                  required
                  name="Your phone number"
                />

                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  id="topic"
                  className="form-control"
                  placeholder="subject"
                  type="text"
                  required
                  name="Your Email"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Message"
                  required
                  name="Your Message"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button
                  className="btn btn-primary py-2 px-4"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 mb-5">
          <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
          <p>
            Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
            duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat
            clita ipsum justo sed.
          </p>
          <div className="d-flex flex-column mb-3">
            <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
              Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3"></i>
              info@example.com
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
              67890
            </p>
          </div>
          <div className="d-flex flex-column">
            <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
              Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3"></i>
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
              67890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <>
      {!formSubmitted && (
        <ContactUsForm
          success={() => {
            setFormSubmitted(true);
          }}
        ></ContactUsForm>
      )}
      {formSubmitted && (
        <div className="col-lg-7 mb-5">
          <div className="contact-form">
            <div id="success"></div>
            Thanks for submitting will contact you soon!
          </div>
        </div>
      )}
    </>
  );
};
export default Contact;
