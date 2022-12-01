import { Box } from 'components/Box';
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';
import { theme } from 'constants';
import { Number, NumberTotal, Text } from './Statistics.styled';

export const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  bad,
  neutral,
  good,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      padding={0}
      gridGap={0}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        mb={5}
        gridGap={5}
      >
        <p>
          <CiFaceFrown
            size={theme.sizes.icon}
            style={{ fill: theme.colors.iconBad }}
          />
          <Number>{bad}</Number>
        </p>
        <p>
          <CiFaceMeh
            size={theme.sizes.icon}
            style={{ fill: theme.colors.iconNeutral }}
          />
          <Number>{neutral}</Number>
        </p>
        <p>
          <CiFaceSmile
            size={theme.sizes.icon}
            style={{ fill: theme.colors.iconGood }}
          />
          <Number>{good}</Number>
        </p>
      </Box>
      <Box>
        <Text>
          Total:<NumberTotal>{countTotalFeedback()}</NumberTotal>
        </Text>
        <Text>
          Positive feedback:
          <NumberTotal>{countPositiveFeedbackPercentage()}%</NumberTotal>
        </Text>
      </Box>
    </Box>
  );
};
