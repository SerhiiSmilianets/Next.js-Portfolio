export default function Layout({
    children,
    projectsList
  }:{
    children: React.ReactNode
    projectsList: React.ReactNode
  }) {
    return (
      <div>
          <h1 className='page-title'>Projects</h1>
          {projectsList}
          {children}
      </div>
    )
  }
