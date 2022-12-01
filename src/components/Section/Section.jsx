import { Box } from 'components/Box';

export const Section = ({ title, bgColor, children }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    padding={5}
    gridGap={5}
    minWidth="sectionBox"
    bg={bgColor}
    boxShadow="primary"
  >
    <h2>{title}</h2>
    {children}
  </Box>
);
