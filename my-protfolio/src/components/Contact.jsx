import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setSubmitted(true); // mark as submitted
      },
      (error) => {
        console.error(error);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="px-6 py-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-black">Contact Me</h3>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="flex flex-col justify-center space-y-4 -mt-16">
          <h4 className="font-bold text-xl">Get In Touch</h4>
          <p>Feel free to contact me for any work or suggestions below.</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-teal-600" /> saranginath22@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-teal-600" /> linkedin.com/in/sarangi-nath
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-teal-600" /> github.com/saranginath
            </li>
          </ul>
        </div>

       
        <div className="p-6 border-gray-50 rounded-2xl shadow-lg border flex items-center justify-center">
          {submitted ? (
            <div className="text-center text-green-600 text-xl font-semibold">
              Thanks! Message sent.
            </div>
          ) : (
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col text-left">
                <label htmlFor="name" className="mb-1 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border rounded-lg mt-1"
                  required
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="email" className="mb-1 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 border rounded-lg mt-1"
                  required
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="message" className="mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg mt-1"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-customGreen text-white py-3 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;