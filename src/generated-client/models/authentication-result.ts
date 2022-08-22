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


import { SessionInfo } from './session-info';
import { UserDto } from './user-dto';

/**
 * 
 * @export
 * @interface AuthenticationResult
 */
export interface AuthenticationResult {
    /**
     * 
     * @type {UserDto}
     * @memberof AuthenticationResult
     */
    User?: UserDto;
    /**
     * 
     * @type {SessionInfo}
     * @memberof AuthenticationResult
     */
    SessionInfo?: SessionInfo;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResult
     */
    AccessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResult
     */
    ServerId?: string | null;
}


