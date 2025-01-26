import React, { useState } from "react";

const SkillList = React.memo(({ skills }) => {
  console.log("Rendering SkillList...");
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

const ReactMemo = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.length > 5) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    } else {
      alert("Skill must be more than 5 characters!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter skill"
      />
      <button onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} />
    </div>
  );
};

export default ReactMemo;
