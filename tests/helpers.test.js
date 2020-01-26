import { propertyGenerator } from "../src/helpers";

test("value via function", () => {
  const func = propertyGenerator([["value", props => props.value]]);
  expect(func({ value: "some-string" })).toBe("some-string;");
});

test("default value via function", () => {
  const func = propertyGenerator([["value", () => "default-value"]]);
  expect(func({ value: true })).toBe("default-value;");
  expect(func({ value: "some-string" })).toBe("default-value;");
});

test("default value via object", () => {
  const func = propertyGenerator([["value", { default: "default-value" }]]);
  expect(func({ value: true })).toBe("value: default-value;");
  expect(func({ value: "some-string" })).toBe("value: some-string;");
});

test("default value via object with property", () => {
  const func = propertyGenerator([
    ["value", { default: "default-value", property: "property" }]
  ]);
  expect(func({ value: true })).toBe("property: default-value;");
  expect(func({ value: "some-string" })).toBe("property: some-string;");
});

test("valid props being passed to function", () => {
  const props = {
    value: true,
    someString: "test",
    someNumber: 1534,
    nestedObject: { withAValue: true }
  };
  let passedProps;
  propertyGenerator([["value", props => (passedProps = props)]])(props);
  expect(passedProps).toBe(props);
});

test("handler via object and default", () => {
  const func = propertyGenerator([
    [
      "value",
      {
        default: "default-value",
        handler: ({ value, anotherProperty }) => `${value}: ${anotherProperty}`
      }
    ]
  ]);

  expect(func({ value: true, anotherProperty: "some-string" })).toBe(
    "default-value: some-string;"
  );
});
