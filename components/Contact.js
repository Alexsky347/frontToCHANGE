import React from "react";
import { Constant } from "@constants/constants.ts";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   *
   * @param {*} event
   */
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  /**
   *
   */
  handleSubmit(event) {
    console.log("A name was submitted: " + JSON.stringify(this.state));
    event.preventDefault();
  }
  render() {
    return (
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Contact
          </h1>
        </div>
        <div className="z-10 rounded-md shadow-md bg-[#F1F1F1] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:ml-4">
              <header className="">
                <h1 className="font-semibold text-2xl">
                  Get in touch, let's talk.
                </h1>
                <p className="font-light text-base mt-2">
                  Fill in the details and I'll get back to you as soon as I can.
                </p>
              </header>
              <div className="icons-container inline-flex flex-col my-20">
                <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                  <p className="font-light text-sm">{Constant.email}</p>
                </div>
                <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pin-fill h-4 w-4 text-blue-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                  </svg>
                  <p className="font-light text-sm">{Constant.address}</p>
                </div>
              </div>
            </div>
            <form
              className="form rounded-lg bg-white p-4 flex flex-col"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                {" "}
                Your Name
              </label>
              <input
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
              <label
                htmlFor="email"
                className="text-sm text-gray-600 mx-4 mt-4"
              >
                Email
              </label>
              <input
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
              <label
                htmlFor="message"
                className="text-sm text-gray-600 mx-4 mt-4"
              >
                Message
              </label>
              <textarea
                rows="4"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
