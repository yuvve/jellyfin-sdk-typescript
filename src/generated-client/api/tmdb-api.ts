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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ConfigImageTypes } from '../models';
/**
 * TmdbApi - axios parameter creator
 * @export
 */
export const TmdbApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets the TMDb image configuration options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tmdbClientConfiguration: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Tmdb/ClientConfiguration`;
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
    }
};

/**
 * TmdbApi - functional programming interface
 * @export
 */
export const TmdbApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TmdbApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets the TMDb image configuration options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tmdbClientConfiguration(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigImageTypes>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tmdbClientConfiguration(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TmdbApi - factory interface
 * @export
 */
export const TmdbApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TmdbApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets the TMDb image configuration options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tmdbClientConfiguration(options?: any): AxiosPromise<ConfigImageTypes> {
            return localVarFp.tmdbClientConfiguration(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TmdbApi - object-oriented interface
 * @export
 * @class TmdbApi
 * @extends {BaseAPI}
 */
export class TmdbApi extends BaseAPI {
    /**
     * 
     * @summary Gets the TMDb image configuration options.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TmdbApi
     */
    public tmdbClientConfiguration(options?: AxiosRequestConfig) {
        return TmdbApiFp(this.configuration).tmdbClientConfiguration(options).then((request) => request(this.axios, this.basePath));
    }
}
