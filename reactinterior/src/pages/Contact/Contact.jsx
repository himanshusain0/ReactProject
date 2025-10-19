"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/template/label";
import { Input } from "../../components/ui/template/input";
import { cn } from "../../lib/utils";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 text-center mb-8">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="shadow-input mx-auto w-full rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Send us a Message
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer className="flex-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="John Doe" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </LabelInputContainer>
              </div>
              
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email"
                  placeholder="john@example.com" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </LabelInputContainer>
              
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  placeholder="+91 9876543210" 
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              
              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Your Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-zinc-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                  required
                />
              </LabelInputContainer>

              <button
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit">
                Send Message &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 text-xl mt-1">📍</div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Address</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">123 Design Street<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 text-xl mt-1">📞</div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Phone</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 text-xl mt-1">📧</div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Email</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">info@interiorpro.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 text-xl mt-1">🕒</div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Business Hours</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default Contact;