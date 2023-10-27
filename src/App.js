import { useReducer } from "react";
import { FeatureSelector } from "./components/feature-selector/feature-selector";
import { FeatureCarousel } from "./components/feature-carousel/feature-carousel";

const reducer = (state, action) => {
  switch (action.type) {
    case "feature_selection_glass": {
      return {
        ...state,
        glassSelection: action.detail.id,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export function App() {
  const glassCarousel = [
    {
      description:
        "Standard glass has an industry-leading anti-reflective coating for viewing comfort and readability.",
      imageAlt: "A front view of Studio Display with standard glass.",
      imageSrc:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-gallery-1-202203?wid=640&hei=528&fmt=p-jpg&qlt=95&.v=1675709041796",
    },
    {
      description:
        "Nano-texture glass further minimizes glare while delivering outstanding image quality in workspaces with bright light sources, like a lot of sunlight.",
      imageAlt: "A front view of Studio Display with nano-texture glass.",
      imageSrc:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-gallery-2-202203?wid=320&hei=264&fmt=p-jpg&qlt=95&.v=1675709041798",
    },
  ];
  const glassFeatures = [
    {
      id: "glass_1",
      type: "glass",
      title: "Standard glass",
      price: "From $1599",
      monthlyPrice: "or $133.25/mo. for 12 mo.*",
    },
    {
      id: "glass_2",
      type: "glass",
      title: "Nano-texture glass",
      price: "From $1899",
      monthlyPrice: "or $158.25/mo. for 12 mo.*",
    },
  ];

  const initialState = {
    glassSliderSelection: 0,
    glassFeatureSelection: glassFeatures[0].id,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const glassFeatureOptions = glassFeatures.map((content, index) => (
    <FeatureSelector
      key={index}
      content={content}
      selectedId={state.glassFeatureSelection}
      dispatch={dispatch}
    />
  ));

  return (
    <>
      <div className="bg-slate-200 text-center py-2 mb-4">
        Mimicking Apple&apos;s{" "}
        <a
          target="_blank"
          className="text-blue-600"
          href="https://www.apple.com/shop/buy-mac/apple-studio-display/standard-glass-tilt-adjustable-stand"
          rel="noreferrer"
        >
          Studio Display
        </a>{" "}
        Page.
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="pt-10 text-center">
          <div className="text-amber-700 pb-2">New</div>
          <h1 className="text-5xl pb-4 font-medium">
            Buy Apple Studio Display
          </h1>
          <div className="pb-8">
            27-inch 5K Retina display. 12MP Ultra Wide camera with Center Stage.
            Studio-quality mics. Six-speaker sound system with Spatial Audio.
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 ">
            <FeatureCarousel content={glassCarousel} />
          </div>
          <div className="w-full md:w-7/12 md:pl-12">
            <h2 className="font-bold mb-4">Display</h2>
            <div className="text-sm rounded-xl bg-slate-50 p-4 mb-4">
              <span className="font-bold">
                Choose from two anti-reflective glass options.
              </span>{" "}
              Standard glass is engineered for extremely low reflectivity.
              Nano-texture glass scatters light to further minimize glare while
              delivering outstanding image quality in workspaces with bright
              light sources.
            </div>
            <div className="flex flex-col gap-4">{glassFeatureOptions}</div>
          </div>
        </div>
      </div>
      <div className="mt-52"></div>
    </>
  );
}
