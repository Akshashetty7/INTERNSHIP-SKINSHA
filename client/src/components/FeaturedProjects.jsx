import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { RiArrowRightSLine } from 'react-icons/ri';

function FeaturedProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/projects?featured=true`,
        { mode: 'cors' },
      );
      const fetchedProjects = await response.json();
      setProjects(fetchedProjects.data);
    };
    fetchProjects();
  }, []);
  

  return (
    <div className="flex flex-col max-w-7xl">
      

      <div className="flex flex-col md:flex-row my-8 gap-5">
        {/* ------------- Features Card ------------ */}
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/projects/${project.uid}`}
            className="flex md:w-1/3 flex-col gap-4 bg-[#0a0c3d] hover:bg-[#0a0c3d]/50 rounded-xl border border-slate-800 p-5"
          >
            {/* ------------- Project thumbnail ------------ */}
            <img
              alt="thumbnail"
              src={project.thumbnail}
              className="object-cover rounded  aspect-video"
            />

            <div className="gap=0">
              {/* ------------- Project title ------------ */}
              <h2 className="font-semibold text-xl ">{project.title}</h2>

              {/* ------------- Project organization ------------ */}
             
            </div>
            <div className="flex">
              {/* ------------- Project tech stack ------------ */}

              <ul className="capitalize text-slate-400">
                <li
                  key={index}
                  className="border border-slate-600 p-2 text-sm rounded-2xl"
                >
                  {project.techStack}
                </li>
              </ul>
            </div>

            {/* ------------- Project description ------------ */}
            <p className="opacity-75 ">{project.description}</p>
            <div className="flex">
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
