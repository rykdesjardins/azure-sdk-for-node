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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ExpressRouteCircuitsRoutesTableListResult class.
 * @constructor
 * Response for ListRoutesTable associated with the Express Route Circuits API.
 *
 * @member {array} [value] The list of routes table.
 *
 * @member {string} [nextLink] The URL to get the next set of results.
 *
 */
class ExpressRouteCircuitsRoutesTableListResult {
  constructor() {
  }

  /**
   * Defines the metadata of ExpressRouteCircuitsRoutesTableListResult
   *
   * @returns {object} metadata of ExpressRouteCircuitsRoutesTableListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteCircuitsRoutesTableListResult',
      type: {
        name: 'Composite',
        className: 'ExpressRouteCircuitsRoutesTableListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressRouteCircuitRoutesTableElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpressRouteCircuitRoutesTable'
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

module.exports = ExpressRouteCircuitsRoutesTableListResult;