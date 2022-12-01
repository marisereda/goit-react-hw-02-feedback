import PropTypes from 'prop-types';
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';
import { Button, Input } from './FeedbackOptions.styled';
import { theme } from 'constants';
import { Box } from 'components/Box';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.feedback.value;
    form.reset();
    onLeaveFeedback(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={5}
        gridGap={5}
      >
        <label>
          <Input type="radio" name="feedback" value="bad"></Input>
          <CiFaceFrown size={theme.sizes.icon} />
        </label>
        <label>
          <Input type="radio" name="feedback" value="neutral"></Input>
          <CiFaceMeh size={theme.sizes.icon} />
        </label>
        <label>
          <Input type="radio" name="feedback" value="good"></Input>
          <CiFaceSmile size={theme.sizes.icon} />
        </label>
      </Box>
      <Button type="submit">Submit</Button>
    </form>
  );
};
