
export function keymap() {
  console.log(`
    'atom-text-editor':
      'ctrl-shift-left': 'pane:move-item-left'
      'ctrl-shift-right': 'pane:move-item-right'
      'cmd-k cmd-j': 'window:focus-pane-on-left'
      'cmd-k cmd-k': 'window:focus-pane-on-right'
      'cmd-k cmd-u': 'window:focus-pane-above'
      'cmd-k cmd-n': 'window:focus-pane-below'
  `);
}
