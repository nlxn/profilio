import Image from 'next/image';
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

              {/* --- Links / Socials --- */}
              {['link','github','behance','instagram','x'].map((platform) => {
                if (!item[platform]) return null;

                // Determine href
                let href = '';
                switch(platform) {
                  case 'link':
                    href = item.link;
                    break;
                  case 'github':
                    href = `https://github.com/${item.github}`;
                    break;
                  case 'behance':
                    href = `https://www.behance.net/${item.behance}`;
                    break;
                  case 'instagram':
                    href = `https://www.instagram.com/${item.instagram}`;
                    break;
                  case 'x':
                    href = `https://x.com/${item.x}`;
                    break;
                  default:
                    break;
                }

                // Determine display text
                let displayText = '';
                if(platform === 'link') {
                  const url = new URL(item.link);
                  // Special handling for Portfolio, LinkedIn, Coursera
                  if(item.title === 'Portfolio') {
                    displayText = 'nlxn.xyz'; // short Portfolio display
                  } else if(url.hostname.includes('linkedin.com') || url.hostname.includes('coursera.org')) {
                    displayText = url.pathname.replace(/^\/+/,''); // remove leading slash
                  } else {
                    displayText = url.hostname.replace('www.',''); // default domain
                  }
                } else if(platform === 'github') {
                  displayText = `@${item.github}`;
                } else if(platform === 'behance') {
                  displayText = item.behance;
                } else if(platform === 'instagram') {
                  displayText = item.instagram;
                } else if(platform === 'x') {
                  displayText = item.x;
                }

                // Determine icon: use item.icon if present, otherwise default platform icon
                const iconSrc = item.icon ? item.icon : `/static/icons/${platform}.svg`;

                return (
                  <a
                    key={platform}
                    href={href}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={iconSrc}
                      width={18}
                      height={18}
                      alt={`${item.title} icon`}
                    />
                    <span className="ml-2 text-lightText transition-colors duration-500">
                      {displayText}
                    </span>
                  </a>
                );
              })}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
