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


import { ImageSavingConvention } from './image-saving-convention';
import { MetadataOptions } from './metadata-options';
import { NameValuePair } from './name-value-pair';
import { PathSubstitution } from './path-substitution';
import { RepositoryInfo } from './repository-info';

/**
 * Represents the server configuration.
 * @export
 * @interface ServerConfiguration
 */
export interface ServerConfiguration {
    /**
     * Gets or sets the number of days we should retain log files.
     * @type {number}
     * @memberof ServerConfiguration
     */
    LogFileRetentionDays?: number;
    /**
     * Gets or sets a value indicating whether this instance is first run.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    IsStartupWizardCompleted?: boolean;
    /**
     * Gets or sets the cache path.
     * @type {string}
     * @memberof ServerConfiguration
     */
    CachePath?: string | null;
    /**
     * Gets or sets the last known version that was ran using the configuration.
     * @type {string}
     * @memberof ServerConfiguration
     */
    PreviousVersion?: string | null;
    /**
     * Gets or sets the stringified PreviousVersion to be stored/loaded,  because System.Version itself isn\'t xml-serializable.
     * @type {string}
     * @memberof ServerConfiguration
     */
    PreviousVersionStr?: string | null;
    /**
     * Gets or sets a value indicating whether to enable prometheus metrics exporting.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    EnableMetrics?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    EnableNormalizedItemByNameIds?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is port authorized.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    IsPortAuthorized?: boolean;
    /**
     * Gets or sets a value indicating whether quick connect is available for use on this server.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    QuickConnectAvailable?: boolean;
    /**
     * Gets or sets a value indicating whether [enable case sensitive item ids].
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    EnableCaseSensitiveItemIds?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    DisableLiveTvChannelUserDataName?: boolean;
    /**
     * Gets or sets the metadata path.
     * @type {string}
     * @memberof ServerConfiguration
     */
    MetadataPath?: string;
    /**
     * 
     * @type {string}
     * @memberof ServerConfiguration
     */
    MetadataNetworkPath?: string;
    /**
     * Gets or sets the preferred metadata language.
     * @type {string}
     * @memberof ServerConfiguration
     */
    PreferredMetadataLanguage?: string;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof ServerConfiguration
     */
    MetadataCountryCode?: string;
    /**
     * Gets or sets characters to be replaced with a \' \' in strings to create a sort name.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    SortReplaceCharacters?: Array<string>;
    /**
     * Gets or sets characters to be removed from strings to create a sort name.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    SortRemoveCharacters?: Array<string>;
    /**
     * Gets or sets words to be removed from strings to create a sort name.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    SortRemoveWords?: Array<string>;
    /**
     * Gets or sets the minimum percentage of an item that must be played in order for playstate to be updated.
     * @type {number}
     * @memberof ServerConfiguration
     */
    MinResumePct?: number;
    /**
     * Gets or sets the maximum percentage of an item that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.
     * @type {number}
     * @memberof ServerConfiguration
     */
    MaxResumePct?: number;
    /**
     * Gets or sets the minimum duration that an item must have in order to be eligible for playstate updates..
     * @type {number}
     * @memberof ServerConfiguration
     */
    MinResumeDurationSeconds?: number;
    /**
     * Gets or sets the minimum minutes of a book that must be played in order for playstate to be updated.
     * @type {number}
     * @memberof ServerConfiguration
     */
    MinAudiobookResume?: number;
    /**
     * Gets or sets the remaining minutes of a book that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.
     * @type {number}
     * @memberof ServerConfiguration
     */
    MaxAudiobookResume?: number;
    /**
     * Gets or sets the delay in seconds that we will wait after a file system change to try and discover what has been added/removed  Some delay is necessary with some items because their creation is not atomic.  It involves the creation of several  different directories and files.
     * @type {number}
     * @memberof ServerConfiguration
     */
    LibraryMonitorDelay?: number;
    /**
     * 
     * @type {ImageSavingConvention}
     * @memberof ServerConfiguration
     */
    ImageSavingConvention?: ImageSavingConvention;
    /**
     * 
     * @type {Array<MetadataOptions>}
     * @memberof ServerConfiguration
     */
    MetadataOptions?: Array<MetadataOptions>;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    SkipDeserializationForBasicTypes?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ServerConfiguration
     */
    ServerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ServerConfiguration
     */
    UICulture?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    SaveMetadataHidden?: boolean;
    /**
     * 
     * @type {Array<NameValuePair>}
     * @memberof ServerConfiguration
     */
    ContentTypes?: Array<NameValuePair>;
    /**
     * 
     * @type {number}
     * @memberof ServerConfiguration
     */
    RemoteClientBitrateLimit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    EnableFolderView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    EnableGroupingIntoCollections?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    DisplaySpecialsWithinSeasons?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    CodecsUsed?: Array<string>;
    /**
     * 
     * @type {Array<RepositoryInfo>}
     * @memberof ServerConfiguration
     */
    PluginRepositories?: Array<RepositoryInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    EnableExternalContentInSuggestions?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ServerConfiguration
     */
    ImageExtractionTimeoutMs?: number;
    /**
     * 
     * @type {Array<PathSubstitution>}
     * @memberof ServerConfiguration
     */
    PathSubstitutions?: Array<PathSubstitution>;
    /**
     * Gets or sets a value indicating whether slow server responses should be logged as a warning.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    EnableSlowResponseWarning?: boolean;
    /**
     * Gets or sets the threshold for the slow response time warning in ms.
     * @type {number}
     * @memberof ServerConfiguration
     */
    SlowResponseThresholdMs?: number;
    /**
     * Gets or sets the cors hosts.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    CorsHosts?: Array<string>;
    /**
     * Gets or sets the number of days we should retain activity logs.
     * @type {number}
     * @memberof ServerConfiguration
     */
    ActivityLogRetentionDays?: number | null;
    /**
     * Gets or sets the how the library scan fans out.
     * @type {number}
     * @memberof ServerConfiguration
     */
    LibraryScanFanoutConcurrency?: number;
    /**
     * Gets or sets the how many metadata refreshes can run concurrently.
     * @type {number}
     * @memberof ServerConfiguration
     */
    LibraryMetadataRefreshConcurrency?: number;
    /**
     * Gets or sets a value indicating whether older plugins should automatically be deleted from the plugin folder.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    RemoveOldPlugins?: boolean;
    /**
     * Gets or sets a value indicating whether clients should be allowed to upload logs.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    AllowClientLogUpload?: boolean;
}


