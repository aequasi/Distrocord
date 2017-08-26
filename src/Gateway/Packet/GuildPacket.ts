import {Long} from "bson";

type GuildPacket = {
    id: Long,
    name: string,
    icon: string,
    splash: string,
    owner_id: string,
    region: string,
    afk_channel_id: string,
    afk_timeout: number,
    embed_enabled: boolean,
    embed_channel_id: string,
    verification_level: number,
    default_message_notifications: number,
    explicit_content_filter: number,
    roles: Array<RolePacket>,
    emojis: Array<EmojiPacket>,
    features: string[],
    mfa_level: number,
    application_id?: string,
    widget_enabled: boolean,
    widget_channel_id: string,
    joined_at: number,
    large: boolean,
    unavailable: boolean,
    member_count: number,
    voice_states: Array<any>,
    members: Array<MemberPacket>,
    channels: Array<ChannelPacket>,
    presences: Array<PresencePacket>
}

export default GuildPacket;