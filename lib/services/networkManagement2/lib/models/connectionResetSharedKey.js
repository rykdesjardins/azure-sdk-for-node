/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ConnectionResetSharedKey class.
 * @constructor
 * The virtual network connection reset shared key
 *
 * @member {number} keyLength The virtual network connection reset shared key
 * length, should between 1 and 128.
 *
 */
class ConnectionResetSharedKey {
  constructor() {
  }

  /**
   * Defines the metadata of ConnectionResetSharedKey
   *
   * @returns {object} metadata of ConnectionResetSharedKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectionResetSharedKey',
      type: {
        name: 'Composite',
        className: 'ConnectionResetSharedKey',
        modelProperties: {
          keyLength: {
            required: true,
            serializedName: 'keyLength',
            constraints: {
              InclusiveMaximum: 128,
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectionResetSharedKey;