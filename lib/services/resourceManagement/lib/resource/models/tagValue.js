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
 * Initializes a new instance of the TagValue class.
 * @constructor
 * Tag information.
 *
 * @member {string} [id] The tag ID.
 *
 * @member {string} [tagValue] The tag value.
 *
 * @member {object} [count] The tag value count.
 *
 * @member {string} [count.type] Type of count.
 *
 * @member {number} [count.value] Value of count.
 *
 */
class TagValue {
  constructor() {
  }

  /**
   * Defines the metadata of TagValue
   *
   * @returns {object} metadata of TagValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TagValue',
      type: {
        name: 'Composite',
        className: 'TagValue',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          tagValue: {
            required: false,
            serializedName: 'tagValue',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Composite',
              className: 'TagCount'
            }
          }
        }
      }
    };
  }
}

module.exports = TagValue;