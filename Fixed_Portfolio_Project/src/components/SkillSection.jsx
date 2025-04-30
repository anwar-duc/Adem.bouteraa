
import React from "react";
import SkillBadge from "@/components/SkillBadge";

export default function SkillSection({ title, skills }) {
  return (
    <div className="mb-12 md:mb-16">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">{title}</h3>
      <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
        {skills.map((skill, index) => (
          <SkillBadge key={`${title}-${skill}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
