import { Grid } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";

interface ShowCaseItems {
  label: string;
  slug: string;
}

const Home: NextPage = () => {
  const [showCaseItems, setShowCaseItems] = useState<Array<ShowCaseItems>>([
    {
      label: "Carousel",
      slug: "/carousel",
    },
    {
      label: "Responsive",
      slug: "/responsive",
    },
    {
      label: "Lazy Loading",
      slug: "/lazy-loading",
    },
  ]);
  return (
    <>
      <section>Introduction</section>
      <Grid container>
        {showCaseItems.map((item, index) => {
          return (
            <div key={index}>
              <h2>
                {/* Using <h2> here because useful for SEO */}
                {item.label}
              </h2>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
