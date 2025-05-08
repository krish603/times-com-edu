"use client"

import {Button} from "@/components/ui/button";
import { motion } from "framer-motion"

const CtaSection = () => {
  return (
    <section className="py-24  relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
          {/* <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          /> */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 py-20 px-8 md:px-16 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of students who have transformed their careers with our expert-led computer education programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Button className="bg-red-600 text-white hover:bg-red-700 px-8 py-6 h-auto text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
                Explore Courses
              </Button>
              <Button
                variant="outline"
                className="border-red-500 text-red-500 bg-white hover:bg-white  px-8 py-6 h-auto text-lg transition-all duration-300 transform hover:scale-110 hover:text-red-500 hover:shadow-xl"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
