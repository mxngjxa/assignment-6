import { cleanup, render } from "@testing-library/react";
import { FeatureCarousel } from "./feature-carousel";

afterEach(cleanup);

describe("FeatureSelector", () => {
  it("renders without error", () => {
    // Arrange
    const content = [
      {
        description: "test-description",
        imageAlt: "test-alt",
        imageSrc: "test-src",
      },
    ];

    // Act, Assert
    render(<FeatureCarousel content={content} />);
  });
});
