import AppFeatures from "./AppFeatures";
import FeaturedProjects from "./FeaturedProjects";

function Featured() {
  return (
    <div className="flex items-center justify-center flex-col text-white bg-orange-200 relative px-5 z-[1] gap-12 md:py-32 md:gap-32 lg:py-60 lg:gap-40">
      {/* ------------- Features ------------ */}

      <AppFeatures />

      {/* -------------Featured Projects ------------ */}
      <FeaturedProjects />
    </div>
  );
}

export default Featured;
