import {PrepareApiFromEnv} from "../../Vendor/Functions/Core/PrepareApiFromEnv";

interface IApiConfig {
    APP_ROOT: string,
    API_ROOT: string,
    CDN_ROOT: string,
}

export const ApiConfig: IApiConfig = {
    APP_ROOT: PrepareApiFromEnv("http://localhost:3000", "http://localhost:3000"),
    API_ROOT: PrepareApiFromEnv("http://localhost:8000/api", "http://localhost:9000/api"),
    CDN_ROOT: PrepareApiFromEnv("http://localhost:8000/cdn", "http://localhost:8000/cdn"),
}