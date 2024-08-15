import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const Navigate = useNavigate();
  const hanldeJoinBtn=()=>{
    Navigate('/login')

  }

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative">
        <img 
          src="https://wallpaperaccess.com/full/4722464.jpg" 
          alt="Gym Hero" 
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold mb-4">
            Welcome to FitLife Gym
          </h1>
          <p className="text-lg text-gray-300">
            Achieve your fitness goals with us!
          </p>
          <button onClick={hanldeJoinBtn} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Join Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="https://c4.wallpaperflare.com/wallpaper/569/119/783/woman-man-strength-workout-wallpaper-preview.jpg" 
                alt="Personal Training" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Personal Training
                </h3>
                <p className="text-gray-600">
                  Get one-on-one coaching from our certified trainers to reach your fitness goals.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="https://olympiafitnessri.com/wp-content/uploads/2021/03/People-doing-pushups-together-in-a-health-club-class-853407238_5976x3984-scaled-e1615396175580.jpeg" 
                alt="Group Classes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Group Classes
                </h3>
                <p className="text-gray-600">
                  Join our energetic group classes and stay motivated with fellow gym members.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="https://strengthlog.mystagingwebsite.com/wp-content/uploads/2022/12/cardio-or-weights-first-scaled.jpg" 
                alt="Cardio Training" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Cardio Training
                </h3>
                <p className="text-gray-600">
                  Burn calories and improve your endurance with our state-of-the-art cardio equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;




