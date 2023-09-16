import React from "react";

const Education = () => {
  return (
    <section
      name="education"
      className="border-b-2 min-h-screen flex flex-col justify-center w-full text-black p-4 lg:px-20"
    >
      <h6 className="text-lg uppercase font-bold">About</h6>
      <h1 className="text-4xl tracking-wider font-bold mb-8 text-primaryGreen">
        My Education & Certifications
      </h1>
      <div className="grid md:grid-cols-2 gap-2 lg:gap-6 w-full">
        <div className=" rounded-xl p-6 flex flex-col gap-2 shadow-md border hover:scale-95 duration-300">
          <h4 className="text-2xl font-bold text-[#208f93]">
            Master of Computer Application
          </h4>
          <p className="text-blue-950 font-medium">
            Chandigarh university mohali (Punjab)
          </p>
          <p className="text-gray-400">
            Completed this 2 year post graduation degree within 2 years and got
            8.1 CGPA
          </p>
        </div>

        <div className=" rounded-xl p-6 flex flex-col gap-2 shadow-md border hover:scale-95 duration-300">
          <h4 className="text-2xl font-bold text-[#208f93]">
            B.Sc in Information & Technology
          </h4>
          <p className="text-blue-950 font-medium">
            Anugrah Narayan College (Patna)
          </p>
          <p className="text-gray-400">
            Completed my 3year graduation from this institution and qualified
            with 6.8CGPA
          </p>
        </div>

        <div className=" rounded-xl p-6 flex flex-col gap-2 shadow-md border hover:scale-95 duration-300">
          <h4 className="text-2xl font-bold text-[#208f93]">
            Complete web Develpment Course (udemy)
          </h4>
          <p className="text-blue-950 font-medium">Online Platform udemy</p>
          <p className="text-gray-400">
            Gained my skills of web development technologies like html, css, js
            and many more through this course.
          </p>
        </div>

        <div className=" rounded-xl p-6 flex flex-col gap-2 shadow-md border hover:scale-95 duration-300">
          <h4 className="text-2xl font-bold text-[#208f93]">
            Data Analytics using Python (NPTEL)
          </h4>
          <p className="text-blue-950 font-medium">
            Online Course Provided by IIT kharagpur
          </p>
          <p className="text-gray-400">
            Learned basics of Data analytics in python and fundaments of python
            from government oriented swayam portal
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
