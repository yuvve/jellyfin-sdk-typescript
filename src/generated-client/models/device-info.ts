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


import { ClientCapabilities } from './client-capabilities';

/**
 * 
 * @export
 * @interface DeviceInfo
 */
export interface DeviceInfo {
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the access token.
     * @type {string}
     * @memberof DeviceInfo
     */
    AccessToken?: string | null;
    /**
     * Gets or sets the identifier.
     * @type {string}
     * @memberof DeviceInfo
     */
    Id?: string | null;
    /**
     * Gets or sets the last name of the user.
     * @type {string}
     * @memberof DeviceInfo
     */
    LastUserName?: string | null;
    /**
     * Gets or sets the name of the application.
     * @type {string}
     * @memberof DeviceInfo
     */
    AppName?: string | null;
    /**
     * Gets or sets the application version.
     * @type {string}
     * @memberof DeviceInfo
     */
    AppVersion?: string | null;
    /**
     * Gets or sets the last user identifier.
     * @type {string}
     * @memberof DeviceInfo
     */
    LastUserId?: string;
    /**
     * Gets or sets the date last modified.
     * @type {string}
     * @memberof DeviceInfo
     */
    DateLastActivity?: string;
    /**
     * 
     * @type {ClientCapabilities}
     * @memberof DeviceInfo
     */
    Capabilities?: ClientCapabilities;
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo
     */
    IconUrl?: string | null;
}


