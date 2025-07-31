const ProjectCard = ({ title, description }) => {
  return (
    <div className="glass p-6 rounded-lg shadow-glass hover:scale-105 transform transition duration-300">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-100">{description}</p>
    </div>
  );
};

export default ProjectCard;