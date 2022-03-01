import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ blok }: any) => {
  console.debug("%o", blok, { ns: "Page" });
  return (
    <main {...sbEditable(blok)} key={blok._uid}>
      {blok.body
        ? blok.body.map((blok: any) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  );
};

export default Page;
