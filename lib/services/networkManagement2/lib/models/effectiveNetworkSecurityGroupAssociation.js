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
 * Initializes a new instance of the EffectiveNetworkSecurityGroupAssociation class.
 * @constructor
 * The effective network security group association.
 *
 * @member {object} [subnet] The ID of the subnet if assigned.
 *
 * @member {string} [subnet.id] Resource ID.
 *
 * @member {object} [networkInterface] The ID of the network interface if
 * assigned.
 *
 * @member {string} [networkInterface.id] Resource ID.
 *
 */
class EffectiveNetworkSecurityGroupAssociation {
  constructor() {
  }

  /**
   * Defines the metadata of EffectiveNetworkSecurityGroupAssociation
   *
   * @returns {object} metadata of EffectiveNetworkSecurityGroupAssociation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EffectiveNetworkSecurityGroupAssociation',
      type: {
        name: 'Composite',
        className: 'EffectiveNetworkSecurityGroupAssociation',
        modelProperties: {
          subnet: {
            required: false,
            serializedName: 'subnet',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          networkInterface: {
            required: false,
            serializedName: 'networkInterface',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          }
        }
      }
    };
  }
}

module.exports = EffectiveNetworkSecurityGroupAssociation;