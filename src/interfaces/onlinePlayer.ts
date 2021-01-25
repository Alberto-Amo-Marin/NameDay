import { onlineTeam } from "./onlineTeam";

export interface onlinePlayer {
    id: number;
    first_name: string,
    last_name: string,
    position?: string,
    height_feet?: number,
    height_inches?: number,
    weight_pounds?: number,
    team?: onlineTeam
}