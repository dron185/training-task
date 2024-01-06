import styled from "styled-components";

export const ContainerBtn = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 10px;
`;

export const LeftBtn = styled.button`
  min-height: 30px;
  width: 86px;
  border-radius: 5px;
  border: none;
  background-color: #4e71fe;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
`;

export const RightBtn = styled(LeftBtn)`
  color: #4e71fe;
  border: 2px solid #4e71fe;
  background: #ffffff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`;
