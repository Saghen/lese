import { ReactElement } from "react";
import renderer from "react-test-renderer";

export const renderComponent = (comp: ReactElement) => renderer.create(comp).toJSON()
