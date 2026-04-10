import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'
import React from 'react'

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => React.createElement('div', { 'data-testid': 'r3f-canvas' }, children),
  useFrame: vi.fn(),
  useThree: () => ({ camera: {}, gl: {}, scene: {} }),
}))

vi.mock('@react-three/drei', () => {
  const stub = () => null
  const passthrough = ({ children }) => React.createElement(React.Fragment, null, children)
  return new Proxy(
    {
      Float: passthrough,
      Text: ({ children }) => React.createElement('span', null, children),
      Points: passthrough,
      PointMaterial: stub,
      OrbitControls: stub,
      RoundedBox: ({ children, ...props }) => React.createElement('div', props, children),
      Html: ({ children }) => React.createElement('div', null, children),
      Environment: stub,
      useGLTF: () => ({ nodes: {}, materials: {}, scene: {} }),
      useTexture: () => ({}),
    },
    {
      get(target, prop) {
        return prop in target ? target[prop] : stub
      },
    }
  )
})

vi.mock('@react-three/postprocessing', () => ({
  EffectComposer: ({ children }) => React.createElement(React.Fragment, null, children),
  Bloom: () => null,
}))
