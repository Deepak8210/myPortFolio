import React from "react";
import projectTaskMinder from "../assets/taskMinder.png";
import projectBlogImg from "../assets/blog.png";
import projectMattend from "../assets/m-attendance.png";

const Projects = () => {
  return (
    <section
      name="projects"
      className="border-b-2 min-h-screen flex flex-col justify-center w-full text-black p-4 lg:px-20"
    >
      <h6 className="text-lg uppercase font-bold">work</h6>
      <h1 className="text-4xl tracking-wider font-bold mb-8 text-primaryGreen">
        My Recent Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-2 lg:gap-6 w-full">
        <div className=" rounded-xl flex flex-col gap-2 shadow-md border overflow-hidden group">
          <div className="flex">
            <img
              src={projectBlogImg}
              alt=""
              className="w-full object-cover group-hover:scale-105 duration-300"
            />
          </div>
          <div className=" p-6">
            <h4 className="text-2xl font-bold text-[#208f93]">The Blog App</h4>
            <p className="text-blue-950 font-medium">
              This is a Blog App made using NodeJS
            </p>
            <p className="text-gray-400">
              This projects has many features like posting commenting editing
              etc
            </p>
            <a
              href="https://nodeblogv1.vercel.app/"
              className="text-blue-950 text-sm font-medium hover:text-orange-300"
              target="_blank"
            >
              Visit Project
            </a>
          </div>
        </div>

        <div className=" rounded-xl flex flex-col gap-2 shadow-md border overflow-hidden group">
          <div className="flex">
            <img
              src={projectMattend}
              alt=""
              className="w-full object-cover group-hover:scale-105 duration-300"
            />
          </div>
          <div className=" p-6">
            <h4 className="text-2xl font-bold text-[#208f93]">
              M-Attendance App
            </h4>
            <p className="text-blue-950 font-medium">This is an Android App</p>
            <p className="text-gray-400">
              This is an android app made using android studio with java as a
              language .look at the working of it in screenshots in screenshot
              folder
              <a
                target="_blank"
                className="text-blue-950 font-medium text-sm hover:text-orange-300"
                href="https://github.com/Deepak8210/M-AttendenceApp"
              >
                {" "}
                visit repository
              </a>
            </p>
          </div>
        </div>

        <div className=" rounded-xl flex flex-col gap-2 shadow-md border overflow-hidden group">
          <div className="flex">
            <img
              src={projectTaskMinder}
              alt=""
              className="w-full object-cover group-hover:scale-105 duration-300"
            />
          </div>
          <div className=" p-6">
            <h4 className="text-2xl font-bold text-[#208f93]">
              TaskMinder App
            </h4>
            <p className="text-blue-950 font-medium">
              A task Reminder app in React
            </p>
            <p className="text-gray-400">
              This is a react app that can be helpful to keep track of tasks.
            </p>
            <a
              href="https://taskminder-app.netlify.app/"
              className="text-blue-950 text-sm font-medium hover:text-orange-300"
              target="_blank"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
