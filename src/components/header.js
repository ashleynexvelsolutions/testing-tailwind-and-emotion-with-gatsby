import React from 'react'
import { Link } from "gatsby"
import tw, { styled, css } from 'twin.macro'
import { theme } from './layout'

const HeaderInnerContainer = styled.div([
  css`
    ${tw`
    my-0 
    mx-auto
    bg-yellow-300
    `}
    max-width: 1100px;
    padding: 1.45rem 1.0875rem;
    color: ${theme.colors.primary};
  `
])

const reusableCss = css`
${tw`
my-5 
mx-11
`}
    max-width: 600px;
    padding: 1.45rem 1.0875rem;
`
const PurelyTailwindP = styled.p([
  // tailwind only style
  tw`
  bg-blue-600 
  mb-6
  `,
])
const HeaderLink = styled(Link)([
  // use tailwind and css block separately if you prefer
  tw`
  text-blue-500
  `,
  css`
    text-decoration: none;
  `,
])
const Header = ({ siteTitle }) => (
  <header
    css={css`
    ${tw`
    my-0 
    mx-auto 
    bg-red-800
    `}
    max-width: 1100px;
    padding: 1.45rem 1.0875rem;
    `}
  >
    <HeaderInnerContainer>
      <h1 css={[tw`
      m-4
      `]}>
        <HeaderLink
          to="/"
        >
          {siteTitle}
        </HeaderLink>
        </h1>
        <div css={reusableCss}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div css={css`
      ${reusableCss};
      background-color: #000;
      color: #fff;
    `}>
          Mauris tincidunt ante nec magna dignissim consequat. Sed vestibulum enim sit amet mi facilisis tempor. Morbi eleifend egestas gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
      
      <PurelyTailwindP>
      Nunc mollis, nulla eu facilisis iaculis, purus lorem tempus nisi, eu tempus ipsum odio vitae velit. Nulla tempus sagittis elit sit amet condimentum. 
      </PurelyTailwindP>
    </HeaderInnerContainer>
  </header>
)

export default Header
