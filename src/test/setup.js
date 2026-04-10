import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => React.createElement('div', { 'data-testid': 'r3f-canvas' }, children),
  useFrame: vi.fn(),
  useThree: () => ({ camera: {}, gl: {}, scene: {} }),
}))

vi.mock('@react-three/drei', () => ({
  Float: ({ children }) => React.createElement(React.Fragment, null, children),
  Text: ({ children }) => React.createElement('span', null, children),
  Points: ({ children }) => React.createElement(React.Fragment, null, children),
  PointMaterial: () => null,
  OrbitControls: () => null,
  RoundedBox: ({ children, ...props }) => React.createElement('mesh', props, children),
}))

vi.mock('@react-three/postprocessing', () => ({
  EffectComposer: ({ children }) => React.createElement(React.Fragment, null, children),
  Bloom: () => null,
}))
