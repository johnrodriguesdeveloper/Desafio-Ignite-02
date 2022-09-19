import styled from 'styled-components'

export const Container = styled.div``
export const Content = styled.div`
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
  gap: 1.25rem;

  div.ListIcons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`
const BACKGROUND_ICONES_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface BackgroundIconsProps {
  statusColor: keyof typeof BACKGROUND_ICONES_COLORS
}
export const BackgroundIcons = styled.span<BackgroundIconsProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  margin-right: 0.25rem;
  border-radius: 1000px;
  background: ${(props) =>
    props.theme[BACKGROUND_ICONES_COLORS[props.statusColor]]};
`
