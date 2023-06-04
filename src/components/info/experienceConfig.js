export const workExperience = [
    {
        "companyName": "LabV2",
        "date": "May - Present",
        "location": "Tempe, AZ, USA",
        "position": "Summer Volunteer",
        "summary": []
    },
    {
        "companyName": "Akamai Technologies",
        "date": "July 2021 - July 2022",
        "location": "Bengaluru, Karnataka, India",
        "position": "Software Engineer",
        "summary": [
            "Extended a feature of Apple Private Relay to return a descriptive status of RSA blind signatures for user authentication",
            "Coded a logging extension allowing customers to capture nearly 1.5 times the size of previous data for analytics",
            "Improved Enhanced Proxy Detection by adding Residential Proxy as a new type",
            "Contributed to testing a feature extension of Origin IP ACL with over 50% code coverage",
            "Trained a fellow junior software engineer on team responsibilities and provided knowledge transfer sessions"
        ]
    },
    {
        "companyName": "Akamai Technologies",
        "date": "Jan - June 2021",
        "location": "Bengaluru, Karnataka, India",
        "position": "Software Engineer Intern",
        "summary": [
            "Worked on a web application to automate the manual efforts of a release engineer",
            "Tech stack included React, Python-Flask, and Apache Airflow",
            "Containerized above application and gained expertise in docker deployments"
        ]
    },
    {
        "companyName": "PES University",
        "date": "June - July 2018",
        "location": "Bengaluru, Karnataka, India",
        "position": "Summer Intern",
        "summary": [
            "Trained a Machine Learning (ML) model to recognize numbers from an audio input using MFCC feature vectors",
            "Manually curated data using recordings of friends, professors, and family",
            "Achieved an overall accuracy of over 80%"
        ]
    }
]

function ExperienceRow(exp) {
    return (
        <>
            <tr className="experienceRow">
                <td className="dateColumn">
                    {exp.date}
                </td>
                <td className="col2">
                    <h3 style={{ color: "#ffffff" }}>{exp.position} · {exp.companyName}</h3>
                    <p>{exp.location}</p>
                        <ul>
                        {exp.summary.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                        </ul>
                    <div className="spacer"/>
                </td>
            </tr>
        </>
    )
}

export default ExperienceRow;