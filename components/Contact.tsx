import React from 'react';

const ContactInfo: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 text-blue-500 mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-lg text-white">{title}</h4>
            <div className="text-gray-400">{children}</div>
        </div>
    </div>
);


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Get In <span className="text-blue-500">Touch</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <ContactInfo
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="Email"
                >
                    <a href="mailto:alibesho800@gmail.com" className="hover:text-blue-400 transition-colors">alibesho800@gmail.com</a>
                </ContactInfo>
                
                <ContactInfo
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                    title="Phone"
                >
                    <a href="tel:+218923379054" className="hover:text-blue-400 transition-colors">+218 92 337 9054</a>
                </ContactInfo>

                <ContactInfo
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                    title="Professional Reference"
                >
                    <p>Abd Al haq Faiz - Baseline Agency</p>
                    <a href="mailto:hello@blc.ly" className="hover:text-blue-400 transition-colors">hello@blc.ly</a>
                    <br/>
                    <a href="https://blc.ly" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">https://blc.ly</a>
                </ContactInfo>
            </div>
            
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea name="message" id="message" rows={4} placeholder="Your Message" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;