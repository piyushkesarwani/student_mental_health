import React from "react";
import { Header } from "../Components/Header";
import img1 from "../assets/img1.png";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <section className="container">
      <Header />
      <div className="bg-blue-500 rounded-lg text-white flex justify-around items-center gap-6 w-full h-auto border my-4 p-4">
        <div className="leftText w-[50%]">
          <h2 className="text-4xl font-semibold">
            Student mental Health Online Platform.
          </h2>
          <p>
            Our main goal is in Prioritizing Student's Mental Health Issues.
          </p>
          <div className="flex justify-start items-center gap-4 my-2 mx-0">
            <Link to="/quiz">
              <button className="bg-yellow-400 font-semibold text-black p-2 rounded-md border mr-3">
                Screening Test
              </button>
            </Link>
            <a href="https://www.samhsa.gov/find-help/disaster-distress-helpline" target="_blank"><button className="bg-yellow-400 font-semibold text-black p-2 rounded-md border">
              Free Consultation
            </button></a>
          </div>
        </div>
        <div className="rightImage w-[50%]">
          <img className="w-full h-full object-cover" src={img1} alt="Image" />
        </div>
      </div>
      <div className="TheProblem my-4 flex justify-center items-center gap-4 w-full p-6">
        <div className="leftText w-[50%]">
          <h4 className="text-[grey] font-regular">
            Decreased Student Success associated with poor mental health lowers
            every student's{" "}
            <span className="text-blue-500 font-semibold">
              self-efficacy and their GPA.
            </span>
          </h4>
          <h4 className="text-[grey] font-regular my-6">
            Mental Health conditions affects more than 50% of the University
            Students, yet{" "}
            <span className="text-blue-500 font-semibold">
              most do not seek helps.
            </span>
          </h4>
        </div>
        <div className="rightText w-[50%]">
          <h2 className="font-bold">The Problem</h2>
          <p className="text-xl">
            To gain an understanding on current mental health trends, the
            General Direction of Mental Health distributed a large data-based
            survey last year to 5000 randomly selected students.
          </p>
          <p className="text-xl">
            Student health has declined dramatically over the past few years as
            the stress, obesity, and sleeping disorders have increased. Many
            universities invest in mental health services, but most students are
            not using these.
          </p>
        </div>
      </div>
      <Link to="/quiz">
        <button className="bg-blue-600 text-white p-2 my-3 rounded-md border mx-auto block text-2xl">
          Get Started
        </button>
      </Link>
      <div className="bg-black text-white p-3 rounded-lg imageGrid flex flex-col justify-start items-center gap-2 w-full h-auto my-5">
        <div className="flex justify-between items-center gap-2">
          <div className="image rounded-md w-[35%] h-auto">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={img3}
              alt="Image"
            />
          </div>
          <div className="image rounded-md w-[35%] h-auto">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={img4}
              alt="Image"
            />
          </div>
          <div className="image rounded-md w-[35%] h-auto">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={img5}
              alt="Image"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="image rounded-md w-[35%] h-auto">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={img6}
              alt="Image"
            />
          </div>
          <div className="image rounded-md w-[35%] h-auto">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={img7}
              alt="Image"
            />
          </div>
          <div className="image rounded-md w-[35%] h-auto">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={img8}
              alt="Image"
            />
          </div>
        </div>
        {/* <div className="flex justify-between items-center gap-2"></div> */}
        <div className="mt-3">
          <p className="w-[100%] text-[gray] text-2xl font-semibold text-center mb-5">
            The ministry of Health has partnered up to come with an initiative
            as a prevention to help students with their{" "}
            <span className="text-blue-500">mental health well-being</span>. The
            aim is to promote existing{" "}
            <span className="text-blue-500">mental health services</span> and
            help students develop coping skills and behaviors needed to improve
            their health.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl text-center my-4">
          Mental Health Applications Useful for Students
        </h2>
        <div className="flex justify-around items-center gap-4 mb-5 ">
          <p className="w-[50%] text-2xl fotn-regular">
            In my competitive analysis, I have encountered various mental health
            applications available on the market. As a part of developing this
            platform, I conducted research into their strengths and weaknesses,
            viewed what features were the most popular, and read users reviews.
          </p>
          <div className="w-[50%] h-auto">
            <img
              className="w-full h-full object-cover"
              src={img9}
              alt="Image"
            />
          </div>
        </div>
        <h2 className="font-semibold">
          Some Mental Health Apps recommendations for students...
        </h2>
        <div className="mt-3 mb-2 w-full flex justify-center items-center gap-2">
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Meditation Apps
            </a>
          </button>
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Stress Relief Apps
            </a>
          </button>
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Symptoms tracking apps
            </a>
          </button>
        </div>
        <div className="mt-2 w-full flex justify-center items-center gap-2">
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Mental Support Apps
            </a>
          </button>
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Therapy Apps
            </a>
          </button>
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Learning Coping Skill Apps
            </a>
          </button>
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Tracking Journal Apps
            </a>
          </button>
        </div>
        <div className="mt-2 mb-5 w-full flex justify-center items-center gap-2">
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Mental Illness Apps
            </a>
          </button>
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Time Tracking Apps
            </a>
          </button>
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Productivity Apps
            </a>
          </button>
          <button className="bg-blue-600 w-[30%] text-white p-2 mr-2 rounded-md">
            <a
              className="text-white no-underline"
              href="https://www.wizeprep.com/blog/5-meditation-apps-for-college-students"
              target="_blank"
            >
              Fun Games Apps
            </a>
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-center font-semibold text-3xl">
          In-Depth Interviews
        </h2>
        <p className="text-xl text-center font-regular">
          I interviewed various professors and consultants to learn about the
          issue related to Student's mental health problems. I start to
          interview various counsellors, psychiatrists, professors, to
          understand the types of conditions students in the universities go
          through.
        </p>
        <div className="grid my-5">
          <div className="row1 flex justify-center items-center gap-3">
            <div className="w-[33%] text-center bg-white">
              <p className="text-lg font-semibold">
                The pressure of combining paid work and study, anxiety and
                isolation are the leading problems for students.
              </p>
            </div>
            <div className="w-[33%]">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={img10}
                alt="Image"
              />
            </div>
            <div className="w-[33%] text-center bg-white">
              <p className="text-lg font-semibold">
                Some student thinks that therapy is for people who have serious
                issues. For this reason, it's relevant to educate them on how to
                prioritize their mental & emotional health.
              </p>
            </div>
          </div>
          <div className="row-2 mt-3 flex justify-center items-center gap-3">
            <div className="w-[33%]">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={img11}
                alt="Image"
              />
            </div>
            <div className="w-[33%] text-center bg-white">
              <p className="text-6xl font-semibold">30 Interviews</p>
            </div>
            <div className="w-[33%]">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={img12}
                alt="Image"
              />
            </div>
          </div>
          <div className="row3 flex justify-center items-center gap-3">
            <div className="w-[33%] text-center bg-white">
              <p className="text-lg font-semibold">
                Getting professional helps is becoming difficult for the
                students because of packed schedules and fear of judgement.
                Sometimes they don't realize what the symptoms are.
              </p>
            </div>
            <div className="w-[33%]">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={img13}
                alt="Image"
              />
            </div>
            <div className="w-[33%] text-center bg-white">
              <p className="text-lg font-semibold">
                Several student that have an appointment with counselling
                centers mentioned that the online platform for scheduling an
                appointment was very long and tedious.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link to="/quiz">
        <button className="bg-blue-600 text-white p-2 my-5 rounded-md border mx-auto block text-2xl">
          Take Screening Test
        </button>
      </Link>

      <div className="my-4 bg-black text-white p-4 rounded-lg conceptExploration">
        <h2>Concept Explorations in our platform</h2>
        <p className="text-xl">
          We have various concepts in our platform that helps to solve the issue
          related to students mental health problems.
        </p>
        <div className="row1 my-5 flex justify-around items-center gap-5">
          <div className="w-[50%] h-auto">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={img14}
              alt="Image"
            />
          </div>
          <div className="w-[50%]">
            <h3>Guided Peer Counselling.</h3>
            <p>
              Introducing peer counselling to reduce the communication gap that
              might arise due to the prejudice caused by the generation gap
              among the students and counsellors.
            </p>
            <Link to="/profile">
              <button className="bg-blue-500 text-white p-2 my-3 rounded-md border">
                Know More
              </button>
            </Link>
          </div>
        </div>

        <div className="row2 my-3 flex justify-around items-center gap-5">
          <div className="w-[50%]">
            <h3>Virtual Community.</h3>
            <p>
              Introducing a virtual Community for posting questions and answers.
            </p>
            <Link to="/profile">
              <button className="bg-blue-500 text-white p-2 my-3 rounded-md border">
                Know More
              </button>
            </Link>
          </div>
          <div className="w-[50%] h-auto">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={img15}
              alt="Image"
            />
          </div>
        </div>

        <div className="row3 my-3 flex justify-around items-center gap-5">
          <div className="w-[50%] h-auto">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={img16}
              alt="Image"
            />
          </div>
          <div className="w-[50%]">
            <h3>Course on mental Health.</h3>
            <p>
              To Teach all the members of the community about emotional health
              through mass communication, courses, or webinars.
            </p>
            <Link to="/profile">
              <button className="bg-blue-500 text-white p-2 my-3 rounded-md border">
                Know More
              </button>
            </Link>
          </div>
        </div>

        <div className="row4 my-3 flex justify-around items-center gap-5">
          <div className="w-[50%]">
            <h3>Materials for self-learning</h3>
            <p>
              We have several self-learning materials engineered for studnets to
              guide them for their self-learning process and help them to
              eradicate their mental illness. This includes - blogs, vlogs,
              talks, webinars, sessions, workshops, articls, quotes, posters,
              etc.
            </p>
            <Link to="/profile">
              <button className="bg-blue-500 text-white p-2 my-3 rounded-md border">
                Know More
              </button>
            </Link>
          </div>
          <div className="w-[50%] h-auto">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={img18}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
