'use client';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        data,
        'YOUR_USER_ID' // or public key
      );
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 flex justify-center items-center gap-2">
          <Mail className="text-teal-400" size={32} /> Contact Me
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-400">Name</label>
            <div className="flex items-center bg-gray-800 rounded-lg">
              <User className="ml-3 text-gray-500" />
              <input
                {...register('name', { required: true })}
                className="w-full p-3 bg-transparent focus:outline-none text-white"
                placeholder="Your Name"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div>
            <label className="block mb-2 text-gray-400">Email</label>
            <div className="flex items-center bg-gray-800 rounded-lg">
              <Mail className="ml-3 text-gray-500" />
              <input
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="w-full p-3 bg-transparent focus:outline-none text-white"
                placeholder="Your Email"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
          </div>

          <div>
            <label className="block mb-2 text-gray-400">Message</label>
            <div className="flex items-start bg-gray-800 rounded-lg p-3">
              <MessageCircle className="mt-1 mr-2 text-gray-500" />
              <textarea
                {...register('message', { required: true })}
                className="w-full bg-transparent focus:outline-none text-white resize-none"
                rows="5"
                placeholder="Your Message"
              />
            </div>
            {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitted && (
            <p className="text-green-400 mt-4 text-center">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
