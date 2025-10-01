import AutoCarousel from "@/modules/home/client/components/AutoCorousal";

const HomeView = () => {
  const images = [
    "/banners/0.jpg",
    "/banners/1.jpg",
    "/banners/2.jpg",
    "/banners/3.jpg",
    "/banners/4.jpg",
    "/banners/5.jpg",
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
