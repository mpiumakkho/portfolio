import { motion as Motion, useInView } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RotatingLangIcon from '../utils/RotatingLangIcon';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [repos, setRepos] = useState([]);
  const [maxCardHeight, setMaxCardHeight] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Fetch repositories
    const USER = 'mpiumakkho'; // change to your GitHub username if different
    const headers = import.meta.env.VITE_GH_TOKEN
      ? { Authorization: `token ${import.meta.env.VITE_GH_TOKEN}` }
      : {};

    fetch(`https://api.github.com/users/${USER}/repos?sort=updated`, { headers })
      .then((r) => r.json())
      .then((data) => {
        const mapped = data.map((r) => ({
          id: r.id,
          title: r.name,
          description: r.description,
          image: '🗂️',
          liveLink: r.homepage || '',
          githubLink: r.html_url,
          languages_url: r.languages_url,
        }));

        // fetch languages in parallel
        Promise.all(
          mapped.map((repo) =>
            fetch(repo.languages_url, { headers })
              .then((res) => res.json())
              .then((langs) => Object.keys(langs).slice(0, 5))
              .catch(() => [])
          )
        ).then((langsArr) => {
          const merged = mapped.map((repo, idx) => ({
            ...repo,
            technologies: langsArr[idx],
        }));
          setRepos(merged);
        });
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recalculate max card height whenever repos change or window resizes
  useLayoutEffect(() => {
    if (!repos.length) return;
    const calcHeight = () => {
      const heights = cardRefs.current.map((el) => (el ? el.offsetHeight : 0));
      const max = Math.max(...heights);
      if (max !== maxCardHeight) setMaxCardHeight(max);
    };
    // Initial calculation
    calcHeight();
    // Recalculate on resize
    window.addEventListener('resize', calcHeight);
    return () => window.removeEventListener('resize', calcHeight);
  }, [repos, maxCardHeight]);

  return (
    <section id="projects" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Personal Projects
          </h2>
          <div className="w-24 h-1 bg-[#3886db] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Here are some projects I've built to demonstrate my technical skills and passion for development.
          </p>
        </Motion.div>

        {/* Project slider (navigation buttons placed outside) */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            slidesPerView={3}
            navigation={{ prevEl: '.projects-prev', nextEl: '.projects-next' }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pt-4 pb-12"
          >
            {repos.map((project, idx) => (
              <SwiperSlide key={project.id} className="flex justify-center">
                <div
                  className="card rounded-lg overflow-hidden border-2 border-gray-200 shadow-sm hover:shadow-md transition bg-white/70 backdrop-blur"
                  ref={(el) => (cardRefs.current[idx] = el)}
                  style={{ height: maxCardHeight || 'auto' }}
                >
                  <div className="image-content bg-transparent">
                    <div className="card-image flex items-center justify-center">
                      <RotatingLangIcon langs={project.technologies} size={88} />
                    </div>
                  </div>
                  <div className="card-content flex flex-col justify-between gap-4 px-4 pb-8">
                    <h3 className="name text-center break-all px-2">{project.title}</h3>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                    <div className="flex space-x-4 mt-auto justify-center">
                  {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="button">
                          Live
                    </a>
                  )}
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button-secondary flex items-center gap-1">
                        <FaGithub />
                        <span>Code</span>
                  </a>
                </div>
              </div>
                </div>
              </SwiperSlide>
          ))}
          </Swiper>

          {/* External prev/next buttons for Swiper */}
          <button className="projects-prev absolute -left-6 top-1/2 -translate-y-1/2 bg-white border shadow rounded-full p-2 text-blue-600 disabled:opacity-30">
            <FaChevronLeft />
          </button>
          <button className="projects-next absolute -right-6 top-1/2 -translate-y-1/2 bg-white border shadow rounded-full p-2 text-blue-600 disabled:opacity-30">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;