/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the ResponseBase class.
 * @constructor
 * Response base
 *
 * @member {string} _type Polymorphic Discriminator
 */
export interface ResponseBase {
  _type: string;
}

/**
 * @class
 * Initializes a new instance of the Identifiable class.
 * @constructor
 * Defines the identity of a resource.
 *
 * @member {string} [id] A String identifier.
 */
export interface Identifiable extends ResponseBase {
  readonly id?: string;
}

/**
 * @class
 * Initializes a new instance of the Response class.
 * @constructor
 * Defines a response. All schemas that could be returned at the root of a
 * response should inherit from this
 *
 * @member {string} [readLink] The URL that returns this resource.
 * @member {string} [webSearchUrl] The URL To Bing's search result for this
 * item.
 * @member {array} [potentialAction]
 * @member {array} [immediateAction]
 * @member {string} [preferredClickthroughUrl]
 * @member {string} [adaptiveCard]
 */
export interface Response extends Identifiable {
  readonly readLink?: string;
  readonly webSearchUrl?: string;
  readonly potentialAction?: Action[];
  readonly immediateAction?: Action[];
  readonly preferredClickthroughUrl?: string;
  readonly adaptiveCard?: string;
}

/**
 * @class
 * Initializes a new instance of the Thing class.
 * @constructor
 * Defines a thing.
 *
 * @member {string} [url] The URL to get more information about the thing
 * represented by this object.
 */
export interface Thing extends Response {
  readonly url?: string;
}

/**
 * @class
 * Initializes a new instance of the CreativeWork class.
 * @constructor
 * The most generic kind of creative work, including books, movies,
 * photographs, software programs, etc.
 *
 * @member {string} [thumbnailUrl] The URL to a thumbnail of the item.
 * @member {array} [about] For internal use only.
 * @member {array} [mentions] For internal use only.
 * @member {array} [provider] The source of the creative work.
 * @member {object} [creator]
 * @member {string} [creator.url] The URL to get more information about the
 * thing represented by this object.
 * @member {string} [text] Text content of this creative work
 * @member {string} [discussionUrl]
 * @member {number} [commentCount]
 * @member {object} [mainEntity]
 * @member {string} [mainEntity.url] The URL to get more information about the
 * thing represented by this object.
 * @member {string} [headLine]
 * @member {object} [copyrightHolder]
 * @member {string} [copyrightHolder.url] The URL to get more information about
 * the thing represented by this object.
 * @member {number} [copyrightYear]
 * @member {string} [disclaimer]
 * @member {boolean} [isAccessibleForFree]
 * @member {array} [genre]
 * @member {boolean} [isFamilyFriendly]
 */
export interface CreativeWork extends Thing {
  readonly thumbnailUrl?: string;
  readonly about?: Thing[];
  readonly mentions?: Thing[];
  readonly provider?: Thing[];
  readonly creator?: Thing;
  readonly text?: string;
  readonly discussionUrl?: string;
  readonly commentCount?: number;
  readonly mainEntity?: Thing;
  readonly headLine?: string;
  readonly copyrightHolder?: Thing;
  readonly copyrightYear?: number;
  readonly disclaimer?: string;
  readonly isAccessibleForFree?: boolean;
  readonly genre?: string[];
  readonly isFamilyFriendly?: boolean;
}

/**
 * @class
 * Initializes a new instance of the Action class.
 * @constructor
 * @member {array} [result]
 * @member {string} [displayName]
 * @member {boolean} [isTopAction]
 * @member {string} [serviceUrl]
 */
export interface Action extends CreativeWork {
  readonly result?: Thing[];
  readonly displayName?: string;
  readonly isTopAction?: boolean;
  readonly serviceUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the SearchAction class.
 * @constructor
 * @member {string} [displayText]
 * @member {string} [query]
 * @member {string} [searchKind] Possible values include: 'WebSearch',
 * 'HistorySearch', 'DocumentSearch', 'TagSearch', 'LocationSearch',
 * 'CustomSearch'. Default value: 'WebSearch' .
 */
export interface SearchAction extends Action {
  readonly displayText?: string;
  readonly query?: string;
  readonly searchKind?: string;
}

/**
 * @class
 * Initializes a new instance of the SuggestionsSuggestionGroup class.
 * @constructor
 * @member {string} name Possible values include: 'Unknown', 'Web',
 * 'StoreApps', 'SearchHistory', 'PersonalSearchDocuments',
 * 'PersonalSearchTags', 'Custom'. Default value: 'Unknown' .
 * @member {array} searchSuggestions
 * @member {string} _type Polymorphic Discriminator
 */
export interface SuggestionsSuggestionGroup {
  name: string;
  searchSuggestions: SearchAction[];
  _type: string;
}

/**
 * @class
 * Initializes a new instance of the Answer class.
 * @constructor
 * Defines an answer.
 *
 */
export interface Answer extends Response {
}

/**
 * @class
 * Initializes a new instance of the SearchResultsAnswer class.
 * @constructor
 * Defines a search result answer.
 *
 * @member {object} [queryContext]
 * @member {string} [queryContext.originalQuery] The query string as specified
 * in the request.
 * @member {string} [queryContext.alteredQuery] The query string used by Bing
 * to perform the query. Bing uses the altered query string if the original
 * query string contained spelling mistakes. For example, if the query string
 * is "saling downwind", the altered query string will be "sailing downwind".
 * This field is included only if the original query string contains a spelling
 * mistake.
 * @member {string} [queryContext.alterationOverrideQuery] The query string to
 * use to force Bing to use the original string. For example, if the query
 * string is "saling downwind", the override query string will be "+saling
 * downwind". Remember to encode the query string which results in
 * "%2Bsaling+downwind". This field is included only if the original query
 * string contains a spelling mistake.
 * @member {boolean} [queryContext.adultIntent] A Boolean value that indicates
 * whether the specified query has adult intent. The value is true if the query
 * has adult intent; otherwise, false.
 * @member {boolean} [queryContext.askUserForLocation] A Boolean value that
 * indicates whether Bing requires the user's location to provide accurate
 * results. If you specified the user's location by using the X-MSEdge-ClientIP
 * and X-Search-Location headers, you can ignore this field. For location aware
 * queries, such as "today's weather" or "restaurants near me" that need the
 * user's location to provide accurate results, this field is set to true. For
 * location aware queries that include the location (for example, "Seattle
 * weather"), this field is set to false. This field is also set to false for
 * queries that are not location aware, such as "best sellers".
 * @member {boolean} [queryContext.isTransactional]
 * @member {string} [queryContext._type] Polymorphic Discriminator
 */
export interface SearchResultsAnswer extends Answer {
  readonly queryContext?: QueryContext;
}

/**
 * @class
 * Initializes a new instance of the Suggestions class.
 * @constructor
 * @member {array} suggestionGroups
 */
export interface Suggestions extends SearchResultsAnswer {
  suggestionGroups: SuggestionsSuggestionGroup[];
}

/**
 * @class
 * Initializes a new instance of the QueryContext class.
 * @constructor
 * Defines the query context that Bing used for the request.
 *
 * @member {string} originalQuery The query string as specified in the request.
 * @member {string} [alteredQuery] The query string used by Bing to perform the
 * query. Bing uses the altered query string if the original query string
 * contained spelling mistakes. For example, if the query string is "saling
 * downwind", the altered query string will be "sailing downwind". This field
 * is included only if the original query string contains a spelling mistake.
 * @member {string} [alterationOverrideQuery] The query string to use to force
 * Bing to use the original string. For example, if the query string is "saling
 * downwind", the override query string will be "+saling downwind". Remember to
 * encode the query string which results in "%2Bsaling+downwind". This field is
 * included only if the original query string contains a spelling mistake.
 * @member {boolean} [adultIntent] A Boolean value that indicates whether the
 * specified query has adult intent. The value is true if the query has adult
 * intent; otherwise, false.
 * @member {boolean} [askUserForLocation] A Boolean value that indicates
 * whether Bing requires the user's location to provide accurate results. If
 * you specified the user's location by using the X-MSEdge-ClientIP and
 * X-Search-Location headers, you can ignore this field. For location aware
 * queries, such as "today's weather" or "restaurants near me" that need the
 * user's location to provide accurate results, this field is set to true. For
 * location aware queries that include the location (for example, "Seattle
 * weather"), this field is set to false. This field is also set to false for
 * queries that are not location aware, such as "best sellers".
 * @member {boolean} [isTransactional]
 * @member {string} _type Polymorphic Discriminator
 */
export interface QueryContext {
  originalQuery: string;
  readonly alteredQuery?: string;
  readonly alterationOverrideQuery?: string;
  readonly adultIntent?: boolean;
  readonly askUserForLocation?: boolean;
  readonly isTransactional?: boolean;
  _type: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * Defines the error that occurred.
 *
 * @member {string} code The error code that identifies the category of error.
 * Possible values include: 'None', 'ServerError', 'InvalidRequest',
 * 'RateLimitExceeded', 'InvalidAuthorization', 'InsufficientAuthorization'.
 * Default value: 'None' .
 * @member {string} message A description of the error.
 * @member {string} [moreDetails] A description that provides additional
 * information about the error.
 * @member {string} [parameter] The parameter in the request that caused the
 * error.
 * @member {string} [value] The parameter's value in the request that was not
 * valid.
 * @member {string} _type Polymorphic Discriminator
 */
export interface ErrorModel {
  code: string;
  message: string;
  readonly moreDetails?: string;
  readonly parameter?: string;
  readonly value?: string;
  _type: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * The top-level response that represents a failed request.
 *
 * @member {array} errors A list of errors that describe the reasons why the
 * request failed.
 */
export interface ErrorResponse extends Response {
  errors: ErrorModel[];
}
