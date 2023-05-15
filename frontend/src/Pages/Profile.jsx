import React from "react";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
import { FaUserAlt, FaChild, FaGrinStars, FaCheckCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img21 from "../assets/img21.webp";
import img20 from "../assets/img20.webp";
import img19 from "../assets/img19.webp";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import { Header } from "../Components/Header";

export const Profile = () => {
  return (
    <section className="container">
      <Header />
      <div className="header rounded-2xl bg-blue-400 text-white p-3 my-3">
        <div className="flex justify-between items-center">
          <h2>Hello, User</h2>
          <FaUserAlt className="text-2xl" />
        </div>
        <div className="mt-3 flex justify-start items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <FaChild className="text-xl" />
            <p className="my-0">2 Achivement</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaGrinStars className="text-xl" />
            <p className="my-0">10 points</p>
          </div>
        </div>
      </div>
      <div className="todoMoreArticleContainer flex justify-center items-start gap-4 p-4 my-3">
        <div className="leftContainer w-[50%]">
          <div className="todoListContainer w-full bg-white p-3 shadow-md rounded-xl border">
            <h2 className="font-semibold">Tasks for today.</h2>
            <div className="flex justify-between items-center">
              <p className="my-0">You're doing great. Keep it up.</p>
              <p className="my-0">60% completed</p>
            </div>
            <div className="my-3 w-full h-[8px] rounded-md border">
              <div className="bg-yellow-500 h-[8px] w-[60%]"></div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <button className="w-full bg-blue-300 rounded-md font-semibold text-black p-2 mb-3">
                Read "Stress relief" Module 2
              </button>
              <button className="w-full bg-blue-300 rounded-md font-semibold text-black p-2 mb-3">
                Call Mom
              </button>
              <div className="flex w-[100%] justify-center items-center gap-2">
                <FaCheckCircle className="text-green-600 my-0" />
                <button className="w-full bg-blue-300 rounded-md font-semibold text-black p-2 mb-3">
                  Exercise
                </button>
              </div>
              <div className="flex w-[100%] justify-center items-center gap-2">
                <FaCheckCircle className="text-green-600 my-0" />
                <button className="w-full bg-blue-300 rounded-md font-semibold text-black p-2 mb-3">
                  Play Chess
                </button>
              </div>
              <div className="flex w-[100%] justify-center items-center gap-2">
                <FaCheckCircle className="text-green-600 my-0" />
                <button className="w-full bg-blue-300 rounded-md font-semibold text-black p-2 mb-3">
                  Grocery/Shopping
                </button>
              </div>
              <div className="flex w-[100%] justify-center items-center gap-2">
                <FaCheckCircle className="text-green-600 my-0" />
                <button className="w-full bg-blue-300 rounded-md font-semibold text-black p-2 mb-3">
                  Go to bed by 10 pm.
                </button>
              </div>
            </div>
          </div>
          <div className="materialContainer my-5">
            <h2>Some Materials recommendations for you</h2>
            <Card>
              <div className="">
                <Card.Img className="" src={img22} />
              </div>
              <Card.Body className="">
                <Card.Title>
                  10 Tips for Students to Improve their Mental Health
                </Card.Title>
                <Card.Text>Mental Awareness - Dr. Savita Patil</Card.Text>
              </Card.Body>
              <a
                href="https://leverageedu.com/blog/mental-health-for-students/"
                target="_blank"
              >
                <button className="ml-4 bg-blue-600 text-white p-2 my-3 rounded-md">
                  Learn More
                </button>
              </a>
            </Card>
            <Card className="mt-5">
              <div className="">
                <Card.Img className="" src={img23} />
              </div>
              <Card.Body className="">
                <Card.Title>
                  Consequences of Student Mental Health Issues
                </Card.Title>
                <Card.Text>Suicide Prevention Resource Center</Card.Text>
              </Card.Body>
              <a
                href="https://sprc.org/settings/colleges-and-universities/consequences-of-student-mental-health-issues/"
                target="_blank"
              >
                <button className="ml-4 bg-blue-600 text-white p-2 my-3 rounded-md">
                  Learn More
                </button>
              </a>
            </Card>
          </div>
        </div>
        <div className="moreArticle w-[50%] h-auto bg-white shadow-md rounded border p-3">
          <h2>Looks like it might help you</h2>
          <div className="blogArticleContainer flex flex-col items-center gap-3">
            <article className="w-full my-4">
              <Card className="w-full">
                <Card.Img variant="top" src={img21} />
                <Card.Body>
                  <Card.Title>
                    Top 5 Mental Health Challenges Facing College Students and
                    How to Get Help
                  </Card.Title>
                  <Card.Text>
                    Learn the signs and symptoms of the most common mental
                    health conditions among college students, and find resources
                    for support.
                  </Card.Text>
                  <a
                    href="https://www.bestcolleges.com/resources/top-5-mental-health-problems-facing-college-students/"
                    target="_blank"
                  >
                    <Button variant="primary">Learn more</Button>
                  </a>
                </Card.Body>
              </Card>
            </article>
            <article className="w-full">
              <Card className="w-full">
                <Card.Img variant="top" src={img20} />
                <Card.Body>
                  <Card.Title>
                    9 Signs a College Supports Student Mental Health
                  </Card.Title>
                  <Card.Text>
                    Some colleges offer more mental health services than others.
                    Learn about important signs to look for when deciding on a
                    school.
                  </Card.Text>
                  <a
                    href="https://www.bestcolleges.com/blog/signs-college-supports-student-mental-health/"
                    target="_blank"
                  >
                    <Button variant="primary">Learn more</Button>
                  </a>
                </Card.Body>
              </Card>
            </article>
            <article className="w-full">
              <Card className="w-full">
                <Card.Img variant="top" src={img19} />
                <Card.Body>
                  <Card.Title>
                    3 Mental Health Coping Strategies for College Students
                  </Card.Title>
                  <Card.Text>
                    College students are in the midst of a mental health crisis.
                    This psychologist's mental health coping strategies can help
                    students flourish.
                  </Card.Text>
                  <a
                    href="https://www.bestcolleges.com/blog/mental-health-crisis-learning-how-to-cope/"
                    target="_blank"
                  >
                    <Button variant="primary">Learn more</Button>
                  </a>
                </Card.Body>
              </Card>
            </article>
          </div>
        </div>
      </div>

      <div className="YTvideos mb-5 p-3">
        <h2>Some Youtube Videos Might be helpful</h2>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JEtNxNW0bRU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ur8TZf6HWSs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t0f6javR1pM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wOGqlVqyvCM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-5xl">Scheduling Appointment</h2>
        <div className="bg-blue-600 text-white p-3 my-3 rounded-lg items-center justify-center">
          <h5 className="text-center">
            If you need urgent help, then check this{" "}
            <span className="text-yellow-500">
              list of emergency resources.
            </span>
          </h5>
        </div>
        <div className="flex justify-between items-start gap-4">
          <Card className="w-[33%]">
            <Card.Img variant="top" className="" src={img26} />
            <Card.Body>
              <Card.Title>Emergency Call</Card.Title>
              <Card.Text>
                In an emergency, Students have a list of crisis lines to call
                and examine the best approach.
              </Card.Text>
              <a
                href="https://www.samhsa.gov/find-help/disaster-distress-helpline"
                target="_blank"
              >
                <Button variant="primary" className="w-full">
                  Learn More
                </Button>
              </a>
            </Card.Body>
          </Card>
          <Card className="w-[33%]">
            <Card.Img variant="top" className="" src={img25} />
            <Card.Body>
              <Card.Title>Individual Counselling</Card.Title>
              <Card.Text>
                Students can meet personally with a trained professional to
                discuss their mental health issues.
              </Card.Text>
              <a
                href="https://www.samhsa.gov/find-help/disaster-distress-helpline"
                target="_blank"
              >
                <Button variant="primary" className="w-full">
                  Learn More
                </Button>
              </a>
            </Card.Body>
          </Card>
          <Card className="w-[33%]">
            <Card.Img variant="top" className="" src={img24} />
            <Card.Body>
              <Card.Title>Grouped Counselling</Card.Title>
              <Card.Text>
                We work with a focus on interpersonal relationships and social
                interactions, including how much support you have with others
                and the impact of these relationships.
              </Card.Text>
              <a
                href="https://www.samhsa.gov/find-help/disaster-distress-helpline"
                target="_blank"
              >
                <Button variant="primary" className="w-full">
                  Learn More
                </Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </section>
  );
};
