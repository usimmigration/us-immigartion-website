'use client';

import Image from 'next/image'
import { FormEvent, useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactsPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                Our customer service representatives are available to assist with general questions about our products and services, including any billing inquiries. Please fill out the form, and we'll respond as soon as possible. For your convenience, support is available 24/7. We strive to reply to all inquiries within 2 hours.
              </p>
              <p className="text-gray-600 mb-4">
                Phone support: <a href="tel:+13477194835" className="text-blue-600 hover:text-blue-800">+1.3477194835</a> (long distance charges may apply).
              </p>
            </div>
            <Image 
              width={692} 
              height={375} 
              src="https://www.usimmigrationsupport.org/wp-content/uploads/2023/10/contact-img.webp"
              className="w-full h-auto mt-8 rounded-lg shadow-md"
              alt="Contact us"
              priority
            />
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8" noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    required
                    placeholder="Type your name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    required
                    placeholder="Type your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    rows={8}
                    required
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <div>
                  <button 
                    type="submit" 
                    className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors
                      ${isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800" role="alert">
                    Message sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-800" role="alert">
                    Failed to send message. Please try again.
                  </div>
                )}

                <p className="text-sm text-gray-500">
                  By pressing submit I consent to the storing of information in this message for the only purpose of responding to my query. The message will be permanently deleted after 90 days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}