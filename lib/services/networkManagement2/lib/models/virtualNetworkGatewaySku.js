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
 * Initializes a new instance of the VirtualNetworkGatewaySku class.
 * @constructor
 * VirtualNetworkGatewaySku details
 *
 * @member {string} [name] Gateway SKU name. Possible values include: 'Basic',
 * 'HighPerformance', 'Standard', 'UltraPerformance', 'VpnGw1', 'VpnGw2',
 * 'VpnGw3'
 *
 * @member {string} [tier] Gateway SKU tier. Possible values include: 'Basic',
 * 'HighPerformance', 'Standard', 'UltraPerformance', 'VpnGw1', 'VpnGw2',
 * 'VpnGw3'
 *
 * @member {number} [capacity] The capacity.
 *
 */
class VirtualNetworkGatewaySku {
  constructor() {
  }

  /**
   * Defines the metadata of VirtualNetworkGatewaySku
   *
   * @returns {object} metadata of VirtualNetworkGatewaySku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualNetworkGatewaySku',
      type: {
        name: 'Composite',
        className: 'VirtualNetworkGatewaySku',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'String'
            }
          },
          capacity: {
            required: false,
            serializedName: 'capacity',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualNetworkGatewaySku;