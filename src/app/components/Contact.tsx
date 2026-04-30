import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#fafaf9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl tracking-tight text-[#1a1a1a] mb-12">Get in Touch</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:venessa.tan.wk@gmail.com"
            className="group p-8 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#1a1a1a] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#f5f5f5] group-hover:bg-[#1a1a1a] flex items-center justify-center transition-colors duration-300">
                <Mail className="size-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm text-[#8a8a8a] mb-1">Email</div>
                <div className="text-sm text-[#1a1a1a]">venessa.tan.wk@gmail.com</div>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/venessa-tan-wk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#1a1a1a] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#f5f5f5] group-hover:bg-[#1a1a1a] flex items-center justify-center transition-colors duration-300">
                <Linkedin className="size-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm text-[#8a8a8a] mb-1">LinkedIn</div>
                <div className="text-sm text-[#1a1a1a]">/in/venessa-tan-wk</div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/vennietweek"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#1a1a1a] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#f5f5f5] group-hover:bg-[#1a1a1a] flex items-center justify-center transition-colors duration-300">
                <Github className="size-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm text-[#8a8a8a] mb-1">GitHub</div>
                <div className="text-sm text-[#1a1a1a]">vennietweek</div>
              </div>
            </div>
          </a>
        </div>

        <footer className="pt-16 text-center text-sm text-[#8a8a8a]">
          <p>&copy; {new Date().getFullYear()} Venessa Tan. All rights reserved.</p>
        </footer>
      </motion.div>
    </section>
  );
}
