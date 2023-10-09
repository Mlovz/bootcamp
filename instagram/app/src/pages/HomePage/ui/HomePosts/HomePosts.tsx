import PostCard from "@/entities/Post/ui/PostCard/PostCard";
import { VStack } from "@/shared/ui";
import cls from "./HomePosts.module.scss";

const HomePosts = () => {
  return (
    <VStack gap={16} max className={cls.posts}>
      <PostCard />
      <PostCard />
    </VStack>
  );
};

export default HomePosts;
