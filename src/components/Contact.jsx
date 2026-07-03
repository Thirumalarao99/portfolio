import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity?
            Feel free to send me a message.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5">

              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-gray-500">
                  uppalathirumala8977@gmail.com
                </p>
              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Phone
                </h3>

                <p className="text-gray-500">
                  +91 XXXXX XXXXX
                </p>
              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5">

              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Location
                </h3>

                <p className="text-gray-500">
                  Andhra Pradesh, India
                </p>
              </div>

            </div>

            {/* Social */}

            <div className="flex gap-5 pt-6">

              <a
                href="https://github.com/Thirumalarao99"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-white rounded-full shadow-lg flex justify-center items-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="w-14 h-14 bg-white rounded-full shadow-lg flex justify-center items-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://instagram.com/thiru.goud30"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-white rounded-full shadow-lg flex justify-center items-center hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram size={22} />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition"
              >
                <FaPaperPlane />

                {status === "loading"
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center font-semibold">
                  ✅ Message Sent Successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-center font-semibold">
                  ❌ Something went wrong.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;