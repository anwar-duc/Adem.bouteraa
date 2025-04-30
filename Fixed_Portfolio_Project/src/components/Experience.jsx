
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';

const experienceData = [
  {
    company: "DecliTech",
    role: "Instructor",
    date: "Nov 2024 - Present",
    description: "Conducting engaging training sessions for youth (7-17) on Hard & Soft Skills, including Python programming and AI concepts. My task organization involves preparing modular lesson plans, adapting content dynamically based on student progress using interactive tools, and providing structured feedback.",
    details: [
      "Developed curriculum for Python basics and AI fundamentals.",
      "Utilized project-based learning to enhance engagement.",
      "Managed class schedules and resources effectively using shared calendars and checklists."
    ],
    logo: "https://storage.googleapis.com/hostinger-horizons-assets-prod/dae41d1d-bedd-4ce0-a2fd-88f80895c66b/ee5926996f92bbc3756239289b677a64.png"
  },
  {
    company: "Lacroix Group",
    role: "Data Analyst",
    date: "Jan 2024 - June 2024",
    description: "Served as a Data Analyst focusing on Power BI dashboard development, Python scripting for data processing, and contributing to React JS frontend components. Organized tasks using Agile methodologies, breaking down dashboard requirements into sprints, tracking progress with Kanban boards, and prioritizing based on business impact.",
    details: [
        "Automated data extraction processes using Python.",
        "Designed and implemented interactive Power BI reports.",
        "Collaborated with frontend team on data integration.",
        "Participated in daily stand-ups and sprint reviews."
    ],
    logo: "https://storage.googleapis.com/hostinger-horizons-assets-prod/dae41d1d-bedd-4ce0-a2fd-88f80895c66b/d4314b7596dca0bfbe5ce9448da6b04d.png" // Added Lacroix logo
  },
  {
    company: "Higher Independent Election Authority",
    role: "Administrative Data Analyst",
    date: "Sept 2023 - April 2024",
    description: "Performed administrative data analysis, ensuring data integrity and generating reports for election processes. Task organization involved meticulous planning of data validation steps, using checklists for quality control, and version controlling reports for accuracy and traceability.",
    details: [
      "Cleaned and validated large datasets related to voter registration.",
      "Generated statistical reports for internal stakeholders.",
      "Maintained documentation for data handling procedures."
    ],
    logo: "https://storage.googleapis.com/hostinger-horizons-assets-prod/dae41d1d-bedd-4ce0-a2fd-88f80895c66b/3612b5547dba2a9541876499987e6bef.png" // Added Election Authority logo
  },
  {
    company: "El Amouri Institute",
    role: "Field Supervisor / Banking Control",
    date: "Jan 2021 - Aug 2022",
    description: "Supervised field operations and conducted banking control tasks, ensuring compliance and efficiency. Managed team schedules and task assignments using spreadsheets and regular check-ins, prioritizing critical control points and documenting findings systematically.",
    details: [
        "Oversaw field staff activities and performance.",
        "Implemented control procedures to mitigate risks.",
        "Prepared detailed reports on field findings and compliance status."
    ],
    logo: "https://storage.googleapis.com/hostinger-horizons-assets-prod/dae41d1d-bedd-4ce0-a2fd-88f80895c66b/41adfb0de29d15608ad99a10d134636b.png" // Added El Amouri logo
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title"
           initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-10 md:space-y-12">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              date={exp.date}
              description={exp.description}
              details={exp.details}
              logo={exp.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
