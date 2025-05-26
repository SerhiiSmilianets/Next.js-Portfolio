'use client';

import Image from "next/image";
import Link from 'next/link';
import { Project } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Keyboard} from 'swiper/modules';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef, memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/projectsCarousel.css'; // Import your custom styles for the carousel

const ProjectsCarouselComponent = ({ projects }: { projects: Project[] }) => {
  const params = useParams();
  const projectId = params.projectId;

  const swiperRef = useRef<SwiperType | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const router = useRouter();

  useEffect(() => {
    if (projects && projects.length > 0 && !projectId) {
      router.replace(`/projects/${projects[0].id}`);
    }

  }, [projectId, projects, router]);

  useEffect(() => {
    let slideIndex = 0;
    if (projectId) {
      // Find the index of the projectId in the projects array
      slideIndex = projects.map(project => project.id).indexOf(projectId as string);
    }
    // If projectId is not found, set slideIndex to 0 (first slide)
    // Check if the projectId exists in the projects array
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(slideIndex, 500);
    }
  }, [projectId, projects]);

  const handleSlideChange = (swiper: SwiperType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    } 
    swiperRef.current = swiper;
    const activeIndex = swiperRef.current.activeIndex;
    const activeSlideData = projects[activeIndex];

    if (activeSlideData.id === projectId) {
      return;
    }
    // Update the URL with the new projectId
    timeoutRef.current = setTimeout(() => {
      router.push(`/projects/${activeSlideData.id}`);
    }, 100);
  }

  return (
    <div className='projects-carousel-container'>
      <Swiper
        speed={500}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper);
        }}
        modules={[Navigation, Keyboard]}
        slidesPerView={1}
        navigation
        keyboard={{ enabled: true }}
        allowTouchMove
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {projects.map((project : Project) => (
          <SwiperSlide key={project.id} >
            <Link 
              href={{
                  pathname: `/projects/${project.id}`,
              }}
              prefetch={true}
              className={`project-logo-container ${projectId === project.id ? 'active' : ''}`}>

              <Image src={`/projectsLogos/${project.logo}`} 
                  alt={project.project_name} 
                  width={150}
                  height={150}
                  className='project-logo'  
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ProjectsCarouselComponent.displayName = "ProjectsCarousel";

export const ProjectsCarousel = memo(ProjectsCarouselComponent);
