import { renderHook } from '@testing-library/react-hooks/dom';

import { useIsInBrowser } from '.';

describe('useIsInBrowser()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(useIsInBrowser).toBeDefined();
  });

  it('Show return undefined, --success case', () => {
    const windowSpy = jest.spyOn(window, 'window', 'get');

    renderHook(() => useIsInBrowser());

    expect(windowSpy).toHaveBeenCalled();
  });
});
