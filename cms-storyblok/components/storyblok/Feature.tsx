import { sbEditable } from "@storyblok/storyblok-editable";

const Feature = ({ blok }: any) => {
  return (
    <div {...sbEditable(blok)} key={blok._uid} className="bg-white-half">
      <div className="pb-6 pt-16 container mx-auto">
        <h2 className="text-6xl font-bold font-serif text-primary mb-4">
          {blok.headline}
        </h2>
      </div>
    </div>
  );
};

export default Feature;
