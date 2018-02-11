import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  padding: 20px 10px;
  border: 2px solid #ef5350;
  color: #ef5350;
  font-weight: bold;
  border-radius: 4px;
`;

const ErrorMessage = ({ errorMessage }) => {
  return (
    <StyledErrorMessage className="ErrorMessage">
      {errorMessage}
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
