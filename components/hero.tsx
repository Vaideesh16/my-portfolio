"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import MyPhoto from "../public/MyPhoto.png"
import { ThemeToggle } from "@/components/theme-toggle"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ThemeToggle />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5 animate-fade-in"></div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">Hello, I am</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-none tracking-tight">
                <div className="text-primary">Vaideesh</div>
                <div className="-mt-2">Deshmukh</div>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto lg:mx-0 mb-6"></div>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 font-medium">
              Passionate about Cloud & Web Development
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Passionate about cloud technologies like AWS, Docker, Kubernetes, as well as
              modern web development with the MERN stack, I focus on building scalable, efficient and user-focused digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 dark:hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary/90 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                onClick={() => window.open("https://github.com/Vaideesh16", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                onClick={() => window.open("https://www.linkedin.com/in/vaideesh16/", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                onClick={() => (window.location.href = "mailto:vaideeshdeshmukh1608@gmail.com")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-slide-up delay-300">
            <div className="relative group">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <Image
                  src={MyPhoto}
                  alt="Professional headshot"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-foreground">Available for work</span>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-8 -right-2 w-4 h-4 bg-accent/30 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group hover:bg-primary/5 rounded-lg px-4 py-2 hover:shadow-lg hover:scale-110"
          >
            <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">Scroll down</span>
            <ArrowDown className="w-4 h-4 group-hover:animate-pulse group-hover:translate-y-1 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
