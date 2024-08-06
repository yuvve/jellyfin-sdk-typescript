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
import type { MediaStreamProtocol } from '../models';
// @ts-ignore
import type { ProblemDetails } from '../models';
/**
 * UniversalAudioApi - axios parameter creator
 * @export
 */
export const UniversalAudioApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets an audio stream.
         * @param {string} itemId The item id.
         * @param {Array<string>} [container] Optional. The audio container.
         * @param {string} [mediaSourceId] The media version id, if playing an alternate version.
         * @param {string} [deviceId] The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} [userId] Optional. The user id.
         * @param {string} [audioCodec] Optional. The audio codec to transcode to.
         * @param {number} [maxAudioChannels] Optional. The maximum number of audio channels.
         * @param {number} [transcodingAudioChannels] Optional. The number of how many audio channels to transcode to.
         * @param {number} [maxStreamingBitrate] Optional. The maximum streaming bitrate.
         * @param {number} [audioBitRate] Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
         * @param {number} [startTimeTicks] Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.
         * @param {string} [transcodingContainer] Optional. The container to transcode to.
         * @param {MediaStreamProtocol} [transcodingProtocol] Optional. The transcoding protocol.
         * @param {number} [maxAudioSampleRate] Optional. The maximum audio sample rate.
         * @param {number} [maxAudioBitDepth] Optional. The maximum audio bit depth.
         * @param {boolean} [enableRemoteMedia] Optional. Whether to enable remote media.
         * @param {boolean} [breakOnNonKeyFrames] Optional. Whether to break on non key frames.
         * @param {boolean} [enableRedirection] Whether to enable redirection. Defaults to true.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUniversalAudioStream: async (itemId: string, container?: Array<string>, mediaSourceId?: string, deviceId?: string, userId?: string, audioCodec?: string, maxAudioChannels?: number, transcodingAudioChannels?: number, maxStreamingBitrate?: number, audioBitRate?: number, startTimeTicks?: number, transcodingContainer?: string, transcodingProtocol?: MediaStreamProtocol, maxAudioSampleRate?: number, maxAudioBitDepth?: number, enableRemoteMedia?: boolean, breakOnNonKeyFrames?: boolean, enableRedirection?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getUniversalAudioStream', 'itemId', itemId)
            const localVarPath = `/Audio/{itemId}/universal`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
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

            if (container) {
                localVarQueryParameter['container'] = container;
            }

            if (mediaSourceId !== undefined) {
                localVarQueryParameter['mediaSourceId'] = mediaSourceId;
            }

            if (deviceId !== undefined) {
                localVarQueryParameter['deviceId'] = deviceId;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (audioCodec !== undefined) {
                localVarQueryParameter['audioCodec'] = audioCodec;
            }

            if (maxAudioChannels !== undefined) {
                localVarQueryParameter['maxAudioChannels'] = maxAudioChannels;
            }

            if (transcodingAudioChannels !== undefined) {
                localVarQueryParameter['transcodingAudioChannels'] = transcodingAudioChannels;
            }

            if (maxStreamingBitrate !== undefined) {
                localVarQueryParameter['maxStreamingBitrate'] = maxStreamingBitrate;
            }

            if (audioBitRate !== undefined) {
                localVarQueryParameter['audioBitRate'] = audioBitRate;
            }

            if (startTimeTicks !== undefined) {
                localVarQueryParameter['startTimeTicks'] = startTimeTicks;
            }

            if (transcodingContainer !== undefined) {
                localVarQueryParameter['transcodingContainer'] = transcodingContainer;
            }

            if (transcodingProtocol !== undefined) {
                localVarQueryParameter['transcodingProtocol'] = transcodingProtocol;
            }

            if (maxAudioSampleRate !== undefined) {
                localVarQueryParameter['maxAudioSampleRate'] = maxAudioSampleRate;
            }

            if (maxAudioBitDepth !== undefined) {
                localVarQueryParameter['maxAudioBitDepth'] = maxAudioBitDepth;
            }

            if (enableRemoteMedia !== undefined) {
                localVarQueryParameter['enableRemoteMedia'] = enableRemoteMedia;
            }

            if (breakOnNonKeyFrames !== undefined) {
                localVarQueryParameter['breakOnNonKeyFrames'] = breakOnNonKeyFrames;
            }

            if (enableRedirection !== undefined) {
                localVarQueryParameter['enableRedirection'] = enableRedirection;
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
         * @summary Gets an audio stream.
         * @param {string} itemId The item id.
         * @param {Array<string>} [container] Optional. The audio container.
         * @param {string} [mediaSourceId] The media version id, if playing an alternate version.
         * @param {string} [deviceId] The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} [userId] Optional. The user id.
         * @param {string} [audioCodec] Optional. The audio codec to transcode to.
         * @param {number} [maxAudioChannels] Optional. The maximum number of audio channels.
         * @param {number} [transcodingAudioChannels] Optional. The number of how many audio channels to transcode to.
         * @param {number} [maxStreamingBitrate] Optional. The maximum streaming bitrate.
         * @param {number} [audioBitRate] Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
         * @param {number} [startTimeTicks] Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.
         * @param {string} [transcodingContainer] Optional. The container to transcode to.
         * @param {MediaStreamProtocol} [transcodingProtocol] Optional. The transcoding protocol.
         * @param {number} [maxAudioSampleRate] Optional. The maximum audio sample rate.
         * @param {number} [maxAudioBitDepth] Optional. The maximum audio bit depth.
         * @param {boolean} [enableRemoteMedia] Optional. Whether to enable remote media.
         * @param {boolean} [breakOnNonKeyFrames] Optional. Whether to break on non key frames.
         * @param {boolean} [enableRedirection] Whether to enable redirection. Defaults to true.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        headUniversalAudioStream: async (itemId: string, container?: Array<string>, mediaSourceId?: string, deviceId?: string, userId?: string, audioCodec?: string, maxAudioChannels?: number, transcodingAudioChannels?: number, maxStreamingBitrate?: number, audioBitRate?: number, startTimeTicks?: number, transcodingContainer?: string, transcodingProtocol?: MediaStreamProtocol, maxAudioSampleRate?: number, maxAudioBitDepth?: number, enableRemoteMedia?: boolean, breakOnNonKeyFrames?: boolean, enableRedirection?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('headUniversalAudioStream', 'itemId', itemId)
            const localVarPath = `/Audio/{itemId}/universal`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'HEAD', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (container) {
                localVarQueryParameter['container'] = container;
            }

            if (mediaSourceId !== undefined) {
                localVarQueryParameter['mediaSourceId'] = mediaSourceId;
            }

            if (deviceId !== undefined) {
                localVarQueryParameter['deviceId'] = deviceId;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (audioCodec !== undefined) {
                localVarQueryParameter['audioCodec'] = audioCodec;
            }

            if (maxAudioChannels !== undefined) {
                localVarQueryParameter['maxAudioChannels'] = maxAudioChannels;
            }

            if (transcodingAudioChannels !== undefined) {
                localVarQueryParameter['transcodingAudioChannels'] = transcodingAudioChannels;
            }

            if (maxStreamingBitrate !== undefined) {
                localVarQueryParameter['maxStreamingBitrate'] = maxStreamingBitrate;
            }

            if (audioBitRate !== undefined) {
                localVarQueryParameter['audioBitRate'] = audioBitRate;
            }

            if (startTimeTicks !== undefined) {
                localVarQueryParameter['startTimeTicks'] = startTimeTicks;
            }

            if (transcodingContainer !== undefined) {
                localVarQueryParameter['transcodingContainer'] = transcodingContainer;
            }

            if (transcodingProtocol !== undefined) {
                localVarQueryParameter['transcodingProtocol'] = transcodingProtocol;
            }

            if (maxAudioSampleRate !== undefined) {
                localVarQueryParameter['maxAudioSampleRate'] = maxAudioSampleRate;
            }

            if (maxAudioBitDepth !== undefined) {
                localVarQueryParameter['maxAudioBitDepth'] = maxAudioBitDepth;
            }

            if (enableRemoteMedia !== undefined) {
                localVarQueryParameter['enableRemoteMedia'] = enableRemoteMedia;
            }

            if (breakOnNonKeyFrames !== undefined) {
                localVarQueryParameter['breakOnNonKeyFrames'] = breakOnNonKeyFrames;
            }

            if (enableRedirection !== undefined) {
                localVarQueryParameter['enableRedirection'] = enableRedirection;
            }


    
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
 * UniversalAudioApi - functional programming interface
 * @export
 */
export const UniversalAudioApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UniversalAudioApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets an audio stream.
         * @param {string} itemId The item id.
         * @param {Array<string>} [container] Optional. The audio container.
         * @param {string} [mediaSourceId] The media version id, if playing an alternate version.
         * @param {string} [deviceId] The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} [userId] Optional. The user id.
         * @param {string} [audioCodec] Optional. The audio codec to transcode to.
         * @param {number} [maxAudioChannels] Optional. The maximum number of audio channels.
         * @param {number} [transcodingAudioChannels] Optional. The number of how many audio channels to transcode to.
         * @param {number} [maxStreamingBitrate] Optional. The maximum streaming bitrate.
         * @param {number} [audioBitRate] Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
         * @param {number} [startTimeTicks] Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.
         * @param {string} [transcodingContainer] Optional. The container to transcode to.
         * @param {MediaStreamProtocol} [transcodingProtocol] Optional. The transcoding protocol.
         * @param {number} [maxAudioSampleRate] Optional. The maximum audio sample rate.
         * @param {number} [maxAudioBitDepth] Optional. The maximum audio bit depth.
         * @param {boolean} [enableRemoteMedia] Optional. Whether to enable remote media.
         * @param {boolean} [breakOnNonKeyFrames] Optional. Whether to break on non key frames.
         * @param {boolean} [enableRedirection] Whether to enable redirection. Defaults to true.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUniversalAudioStream(itemId: string, container?: Array<string>, mediaSourceId?: string, deviceId?: string, userId?: string, audioCodec?: string, maxAudioChannels?: number, transcodingAudioChannels?: number, maxStreamingBitrate?: number, audioBitRate?: number, startTimeTicks?: number, transcodingContainer?: string, transcodingProtocol?: MediaStreamProtocol, maxAudioSampleRate?: number, maxAudioBitDepth?: number, enableRemoteMedia?: boolean, breakOnNonKeyFrames?: boolean, enableRedirection?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUniversalAudioStream(itemId, container, mediaSourceId, deviceId, userId, audioCodec, maxAudioChannels, transcodingAudioChannels, maxStreamingBitrate, audioBitRate, startTimeTicks, transcodingContainer, transcodingProtocol, maxAudioSampleRate, maxAudioBitDepth, enableRemoteMedia, breakOnNonKeyFrames, enableRedirection, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UniversalAudioApi.getUniversalAudioStream']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets an audio stream.
         * @param {string} itemId The item id.
         * @param {Array<string>} [container] Optional. The audio container.
         * @param {string} [mediaSourceId] The media version id, if playing an alternate version.
         * @param {string} [deviceId] The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} [userId] Optional. The user id.
         * @param {string} [audioCodec] Optional. The audio codec to transcode to.
         * @param {number} [maxAudioChannels] Optional. The maximum number of audio channels.
         * @param {number} [transcodingAudioChannels] Optional. The number of how many audio channels to transcode to.
         * @param {number} [maxStreamingBitrate] Optional. The maximum streaming bitrate.
         * @param {number} [audioBitRate] Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
         * @param {number} [startTimeTicks] Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.
         * @param {string} [transcodingContainer] Optional. The container to transcode to.
         * @param {MediaStreamProtocol} [transcodingProtocol] Optional. The transcoding protocol.
         * @param {number} [maxAudioSampleRate] Optional. The maximum audio sample rate.
         * @param {number} [maxAudioBitDepth] Optional. The maximum audio bit depth.
         * @param {boolean} [enableRemoteMedia] Optional. Whether to enable remote media.
         * @param {boolean} [breakOnNonKeyFrames] Optional. Whether to break on non key frames.
         * @param {boolean} [enableRedirection] Whether to enable redirection. Defaults to true.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async headUniversalAudioStream(itemId: string, container?: Array<string>, mediaSourceId?: string, deviceId?: string, userId?: string, audioCodec?: string, maxAudioChannels?: number, transcodingAudioChannels?: number, maxStreamingBitrate?: number, audioBitRate?: number, startTimeTicks?: number, transcodingContainer?: string, transcodingProtocol?: MediaStreamProtocol, maxAudioSampleRate?: number, maxAudioBitDepth?: number, enableRemoteMedia?: boolean, breakOnNonKeyFrames?: boolean, enableRedirection?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.headUniversalAudioStream(itemId, container, mediaSourceId, deviceId, userId, audioCodec, maxAudioChannels, transcodingAudioChannels, maxStreamingBitrate, audioBitRate, startTimeTicks, transcodingContainer, transcodingProtocol, maxAudioSampleRate, maxAudioBitDepth, enableRemoteMedia, breakOnNonKeyFrames, enableRedirection, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UniversalAudioApi.headUniversalAudioStream']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UniversalAudioApi - factory interface
 * @export
 */
export const UniversalAudioApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UniversalAudioApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets an audio stream.
         * @param {UniversalAudioApiGetUniversalAudioStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUniversalAudioStream(requestParameters: UniversalAudioApiGetUniversalAudioStreamRequest, options?: RawAxiosRequestConfig): AxiosPromise<File> {
            return localVarFp.getUniversalAudioStream(requestParameters.itemId, requestParameters.container, requestParameters.mediaSourceId, requestParameters.deviceId, requestParameters.userId, requestParameters.audioCodec, requestParameters.maxAudioChannels, requestParameters.transcodingAudioChannels, requestParameters.maxStreamingBitrate, requestParameters.audioBitRate, requestParameters.startTimeTicks, requestParameters.transcodingContainer, requestParameters.transcodingProtocol, requestParameters.maxAudioSampleRate, requestParameters.maxAudioBitDepth, requestParameters.enableRemoteMedia, requestParameters.breakOnNonKeyFrames, requestParameters.enableRedirection, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets an audio stream.
         * @param {UniversalAudioApiHeadUniversalAudioStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        headUniversalAudioStream(requestParameters: UniversalAudioApiHeadUniversalAudioStreamRequest, options?: RawAxiosRequestConfig): AxiosPromise<File> {
            return localVarFp.headUniversalAudioStream(requestParameters.itemId, requestParameters.container, requestParameters.mediaSourceId, requestParameters.deviceId, requestParameters.userId, requestParameters.audioCodec, requestParameters.maxAudioChannels, requestParameters.transcodingAudioChannels, requestParameters.maxStreamingBitrate, requestParameters.audioBitRate, requestParameters.startTimeTicks, requestParameters.transcodingContainer, requestParameters.transcodingProtocol, requestParameters.maxAudioSampleRate, requestParameters.maxAudioBitDepth, requestParameters.enableRemoteMedia, requestParameters.breakOnNonKeyFrames, requestParameters.enableRedirection, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getUniversalAudioStream operation in UniversalAudioApi.
 * @export
 * @interface UniversalAudioApiGetUniversalAudioStreamRequest
 */
export interface UniversalAudioApiGetUniversalAudioStreamRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly itemId: string

    /**
     * Optional. The audio container.
     * @type {Array<string>}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly container?: Array<string>

    /**
     * The media version id, if playing an alternate version.
     * @type {string}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly mediaSourceId?: string

    /**
     * The device id of the client requesting. Used to stop encoding processes when needed.
     * @type {string}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly deviceId?: string

    /**
     * Optional. The user id.
     * @type {string}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly userId?: string

    /**
     * Optional. The audio codec to transcode to.
     * @type {string}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly audioCodec?: string

    /**
     * Optional. The maximum number of audio channels.
     * @type {number}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly maxAudioChannels?: number

    /**
     * Optional. The number of how many audio channels to transcode to.
     * @type {number}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly transcodingAudioChannels?: number

    /**
     * Optional. The maximum streaming bitrate.
     * @type {number}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly maxStreamingBitrate?: number

    /**
     * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
     * @type {number}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly audioBitRate?: number

    /**
     * Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.
     * @type {number}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly startTimeTicks?: number

    /**
     * Optional. The container to transcode to.
     * @type {string}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly transcodingContainer?: string

    /**
     * Optional. The transcoding protocol.
     * @type {MediaStreamProtocol}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly transcodingProtocol?: MediaStreamProtocol

    /**
     * Optional. The maximum audio sample rate.
     * @type {number}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly maxAudioSampleRate?: number

    /**
     * Optional. The maximum audio bit depth.
     * @type {number}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly maxAudioBitDepth?: number

    /**
     * Optional. Whether to enable remote media.
     * @type {boolean}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly enableRemoteMedia?: boolean

    /**
     * Optional. Whether to break on non key frames.
     * @type {boolean}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly breakOnNonKeyFrames?: boolean

    /**
     * Whether to enable redirection. Defaults to true.
     * @type {boolean}
     * @memberof UniversalAudioApiGetUniversalAudioStream
     */
    readonly enableRedirection?: boolean
}

/**
 * Request parameters for headUniversalAudioStream operation in UniversalAudioApi.
 * @export
 * @interface UniversalAudioApiHeadUniversalAudioStreamRequest
 */
export interface UniversalAudioApiHeadUniversalAudioStreamRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly itemId: string

    /**
     * Optional. The audio container.
     * @type {Array<string>}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly container?: Array<string>

    /**
     * The media version id, if playing an alternate version.
     * @type {string}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly mediaSourceId?: string

    /**
     * The device id of the client requesting. Used to stop encoding processes when needed.
     * @type {string}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly deviceId?: string

    /**
     * Optional. The user id.
     * @type {string}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly userId?: string

    /**
     * Optional. The audio codec to transcode to.
     * @type {string}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly audioCodec?: string

    /**
     * Optional. The maximum number of audio channels.
     * @type {number}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly maxAudioChannels?: number

    /**
     * Optional. The number of how many audio channels to transcode to.
     * @type {number}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly transcodingAudioChannels?: number

    /**
     * Optional. The maximum streaming bitrate.
     * @type {number}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly maxStreamingBitrate?: number

    /**
     * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
     * @type {number}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly audioBitRate?: number

    /**
     * Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.
     * @type {number}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly startTimeTicks?: number

    /**
     * Optional. The container to transcode to.
     * @type {string}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly transcodingContainer?: string

    /**
     * Optional. The transcoding protocol.
     * @type {MediaStreamProtocol}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly transcodingProtocol?: MediaStreamProtocol

    /**
     * Optional. The maximum audio sample rate.
     * @type {number}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly maxAudioSampleRate?: number

    /**
     * Optional. The maximum audio bit depth.
     * @type {number}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly maxAudioBitDepth?: number

    /**
     * Optional. Whether to enable remote media.
     * @type {boolean}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly enableRemoteMedia?: boolean

    /**
     * Optional. Whether to break on non key frames.
     * @type {boolean}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly breakOnNonKeyFrames?: boolean

    /**
     * Whether to enable redirection. Defaults to true.
     * @type {boolean}
     * @memberof UniversalAudioApiHeadUniversalAudioStream
     */
    readonly enableRedirection?: boolean
}

/**
 * UniversalAudioApi - object-oriented interface
 * @export
 * @class UniversalAudioApi
 * @extends {BaseAPI}
 */
export class UniversalAudioApi extends BaseAPI {
    /**
     * 
     * @summary Gets an audio stream.
     * @param {UniversalAudioApiGetUniversalAudioStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UniversalAudioApi
     */
    public getUniversalAudioStream(requestParameters: UniversalAudioApiGetUniversalAudioStreamRequest, options?: RawAxiosRequestConfig) {
        return UniversalAudioApiFp(this.configuration).getUniversalAudioStream(requestParameters.itemId, requestParameters.container, requestParameters.mediaSourceId, requestParameters.deviceId, requestParameters.userId, requestParameters.audioCodec, requestParameters.maxAudioChannels, requestParameters.transcodingAudioChannels, requestParameters.maxStreamingBitrate, requestParameters.audioBitRate, requestParameters.startTimeTicks, requestParameters.transcodingContainer, requestParameters.transcodingProtocol, requestParameters.maxAudioSampleRate, requestParameters.maxAudioBitDepth, requestParameters.enableRemoteMedia, requestParameters.breakOnNonKeyFrames, requestParameters.enableRedirection, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets an audio stream.
     * @param {UniversalAudioApiHeadUniversalAudioStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UniversalAudioApi
     */
    public headUniversalAudioStream(requestParameters: UniversalAudioApiHeadUniversalAudioStreamRequest, options?: RawAxiosRequestConfig) {
        return UniversalAudioApiFp(this.configuration).headUniversalAudioStream(requestParameters.itemId, requestParameters.container, requestParameters.mediaSourceId, requestParameters.deviceId, requestParameters.userId, requestParameters.audioCodec, requestParameters.maxAudioChannels, requestParameters.transcodingAudioChannels, requestParameters.maxStreamingBitrate, requestParameters.audioBitRate, requestParameters.startTimeTicks, requestParameters.transcodingContainer, requestParameters.transcodingProtocol, requestParameters.maxAudioSampleRate, requestParameters.maxAudioBitDepth, requestParameters.enableRemoteMedia, requestParameters.breakOnNonKeyFrames, requestParameters.enableRedirection, options).then((request) => request(this.axios, this.basePath));
    }
}

