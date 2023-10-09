import React from "react";
import cls from "./HomeStorySlider.module.scss";
import { Avatar, HStack } from "@/shared/ui";

const HomeStorySlider = () => {
  return (
    <HStack className={cls.slider}>
      <Avatar
        src="https://eric.org.uk/wp-content/uploads/2022/08/Untitled-design-58.png"
        size={56}
        variant="story"
      />
      <Avatar
        src="https://eric.org.uk/wp-content/uploads/2022/08/Untitled-design-58.png"
        size={56}
        variant="story"
      />
      <Avatar
        src="https://eric.org.uk/wp-content/uploads/2022/08/Untitled-design-58.png"
        size={56}
        variant="story"
      />
      <Avatar
        src="https://eric.org.uk/wp-content/uploads/2022/08/Untitled-design-58.png"
        size={56}
        variant="story"
      />
      <Avatar
        src="https://eric.org.uk/wp-content/uploads/2022/08/Untitled-design-58.png"
        size={56}
        variant="story"
      />
    </HStack>
  );
};

export default HomeStorySlider;
