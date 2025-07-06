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
  const [modal, setModal] = useState({ open: false, text: '', ok: true });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setModal({ open: true, text: 'Please enter a valid email address.', ok: false });
      return;
    }
    const endpoint = '/api/send-email';
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        setModal({ open: true, text: 'Your message has been sent successfully. Thank you for contacting me.', ok: true });
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => setModal({ open: true, text: 'Unable to send your message at this time. Please try again later.', ok: false }));
  };

  return (
    <section id="contact" className="py-20 bg-transparent px-4" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
        <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6 md:col-span-1">
            {infoCards.map((card, idx) => (
              <div
                key={card.label}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
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

          <form onSubmit={handleSubmit} noValidate className="md:col-span-2 bg-white rounded shadow-sm border p-6 space-y-4">
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

        {modal.open && (
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center space-y-4">
              <p className={`${modal.ok ? 'text-green-600' : 'text-red-600'} font-medium`}>{modal.text}</p>
              <button
                onClick={() => setModal({ ...modal, open: false })}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
              >Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;