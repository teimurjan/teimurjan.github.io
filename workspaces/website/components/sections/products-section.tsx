import { AvatarBox } from '@/components/ui/avatar-box'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { IconLink } from '@/components/ui/sketch-icons'
import type { ProductsData } from '@/lib/sections'
import Image from 'next/image'

interface ProductsSectionProps {
  data: ProductsData
}

const hostnameOf = (url: string): string =>
  URL.canParse(url) ? new URL(url).hostname.replace(/^www\./, '') : url

export function ProductsSection({ data }: ProductsSectionProps) {
  if (data.products.length === 0) {
    return (
      <FadeIn>
        <p>No products yet.</p>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      {data.products.map((product) => (
        <Card key={product.id}>
          <div className="grid grid-cols-[56px_1fr] gap-4 items-start max-tablet:grid-cols-[44px_1fr] max-tablet:gap-3">
            <AvatarBox size="lg">
              <Image
                src={product.logoUrl}
                alt={`${product.name} logo`}
                width={56}
                height={56}
                unoptimized
                className="w-full h-full object-contain p-1.5"
              />
            </AvatarBox>
            <div>
              <h3 className="text-[17px] font-semibold m-0 max-tablet:text-[15px]">
                {product.name}
              </h3>
              <p className="mt-2 mb-0">{product.description}</p>
              {product.link && (
                <Button
                  as="a"
                  variant="ghost"
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5"
                >
                  <IconLink size={14} /> {hostnameOf(product.link)}
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </FadeIn>
  )
}
