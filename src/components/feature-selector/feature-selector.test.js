import { cleanup, fireEvent, render } from "@testing-library/react";
import { FeatureSelector } from "./feature-selector";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("FeatureSelector", () => {
  const defaultContent = {
    id: "test-id",
    title: "test-title",
    type: "test-type",
    price: "test-price",
    monthlyPrice: "test-monthly-price",
  };

  it("renders without error", () => {
    // Arrange
    const content = defaultContent;
    const selectedId = "test-id";
    const dispatch = jest.fn();

    // Act
    render(
      <FeatureSelector
        content={content}
        selectedId={selectedId}
        dispatch={dispatch}
      />
    );
  });

  it("dispatches the right action when it's clicked", () => {
    // Arrange
    const content = defaultContent;
    const selectedId = defaultContent.id;
    const dispatch = jest.fn();
    const { container } = render(
      <FeatureSelector
        content={content}
        selectedId={selectedId}
        dispatch={dispatch}
      />
    );
    const featureSelector = container.firstChild;

    // Act
    fireEvent.click(featureSelector);

    // Assert
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: `feature_selection_${defaultContent.type}`,
      detail: {
        id: defaultContent.id,
        type: defaultContent.type,
      },
    });
  });

  it("display default border width and pointer cursor when unselected", () => {
    // Arrange
    const content = defaultContent;
    const selectedId = "not" + defaultContent.id;
    const dispatch = jest.fn();

    // Act
    const { container } = render(
      <FeatureSelector
        content={content}
        selectedId={selectedId}
        dispatch={dispatch}
      />
    );
    const featureSelector = container.firstChild;

    // Assert
    const className = featureSelector.getAttribute("class");
    expect(className).not.toContain("border-2");
    expect(className).toContain("cursor-pointer");
  });

  it("display wider border width when selected", () => {
    // Arrange
    const content = defaultContent;
    const selectedId = defaultContent.id;
    const dispatch = jest.fn();

    // Act
    const { container } = render(
      <FeatureSelector
        content={content}
        selectedId={selectedId}
        dispatch={dispatch}
      />
    );
    const featureSelector = container.firstChild;

    // Assert
    const className = featureSelector.getAttribute("class");
    expect(className).toContain("border-2");
    expect(className).toContain("cursor-default");
  });
});
