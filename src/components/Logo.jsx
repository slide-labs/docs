/* eslint-disable @next/next/no-img-element */

export function Logo(props) {
  return (
    <span className="flex items-center">
      <img src="logo.png" alt="logo" className="w-12" />
      <span className="text-xs font-bold uppercase text-purple-400">Slide</span>
    </span>
  )
}
