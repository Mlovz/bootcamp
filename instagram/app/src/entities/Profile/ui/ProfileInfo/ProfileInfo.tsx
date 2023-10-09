import { User } from "@/entities/User";
import { Avatar, Button, HStack, Icon, Modal, Text, VStack } from "@/shared/ui";
import {FC,  useEffect,  useState} from "react";
import { EditProfile } from "../EditProfile/EditProfile";
import cls from "./ProfileInfo.module.scss";
import { FollowBtn } from "@/features";
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch";
import {useModal} from "@/shared/lib";
import {FollowEnum, FollowModalType, IFollowModal} from "@/entities/Profile/model/consts/profileInfo";
import FollowersModal from "@/entities/Profile/ui/FollowersModal/FollowersModal";

interface ProfileInfoProps {
  auth: User;
  users: User[];
  id: string;
}

export const ProfileInfo: FC<ProfileInfoProps> = ({auth, users, id}) => {
  const {isOpen: isOpenEditModal, onOpen: onOpenEditModal, onClose: onCloseEditModal} = useModal()
  const [followModal, setFollowModal] = useState<IFollowModal>({
    isOpen: false,
    view: FollowEnum.FOLLOWERS
  })

  const [user, setUser] = useState<User[]>([]);
  const dispatch = useAppDispatch();

  const onOpenFollowModal = (view: FollowModalType) => {
    setFollowModal({isOpen: true, view: view })
  }
  const onCloseFollowModal = () => {
    setFollowModal({isOpen: false, view: FollowEnum.FOLLOWERS})
  }

  useEffect(() => {
    if (id === auth._id) {
      setUser([auth]);
    } else {
      const newUser = users.find((item) => item._id === id);
      if (newUser) {
        setUser([newUser]);
      }
    }
  }, [id, auth, users]);


  return (
      <HStack align="start">
        {
          user?.map((item) => {
            return(
                  <HStack align="start" >
                    <Avatar src={item?.avatar} size={150} variant="personal"/>

                    <VStack className={cls.info} gap={20}>
                      <HStack gap={20}>
                        <Text as="h2" size={24} fw={600}>
                          {item?.username}
                        </Text>

                        {id === auth._id ? (
                            <Button variant="gray" onClick={onOpenEditModal}>
                              Изменить профиль
                            </Button>
                        ) : (
                            <FollowBtn user={item} auth={auth} id={id} variant="solid"/>
                        )}

                        <Icon type="More"/>
                      </HStack>
                      <HStack gap={40}>
                        <HStack gap={5}>
                          <Text size={16} fw={500} as="h2">
                            1.258
                          </Text>
                          <Text size={16} fw={400} as="span">
                            посты
                          </Text>
                        </HStack>
                        <HStack gap={5} className={cls.follow} onClick={() => onOpenFollowModal(FollowEnum.FOLLOWERS)}>
                          <Text size={16} fw={500} as="h2">
                            {item.followers.length}
                          </Text>
                          <Text size={16} fw={400} as="span">
                            подписчики
                          </Text>
                        </HStack>
                        <HStack gap={5} className={cls.follow} onClick={() => onOpenFollowModal(FollowEnum.FOLLOWING)}>
                          <Text size={16} fw={500} as="h2">
                            {item.following.length}
                          </Text>
                          <Text size={16} fw={400} as="span">
                            подписки
                          </Text>
                        </HStack>
                      </HStack>
                      <VStack>
                        <Text as="h2" size={16} fw={500}>
                          {item.fullname}
                        </Text>
                      </VStack>
                    </VStack>
                    <Modal isOpen={isOpenEditModal} onClose={onCloseEditModal}>
                      <EditProfile user={item}/>
                    </Modal>

                    <Modal isOpen={followModal.isOpen} onClose={onCloseFollowModal}>
                      {
                          followModal.view === FollowEnum.FOLLOWERS && <FollowersModal data={item.followers}/>

                      }
                      {
                          followModal.view === FollowEnum.FOLLOWING && <FollowersModal data={item.following} />
                      }
                    </Modal>
                  </HStack>
            )
          })
        }


      </HStack>
  );
};
