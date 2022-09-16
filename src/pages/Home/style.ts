import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 4rem 1rem 0rem 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
  img {
    max-width: 476px;
  }
`
export const ContentTitle = styled.div`
  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const ContentIcons = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 1rem;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
  }
`
