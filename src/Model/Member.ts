import {fragment, prop} from "mongot";
import Kernel from "../Kernel";
import Guild from "./Guild";
import ModelInterface from "./ModelInterface";
import User from "./User";

@fragment
export default class Member extends User implements ModelInterface {
    @prop
    public user: string;

    @prop
    public nick?: string;

    @prop
    public joinedAt: Date;

    @prop
    public roles: string[];

    public guild: Guild;

    public kernel: Kernel;

    public get id(): string {
        return this.user;
    }
}
