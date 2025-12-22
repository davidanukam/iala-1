import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Heart, Globe, Award, BookOpen } from "lucide-react";
import Hero from "../components/Hero";

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Heritage & Preservation",
      description:
        "Maintaining and celebrating our rich Igbo heritage while adapting to our Canadian home.",
    },
    {
      icon: Users,
      title: "Community Family Unity & Trust",
      description:
        "Building strong connections among Igbo families and individuals in London and surrounding areas.",
    },
    {
      icon: Target,
      title: "Industry with Excellence",
      description:
        "Promoting educational and professional advancement while upholding the highest standards.",
    },
    {
      icon: Globe,
      title: "Team work & Integration",
      description:
        "Contributing positively to Canadian society while preserving our unique cultural identity.",
    },
  ];

  const leadership = [
    {
      name: "Mr. Kenneth Emetuche",
      position: "President",
      image: "src/assets/Kenneth.jpg",
       // "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
       alt: "Iala president",
      bio: "Background in Banking and Finance but developed great passion for community advocacy with 15+ years of service.",
    },
    {
      name: "Mr. Nwakanma Ninduwezuor Ehiobu a.k.a Wakie",
      position: "Vice President",
      image: "src/assets/wakie1.jpeg",
       // "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
       alt: "VP",
      bio: "As one of the pioneer members of the Ibo Association in London and Area, I have been proud to help shape the vision and growth of our association since its beginning. My passion lies in preserving Igbo culture while building a strong, supportive community for our members here in London and area",
    },
    {
      name: "Kingsley Anukam",
      position: "Research & Proposal Development Director / Financial Secretary",
      image: "src/assets/KAnukam.jpg",
       // "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg",
       alt: "RPD",
      bio: "Image maker of IALA and grant writer for the Igbo Association.",
    },
    {
      name: "Mr. Ikechukwu Ugwuede",
      position: "Secretary",
      image: "src/assets/Ikechukwu.jpg",
      // "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg",
      alt: "Sec",
      bio: " Holds a Bachelor of Science (Biochemistry) degree from the Memorial University of Newfoundland & Labrador. He is passionate about building community relations with the youths and diverse groups.",
    },
    {
      name: "Ngozi Kanu",
      position: "Treasurer",
      image: "src/assets/Ngozi-kanu.jpg",
       // "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg",
      alt: "IALA Community Gathering",
      bio: "Ngozi is a project management professional with vast experience in community relations A proud daughter of Arochukwu, Abia State, she is deeply committed to serving her community with strategic foresight.",
    },
    {
      name: "Mr. Raymond Okeke",
      position: "Public Relations Officer-PRO",
      image: "src/assets/Raymond.jpg",
       // "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg",
       alt: "PRO",
      bio: "Registered Practical Nurse and Transportation Business Man with a strong passion for community integration.",
    },
   {
      name: "Mr. Uche Nwankwo",
      position: "Social Events and Entertainment officer",
      image: "src/assets/Uche-Nwankwo.jpg",
       // "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg",
       alt: "Social director",
      bio: "Registered Practical Nurse and Transportation Business Man with a strong passion for community integration.",
    }, 
  ];

  return (
    <div>
      <Hero
        title="About IALA"
        subtitle="Our Story, Mission & Vision"
        description="Learn about our history, leadership, and commitment to building a vibrant Igbo community in London, Ontario"
       image="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
        height="md"
      />,
      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our History
              </h2>
              <div className="w-24 h-1 bg-[#007A33] mb-6"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Igbo Association of London and Area was founded in 2017 by
                  a group of passionate Igbo professionals and families who
                  recognized the need for a unified voice and support system for
                  our growing community in London, Ontario.
                </p>
                <p>
                  What began as informal gatherings in family homes has evolved
                  into a well-established organization that serves over 500
                  members across London, St. Thomas, Woodstock, and surrounding
                  areas.
                </p>
                <p>
                  Over the years, we have successfully organized cultural
                  festivals, educational workshops, scholarship programs, and
                  community support initiatives that have strengthened our bonds
                  and preserved our cultural heritage for future generations.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="src/assets/bannerdesign.png"
                alt="IALA Community Gathering"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-[#007A33] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <Target className="h-12 w-12 text-[#007A33] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To foster unity among people of Igbo heritage, promote our
                cultural values, support the social and economic development of
                our members, and contribute positively to the diverse fabric of
                Canadian society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <Globe className="h-12 w-12 text-[#007A33] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading Igbo cultural organization in Southwestern
                Ontario, recognized for excellence in community building,
                cultural preservation, and positive contribution to Canadian
                society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#007A33] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do as an organization and
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#007A33] transition-colors duration-300">
                  <value.icon className="h-10 w-10 text-[#007A33] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-[#007A33] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who guide our organization and
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#007A33] font-semibold mb-3">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[#007A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">$150,000+</h3>
              <p className="text-green-100">Total Community-Oriented Grants Received</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <BookOpen className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">150+</h3>
              <p className="text-green-100">Educational Programs Delivered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Users className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">15</h3>
              <p className="text-green-100">Years of Community Service</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
