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


import { NameGuidPair } from './name-guid-pair';

/**
 * 
 * @export
 * @interface QueryFilters
 */
export interface QueryFilters {
    /**
     * 
     * @type {Array<NameGuidPair>}
     * @memberof QueryFilters
     */
    Genres?: Array<NameGuidPair> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof QueryFilters
     */
    Tags?: Array<string> | null;
}


