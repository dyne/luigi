// SPDX-FileCopyrightText: 2022 Dyne.org foundation
// SPDX-FileCopyrightText: 2022 Puria Nafisi Azizi <puria@dyne.org>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export const COLOR_PRESETS = {
  ["Open source"]: {
    color: "#FFEEDD",
    secondary: "#F6D6B0",
    text_color: "#000000",
    accent: "#F6D6B0",
  },
  Cybersecurity: {
    color: "#D6D6D6",
    secondary: "#F0F0F0",
    text_color: "#000000",
    accent: "#F0F0F0",
  },
  Art: {
    color: "#8980F5",
    secondary: "#FDF5EB",
    text_color: "#FFFFFF",
    accent: "#433CB8",
  },
  Crypto: {
    color: "#000000",
    secondary: "#DBDDE0",
    text_color: "#FFFFFF",
    accent: "#DBDDE0",
  },
  ["Circular economy"]: {
    color: "#21897E",
    secondary: "#2E9E91",
    text_color: "#FFFFFF",
    accent: "#2E9E91",
  },
};

export const COLOR_OPTION = {
  type: "color",
  label: "Background",
  model: "hex",
  default: "Open source",
  options: {
    ["Open source"]: "#FFEEDD",
    Cybersecurity: "#D6D6D6",
    Art: "#8980F5",
    ["Circular economy"]: "#21897E",
  },
};

export const SETTINGS = {
  engine: require("@mechanic-design/engine-react"),
  showMultipleExports: true,
  hideFeedback: true,
  hideScaleToFit: true,
  hideAutoRefresh: true,
  hideGenerate: true,
};

export const ExtraUI = (props) => {
  const { values, onChange } = props;

  return <div>(c) Dyne.org made by pna</div>;
};

export const filterObject = (obj, filter, filterValue) =>
  Object.keys(obj).reduce(
    (acc, val) =>
      obj[val][filter] === filterValue
        ? acc
        : {
            ...acc,
            [val]: obj[val],
          },
    {}
  );
