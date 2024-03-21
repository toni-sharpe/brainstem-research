import { rmZoomClass, rmMenuClass, onKeyDownRegionHandler } from './UtilKeyboard'

describe('rmZoomClass', () => {
  it('should remove zoom-focus class from .js-zoom-label', () => {
    const removeMock = jest.fn()
    const querySelectorMock = jest.fn().mockReturnValueOnce({
      classList: {
        remove: removeMock
      }
    })
    document.querySelector = querySelectorMock
    rmZoomClass();
    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-label')
    expect(removeMock).toHaveBeenCalledWith('zoom-focus')
  });
});

describe('rmMenuClass', () => {
  it('should remove open class from .js-header', () => {
    const removeMock = jest.fn()
    const querySelectorMock = jest.fn().mockReturnValueOnce({ classList: { remove: removeMock }})
    document.querySelector = querySelectorMock
    rmMenuClass();
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')
    expect(removeMock).toHaveBeenCalledWith('open')
  });
});

describe('onKeyDownRegionHandler', () => {
  it('should handle key code 77 (m)', () => {
    const removeMock = jest.fn()
    const focusMock = jest.fn()
    const toggleMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
        toggle: toggleMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 77 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-menu-first a')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-label')

    expect(removeMock).toHaveBeenCalledWith('zoom-focus')
    expect(toggleMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 78 (n)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 78 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-menu-2-first')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-label')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(removeMock).toHaveBeenCalledWith('zoom-focus')
    expect(removeMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 83 (s)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 83 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-west')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-label')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(removeMock).toHaveBeenCalledWith('zoom-focus')
    expect(removeMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 90 (z)', () => {
    const addMock = jest.fn()
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        add: addMock,
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler({ zoom: 5 });
    handler({ keyCode: 90 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-5')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-label')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(addMock).toHaveBeenCalledWith('zoom-focus')
    expect(removeMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 84 (t)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 84 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-year-slider-main-button')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-label')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(removeMock).toHaveBeenCalledWith('zoom-focus')
    expect(removeMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 82 (r)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 82 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-filter')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-label')

    expect(removeMock).toHaveBeenCalledWith('zoom-focus')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 88 (x)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 88 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(removeMock).toHaveBeenCalledWith('open')
  });

  it('should handle default key code', () => {
    const handler = onKeyDownRegionHandler({ zoom: 1 });
    const result = handler({ keyCode: 99 }); // Arbitrary key code
    expect(result).toBe(false);
  });
});

