/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListDataLakeStoreResult class.
 * @constructor
 * Data Lake Account list information.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
class DataLakeAnalyticsAccountListDataLakeStoreResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DataLakeAnalyticsAccountListDataLakeStoreResult
   *
   * @returns {object} metadata of DataLakeAnalyticsAccountListDataLakeStoreResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataLakeAnalyticsAccountListDataLakeStoreResult',
      type: {
        name: 'Composite',
        className: 'DataLakeAnalyticsAccountListDataLakeStoreResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DataLakeStoreAccountInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'DataLakeStoreAccountInfo'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataLakeAnalyticsAccountListDataLakeStoreResult;