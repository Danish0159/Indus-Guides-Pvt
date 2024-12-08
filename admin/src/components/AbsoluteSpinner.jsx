import styled from "styled-components";

function AbsoluteSpinner() {
  return (
    <Wrapper>
      <div className="loadingSpinner"></div>
    </Wrapper>
  );
}
export default AbsoluteSpinner;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .loadingSpinner {
    width: 50px;
    height: 50px;
    border: 6px solid;
    border-color: #6439ff transparent #6439ff transparent;
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
