import axios from 'axios';
import {AuthProvider} from "../../Auth/AuthProvider";
import {ApiConfig} from "../../../../../App/Config/Api.Config";

/**
 * @HttpRequestProvider is a service provider to send requests to the api
 */
export class HTTPRequestProvider {
    /**
     * Send Request to the api
     * @param type {string}
     * @param route {string}
     * @param config {object}
     * @param data {object}
     * @param onSuccess {function}
     * @param onError {function}
     */
    public static send(type: 'get' | 'post' | 'delete', route: string, config: object, data: object, onSuccess: any = null, onError: any = null): void {
        let Axios,
            axiosConfig = {
                headers: {
                    Authorization: `Bearer ${new AuthProvider().getToken()}`,
                    ...config,
                }
            };

        if (type === 'get' || type === 'delete') {
            let params: string = '', isFirsParam: boolean = true;
            for(const [key, value] of Object.entries(data)) {
                params += `${!isFirsParam ? '&' : '?'}${key}=${value}`;
                isFirsParam = false;
            }

            Axios = axios[type](ApiConfig.API_ROOT + route + params, axiosConfig);
        } else {
            Axios = axios.post(ApiConfig.API_ROOT + route, data, axiosConfig)
        }

        Axios.then(({data}: any) => {
            if (data.success) {
                if (typeof onSuccess === 'function') {
                    onSuccess(data);
                }
            } else {
                alert(data.message);
            }

        }).catch((error: any) => {
            if (error.response) {
                if (error.response.status === 403) {
                    new AuthProvider().remove();
                }
            }

            if (typeof onError === 'function') {
                return onError(error);
            }

            alert(error);
        });
    }
}