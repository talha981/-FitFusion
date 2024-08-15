// AboutUs.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <img 
          src="https://wallpaperaccess.com/full/4722464.jpg" 
          alt="Gym Hero" 
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold mb-4">
          Meet the Team Behind Your Fitness Journey"
          </h1>
          <p className="text-lg text-gray-300">
          About Us
          </p>
          
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to our gym! We are dedicated to helping you achieve your fitness goals and live a healthier lifestyle. Our state-of-the-art facilities and professional trainers are here to support you every step of the way. Whether you are a seasoned athlete or just starting your fitness journey, we have something for everyone.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to provide a welcoming and motivating environment where individuals can improve their health and fitness levels. We believe in the power of community and strive to create a space where members feel supported and inspired.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Trainer 1" 
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">Jane Doe</h3>
              <p className="text-gray-600">Head Trainer</p>
              <p className="mt-2">Jane is a certified fitness trainer with over 10 years of experience in the industry. She specializes in strength training and nutrition.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Trainer 2" 
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">John Smith</h3>
              <p className="text-gray-600">Yoga Instructor</p>
              <p className="mt-2">John is an experienced yoga instructor with a passion for helping others find balance and flexibility through yoga practices.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Trainer 3" 
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">Emily Johnson</h3>
              <p className="text-gray-600">Nutritionist</p>
              <p className="mt-2">Emily is a certified nutritionist who provides personalized meal plans and dietary advice to help members achieve their fitness goals.</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Facilities</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our gym is equipped with the latest fitness equipment, including cardio machines, free weights, and strength training equipment. We also offer a range of classes and personal training sessions to suit your needs. Our clean and modern facilities provide a comfortable environment for all members.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
