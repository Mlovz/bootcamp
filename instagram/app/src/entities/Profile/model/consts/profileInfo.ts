

export enum FollowEnum {
    FOLLOWERS = 'followers',
    FOLLOWING = 'following'
}

export type FollowModalType = 'followers' | 'following'

export  interface IFollowModal {
    isOpen: boolean
    view?: FollowModalType
}