export default function Layout({
    children,
    projectsList
  }:{
    children: React.ReactNode
    projectsList: React.ReactNode
  }) {
    return (
      <div className="projects-layout">
        <div>
          <h1 className='page-title'>Projects</h1>
        </div>
          {projectsList}
          {children}
      </div>
    )
  }
