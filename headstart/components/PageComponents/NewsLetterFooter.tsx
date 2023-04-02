import Image from "next/image";
import { useState } from "react";

const NewsLetterFooterForm = ({ success }: { success: () => void }) => {
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "https://sample-apis.azurewebsites.net/api/open/subscribe";

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
    <>
      <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            id="name"
            className="form-control border-0 py-4"
            placeholder="Your Name"
            type="name"
            required
            name="Your Name"
          />
        </div>
        <div className="form-group">
          <input
            id="email"
            className="form-control border-0 py-4"
            placeholder="Your Email"
            type="emai"
            required
            name="Your Email"
          />
        </div>
        <div>
          <button
            className="btn btn-primary btn-block border-0 py-3"
            type="submit"
          >
            Subscribe Now
          </button>
        </div>
      </form>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />

        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />

        <button type="submit">Submit</button>
      </form> */}
    </>
  );
};
const NewsLetter = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <>
      {!formSubmitted && (
        <NewsLetterFooterForm
          success={() => {
            setFormSubmitted(true);
          }}
        ></NewsLetterFooterForm>
      )}
      {formSubmitted && (
        <h5 className="font-weight-bold text-dark mb-4">
          Thanks for submitting
        </h5>
      )}
    </>
  );
};
export default NewsLetter;
