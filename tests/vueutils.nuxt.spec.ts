import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CompToTest from "../components/CompToTest.vue";

describe("Component to test", () => {
  it("component renders CompToTest properly", () => {
    const wrapper = mount(CompToTest);
    expect(wrapper.text()).toContain("This is an auto-imported component");
  });
});
