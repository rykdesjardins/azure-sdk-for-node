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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the WipeDeviceOperationResult class.
 * @constructor
 * Device entity for Intune.
 *
 * @member {string} value
 *
 */
class WipeDeviceOperationResult extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WipeDeviceOperationResult
   *
   * @returns {object} metadata of WipeDeviceOperationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WipeDeviceOperationResult',
      type: {
        name: 'Composite',
        className: 'WipeDeviceOperationResult',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'properties.value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WipeDeviceOperationResult;