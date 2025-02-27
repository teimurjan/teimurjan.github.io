'use client'
import NextLink from 'next/link'
import classNames from 'classnames'
import { useWindowScroll } from '@/hooks'
import { useRouter } from 'next/navigation'
import { Logo, Container, Background, Link } from '../../atoms'
import { ButtonSelect } from '../../molecules'
import { Anchor } from '../../../utils'
import { useVisibilityContext } from '@/context'

const navItems = [
  {
    key: Anchor.Experience,
    value: Anchor.Experience,
    label: Anchor.Experience.toUpperCase(),
  },
  {
    key: Anchor.Skills,
    value: Anchor.Skills,
    label: Anchor.Skills.toUpperCase(),
  },
  {
    key: Anchor.Education,
    value: Anchor.Skills,
    label: Anchor.Education.toUpperCase(),
  },
  { key: Anchor.Media, value: Anchor.Media, label: Anchor.Media.toUpperCase() },
]

const TopNavigation = () => {
  const { visibleIds } = useVisibilityContext()
  const scrollTop = useWindowScroll()
  const shouldInvert = scrollTop > 20
  const router = useRouter()

  const firstVisibleNavItem = navItems.find((item) =>
    visibleIds.includes(item.value),
  )

  return (
    <Background
      color={shouldInvert ? 'light' : 'dark'}
      className={classNames(
        'fixed left-0 top-0 w-full z-30 transition-all duration-200',
        shouldInvert && 'shadow',
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-2 h-24">
          <NextLink href="/">
            <Logo />
          </NextLink>
          <div className="max-md:hidden flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/#${item.value}`}
                className="px-8 py-4 uppercase"
                underline={
                  item.value === firstVisibleNavItem?.value ? 'always' : 'hover'
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <ButtonSelect
              options={navItems}
              onChange={(id) => router.push(`/#${id}`)}
              placeholder="Navigate"
            />
          </div>
        </div>
      </Container>
    </Background>
  )
}

export default TopNavigation
