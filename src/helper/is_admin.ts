import {ADMIN_ID_1, ADMIN_ID_2, ADMIN_ID_3} from "../config/env.vars";

export default function(id: number) : boolean {
    switch (id) {
        case ADMIN_ID_1:
        case ADMIN_ID_2:
        case ADMIN_ID_3:
            return true;
        default:
            return false;
    }
}
