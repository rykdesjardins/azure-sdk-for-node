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
 * Azure ML Batch Execution activity.
 *
 * @extends models['ExecutionActivity']
 */
class AzureMLBatchExecutionActivity extends models['ExecutionActivity'] {
  /**
   * Create a AzureMLBatchExecutionActivity.
   * @member {object} [globalParameters] Key,Value pairs to be passed to the
   * Azure ML Batch Execution Service endpoint. Keys must match the names of
   * web service parameters defined in the published Azure ML web service.
   * Values will be passed in the GlobalParameters property of the Azure ML
   * batch execution request.
   * @member {object} [webServiceOutputs] Key,Value pairs, mapping the names of
   * Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects
   * specifying the output Blob locations. This information will be passed in
   * the WebServiceOutputs property of the Azure ML batch execution request.
   * @member {object} [webServiceInputs] Key,Value pairs, mapping the names of
   * Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects
   * specifying the input Blob locations.. This information will be passed in
   * the WebServiceInputs property of the Azure ML batch execution request.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureMLBatchExecutionActivity
   *
   * @returns {object} metadata of AzureMLBatchExecutionActivity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureMLBatchExecution',
      type: {
        name: 'Composite',
        className: 'AzureMLBatchExecutionActivity',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          dependsOn: {
            required: false,
            serializedName: 'dependsOn',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityDependencyElementType',
                  type: {
                    name: 'Composite',
                    className: 'ActivityDependency'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          linkedServiceName: {
            required: false,
            serializedName: 'linkedServiceName',
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          policy: {
            required: false,
            serializedName: 'policy',
            type: {
              name: 'Composite',
              className: 'ActivityPolicy'
            }
          },
          globalParameters: {
            required: false,
            serializedName: 'typeProperties.globalParameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          webServiceOutputs: {
            required: false,
            serializedName: 'typeProperties.webServiceOutputs',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'AzureMLWebServiceFileElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureMLWebServiceFile'
                  }
              }
            }
          },
          webServiceInputs: {
            required: false,
            serializedName: 'typeProperties.webServiceInputs',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'AzureMLWebServiceFileElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureMLWebServiceFile'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AzureMLBatchExecutionActivity;