
import styled from "styled-components";
import { Row } from 'react-grid-system';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

export const CenteredRow = styled(Row)`
  &&& {
    flex-flow: row wrap;
    justify-content: space-between !important;
    margin-bottom: ${({ theme }) => theme.largeGap};
  }
  &&&::after {
    content: "";
    flex: auto;
  }
`;

export const Title = styled(Typography)`
  &&& {
    margin-top: ${({ theme }) => theme.largeGap};
  }
`;

export const ContainerStyled = styled.div`
  &&& {
    width: 100%;
    height: 85%;
    overflow: scroll;
    margin-bottom: 50px;
  }
`;

export const StyledFab = styled(Fab)`
  &&& {
    position: fixed;
    bottom: 85px;
    right: 30px;
    cursor: pointer;
    @media only screen and (min-width: 768px) {
      position: absolute;
    }
  }
`;
