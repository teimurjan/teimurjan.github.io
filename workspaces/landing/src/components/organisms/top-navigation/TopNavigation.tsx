import Flex from '@react-css/flex'
import { Link } from 'gatsby'
import { css, ClassNames } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { Logo, Container } from '../../atoms'
import { NavigationItem, ButtonSelect } from '../../molecules'
import { useWindowScroll } from '../../../hooks'
import { Anchor, navigateToAnchor } from '../../../utils'
import { useAppContext } from '../../../context'

const ITEMS = [
  { value: Anchor.Experience, label: Anchor.Experience.toUpperCase() },
  { value: Anchor.Skills, label: Anchor.Skills.toUpperCase() },
  { value: Anchor.Education, label: Anchor.Education.toUpperCase() },
  { value: Anchor.Media, label: Anchor.Media.toUpperCase() },
]

const TopNavigation = () => {
  const { activeLink } = useAppContext()
  const scrollTop = useWindowScroll()

  const shouldInvert = scrollTop > 20

  const links = (
    <Flex
      css={css`
        @media ${theme.screens.small.mediaUpTo} {
          display: none !important;
        }
      `}
      alignItemsCenter
    >
      {ITEMS.map((item) => (
        <NavigationItem
          key={item.value}
          to={`/#${item.value}`}
          active={activeLink === item.value}
        >
          {item.label}
        </NavigationItem>
      ))}
    </Flex>
  )

  const select = (
    <ClassNames>
      {({ css }) => {
        const className = css`
          @media ${theme.screens.small.mediaFrom} {
            display: none;
          }
        `

        return (
          <ButtonSelect
            css={className}
            popperClassName={className}
            options={ITEMS}
            onChange={navigateToAnchor}
            placeholder="Navigate"
            value={activeLink}
          />
        )
      }}
    </ClassNames>
  )

  return (
    <div
      css={css`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 10;
        background: ${shouldInvert
          ? theme.colors.background.light
          : theme.colors.background.dark};
        box-shadow: ${shouldInvert &&
        `0 3px 5px ${theme.colors.background.outline}`};
        transition: all 200ms ${theme.transition.timingFunction.easeInOutCubic};
        padding: ${theme.spacing.small} 0;
      `}
    >
      <Container>
        <Flex alignItemsCenter justifySpaceBetween>
          <Link to="/">
            <Logo />
          </Link>
          {select}
          {links}
        </Flex>
      </Container>
    </div>
  )
}

export default TopNavigation
