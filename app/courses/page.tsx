import CoursesHero from "@/components/courses/courses-hero"
import CourseCategories from "@/components/courses/course-categories"
import FeaturedCourses from "@/components/courses/featured-courses"
import CourseSearch from "@/components/courses/course-search"
import WhyChooseUs from "@/components/courses/why-choose-us"
import CtaSection from "@/components/cta-section"

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden pt-20">
      {/* Floating background elements */}
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        <div className="floating-element w-32 h-32 bg-red-500 rounded-full top-[10%] left-[5%] animate-float"></div>
        <div className="floating-element w-24 h-24 bg-black rounded-full top-[20%] right-[10%] animate-float-reverse animate-delay-2"></div>
        <div className="floating-element w-40 h-40 bg-red-500 rounded-full bottom-[15%] left-[15%] animate-float animate-delay-3"></div>
        <div className="floating-element w-20 h-20 bg-black rounded-full bottom-[25%] right-[5%] animate-float-reverse animate-delay-1"></div>
        <div className="floating-element w-16 h-16 bg-red-500 rounded-full top-[40%] left-[30%] animate-float animate-delay-4"></div>
        <div className="floating-element w-28 h-28 bg-black rounded-full top-[60%] right-[25%] animate-float-reverse animate-delay-2"></div>
        <div className="floating-element w-36 h-36 border-4 border-red-500 rounded-full top-[70%] left-[50%] animate-spin-slow"></div>
        <div className="floating-element w-24 h-24 border-4 border-black rounded-full top-[30%] left-[70%] animate-spin-slow animate-delay-3"></div>
      </div>

      <CoursesHero />
      <CourseCategories />
      <CourseSearch />
      <FeaturedCourses />
      <WhyChooseUs />
      <CtaSection />
    </main>
  )
}

