import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  min-height : 300px;
  gap: 16px;
  flex-direction: column;
  align-items: center; /* Corrected spelling */
  justify-content: center; /* Center vertically */
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.black + 50};
`;

const GenerateImageCart = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          <span>Generating Image...</span>
        </>
      ) : (
        <>
          {src ? <Image src={src} alt="Generated" /> : <>Write a prompt to generate image</>}
        </>
      )}
    </Container>
  );
};

export default GenerateImageCart;
