import {RemoveEndingSlash} from "./RemoveEndingSlash.Function";

/**
 * Returns true if the current and the target route matched
 * @param CurrentRoute
 * @param RouteToMatch
 * @constructor
 */
export default function RouteMatched(CurrentRoute: string, RouteToMatch: string): boolean {
    return RemoveEndingSlash(CurrentRoute.toLowerCase()) === RouteToMatch.toLowerCase();
}