import React, { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { theme } from 'constants';

export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        padding={6}
      >
        <Section title="Please leave feedback" bgColor={theme.colors.bgLight}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics" bgColor={theme.colors.bgPrimary}>
          {this.state.bad > 0 ||
          this.state.neutral > 0 ||
          this.state.good > 0 ? (
            <Statistics
              bad={this.state.bad}
              neutral={this.state.neutral}
              good={this.state.good}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            ></Statistics>
          ) : (
            <p>There is no any feedback</p>
          )}
        </Section>

        <GlobalStyle />
      </Box>
    );
  }
}
