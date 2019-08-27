import styled from '@emotion/styled'
import { sizes, mediaSizeLessThan } from '../../media'

export const LayoutWrapper = styled.div`
  height: 100%;
`

export const LayoutContent = styled.div`
  margin: 60px 0 50px 0;
  padding-top: 5px;

  @media ${mediaSizeLessThan(sizes.md)} {
    margin: 50px 0 40px 0;
  }
`
