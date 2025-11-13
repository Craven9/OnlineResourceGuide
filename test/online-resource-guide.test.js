import { html, fixture, expect } from '@open-wc/testing';
import "../online-resource-guide.js";

describe("OnlineResourceGuide test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <online-resource-guide
        title="title"
      ></online-resource-guide>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
