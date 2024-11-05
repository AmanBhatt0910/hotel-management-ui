import React from 'react'

const About = () => {
  return (
    <div>
      <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700">Welcome to Parth Hotel, where comfort meets luxury in the heart of the hills. Established in 2000, we have been dedicated to providing an unforgettable experience for our guests. Our mission is to offer a blend of modern amenities and traditional hospitality, ensuring that every stay is memorable.</p>
            <ul className="list-disc list-inside">
              <li>Stunning views of the surrounding hills</li>
              <li>Spacious and elegantly designed rooms</li>
              <li>State-of-the-art amenities and services</li>
              <li>Personalized guest experiences and services</li>
            </ul>
          </div>
          <div>
            <img src="/About/dummy-aboutus.jpg" alt="About Us" className="w-full h-64 object-cover rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About