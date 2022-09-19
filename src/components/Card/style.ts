import styled from 'styled-components'

export const ContentCard = styled.div`
  text-align: center;
  width: 16rem;
  border-radius: 6px 36px 6px 36px;
  > img {
    margin-top: -1.5rem;
  }
  background: ${({ theme }) => theme['base-card']};
`
