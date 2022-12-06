import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  width: 100%;
  margin: 5rem auto;
  background: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;
  padding: 3rem 2.5rem;

  display: flex;
  flex-direction: column;
`
