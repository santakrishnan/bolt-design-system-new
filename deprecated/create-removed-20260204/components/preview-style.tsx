"use client"

export function PreviewStyle() {
  return (
    <style global jsx>{`
      html {
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    `}</style>
  )
}
