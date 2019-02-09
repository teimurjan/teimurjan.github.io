import styled from '@emotion/styled'
import { mediaSizeLessThan, sizes } from '../../media'

export const Container = styled.div`
  width: 55%;
  margin: 0 auto;

  ${mediaSizeLessThan(sizes.md)} {
    width: 94%;
    margin: 0 3%;
  }
`
