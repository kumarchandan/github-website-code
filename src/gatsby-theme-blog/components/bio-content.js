import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Thank you for reading!
      {` `}
      <br />
      Words by <Styled.a href="/">Chandan Kumar</Styled.a>
    </>
  )
}
