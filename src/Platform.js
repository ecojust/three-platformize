let $URL = null;
let $atob = null;
let $Blob = null;
let $window = null;
let $document = null;
let $DOMParser = null;
let $TextDecoder = null;
let $XMLHttpRequest = null;
let $OffscreenCanvas = null;
let $HTMLCanvasElement = null;
let $createImageBitmap = null;
let $requestAnimationFrame = null;
let $cancelAnimationFrame = null;

class Platform {
  set(platform) {
    this.platform && this.platform.dispose();

    this.platform = platform;

    const globals = platform.getGlobals();

    $atob = globals.atob;
    $Blob = globals.Blob;
    $window = globals.window;
    $document = globals.document;
    $XMLHttpRequest = globals.XMLHttpRequest;
    $OffscreenCanvas = globals.OffscreenCanvas;
    $HTMLCanvasElement = globals.HTMLCanvasElement;
    $createImageBitmap = globals.createImageBitmap;

    $URL = $window.URL;
    $DOMParser = $window.DOMParser;
    $TextDecoder = $window.TextDecoder;
    $requestAnimationFrame = $window.requestAnimationFrame;
    $cancelAnimationFrame = $window.cancelAnimationFrame;
  }

  dispose() {
    this.platform && this.platform.dispose();

    $URL = null;
    $Blob = null;
    $atob = null;
    $window = null;
    $document = null;
    $DOMParser = null;
    $TextDecoder = null;
    $XMLHttpRequest = null;
    $OffscreenCanvas = null;
    $HTMLCanvasElement = null;
    $createImageBitmap = null;
    $requestAnimationFrame = null;
  }
}

const PLATFORM = new Platform();

export {
  $URL,
  $atob,
  $Blob,
  $window,
  PLATFORM,
  $document,
  $DOMParser,
  $TextDecoder,
  $XMLHttpRequest,
  $OffscreenCanvas,
  $HTMLCanvasElement,
  $createImageBitmap,
  $requestAnimationFrame,
};
