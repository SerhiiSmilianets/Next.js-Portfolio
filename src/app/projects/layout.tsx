export default function Layout({
    children,
    projectsCarousel
  }:{
    children: React.ReactNode
    projectsCarousel: React.ReactNode
  }) {
    return (
      <div className="projects-layout">
        <div>
          <h1 className='page-title'>Projects</h1>
        </div>
          {projectsCarousel}
          {children}
      </div>
    )
  }
