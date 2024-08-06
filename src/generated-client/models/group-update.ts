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
import type { GroupInfoDtoGroupUpdate } from './group-info-dto-group-update';
// May contain unused imports in some cases
// @ts-ignore
import type { GroupStateUpdateGroupUpdate } from './group-state-update-group-update';
// May contain unused imports in some cases
// @ts-ignore
import type { GroupUpdateType } from './group-update-type';
// May contain unused imports in some cases
// @ts-ignore
import type { PlayQueueUpdate } from './play-queue-update';
// May contain unused imports in some cases
// @ts-ignore
import type { PlayQueueUpdateGroupUpdate } from './play-queue-update-group-update';
// May contain unused imports in some cases
// @ts-ignore
import type { StringGroupUpdate } from './string-group-update';

/**
 * @type GroupUpdate
 * Group update without data.
 * @export
 */
export type GroupUpdate = { Type: 'GroupDoesNotExist' } & StringGroupUpdate | { Type: 'GroupJoined' } & GroupInfoDtoGroupUpdate | { Type: 'GroupLeft' } & StringGroupUpdate | { Type: 'LibraryAccessDenied' } & StringGroupUpdate | { Type: 'NotInGroup' } & StringGroupUpdate | { Type: 'PlayQueue' } & PlayQueueUpdateGroupUpdate | { Type: 'StateUpdate' } & GroupStateUpdateGroupUpdate | { Type: 'UserJoined' } & StringGroupUpdate | { Type: 'UserLeft' } & StringGroupUpdate;


