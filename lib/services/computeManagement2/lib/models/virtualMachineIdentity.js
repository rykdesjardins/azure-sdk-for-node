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
 * Identity for the virtual machine.
 *
 */
class VirtualMachineIdentity {
  /**
   * Create a VirtualMachineIdentity.
   * @member {string} [principalId] The principal id of virtual machine
   * identity.
   * @member {string} [tenantId] The tenant id associated with the virtual
   * machine.
   * @member {string} [type] The type of identity used for the virtual machine.
   * Currently, the only supported type is 'SystemAssigned', which implicitly
   * creates an identity. Possible values include: 'SystemAssigned'
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineIdentity
   *
   * @returns {object} metadata of VirtualMachineIdentity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineIdentity',
      type: {
        name: 'Composite',
        className: 'VirtualMachineIdentity',
        modelProperties: {
          principalId: {
            required: false,
            readOnly: true,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            readOnly: true,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'SystemAssigned' ]
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineIdentity;