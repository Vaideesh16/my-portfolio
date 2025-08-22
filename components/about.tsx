export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves building scalable cloud solutions and modern web applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            With experience in AWS, Docker, Kubernetes, and DevOps practices, 
            combined with my skills in the MERN stack, I create user-focused, responsive, and efficient digital experiences. 
            What started as curiosity about how the web works has grown into a journey of solving real-world problems with technology.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I believe in writing clean code, designing intuitive interfaces, 
            and continuously learning to stay ahead in the tech world. When I'm not coding, I'm usually exploring new cloud-native tools, 
            experimenting with side projects related to AWS, CI/CD, Docker and Kubernetes.
          </p>
        </div>
      </div>
    </section>
  )
}
