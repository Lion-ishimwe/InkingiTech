import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';

const TechnicCompanyWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 'cctv',
      title: 'CCTV Systems',
      description: 'Professional surveillance solutions with HD cameras, remote monitoring, and 24/7 recording capabilities.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&h=600&fit=crop'
    },
    {
      id: 'network',
      title: 'Network Solutions',
      description: 'Enterprise-grade networking infrastructure, fiber optics, and wireless solutions for seamless connectivity.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop'
    },
    {
      id: 'security',
      title: 'Security Systems',
      description: 'Advanced access control, biometric systems, and integrated security solutions for complete protection.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop'
    },
    {
      id: 'hvac',
      title: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning installation, maintenance, and repair for optimal climate control.',
      image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=800&h=600&fit=crop'
    },
    {
      id: 'fire',
      title: 'Fire Alarm Systems',
      description: 'Life-saving fire detection and alarm systems with automatic alerts and emergency response integration.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=600&fit=crop'
    },
    {
      id: 'generator',
      title: 'Generator Engineers',
      description: 'Backup power solutions, generator installation, maintenance, and emergency power system design.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop'
    },
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Custom web applications, responsive websites, and digital solutions to elevate your online presence.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=400&fit=crop'
  ];

  const NavBar = () => (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-400">A&B Innovation</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'services', 'about', 'gallery', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize hover:text-blue-400 transition ${
                  currentPage === page ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {page === 'about' ? 'About Us' : page === 'contact' ? 'Contact Us' : page}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'services', 'about', 'gallery', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 capitalize hover:bg-slate-700 rounded ${
                  currentPage === page ? 'bg-slate-700 text-blue-400' : ''
                }`}
              >
                {page === 'about' ? 'About Us' : page === 'contact' ? 'Contact Us' : page}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div>
      <div className="relative bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Professional Technical Solutions</h1>
            <p className="text-xl mb-8 text-gray-300">
              Your trusted partner for CCTV, Networking, Security, HVAC, Fire Safety, and More
            </p>
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose A&B Innovation?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock technical support for all your needs</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChevronRight className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Certified professionals with years of experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChevronRight className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
            <p className="text-gray-600">Premium solutions with guaranteed satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Comprehensive technical solutions tailored to meet your business needs
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About A&B Innovation</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
            alt="Our Team"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Trusted Technical Partner</h2>
          <p className="text-gray-700 mb-4">
            A&B Innovation is a leading provider of comprehensive technical services, 
            specializing in CCTV surveillance, network infrastructure, security systems, HVAC solutions, 
            fire alarm systems, generator services, and web development.
          </p>
          <p className="text-gray-700 mb-4">
            With over a decade of experience in the industry, our team of certified professionals 
            delivers cutting-edge solutions that ensure the safety, efficiency, and connectivity 
            of your business operations.
          </p>
          <p className="text-gray-700 mb-6">
            We pride ourselves on our commitment to excellence, customer satisfaction, and 
            innovative approaches to solving complex technical challenges.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-gray-600">Expert Engineers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const GalleryPage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Our Work Gallery</h1>
      <p className="text-center text-gray-600 mb-12">
        Explore our completed projects and installations
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
            <img 
              src={img} 
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="text-blue-600 mt-1 mr-3" size={24} />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">123 Tech Avenue, Kigali, Rwanda</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-blue-600 mt-1 mr-3" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+250 785 576 541</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="text-blue-600 mt-1 mr-3" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">technicprosolution@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="text-blue-600 mt-1 mr-3" size={24} />
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-600">All Days - 24 Hours</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">A&B Innovation</h2>
          <p className="text-gray-400 mb-4">Professional Technical Services You Can Trust</p>
          <p className="text-gray-500 text-sm">
            © 2024 A&B Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'gallery' && <GalleryPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
};

export default TechnicCompanyWebsite;