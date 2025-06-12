import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('fr');

  const t = {
    fr: {
      heroTitle: "Trouvez l'artisan idéal près de chez vous au Cameroun",
      heroSub: "Des professionnels qualifiés à votre service.",
      ctaBtn: "Demander un artisan",
      servicesTitle: "Nos Services",
      whyTitle: "Pourquoi nous choisir ?",
      testimonialTitle: "Ils témoignent",
      contactTitle: "Contactez-nous",
      formName: "Nom",
      formPhone: "Téléphone",
      formService: "Service demandé",
      formMessage: "Message",
      formSend: "Envoyer la demande"
    },
    en: {
      heroTitle: "Find the best craftsmen near you in Cameroon",
      heroSub: "Qualified professionals at your service.",
      ctaBtn: "Request an Artisan",
      servicesTitle: "Our Services",
      whyTitle: "Why choose us?",
      testimonialTitle: "What Clients Say",
      contactTitle: "Contact Us",
      formName: "Name",
      formPhone: "Phone",
      formService: "Service Requested",
      formMessage: "Message",
      formSend: "Send Request"
    }
  };

  const testimonials = [
    {
      fr: {
        content: "Une équipe réactive et professionnelle. Merci MonArtisan Cameroun !",
        author: "Jean M., Bonamoussadi"
      },
      en: {
        content: "A responsive and professional team. Thank you MonArtisan Cameroon!",
        author: "John M., Bonamoussadi"
      }
    },
    {
      fr: {
        content: "Je recommande vivement leurs services. Ponctuels et efficaces !",
        author: "Marie C., Douala"
      },
      en: {
        content: "Highly recommend their services. Prompt and efficient!",
        author: "Mary C., Douala"
      }
    }
  ];

  const services = [
    { fr: "Maçonnerie", en: "Masonry" },
    { fr: "Électricité", en: "Electricity" },
    { fr: "Plomberie", en: "Plumbing" },
    { fr: "Menuiserie", en: "Carpentry" },
    { fr: "Peinture", en: "Painting" },
    { fr: "Climatisation", en: "Air Conditioning" }
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(lang === 'fr' ? 'Demande envoyée !' : 'Request sent!');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Bouton Changer de Langue */}
      <div className="bg-blue-700 text-white text-right px-4 py-2">
        <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} className="underline">
          {lang === 'fr' ? 'English' : 'Français'}
        </button>
      </div>

      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MonArtisan Cameroun</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#services" className="hover:underline">{t[lang].servicesTitle}</a>
            <a href="#testimonials" className="hover:underline">{t[lang].testimonialTitle}</a>
            <a href="#contact" className="hover:underline">{t[lang].contactTitle}</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t[lang].heroTitle}</h2>
          <p className="text-lg md:text-xl mb-8">{t[lang].heroSub}</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-3 rounded-full transition-transform transform hover:scale-105">
            {t[lang].ctaBtn}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">{t[lang].servicesTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{lang === 'fr' ? service.fr : service.en}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">{t[lang].testimonialTitle}</h3>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="italic text-lg mb-4">{lang === 'fr' ? testimonials[0].fr.content : testimonials[0].en.content}</p>
            <p className="font-semibold">{lang === 'fr' ? testimonials[0].fr.author : testimonials[0].en.author}</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">{t[lang].contactTitle}</h3>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">{t[lang].formName}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">{t[lang].formPhone}</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="service">{t[lang].formService}</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">{t[lang].formService}</option>
                  {services.map((s, idx) => (
                    <option key={idx} value={lang === 'fr' ? s.fr : s.en}>{lang === 'fr' ? s.fr : s.en}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="message">{t[lang].formMessage}</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                {t[lang].formSend}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">MonArtisan Cameroun</h4>
              <p>Votre plateforme de confiance pour trouver des artisans qualifiés partout au Cameroun.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#testimonials" className="hover:underline">Témoignages</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Adresse</h4>
              <p>📍 Bonamoussadi, Douala, Cameroun</p>
              <p>📞 +237 XXX XXX XX</p>
              <p>📧 contact@monartisan.cm</p>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <p className="text-center text-sm">&copy; {new Date().getFullYear()} MonArtisan Cameroun. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}