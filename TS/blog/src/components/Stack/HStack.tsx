import { FlexProps } from "./Flex";
import Flex from "./Flex";

type HStackProps = Omit<FlexProps, "direction">;

const HStack = (props: HStackProps) => {
  return <Flex direction="row" {...props} />;
};

export default HStack;
