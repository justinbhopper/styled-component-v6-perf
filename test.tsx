import styled from "styled-components";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  foo: number;
}

const Dialog = (_props: DialogProps) => {
  return <></>;
};

export const MyStyledDialog = styled(Dialog)`
  color: blue;
`;
