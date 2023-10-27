/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const FeatureSelector = (props) => {
  const { content, selectedId, dispatch } = props;
  const { id, title, type, price, monthlyPrice } = content;

  const defaultClassName =
    "flex justify-between items-center px-4 py-6 border rounded-xl";
  const unselectedClassName = "cursor-pointer hover:bg-gray-50";
  const selectedClassName = "border-2 border-blue-400 cursor-default";
  const initialClassName = defaultClassName + " " + unselectedClassName;
  const [className, setClassName] = useState(initialClassName);

  useEffect(() => {
    if (id === selectedId) {
      setClassName(defaultClassName + " " + selectedClassName);
    } else {
      setClassName(defaultClassName + " " + unselectedClassName);
    }
  }, [selectedId]);

  const handleClick = () => {
    dispatch({
      type: `feature_selection_${type}`,
      detail: {
        id: id,
        type: type,
      },
    });
  };

  return (
    <div key={id} className={className} onClick={handleClick}>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-right">
        <div className="text-lg">{price}</div>
        <div>{monthlyPrice}</div>
      </div>
    </div>
  );
};

export { FeatureSelector };
