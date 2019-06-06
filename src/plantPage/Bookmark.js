import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import IconBookmark from '../img/BookmarkDarkGreen.png'
import IconBookmarkActive from '../img/BookmarkActive.png'

const StyledBookmarkImage = styled.img`
  width: 10%;
  height: 10%;
`

export default function Bookmark({ onClick, isBookmarked, id }) {
  if (isBookmarked) {
    return (
      <StyledBookmarkImage
        onClick={() => onClick(id)}
        src={IconBookmarkActive}
      />
    )
  } else {
    return (
      <StyledBookmarkImage onClick={() => onClick(id)} src={IconBookmark} />
    )
  }
}

Bookmark.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
  isBookmarked: PropTypes.bool.isRequired,
}
