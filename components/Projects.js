// Project.js
import { projects } from '@/data/config';

export default function Projects() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className="mt-8">
        {projects.projects.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-lightText rounded-xl mb-4"
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="flex items-center flex-wrap -m-3 pt-5">

              {/* Portfolio */}
              {item.title === 'Portfolio' && item.link && (
                <a
                  href={item.link}
                  className="flex items-center py-1 px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item.icon} 
                    alt="NLXN logo"
                    width={18}
                    height={18}
                  />
                  <span className="ml-2 text-lightText transition-colors duration-500">
                    nlxn.xyz
                  </span>
                </a>
              )}

              {/* Other Links */}
              {item.title !== 'Portfolio' && item.link && (
                <a
                  href={item.link}
                  className="flex items-center py-1 px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/static/icons/link.svg"
                    alt="Link icon"
                    width={18}
                    height={18}
                  />
                  <span className="ml-2 text-lightText transition-colors duration-500">
                    {(() => {
                      const url = new URL(item.link);
                      if(url.hostname.includes('linkedin.com') || url.hostname.includes('coursera.org')) {
                        return url.pathname.replace(/^\/+/,''); // username/path only
                      }
                      return url.hostname.replace('www.',''); // default domain
                    })()}
                  </span>
                </a>
              )}

              {/* GitHub */}
              {item.github && (
                <a
                  href={`https://github.com/${item.github}`}
                  className="flex items-center py-1 px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/static/icons/github.svg"
                    width={18}
                    height={18}
                    alt="GitHub icon"
                  />
                  <span className="ml-2 text-lightText transition-colors duration-500">
                    @{item.github}
                  </span>
                </a>
              )}

              {/* Behance */}
              {item.behance && (
                <a
                  href={`https://www.behance.net/${item.behance}`}
                  className="flex items-center py-1 px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/static/icons/behance.svg"
                    width={18}
                    height={18}
                    alt="Behance icon"
                  />
                  <span className="ml-2 text-lightText transition-colors duration-500">
                    {item.behance}
                  </span>
                </a>
              )}

              {/* Instagram */}
              {item.instagram && (
                <a
                  href={`https://www.instagram.com/${item.instagram}`}
                  className="flex items-center py-1 px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/static/icons/instagram.svg"
                    width={18}
                    height={18}
                    alt="Instagram icon"
                  />
                  <span className="ml-2 text-lightText transition-colors duration-500">
                    {item.instagram}
                  </span>
                </a>
              )}

              {/* X (Twitter) */}
              {item.x && (
                <a
                  href={`https://x.com/${item.x}`}
                  className="flex items-center py-1 px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/static/icons/x.svg"
                    width={18}
                    height={18}
                    alt="X icon"
                  />
                  <span className="ml-2 text-lightText transition-colors duration-500">
                    {item.x}
                  </span>
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
