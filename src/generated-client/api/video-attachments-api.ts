/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * VideoAttachmentsApi - axios parameter creator
 * @export
 */
export const VideoAttachmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get video attachment.
         * @param {string} videoId Video ID.
         * @param {string} mediaSourceId Media Source ID.
         * @param {number} index Attachment Index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttachment: async (videoId: string, mediaSourceId: string, index: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('getAttachment', 'videoId', videoId)
            // verify required parameter 'mediaSourceId' is not null or undefined
            assertParamExists('getAttachment', 'mediaSourceId', mediaSourceId)
            // verify required parameter 'index' is not null or undefined
            assertParamExists('getAttachment', 'index', index)
            const localVarPath = `/Videos/{videoId}/{mediaSourceId}/Attachments/{index}`
                .replace(`{${"videoId"}}`, encodeURIComponent(String(videoId)))
                .replace(`{${"mediaSourceId"}}`, encodeURIComponent(String(mediaSourceId)))
                .replace(`{${"index"}}`, encodeURIComponent(String(index)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
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
 * VideoAttachmentsApi - functional programming interface
 * @export
 */
export const VideoAttachmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VideoAttachmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get video attachment.
         * @param {string} videoId Video ID.
         * @param {string} mediaSourceId Media Source ID.
         * @param {number} index Attachment Index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAttachment(videoId: string, mediaSourceId: string, index: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAttachment(videoId, mediaSourceId, index, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VideoAttachmentsApi - factory interface
 * @export
 */
export const VideoAttachmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VideoAttachmentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get video attachment.
         * @param {string} videoId Video ID.
         * @param {string} mediaSourceId Media Source ID.
         * @param {number} index Attachment Index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttachment(videoId: string, mediaSourceId: string, index: number, options?: any): AxiosPromise<any> {
            return localVarFp.getAttachment(videoId, mediaSourceId, index, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAttachment operation in VideoAttachmentsApi.
 * @export
 * @interface VideoAttachmentsApiGetAttachmentRequest
 */
export interface VideoAttachmentsApiGetAttachmentRequest {
    /**
     * Video ID.
     * @type {string}
     * @memberof VideoAttachmentsApiGetAttachment
     */
    readonly videoId: string

    /**
     * Media Source ID.
     * @type {string}
     * @memberof VideoAttachmentsApiGetAttachment
     */
    readonly mediaSourceId: string

    /**
     * Attachment Index.
     * @type {number}
     * @memberof VideoAttachmentsApiGetAttachment
     */
    readonly index: number
}

/**
 * VideoAttachmentsApi - object-oriented interface
 * @export
 * @class VideoAttachmentsApi
 * @extends {BaseAPI}
 */
export class VideoAttachmentsApi extends BaseAPI {
    /**
     * 
     * @summary Get video attachment.
     * @param {VideoAttachmentsApiGetAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideoAttachmentsApi
     */
    public getAttachment(requestParameters: VideoAttachmentsApiGetAttachmentRequest, options?: any) {
        return VideoAttachmentsApiFp(this.configuration).getAttachment(requestParameters.videoId, requestParameters.mediaSourceId, requestParameters.index, options).then((request) => request(this.axios, this.basePath));
    }
}
