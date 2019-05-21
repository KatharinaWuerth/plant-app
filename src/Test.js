import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTest = styled.div`
  background: hotpink;
`;

export default function Test({ title }) {
  return (
    <StyledTest>
      <h3>{title}</h3>
    </StyledTest>
  );
}

Test.propTypes = {
  title: PropTypes.string
};
