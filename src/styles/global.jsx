import { Box, Button, styled } from "@mui/material";
import { theme } from "../theme";
export const StyledButton = styled(Button)`
  font-size: 16px;
  line-height: 23px;
  text-transform: capitalize;
  padding: 0;
`;

export const StyledCard = styled(Box)`
  gap: 12px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  border: 3px solid ${theme.lightBlue};
  background-color: ${theme.white};
`;
