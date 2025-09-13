interface ProjectCardProps {
  projectTitle: string;
  projectDesc: string;
}

export default function ProjectCard({
  projectTitle,
  projectDesc,
}: ProjectCardProps) {
  return (
    <div>
      <div>
        <h3>{projectTitle}</h3>
        <p>{projectDesc}</p>
      </div>
      <div></div>
    </div>
  );
}
