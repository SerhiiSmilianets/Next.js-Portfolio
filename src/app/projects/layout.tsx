import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description: "A showcase of my projects and work experience",
  keywords: ["Projects", "Portfolio", "Work Experience", "Showcase"],
};

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
