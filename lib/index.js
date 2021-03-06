/**
 * Expose eventConstructors
 */

module.exports = {
  abort: Event, // This may also be a ProgressEvent and a UIEvent, so we'll just go with the most abstract for now
  animationend: AnimationEvent,
  animationiteration: AnimationEvent,
  animationstart: AnimationEvent,
  blur: FocusEvent,
  canplay: Event,
  canplaythrough: Event,
  change: Event,
  click: MouseEvent,
  contextmenu: MouseEvent,
  copy: ClipboardEvent,
  cut: ClipboardEvent,
  dblclick: MouseEvent,
  drag: DragEvent,
  dragend: DragEvent,
  dragenter: DragEvent,
  dragexit: DragEvent,
  dragleave: DragEvent,
  dragover: DragEvent,
  dragstart: DragEvent,
  drop: DragEvent,
  durationchange: Event,
  emptied: Event,
  encrypted: Event,
  ended: Event,
  error: Event,
  focus: FocusEvent,
  focusin: FocusEvent,
  focusout: FocusEvent,
  hashchange: HashChangeEvent,
  input: Event,
  invalid: Event,
  keydown: KeyboardEvent,
  keypress: KeyboardEvent,
  keyup: KeyboardEvent,
  load: UIEvent,
  loadeddata: Event,
  loadedmetadata: Event,
  loadstart: ProgressEvent,
  mousedown: MouseEvent,
  mouseenter: MouseEvent,
  mouseleave: MouseEvent,
  mousemove: MouseEvent,
  mouseout: MouseEvent,
  mouseover: MouseEvent,
  mouseup: MouseEvent,
  paste: ClipboardEvent,
  pause: SpeechSynthesisEvent,
  play: Event,
  playing: Event,
  popstate: PopStateEvent,
  progress: ProgressEvent,
  ratechange: Event,
  reset: Event,
  resize: UIEvent,
  scroll: UIEvent,
  seeked: Event,
  seeking: Event,
  select: UIEvent,
  stalled: Event,
  submit: Event,
  suspend: Event,
  timeupdate: Event,
  touchcancel: TouchEvent,
  touchend: TouchEvent,
  touchmove: TouchEvent,
  touchstart: TouchEvent,
  transitionend: TransitionEvent,
  unload: UIEvent,
  volumechange: Event,
  waiting: Event,
  wheel: WheelEvent,
}
