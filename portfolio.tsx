import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mon Portfolio
        </motion.h1>
        
        <Card className="bg-gray-800 p-5 rounded-2xl shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold">À propos de moi</h2>
            <p className="mt-2 text-gray-300">
              Développeur passionné avec une expertise en JavaScript, React et Node.js. J'aime créer des applications performantes et intuitives.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mt-10">Projets</h2>
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="bg-gray-800 p-5 rounded-2xl shadow-lg">
              <CardContent>
                <h3 className="text-xl font-medium">Projet {project}</h3>
                <p className="mt-2 text-gray-300">Description du projet {project}.</p>
                <Button className="mt-3">Voir plus</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10">Contact</h2>
        <div className="flex gap-5 mt-5">
          <Button variant="outline" className="flex items-center gap-2">
            <Github size={20} /> GitHub
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Linkedin size={20} /> LinkedIn
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Mail size={20} /> Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
