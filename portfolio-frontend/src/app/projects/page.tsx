import ProjectCard from "@/components/project-card";

export default function Projects() {
  const dummyDesc =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur explicabo quisquam similique voluptatibus! Totam sequi ex optio corporis amet assumenda, dolore ab excepturi non sunt, nobis voluptate facilis, consequuntur dolorum.";
  return (
    <section>
      <h2 className="text-center">Portfolio</h2>
      <ProjectCard projectTitle="Jaalea Website" projectDesc={dummyDesc} />{" "}
      <br />
      <ProjectCard projectTitle="Surfcamp" projectDesc={dummyDesc} /> <br />
      <ProjectCard
        projectTitle="Ortimar Website"
        projectDesc={dummyDesc}
      />{" "}
      <br />
      <ProjectCard
        projectTitle="Jaalea Mobile App"
        projectDesc={dummyDesc}
      />{" "}
      <br />
      <ProjectCard projectTitle="Smile App" projectDesc={dummyDesc} /> <br />
    </section>
  );
}
