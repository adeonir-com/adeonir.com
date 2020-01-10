import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import getThemeColor from '~/utils/get_theme_color'

import Avatar from '../Avatar'

import * as S from './styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to='/'
        cover
        direction='left'
        bg={getThemeColor()}
        duration={0.5}
      >
        <Avatar />
        <S.ProfileAuthor>{author}</S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfilePosition>{position}</S.ProfilePosition>
    </S.ProfileWrapper>
  )
}

export default Profile
