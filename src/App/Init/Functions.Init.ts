import {GetParam} from "../../Vendor/Functions/Core/GetParam";
import {ValidateEmailAddress} from "../../Vendor/Functions/Core/EmailValidator.Function";
import {RemoveEndingSlash} from "../../Vendor/Functions/Core/RemoveEndingSlash.Function";
import {ConvertDate} from "../../Vendor/Functions/Core/ConvertDate.Function";
import {ConvertMysqlDateTime} from "../../Vendor/Functions/Core/ConvertMysqlDateTime.Function";
import {Capitalize} from "../../Vendor/Functions/Core/Capitalize.Function";
import {PrepareApiFromEnv} from "../../Vendor/Functions/Core/PrepareApiFromEnv";
import {PrepareNamespace} from "../../Vendor/Functions/Core/PrepareNamespace";

/**
 * Register your function types and properties here
 */
interface IFunctions {
    PREPARE_API_FROM_ENV: typeof PrepareApiFromEnv,
    GET_PARAM: typeof GetParam,
    VALIDATE_EMAIL_ADDRESS: typeof ValidateEmailAddress,
    REMOVE_ENDING_SLASH: typeof RemoveEndingSlash,
    CONVERT_DATE: typeof ConvertDate,
    CONVERT_MYSQL_DATE: typeof ConvertMysqlDateTime,
    CAPITALIZE: typeof Capitalize,
    PREPARE_NAMESPACE: typeof PrepareNamespace,
}

const Functions: IFunctions = {
    /**
     * Register your function providers here
     */
    PREPARE_API_FROM_ENV: PrepareApiFromEnv,
    GET_PARAM: GetParam,
    VALIDATE_EMAIL_ADDRESS: ValidateEmailAddress,
    REMOVE_ENDING_SLASH: RemoveEndingSlash,
    CONVERT_DATE: ConvertDate,
    CONVERT_MYSQL_DATE: ConvertMysqlDateTime,
    CAPITALIZE: Capitalize,
    PREPARE_NAMESPACE: PrepareNamespace,
};

export {Functions as FUNCTIONS};