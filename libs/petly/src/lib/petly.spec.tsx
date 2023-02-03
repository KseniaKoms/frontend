import { render } from "@testing-library/react";

import Petly from "./petly";

describe("Petly", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<Petly />);
		expect(baseElement).toBeTruthy();
	});
});
