import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import IconBookmark from '../img/BookmarkDarkGreen.png'
import IconBookmarkActive from '../img/BookmarkActive.png'

const StyledBookmarkImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
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
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool,
}
