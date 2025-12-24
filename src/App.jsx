import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Phone, Mail, MapPin, Clock, ChefHat, Award, Users, Star,
    Utensils, ArrowRight, Check, Calendar, Send, Menu, X
} from 'lucide-react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', date: '', time: '', guests: '2', message: '' });

        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const features = [
        { icon: <ChefHat size={32} aria-hidden="true" />, title: 'Master Chefs', desc: 'Award-winning culinary experts' },
        { icon: <Award size={32} aria-hidden="true" />, title: '5-Star Rated', desc: 'Exceptional dining experience' },
        { icon: <Utensils size={32} aria-hidden="true" />, title: 'Premium Menu', desc: 'Finest ingredients sourced daily' },
        { icon: <Clock size={32} aria-hidden="true" />, title: 'Quick Service', desc: 'Attentive & timely service' }
    ];

    const testimonials = [
        { name: 'Sarah Johnson', text: 'Absolutely amazing experience! The food was divine.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
        { name: 'Michael Chen', text: 'Best restaurant in the city. Highly recommend!', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
        { name: 'Emily Davis', text: 'Perfect ambiance for special occasions.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80' }
    ];

    return (
        <div className="landing-page">
            {/* Navigation */}
            <nav className="navbar">
                <div className="container navbar-content">
                    <a href="#" className="logo" aria-label="Savoria Restaurant - Home">
                        <Utensils className="logo-icon" aria-hidden="true" />
                        <span>Savoria</span>
                    </a>

                    <nav id="mobile-nav" className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
                        <a href="#features" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
                        <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    </nav>

                    <div className="nav-actions">
                        <a href="tel:+1234567890" className="nav-phone">
                            <Phone size={18} />
                            <span>+1 234 567 890</span>
                        </a>
                        <a href="#booking" className="btn btn-primary">Reserve Now</a>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav"
                    >
                        {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main id="main-content">
                <section className="hero" aria-labelledby="hero-heading">
                    <div className="hero-bg">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" alt="Elegant restaurant interior with ambient lighting" loading="eager" fetchPriority="high" width="1920" height="1080" />
                        <div className="hero-overlay"></div>
                    </div>

                    <div className="container hero-content">
                        <motion.div
                            className="hero-text"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="hero-badge"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Star size={16} fill="currentColor" />
                                <span>Fine Dining Experience</span>
                            </motion.div>
                            <h1 id="hero-heading">Experience Culinary <span className="text-gradient">Excellence</span></h1>
                            <p>Indulge in exquisite dishes crafted by award-winning chefs using the finest ingredients. Book your table today and create unforgettable memories.</p>

                            <div className="hero-cta">
                                <a href="#booking" className="btn btn-primary btn-lg">
                                    <Calendar size={20} aria-hidden="true" />
                                    Reserve Your Table
                                </a>
                                <a href="tel:+1234567890" className="btn btn-outline-white btn-lg" aria-label="Call us at +1 234 567 890">
                                    <Phone size={20} aria-hidden="true" />
                                    Call Us Now
                                </a>
                            </div>

                            <div className="hero-stats">
                                <div className="stat">
                                    <span className="stat-value">25+</span>
                                    <span className="stat-label">Years</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">50K+</span>
                                    <span className="stat-label">Guests</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">4.9</span>
                                    <span className="stat-label">Rating</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="scroll-indicator">
                        <span>Scroll Down</span>
                        <div className="scroll-line"></div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features section" id="features" aria-labelledby="features-heading">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Why Choose Us</span>
                            <h2 id="features-heading">The Savoria <span className="text-gradient">Difference</span></h2>
                        </motion.div>

                        <div className="features-grid" role="list">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-card"
                                    role="listitem"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Menu Preview Section */}
                <section className="menu-preview section" id="menu" aria-labelledby="menu-heading">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Our Specialties</span>
                            <h2 id="menu-heading">Signature <span className="text-gradient">Dishes</span></h2>
                        </motion.div>

                        <div className="menu-grid" role="list">
                            {[
                                { name: 'Grilled Salmon', price: '$28.99', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80', tag: 'Chef Special' },
                                { name: 'Ribeye Steak', price: '$34.99', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=80', tag: 'Best Seller' },
                                { name: 'Lobster Tail', price: '$45.99', image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=400&q=80', tag: 'Premium' },
                                { name: 'Tiramisu', price: '$9.99', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80', tag: 'Popular' }
                            ].map((dish, index) => (
                                <motion.article
                                    key={index}
                                    className="menu-card"
                                    role="listitem"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="menu-card-image">
                                        <img src={dish.image} alt={`${dish.name} - ${dish.tag}`} loading="lazy" width="400" height="300" />
                                        <span className="menu-tag" aria-label={`Category: ${dish.tag}`}>{dish.tag}</span>
                                    </div>
                                    <div className="menu-card-content">
                                        <h3>{dish.name}</h3>
                                        <span className="menu-price" aria-label={`Price: ${dish.price}`}>{dish.price}</span>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials section" id="testimonials" aria-labelledby="testimonials-heading">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Testimonials</span>
                            <h2 id="testimonials-heading">What Our <span className="text-gradient">Guests Say</span></h2>
                        </motion.div>

                        <div className="testimonials-grid" role="list">
                            {testimonials.map((t, index) => (
                                <motion.article
                                    key={index}
                                    className="testimonial-card"
                                    role="listitem"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="testimonial-stars" role="img" aria-label={`${t.rating} out of 5 stars`}>
                                        {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="#f39c12" color="#f39c12" aria-hidden="true" />)}
                                    </div>
                                    <blockquote>"{t.text}"</blockquote>
                                    <div className="testimonial-author">
                                        <img src={t.image} alt="" loading="lazy" width="50" height="50" />
                                        <span>{t.name}</span>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Booking Form Section */}
                <section className="booking section" id="booking" aria-labelledby="booking-heading">
                    <div className="container">
                        <div className="booking-wrapper">
                            <motion.div
                                className="booking-info"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="section-label">Reservations</span>
                                <h2 id="booking-heading">Book Your <span className="text-gradient">Table</span></h2>
                                <p>Reserve your spot for an unforgettable dining experience. We'll confirm your reservation within 2 hours.</p>

                                <address className="booking-contact">
                                    <div className="contact-item">
                                        <Phone size={24} aria-hidden="true" />
                                        <div>
                                            <strong>Call Us</strong>
                                            <span>+1 (234) 567-890</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <Mail size={24} aria-hidden="true" />
                                        <div>
                                            <strong>Email Us</strong>
                                            <span>hello@savoria.com</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <MapPin size={24} aria-hidden="true" />
                                        <div>
                                            <strong>Visit Us</strong>
                                            <span>123 Gourmet Street, Food City</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <Clock size={24} aria-hidden="true" />
                                        <div>
                                            <strong>Opening Hours</strong>
                                            <span>Mon-Sun: 10AM - 11PM</span>
                                        </div>
                                    </div>
                                </address>
                            </motion.div>

                            <motion.div
                                className="booking-form-wrapper"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                {submitted ? (
                                    <div className="form-success">
                                        <div className="success-icon"><Check size={48} /></div>
                                        <h3>Reservation Submitted!</h3>
                                        <p>We'll confirm your booking within 2 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="booking-form" aria-label="Reservation form">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name *</label>
                                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required autoComplete="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number *</label>
                                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" required autoComplete="tel" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" autoComplete="email" />
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="date">Date *</label>
                                                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="time">Time *</label>
                                                <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                                                    <option value="">Select Time</option>
                                                    {['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map(t => (
                                                        <option key={t} value={t}>{t}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="guests">Guests *</label>
                                                <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(n => (
                                                        <option key={n} value={n}>{n}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Special Requests</label>
                                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any dietary requirements or special occasions..." rows="3"></textarea>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={isSubmitting} aria-busy={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : <><Send size={20} aria-hidden="true" /> Book My Table</>}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta" aria-labelledby="cta-heading">
                    <div className="cta-bg">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" alt="" role="presentation" loading="lazy" width="1920" height="1080" />
                        <div className="cta-overlay" aria-hidden="true"></div>
                    </div>
                    <div className="container cta-content">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 id="cta-heading">Ready for an Unforgettable Experience?</h2>
                            <p>Don't miss out on our special offers. Book now and get 10% off your first visit!</p>
                            <div className="cta-actions">
                                <a href="#booking" className="btn btn-white btn-lg">Reserve Now</a>
                                <a href="tel:+1234567890" className="btn btn-outline-white btn-lg" aria-label="Call us at +1 234 567 890">
                                    <Phone size={20} aria-hidden="true" /> Call Us
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer" id="contact" aria-label="Site footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <a href="#" className="logo" aria-label="Savoria Restaurant - Home">
                                <Utensils className="logo-icon" aria-hidden="true" />
                                <span>Savoria</span>
                            </a>
                            <p>Experience fine dining at its best. Award-winning cuisine in an elegant setting.</p>
                        </div>

                        <nav className="footer-links" aria-label="Footer navigation">
                            <h4>Quick Links</h4>
                            <a href="#features">Why Us</a>
                            <a href="#menu">Menu</a>
                            <a href="#testimonials">Reviews</a>
                            <a href="#booking">Book Table</a>
                        </nav>

                        <address className="footer-contact">
                            <h4>Contact</h4>
                            <p><Phone size={16} aria-hidden="true" /> +1 (234) 567-890</p>
                            <p><Mail size={16} aria-hidden="true" /> hello@savoria.com</p>
                            <p><MapPin size={16} aria-hidden="true" /> 123 Gourmet St, Food City</p>
                        </address>

                        <div className="footer-hours">
                            <h4>Hours</h4>
                            <p>Mon - Fri: 10AM - 11PM</p>
                            <p>Sat - Sun: 9AM - 12AM</p>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2024 Savoria Restaurant. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
