function ProjectCard({ src, link, h3, p }) {
  return (
    
    <a href={link} target="_blank" className="mx-20 flex w-full items-start gap-x-4 space-x-4 p-4 rounded-lg hover:shadow-lg transition">
      <img className="hover" src={src} alt="src" />
      <div className="flex flex-col justify-center items-start">
        <div className="text-left text-2xl font-bold">{h3}</div>
        <p className="text-left text-sm font-light">{p}</p>
      </div>
    </a>

    // <a href={link} target="_blank">
    //   <img className="hover" src={src} alt={h3} />
    //   <h3>{h3}</h3>
    //   <p>{p}</p>
    // </a>
  );
}




export default ProjectCard;
