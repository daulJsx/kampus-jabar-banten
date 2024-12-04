import { it, expect } from "vitest";
import type { Component } from "vue";
declare module "#components" {
  export const HeaderComponent: Component;
}
// ---cut---
// tests/components/SomeComponents.nuxt.spec.ts
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "~/components/Header.vue";

it("can mount some component", async () => {
  const component = await mountSuspended(Header);
  expect(component.text()).toMatchInlineSnapshot('"CariDaftarLogin"');
});
