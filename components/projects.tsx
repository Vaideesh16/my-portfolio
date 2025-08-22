import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "Edtech Platform",
    description:
      "A dynamic EdTech web app with role-based access for students and instructors, enabling content creation, enrollment, and real-time feedback. Designed with Node.js, Express.js and MongoDB for secure, scalable data management.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: "../studynotion.png",
    liveUrl: "https://study-notion-seven-steel.vercel.app/",
    githubUrl: "https://github.com/Vaideesh16/StudyNotion",
  },
  {
    title: "AI Diet Planner",
    description:
      "Developed a full-stack web app in a team that recommends culturally relevant Indian diet plans using a deep learning model with 96% accuracy. Integrated FastAPI backend with Supabase for real-time data storage, authentication, and explainable AI-driven meal recommendations.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python"],
    image: "../ai_diet_planner.png",
    liveUrl: "https://symptmeal.vercel.app/",
    githubUrl: "https://github.com/ujjwalbokde/SymptMeal",
  },

  //CAN ADD MORE PROJECTS HERE

  // {
  //   title: "Weather Dashboard",
  //   description:
  //     "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics with responsive design.",
  //   technologies: ["React", "Tailwind CSS", "Weather API", "Chart.js"],
  //   image: "/placeholder-wsgpq.png",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects, educational details and skills with smooth animations.",
    technologies: ["Next.js", "Tailwind CSS", "React.js", "Shadcn"],
    image: "../portfolio_image.png",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work showcasing different technologies and design approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <Button size="sm" className="bg-primary hover:bg-primary/90 dark:hover:bg-primary/80 hover:shadow-md transition-all duration-200 cursor-pointer">
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <Button variant="outline" size="sm" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary/90 transition-all duration-200 cursor-pointer">
                        View Code
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
