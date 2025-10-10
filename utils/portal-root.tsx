'use client'

let portalRoot: HTMLElement | null = null
if (typeof document !== 'undefined') {
  portalRoot = document.getElementById('portal-root')
}
export default portalRoot