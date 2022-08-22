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


import { SubtitlePlaybackMode } from './subtitle-playback-mode';

/**
 * Class UserConfiguration.
 * @export
 * @interface UserConfiguration
 */
export interface UserConfiguration {
    /**
     * Gets or sets the audio language preference.
     * @type {string}
     * @memberof UserConfiguration
     */
    AudioLanguagePreference?: string | null;
    /**
     * Gets or sets a value indicating whether [play default audio track].
     * @type {boolean}
     * @memberof UserConfiguration
     */
    PlayDefaultAudioTrack?: boolean;
    /**
     * Gets or sets the subtitle language preference.
     * @type {string}
     * @memberof UserConfiguration
     */
    SubtitleLanguagePreference?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    DisplayMissingEpisodes?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConfiguration
     */
    GroupedFolders?: Array<string>;
    /**
     * 
     * @type {SubtitlePlaybackMode}
     * @memberof UserConfiguration
     */
    SubtitleMode?: SubtitlePlaybackMode;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    DisplayCollectionsView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    EnableLocalPassword?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConfiguration
     */
    OrderedViews?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConfiguration
     */
    LatestItemsExcludes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConfiguration
     */
    MyMediaExcludes?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    HidePlayedInLatest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    RememberAudioSelections?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    RememberSubtitleSelections?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserConfiguration
     */
    EnableNextEpisodeAutoPlay?: boolean;
}


