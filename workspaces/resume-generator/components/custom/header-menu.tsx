'use client'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { Layers, Pickaxe, Sparkles } from 'lucide-react'
import { usePathname } from 'next/navigation'
export const HeaderMenu = () => {
  const { user } = useAuth()
  const pathname = usePathname()

  if (!user) {
    return null
  }

  return (
    <NavigationMenu className="-mx-6">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === '/'}
              className={navigationMenuTriggerStyle()}
            >
              <span className="flex items-center gap-2">
                Applications <Layers className="h-4 w-4" />
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/generate" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === '/generate'}
              className={navigationMenuTriggerStyle()}
            >
              <span className="flex items-center gap-2">
                Generator <Sparkles className="h-4 w-4" />
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/adjust" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === '/adjust'}
              className={navigationMenuTriggerStyle()}
            >
              <span className="flex items-center gap-2">
                Customizer <Pickaxe className="h-4 w-4" />
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
