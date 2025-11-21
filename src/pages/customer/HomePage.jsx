import { Suspense } from "react";

import * as reviews from "../../lib/api/reviews";

import Loader from "../../ui/shared/Loader";
import Banner from "../../ui/home/Banner";
import Brands from "../../ui/home/Brands";
import HowItWorks from "../../ui/home/HowItWorks";
import Reviews from "../../ui/home/Reviews";
import FAQ from "../../ui/home/FAQ";

const HomePage = () => {
  return (
    <>
      <Banner />
      <HowItWorks />
      <Brands />
      <Suspense fallback={<Loader size="lg" className="h-40" />}>
        <Reviews loader={reviews.getAll()} />
      </Suspense>
      <FAQ />
    </>
  );
};

export default HomePage;
