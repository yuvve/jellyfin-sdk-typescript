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


import { SendCommandType } from './send-command-type';

/**
 * Class SendCommand.
 * @export
 * @interface SendCommand
 */
export interface SendCommand {
    /**
     * Gets the group identifier.
     * @type {string}
     * @memberof SendCommand
     */
    GroupId?: string;
    /**
     * Gets the playlist identifier of the playing item.
     * @type {string}
     * @memberof SendCommand
     */
    PlaylistItemId?: string;
    /**
     * Gets or sets the UTC time when to execute the command.
     * @type {string}
     * @memberof SendCommand
     */
    When?: string;
    /**
     * Gets the position ticks.
     * @type {number}
     * @memberof SendCommand
     */
    PositionTicks?: number | null;
    /**
     * 
     * @type {SendCommandType}
     * @memberof SendCommand
     */
    Command?: SendCommandType;
    /**
     * Gets the UTC time when this command has been emitted.
     * @type {string}
     * @memberof SendCommand
     */
    EmittedAt?: string;
}


