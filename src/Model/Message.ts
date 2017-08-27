import {Long} from "bson";
import Channel from "./Channel";
import Member from "./Member";
import Role from "./Role";
import User from "./User";

export enum MessageType {
    DEFAULT,
    RECIPIENT_ADD,
    RECIPIENT_REMOVE,
    CALL,
    CHANNEL_NAME_CHANGE,
    CHANNEL_ICON_CHANGE,
    CHANNEL_PINNED_MESSAGE,
    GUILD_MEMBER_JOIN,
}

export default class Message {
    public identifier: Long;

    public channel: Channel;

    public timestamp: number;

    public editedTimestamp: number;

    public tts: boolean;

    public attachments: any[];

    public embeds: any[];

    public reactions: any;

    public type: MessageType;

    public author: User;

    public member?: Member;

    public mentions: User[];

    public content: string;

    public roleMentions: Role[];

    public channelMentions: Channel[];
}
