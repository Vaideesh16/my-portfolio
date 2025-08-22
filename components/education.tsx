import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
  achievements?: string[]
  gpa?: string
  type: "masters" | "bachelors" | "schooling"
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Yeshwantrao Chavan College of Engineering",
    period: "Nov 2022 - May 2026",
    gpa: "7.62/10",
    type: "bachelors",
    description:
      "Specialized in Web Development and Cloud Technologies with a focus on real world software development.",
    achievements: [
      "Solved 200+ DSA problems on LeetCode and GFG",
      "AWS Certified Cloud Practitioner",
    ],
  },
  {
    degree: "Class 12th",
    institution: "Narayana Vidyalayam, Nagpur",
    period: "Apr 2021 - Mar 2022",
    // gpa: "3.8/4.0",
    type: "schooling",
    description:
      "Completed 12th standard in PCM stream from Narayana Vidyalayam with an overall percentage of 74.60.",
    // achievements: [
    //   "Dean's List for 6 semesters",
    //   "President of Computer Science Club",
    //   "Winner of Annual Hackathon 2017",
    // ],
  },
  {
    degree: "Class 10th",
    institution: "Narayana Vidyalayam, Nagpur",
    period: "Apr 2019 - Mar 2020",
    // gpa: "3.8/4.0",
    type: "schooling",
    description:
      "Completed 10th standard from Narayana Vidyalayam, with an overall percentage of 93.60.",
    // achievements: [
    //   "Dean's List for 6 semesters",
    //   "President of Computer Science Club",
    //   "Winner of Annual Hackathon 2017",
    // ],
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "masters":
      return <GraduationCap className="w-5 h-5" />
    case "bachelors":
      return <Award className="w-5 h-5" />
    case "bootcamp":
      return <Users className="w-5 h-5" />
    default:
      return <GraduationCap className="w-5 h-5" />
  }
}

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Education Journey</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey and continuous learning path in technology and design.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/50 rounded-full"></div>

          <div className="space-y-12 lg:space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background shadow-xl flex items-center justify-center text-primary-foreground z-10">
                  {getIcon(item.type)}
                </div>

                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 lg:pr-20" : "md:ml-auto md:pl-16 lg:pl-20"
                  }`}
                >
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 glass border-2 border-primary/10 hover:border-primary/20">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex flex-col gap-4 mb-6">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm font-semibold"
                          >
                            {item.period}
                          </Badge>
                          {item.gpa && (
                            <Badge variant="outline" className="border-accent/50 text-accent px-3 py-1 text-sm">
                              GPA: {item.gpa}
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">{item.degree}</h3>

                        <h4 className="text-lg lg:text-xl font-semibold text-primary flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {item.institution}
                        </h4>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-base lg:text-lg">
                        {item.description}
                      </p>

                      {item.achievements && (
                        <div className="space-y-3">
                          <h5 className="font-semibold text-foreground text-lg flex items-center gap-2">
                            <Award className="w-4 h-4 text-accent" />
                            Key Achievements
                          </h5>
                          <div className="grid gap-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <div
                                key={achievementIndex}
                                className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                              >
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm lg:text-base text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
