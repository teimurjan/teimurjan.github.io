import Flex from '@react-css/flex'
import { Link, navigate } from 'gatsby'
import { css, ClassNames } from '@emotion/react'
import { Logo, Container } from '../../atoms'
import { NavigationItem, ButtonSelect } from '../../molecules'
import { useWindowScroll } from '../../../hooks'
import { theme } from '../../../utils'
import { useAppContext } from '../../context'

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
      <NavigationItem to="/#experience" active={activeLink === 'experience'}>
        Experience
      </NavigationItem>
      <NavigationItem to="/#skills" active={activeLink === 'skills'}>
        Skills
      </NavigationItem>
      <NavigationItem to="/#education" active={activeLink === 'education'}>
        Education
      </NavigationItem>
      <NavigationItem to="/#media" active={activeLink === 'media'}>
        Media
      </NavigationItem>
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
            options={[
              { value: 'experience', label: 'Experience' },
              { value: 'skills', label: 'Skills' },
              { value: 'education', label: 'Education' },
              { value: 'media', label: 'Media' },
            ]}
            onChange={(id) => navigate(`/#${id}`)}
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
          ? theme.colors.background.beige
          : theme.colors.background.green};
        box-shadow: ${shouldInvert && '0 3px 5px rgba(57, 63, 72, 0.3)'};
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
