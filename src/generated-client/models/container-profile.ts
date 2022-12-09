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


import { DlnaProfileType } from './dlna-profile-type';
import { ProfileCondition } from './profile-condition';

/**
 * 
 * @export
 * @interface ContainerProfile
 */
export interface ContainerProfile {
    /**
     * 
     * @type {DlnaProfileType}
     * @memberof ContainerProfile
     */
    'Type'?: DlnaProfileType;
    /**
     * 
     * @type {Array<ProfileCondition>}
     * @memberof ContainerProfile
     */
    'Conditions'?: Array<ProfileCondition> | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerProfile
     */
    'Container'?: string;
}

