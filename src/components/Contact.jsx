import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from "../data/personal";

const Contact = () => {
  const { contact } = personalInfo;

  const infoCards = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: contact.email,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: contact.phone,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: contact.address,
    },
  ];

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    const endpoint = import.meta.env.MODE === 'development'
      ? 'http://localhost:3000/api/send-email'
      : '/api/send-email';
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        alert('Message sent!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => setError('Failed to send. Please try again later.'));
  };

  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
        <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6 md:col-span-1">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="flex items-start p-6 bg-white rounded shadow-sm border hover:shadow-md transition"
              >
                <card.icon className="text-blue-600 text-xl mr-4" />
                <div className="text-left">
                  <h4 className="font-bold text-base md:text-lg">{card.label}</h4>
                  <p className="text-gray-600 text-sm break-all">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 bg-white rounded shadow-sm border p-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className={`border p-3 rounded w-full focus:outline-none focus:ring-1 ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-1 focus:ring-blue-600 resize-none"
            />
            <button
              type="submit"
              className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white transition text-sm font-medium self-start bg-transparent"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;