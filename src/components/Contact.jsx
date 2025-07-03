import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from "../data/personal";

const Contact = () => {
  const { contact } = personalInfo;

  return (
    <section id="contact" className="py-16 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-600" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaGithub className="text-blue-600" />
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="border p-3 rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;