const programmingLanguages = [
  {
    "entity": "Python",
    "expertise": "advanced"
  },
  {
    "entity": "JavaScript",
    "expertise": "advanced"
  },
  {
    "entity": "C++",
    "expertise": "intermediate"
  },
  {
    "entity": "SQL",
    "expertise": "intermediate"
  }
]

const frameworks = [
  {
    "entity": "Flask",
    "expertise": "advanced"
  },
  {
    "entity": "PyTorch",
    "expertise": "intermediate"
  },
  {
    "entity": "React",
    "expertise": "intermediate"
  }
]

const miscellaneous = [
  {
    "entity": "Git",
    "expertise": "advanced"
  },
  {
    "entity": "JIRA",
    "expertise": "intermediate"
  },
  {
    "entity": "Docker",
    "expertise": "intermediate"
  },
  {
    "entity": "AWS",
    "expertise": "beginner"
  }
]

export const skills = {
  "Languages": programmingLanguages,
  "Frameworks": frameworks,
  "Miscellaneous": miscellaneous
}

export const renderSkill = (skill, className) => (
  <ul className={className}>
    {skill.map((item, i) => (
      <li key={i}>{item.entity}</li>
    ))}
  </ul>
)