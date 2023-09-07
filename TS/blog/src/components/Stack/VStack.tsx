import { FlexProps } from "./Flex";
import Flex from "./Flex";

type VStackProps = Omit<FlexProps, "direction">;

const VStack = (props: VStackProps) => {
  return <Flex direction="column" align="start" {...props} />;
};

export default VStack;
