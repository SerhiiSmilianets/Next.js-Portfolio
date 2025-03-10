import { Column } from "@/components/Column";
import "./projects.css";

export default function Layout({
    children,
    projectsCarousel
  }:{
    children: React.ReactNode
    projectsCarousel: React.ReactNode
  }) {
    return (
      <Column>
        <div>
          <h1 className='page-title'>Projects</h1>
        </div>
          {projectsCarousel}
          {children}
      </Column>
    )
  }
