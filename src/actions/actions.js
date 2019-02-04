import { TOGGLE_OPEN_INCIDENT, TOGGLE_CLOSED_INCIDENT, TOGGLE_OPENTODAY, TOGGLE_OPENYESTERDAY } from "./actionTypes";

export function toggleOpenIncidentAction() {
    return {
        type: TOGGLE_OPEN_INCIDENT,
    };
}
export function toggleClosedIncidentAction() {
    return {
        type: TOGGLE_CLOSED_INCIDENT,
    };
}
export function toggleOpenTodayAction() {
    return{
        type: TOGGLE_OPENTODAY,
    };
}
export function toggleOpenYesterdayAction() {
    return{
        type: TOGGLE_OPENYESTERDAY,
    };
}
