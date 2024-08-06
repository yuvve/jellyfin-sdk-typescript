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


// May contain unused imports in some cases
// @ts-ignore
import type { GeneralCommandType } from './general-command-type';

/**
 * 
 * @export
 * @interface GeneralCommand
 */
export interface GeneralCommand {
    /**
     * 
     * @type {GeneralCommandType}
     * @memberof GeneralCommand
     */
    'Name'?: GeneralCommandType;
    /**
     * 
     * @type {string}
     * @memberof GeneralCommand
     */
    'ControllingUserId'?: string;
    /**
     * 
     * @type {{ [key: string]: string | null; }}
     * @memberof GeneralCommand
     */
    'Arguments'?: { [key: string]: string | null; };
}



