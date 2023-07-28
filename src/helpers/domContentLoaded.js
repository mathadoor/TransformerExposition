
// Code sourced from https://github.com/distillpub/template.git
export function domContentLoaded() {
  return ['interactive', 'complete'].indexOf(document.readyState) !== -1;
}
