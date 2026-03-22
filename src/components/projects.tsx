import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "../app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="group overflow-hidden border hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative aspect-[1360/623] overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-muted-foreground mt-2">
                {project.description}
              </p>

              {/* Tech */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-muted px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <Button  size="sm">
                  <a href={project.live} target="_blank">
                    Live Demo
                  </a>
                </Button>

                <Button  variant="outline" size="sm">
                  <a href={project.github} target="_blank ">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}