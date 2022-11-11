import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";

const IconWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <IconWrapper>
      <BeatLoader size={15} margin={4} color="white" speedMultiplier={0.7} />
    </IconWrapper>
  );
};

export default Loader;
