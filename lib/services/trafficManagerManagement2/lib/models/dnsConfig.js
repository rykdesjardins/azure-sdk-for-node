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
 * Class containing DNS settings in a Traffic Manager profile.
 *
 */
class DnsConfig {
  /**
   * Create a DnsConfig.
   * @member {string} [relativeName] The relative DNS name provided by this
   * Traffic Manager profile. This value is combined with the DNS domain name
   * used by Azure Traffic Manager to form the fully-qualified domain name
   * (FQDN) of the profile.
   * @member {string} [fqdn] The fully-qualified domain name (FQDN) of the
   * Traffic Manager profile. This is formed from the concatenation of the
   * RelativeName with the DNS domain used by Azure Traffic Manager.
   * @member {number} [ttl] The DNS Time-To-Live (TTL), in seconds. This
   * informs the local DNS resolvers and DNS clients how long to cache DNS
   * responses provided by this Traffic Manager profile.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DnsConfig
   *
   * @returns {object} metadata of DnsConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DnsConfig',
      type: {
        name: 'Composite',
        className: 'DnsConfig',
        modelProperties: {
          relativeName: {
            required: false,
            serializedName: 'relativeName',
            type: {
              name: 'String'
            }
          },
          fqdn: {
            required: false,
            readOnly: true,
            serializedName: 'fqdn',
            type: {
              name: 'String'
            }
          },
          ttl: {
            required: false,
            serializedName: 'ttl',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DnsConfig;