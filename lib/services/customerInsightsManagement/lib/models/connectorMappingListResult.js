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
 * The response of list connector mapping operation.
 */
class ConnectorMappingListResult extends Array {
  /**
   * Create a ConnectorMappingListResult.
   * @member {string} [nextLink] Link to the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ConnectorMappingListResult
   *
   * @returns {object} metadata of ConnectorMappingListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectorMappingListResult',
      type: {
        name: 'Composite',
        className: 'ConnectorMappingListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ConnectorMappingResourceFormatElementType',
                  type: {
                    name: 'Composite',
                    className: 'ConnectorMappingResourceFormat'
                  }
              }
            }
          },
          nextLink: {
            required: false,
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

module.exports = ConnectorMappingListResult;