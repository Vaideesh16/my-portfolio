import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "React", level: 70, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  // { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },
  // { name: "PostgreSQL", level: 82, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "AWS", level: 85, category: "DevOps" },
  { name: "Kubernetes", level: 65, category: "DevOps" },
]

const categories = ["Frontend", "Backend", "DevOps"]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
