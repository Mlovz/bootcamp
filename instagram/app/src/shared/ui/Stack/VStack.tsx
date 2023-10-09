import { FlexProps } from "./Flex";
import Flex from "./Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack = (props: VStackProps) => {
  return <Flex direction="column" align="start" {...props} />;
};
