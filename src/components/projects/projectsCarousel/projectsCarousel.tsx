'use client';

import Image from "next/image";
import Link from 'next/link';
import { Project } from '@/interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay, Keyboard, A11y, EffectCoverflow } from 'swiper/modules';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef, memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import '@/styles/projectsCarousel.css'; // Import your custom styles for the carousel

const ProjectsCarouselComponent = ({ projects }: { projects: Project[] }) => {
  const params = useParams();
  const swiperRef = useRef<SwiperType | null>(null);
  const projectId = params.projectId;
  const router = useRouter()
  //console.log("carousel")

  useEffect(() => {
    let slideIndex = 0;
    //console.log("projectId", projectId)
    if (projectId) {
      //console.log("projectId inside", projectId)
      // Find the index of the projectId in the projects array
      slideIndex = projects.map(project => project.id).indexOf(projectId as string);
    }
    // If projectId is not found, set slideIndex to 0 (first slide)
    // Check if the projectId exists in the projects array
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(slideIndex, 500); // no animation
    }
  }, [projectId, projects]);

  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.activeIndex;
    const activeSlideData = projects[activeIndex];

    console.log("activeSlideData", activeSlideData.id);

    if (activeSlideData.id === projectId) {
      return;
    }

    // if (activeSlideData.id !== projectId) {
      router.push(`/projects/${activeSlideData.id}`);
    // }
  }

  return (
    <div className='projects-carousel-container'>
      <Swiper
        speed={500}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          handleSlideChange(swiper);
        }}
        // onSlideChange={(swiper) => {
        //   handleSlideChange(swiper);
        // }}
        modules={[Navigation, Keyboard]}
        // spaceBetween={10}
        // effect={'coverflow'}
        slidesPerView={1}
        navigation
        keyboard={{ enabled: true }}
        allowTouchMove
        centeredSlides={true}
        // centeredSlidesBounds={true}
        // autoplay={{ delay: 3000 }}
        // pagination={{ clickable: true }}
        // loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            // spaceBetween: 40,
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
              key={project.id + "-logo"} 
              className={`${projectId === project.id ? 'active' : ''} project-logo-container`}>

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
