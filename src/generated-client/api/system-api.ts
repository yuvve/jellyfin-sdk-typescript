/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { EndPointInfo } from '../models';
// @ts-ignore
import type { LogFile } from '../models';
// @ts-ignore
import type { ProblemDetails } from '../models';
// @ts-ignore
import type { PublicSystemInfo } from '../models';
// @ts-ignore
import type { SystemInfo } from '../models';
// @ts-ignore
import type { WakeOnLanInfo } from '../models';
/**
 * SystemApi - axios parameter creator
 * @export
 */
export const SystemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets information about the request endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEndpointInfo: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Endpoint`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a log file.
         * @param {string} name The name of the log file to get.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogFile: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getLogFile', 'name', name)
            const localVarPath = `/System/Logs/Log`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPingSystem: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets public information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPublicSystemInfo: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Info/Public`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a list of available server log files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerLogs: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Logs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemInfo: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Info`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets wake on lan information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getWakeOnLanInfo: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/WakeOnLanInfo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPingSystem: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Restarts the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restartApplication: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Restart`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Shuts down the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shutdownApplication: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Shutdown`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SystemApi - functional programming interface
 * @export
 */
export const SystemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SystemApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets information about the request endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEndpointInfo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EndPointInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEndpointInfo(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.getEndpointInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets a log file.
         * @param {string} name The name of the log file to get.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogFile(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogFile(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.getLogFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPingSystem(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPingSystem(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.getPingSystem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets public information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPublicSystemInfo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicSystemInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPublicSystemInfo(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.getPublicSystemInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets a list of available server log files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServerLogs(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LogFile>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServerLogs(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.getServerLogs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemInfo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SystemInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemInfo(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.getSystemInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets wake on lan information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getWakeOnLanInfo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WakeOnLanInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWakeOnLanInfo(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.getWakeOnLanInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPingSystem(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postPingSystem(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.postPingSystem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Restarts the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async restartApplication(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restartApplication(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.restartApplication']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Shuts down the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async shutdownApplication(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.shutdownApplication(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemApi.shutdownApplication']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SystemApi - factory interface
 * @export
 */
export const SystemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SystemApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets information about the request endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEndpointInfo(options?: RawAxiosRequestConfig): AxiosPromise<EndPointInfo> {
            return localVarFp.getEndpointInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a log file.
         * @param {SystemApiGetLogFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogFile(requestParameters: SystemApiGetLogFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<File> {
            return localVarFp.getLogFile(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPingSystem(options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.getPingSystem(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets public information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPublicSystemInfo(options?: RawAxiosRequestConfig): AxiosPromise<PublicSystemInfo> {
            return localVarFp.getPublicSystemInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a list of available server log files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerLogs(options?: RawAxiosRequestConfig): AxiosPromise<Array<LogFile>> {
            return localVarFp.getServerLogs(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets information about the server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemInfo(options?: RawAxiosRequestConfig): AxiosPromise<SystemInfo> {
            return localVarFp.getSystemInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets wake on lan information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getWakeOnLanInfo(options?: RawAxiosRequestConfig): AxiosPromise<Array<WakeOnLanInfo>> {
            return localVarFp.getWakeOnLanInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Pings the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPingSystem(options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.postPingSystem(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Restarts the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restartApplication(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.restartApplication(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Shuts down the application.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shutdownApplication(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.shutdownApplication(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getLogFile operation in SystemApi.
 * @export
 * @interface SystemApiGetLogFileRequest
 */
export interface SystemApiGetLogFileRequest {
    /**
     * The name of the log file to get.
     * @type {string}
     * @memberof SystemApiGetLogFile
     */
    readonly name: string
}

/**
 * SystemApi - object-oriented interface
 * @export
 * @class SystemApi
 * @extends {BaseAPI}
 */
export class SystemApi extends BaseAPI {
    /**
     * 
     * @summary Gets information about the request endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getEndpointInfo(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).getEndpointInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a log file.
     * @param {SystemApiGetLogFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getLogFile(requestParameters: SystemApiGetLogFileRequest, options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).getLogFile(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Pings the system.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getPingSystem(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).getPingSystem(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets public information about the server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getPublicSystemInfo(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).getPublicSystemInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a list of available server log files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getServerLogs(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).getServerLogs(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets information about the server.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getSystemInfo(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).getSystemInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets wake on lan information.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getWakeOnLanInfo(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).getWakeOnLanInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Pings the system.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public postPingSystem(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).postPingSystem(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Restarts the application.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public restartApplication(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).restartApplication(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Shuts down the application.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public shutdownApplication(options?: RawAxiosRequestConfig) {
        return SystemApiFp(this.configuration).shutdownApplication(options).then((request) => request(this.axios, this.basePath));
    }
}

