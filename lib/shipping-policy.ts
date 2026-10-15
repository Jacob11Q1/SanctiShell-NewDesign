// The workshop's shipping policy: the ONE place to fill in shipping facts.
// Used by the Shipping page and the FAQ, so the two can never disagree.
//
// Rule (CLAUDE.md §10, §13): never invent policies. Every `null` below is waiting
// for Kai. A null section is hidden on the Shipping page and its FAQ question stays
// hidden too. Fill in `text` with Kai's own answer and it appears in both places.

export type PolicySection = {
  title: string;
  text: string;
};

type ShippingPolicy = {
  shipsFrom: string;
  destinations: PolicySection | null; // TODO: Kai, which countries do you ship to?
  deliveryTimes: PolicySection | null; // TODO: Kai, how long does delivery take?
  costs: PolicySection | null; // TODO: Kai, what does shipping cost? Free over an amount?
  tracking: PolicySection | null; // TODO: Kai, does every order get a tracking number?
  customs: PolicySection | null; // TODO: Kai, who pays customs / import fees?
};

export const shippingPolicy: ShippingPolicy = {
  shipsFrom: "Eweena Street, Beit Sahour, Palestine",
  destinations: null,
  deliveryTimes: null,
  costs: null,
  tracking: null,
  customs: null,
};

/** The policy sections Kai has answered, in page order. */
export function getPublishedShippingSections(): PolicySection[] {
  const { destinations, deliveryTimes, costs, tracking, customs } = shippingPolicy;
  return [destinations, deliveryTimes, costs, tracking, customs].filter(
    (s): s is PolicySection => s !== null,
  );
}
