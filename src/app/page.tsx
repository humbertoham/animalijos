import BrandStrip from "@/components/common/BrandStrip";
import CategoryTiles from "@/components/common/CategoryTiles";
import FeaturedProducts from "@/components/common/FeaturedProducts";
import Hero from "@/components/common/Hero";
import VetsTeaser from "@/components/common/VetsTeaser";

export default function Home() {
  return (
    <>
    <Hero/>
    <CategoryTiles/>
       <FeaturedProducts
        title="Lo más buscado"
        subtitle="Alimentos y accesorios favoritos"
        limit={8}
      />
    <BrandStrip/>
    <VetsTeaser/>
    </>
  );
}
