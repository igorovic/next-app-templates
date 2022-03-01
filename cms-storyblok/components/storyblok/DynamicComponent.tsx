import Teaser from "./Teaser";
import Feature from "./Feature";
import Placeholder from "./Placeholder";
import Grid from "./Grid";

import Page from "./Page";

const Components: Record<string, any> = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,

  page: Page,
};

const DynamicComponent = ({ blok }: any) => {
  console.debug("%o", blok, { ns: "DynamicComponent" });
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
