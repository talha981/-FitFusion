// Dashboard.js
import React from 'react';
import { FaUser, FaDumbbell, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Gym Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaUser className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Total Members</h2>
          <p className="text-3xl font-bold text-gray-800">1,200</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaDumbbell className="text-4xl text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Workouts Completed</h2>
          <p className="text-3xl font-bold text-gray-800">3,450</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaCalendarAlt className="text-4xl text-yellow-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Upcoming Events</h2>
          <p className="text-3xl font-bold text-gray-800">5</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaDollarSign className="text-4xl text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Monthly Revenue</h2>
          <p className="text-3xl font-bold text-gray-800">$15,000</p>
        </div>
      </div>
      
      {/* Recent Activities Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-600">New yoga classes added to the schedule.</li>
          <li className="text-gray-600">Member of the Month: Jane Doe.</li>
          <li className="text-gray-600">Gym equipment upgrade completed.</li>
        </ul>
      </div>

      {/* Member Testimonials Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Member Testimonials</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Member 1" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="text-gray-800 font-semibold">John Smith</p>
              <p className="text-gray-600">"This gym has transformed my life. The trainers are amazing and the facilities are top-notch."</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Member 2" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="text-gray-800 font-semibold">Emily Johnson</p>
              <p className="text-gray-600">"I love the variety of classes available. There's something for everyone!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src="https://wallpapercave.com/wp/wp2483079.jpg" alt="Gallery 1" className="w-full h-40 object-cover rounded-lg" />
          <img src="https://wallpapercave.com/wp/wp8077459.jpg" alt="Gallery 2" className="w-full h-40 object-cover rounded-lg" />
          <img src="https://wallpapercave.com/wp/wp5339178.jpg" alt="Gallery 3" className="w-full h-40 object-cover rounded-lg" />
          <img src="https://www.teahub.io/photos/full/276-2763842_cardio-workout-full-hd-gym-workout-hd.jpg" alt="Gallery 4" className="w-full h-40 object-cover rounded-lg" />
          <img src="https://wallpaperaccess.com/full/1244688.jpg" alt="Gallery 5" className="w-full h-40 object-cover rounded-lg" />
          <img src="https://getwallpapers.com/wallpaper/full/3/1/b/200524.jpg" alt="Gallery 6" className="w-full h-40 object-cover rounded-lg" />
          <img src="https://png.pngtree.com/background/20230516/original/pngtree-gym-with-many-weights-in-dark-lighting-picture-image_2611113.jpg" alt="Gallery 7" className="w-full h-40 object-cover rounded-lg" />
          <img src="https://wallpapercave.com/wp/wp2639574.jpg" alt="Gallery 8" className="w-full h-40 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
