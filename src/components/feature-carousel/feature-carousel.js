import { useEffect, useState } from "react";

const FeatureCarousel = ({ content }) => {
  const defaultSelectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const contentLength = content.length;
  const defaultWidth = contentLength > 0 ? `${100 * contentLength}%` : "100%";
  const defaultStyle = { left: "0", width: defaultWidth };
  const [style, setStyle] = useState(defaultStyle);
  useEffect(() => {
    if (0 <= selectedIndex && selectedIndex < content.length) {
      // selected index: 0 then inline style left: 0
      // selected index: 1 then inline style left: -100%
      // selected index: 2 then inline style left: -200%
      const left = selectedIndex === 0 ? "0" : `-${selectedIndex}00%`;
      setStyle({ left: left, width: defaultWidth });
    } else {
      setStyle(defaultStyle);
    }
  }, [selectedIndex]);
  const handlePrevClick = () => {
    if (selectedIndex === 0) {
      return;
    }
    setSelectedIndex(selectedIndex - 1);
  };
  const handleNextClick = () => {
    if (selectedIndex >= content.length - 1) {
      return;
    }
    setSelectedIndex(selectedIndex + 1);
  };
  const elements = content.map((c, index) => {
    const { description, imageAlt, imageSrc } = c;
    return (
      <div className="basis-0 grow" key={index}>
        <div>{description}</div>
        <img alt={imageAlt} src={imageSrc} />
      </div>
    );
  });
  return (
    <div className="flex justify-between">
      <div
        className="flex justify-center items-center w-1/12 cursor-pointer"
        onClick={handlePrevClick}
      >
        <span>&lt;</span>
      </div>
      <div className="p-8 bg-slate-50 rounded-xl w-5/6">
        <div className=" overflow-hidden">
          <div className="flex relative" style={style}>
            {elements}
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center w-1/12 cursor-pointer"
        onClick={handleNextClick}
      >
        <span>&gt;</span>
      </div>
    </div>
  );
};

export { FeatureCarousel };
