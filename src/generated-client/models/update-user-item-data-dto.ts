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



/**
 * This is used by the api to get information about a item user data.
 * @export
 * @interface UpdateUserItemDataDto
 */
export interface UpdateUserItemDataDto {
    /**
     * Gets or sets the rating.
     * @type {number}
     * @memberof UpdateUserItemDataDto
     */
    'Rating'?: number | null;
    /**
     * Gets or sets the played percentage.
     * @type {number}
     * @memberof UpdateUserItemDataDto
     */
    'PlayedPercentage'?: number | null;
    /**
     * Gets or sets the unplayed item count.
     * @type {number}
     * @memberof UpdateUserItemDataDto
     */
    'UnplayedItemCount'?: number | null;
    /**
     * Gets or sets the playback position ticks.
     * @type {number}
     * @memberof UpdateUserItemDataDto
     */
    'PlaybackPositionTicks'?: number | null;
    /**
     * Gets or sets the play count.
     * @type {number}
     * @memberof UpdateUserItemDataDto
     */
    'PlayCount'?: number | null;
    /**
     * Gets or sets a value indicating whether this instance is favorite.
     * @type {boolean}
     * @memberof UpdateUserItemDataDto
     */
    'IsFavorite'?: boolean | null;
    /**
     * Gets or sets a value indicating whether this instance is watchlisted.
     * @type {boolean}
     * @memberof UpdateUserItemDataDto
     */
    'IsWatchlisted'?: boolean | null;
    /**
     * Gets or sets a value indicating whether this MediaBrowser.Model.Dto.UpdateUserItemDataDto is likes.
     * @type {boolean}
     * @memberof UpdateUserItemDataDto
     */
    'Likes'?: boolean | null;
    /**
     * Gets or sets the last played date.
     * @type {string}
     * @memberof UpdateUserItemDataDto
     */
    'LastPlayedDate'?: string | null;
    /**
     * Gets or sets a value indicating whether this MediaBrowser.Model.Dto.UserItemDataDto is played.
     * @type {boolean}
     * @memberof UpdateUserItemDataDto
     */
    'Played'?: boolean | null;
    /**
     * Gets or sets the key.
     * @type {string}
     * @memberof UpdateUserItemDataDto
     */
    'Key'?: string | null;
    /**
     * Gets or sets the item identifier.
     * @type {string}
     * @memberof UpdateUserItemDataDto
     */
    'ItemId'?: string | null;
}

