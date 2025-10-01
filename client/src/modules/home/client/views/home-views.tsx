import AutoCarousel from "@/modules/home/client/components/AutoCorousal";

const HomeView = () => {
  const images = [
    "/banners/0.jpg",
    "/banners/1-pica.png",
    "/banners/2-pica.png",
    "/banners/3-pica.png",
    "/banners/4-pica.png",
  ];

  return (
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <AutoCarousel  images={images} interval={2000} />
      </div>
    </div>
  );
};

export default HomeView;
