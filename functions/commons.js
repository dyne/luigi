// SPDX-FileCopyrightText: 2022 Dyne.org foundation
// SPDX-FileCopyrightText: 2022 Puria Nafisi Azizi <puria@dyne.org>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export const COLOR_PRESETS = {
  ['Open source']: {
    color: '#FFEEDD',
    secondary: '#F6D6B0',
    text_color: '#000000',
    accent: ''
  },
  Cybersecurity: {
    color: '#D6D6D6',
    secondary: '#F0F0F0',
    text_color: '#000000',
    accent: ''
  },
  Art: {
    color: '#8980F5',
    secondary: '#FDF5EB',
    text_color: '#FFFFFF',
    accent: '#433CB8'
  },
  Crypto: {
    color: '#000000',
    secondary: '#DBDDE0',
    text_color: '#FFFFFF',
    accent: ''
  },
  ['Circular economy']: {
    color: '#21897E',
    secondary: '#2E9E91',
    text_color: '#FFFFFF',
    accent: ''
  },
};

export const SETTINGS = {
  engine: require('@mechanic-design/engine-react'),
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
