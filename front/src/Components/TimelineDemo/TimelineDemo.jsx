import React from "react";
import { Timeline } from "./Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2020",
      image: "./assets/orange.jpg", // <-- image correspondante
      content: (
        <div>
          <div className="tit">
            <h1 className="text-white font-bold text-xl md:text-3xl mb-4">
              My First Step into Tech: Orange
            </h1>
          </div>
          <p className="text-white text-sm md:text-lg font-normal mb-4">
            It all started with my middle school internship at Orange.
            For the first time, I got to see how a major tech company really worked — the networks, the systems, the hidden logic that keeps everything running.
            I didn’t understand much yet, but I was fascinated by the invisible structure behind it all: how data, cables, and people came together to make things possible.
            That’s when I first felt my curiosity spark for technology and innovation.
          </p>
          <p className="text-white text-sm md:text-lg font-normal mb-4">
            • Discovering the world of data
          </p>
          <p className="text-white text-sm md:text-lg font-normal mb-4">
            • Operational Marketing research project
          </p>
          <p className="text-white text-sm md:text-lg font-normal mb-4">
            • Introduction to telecommunication networks
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      image: "./assets/neoma.webp",
      content: (
        <div>
          <div className="tit">
            <h1 className="text-white font-bold text-xl md:text-3xl mb-8">
              Starting at NEOMA Business School
            </h1>
          </div>
          <p className="text-white text-sm md:text-lg font-normal mb-4">
           When I joined NEOMA’s TEMA program, I found an environment that finally felt like me —
          Half technical, half creative, where you learn to think like a manager but act like an engineer.
          Through courses in information systems, CRM, strategy, and design, I discovered what really fascinated me: data — the way numbers can explain, predict, and inspire.
          I also joined the Digital & Tech Association, where I started coding out of curiosity... and ended up finding a passion.
          </p>
        </div>
      ),
    },
    {
      title: "Apr 2024",
      image: "./assets/dsd.webp",
      content: (
        <div>
          <div className="tit">
            <h1 className="text-white font-bold text-xl md:text-3xl mb-8">
              My First Hands-On Experience with DSD Paris
            </h1>
          </div>
          <p className="text-white text-sm md:text-lg font-normal mb-4">
            Alongside my studies, I started working for DSD Paris, first as a hostess, then as a team lead for premium events.
            I learned how to coordinate, listen, and adapt quickly to unexpected challenges.
            Each event felt like a mini company — a team to manage, goals to meet, results to deliver.
            That experience taught me how to analyze situations fast, communicate clearly, and lead with empathy — skills that now shape how I approach data.
          </p>
        </div>
      ),
    },
    {
      title: "Oct 2024",
      image: "./assets/epi.png",
      content: (
        <div>
          <div className="tit">
            <h1 className="text-white font-bold text-xl md:text-3xl mb-8">
              Epitech Barcelona: Learning by Building
            </h1>
          </div>
          <p className="text-white text-sm md:text-lg font-normal mb-4">
            My semester at Epitech Barcelona was a turning point.
            Here, everything was practical — no theory, just creation.
            Within months, I built a data analysis web platform and a personalized recommendation system for e-commerce.
            It was the first time I truly saw how code and data could work together to bring ideas to life.
            That’s when I realized I wanted to work in data, but always with purpose and meaning behind the numbers.
          </p>
        </div>
      ),
    },
    {
      title: "June 2025",
      image: "./assets/modern-office.png",
      content: (
        <div>
          <div className="tit">
            <h1 className="text-white font-bold text-xl md:text-3xl mb-8">
              CRM Internship at Vente-Unique: Data Meets Strategy
            </h1>
          </div>
          <p className="text-white text-sm md:text-lg font-normal mb-4">
            At Vente-Unique, I dove into CRM and customer data.
            I automated dashboards and reports, segmented customer databases, and optimized marketing campaigns through A/B testing.
            But beyond the analytics, I discovered how data tells human stories — about behaviors, emotions, and decisions.
            Reading those patterns felt like uncovering the narrative behind each number.
            That’s when I understood that great data work is really about connecting logic with emotion.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-transparent">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
