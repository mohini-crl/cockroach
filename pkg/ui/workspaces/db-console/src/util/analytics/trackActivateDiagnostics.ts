// Copyright 2020 The Cockroach Authors.
//
// Use of this software is governed by the CockroachDB Software License
// included in the /LICENSE file.

import { analytics } from "src/redux/analytics";

export const track = (fn: Function) => (statement: string) => {
  fn({
    event: "Diagnostics Activation",
    properties: {
      fingerprint: statement,
    },
  });
};

export default function trackActivateDiagnostics(statement: string) {
  const boundTrack = analytics.track.bind(analytics);
  track(boundTrack)(statement);
}
