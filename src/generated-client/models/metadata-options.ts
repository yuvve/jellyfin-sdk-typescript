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



/**
 * Class MetadataOptions.
 * @export
 * @interface MetadataOptions
 */
export interface MetadataOptions {
    /**
     * 
     * @type {string}
     * @memberof MetadataOptions
     */
    ItemType?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetadataOptions
     */
    DisabledMetadataSavers?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetadataOptions
     */
    LocalMetadataReaderOrder?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetadataOptions
     */
    DisabledMetadataFetchers?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetadataOptions
     */
    MetadataFetcherOrder?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetadataOptions
     */
    DisabledImageFetchers?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetadataOptions
     */
    ImageFetcherOrder?: Array<string> | null;
}


