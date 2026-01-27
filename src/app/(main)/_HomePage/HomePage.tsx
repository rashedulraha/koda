import Container from "@/components/Responsive/Container";
import ModernProduct from "./Shared/ModernProduct/ModernProduct";
import Ai_assisted_product from "./Shared/ai_assisted_product/Ai_assisted_product";
import Build_the_future from "./Shared/Build_the_future/Build_the_future";
import Product_direction from "./Shared/Product_direction/Product_direction";
import { BackgroundBeamsDemo } from "./Shared/BackgroundBeamsDemo/BackgroundBeamsDemo";
import Second from "./Shared/Second/Second";
import { WorldMapDemo } from "./Shared/WorldMap/WorldMapDemo";

const HomePage = () => {
  return (
    <>
      <div>
        <div>
          {/* first section */}
          <BackgroundBeamsDemo />
          {/* second section */}
          <Container>
            <WorldMapDemo />
            {/* second section */}
            <Second />
            {/* third section  */}
            <div>
              <ModernProduct />
            </div>
          </Container>
        </div>
      </div>
      {/* fourth section */}
      <div className="bg-linear-to-b from-card to-background py-8 md:my-12 lg:py-14">
        <Ai_assisted_product />
      </div>

      {/* fifth section */}
      <div className="bg-linear-to-b from-card to-background py-8 md:my-12 lg:py-14">
        <Product_direction />
      </div>

      {/* sixth section */}
      <div>
        <Container>
          <Build_the_future />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
