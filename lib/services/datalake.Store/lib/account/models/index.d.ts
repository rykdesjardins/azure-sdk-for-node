/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * The resource model definition.
 */
export interface Resource extends BaseResource {
  /**
   * The resource identifier.
   */
  readonly id?: string;
  /**
   * The resource name.
   */
  readonly name?: string;
  /**
   * The resource type.
   */
  readonly type?: string;
  /**
   * The resource location.
   */
  readonly location?: string;
  /**
   * The resource tags.
   */
  readonly tags?: { [propertyName: string]: string };
}

/**
 * The resource model definition for a nested resource.
 */
export interface SubResource extends BaseResource {
  /**
   * The resource identifier.
   */
  readonly id?: string;
  /**
   * The resource name.
   */
  readonly name?: string;
  /**
   * The resource type.
   */
  readonly type?: string;
}

/**
 * The encryption identity properties.
 */
export interface EncryptionIdentity {
  /**
   * The principal identifier associated with the encryption.
   */
  readonly principalId?: string;
  /**
   * The tenant identifier associated with the encryption.
   */
  readonly tenantId?: string;
}

/**
 * Metadata information used by account encryption.
 */
export interface KeyVaultMetaInfo {
  /**
   * The resource identifier for the user managed Key Vault being used to encrypt.
   */
  keyVaultResourceId: string;
  /**
   * The name of the user managed encryption key.
   */
  encryptionKeyName: string;
  /**
   * The version of the user managed encryption key.
   */
  encryptionKeyVersion: string;
}

/**
 * The encryption configuration for the account.
 */
export interface EncryptionConfig {
  /**
   * The type of encryption configuration being used. Currently the only supported types are
   * 'UserManaged' and 'ServiceManaged'. Possible values include: 'UserManaged', 'ServiceManaged'
   */
  type: string;
  /**
   * The Key Vault information for connecting to user managed encryption keys.
   */
  keyVaultMetaInfo?: KeyVaultMetaInfo;
}

/**
 * Data Lake Store firewall rule information.
 */
export interface FirewallRule extends SubResource {
  /**
   * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
   */
  readonly startIpAddress?: string;
  /**
   * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
   */
  readonly endIpAddress?: string;
}

/**
 * Data Lake Store virtual network rule information.
 */
export interface VirtualNetworkRule extends SubResource {
  /**
   * The resource identifier for the subnet.
   */
  readonly subnetId?: string;
}

/**
 * Data Lake Store trusted identity provider information.
 */
export interface TrustedIdProvider extends SubResource {
  /**
   * The URL of this trusted identity provider.
   */
  readonly idProvider?: string;
}

/**
 * Data Lake Store account information.
 */
export interface DataLakeStoreAccount extends Resource {
  /**
   * The Key Vault encryption identity, if any.
   */
  readonly identity?: EncryptionIdentity;
  /**
   * The unique identifier associated with this Data Lake Store account.
   */
  readonly accountId?: string;
  /**
   * The provisioning status of the Data Lake Store account. Possible values include: 'Failed',
   * 'Creating', 'Running', 'Succeeded', 'Patching', 'Suspending', 'Resuming', 'Deleting',
   * 'Deleted', 'Undeleting', 'Canceled'
   */
  readonly provisioningState?: string;
  /**
   * The state of the Data Lake Store account. Possible values include: 'Active', 'Suspended'
   */
  readonly state?: string;
  /**
   * The account creation time.
   */
  readonly creationTime?: Date;
  /**
   * The account last modified time.
   */
  readonly lastModifiedTime?: Date;
  /**
   * The full CName endpoint for this account.
   */
  readonly endpoint?: string;
  /**
   * The default owner group for all new folders and files created in the Data Lake Store account.
   */
  readonly defaultGroup?: string;
  /**
   * The Key Vault encryption configuration.
   */
  readonly encryptionConfig?: EncryptionConfig;
  /**
   * The current state of encryption for this Data Lake Store account. Possible values include:
   * 'Enabled', 'Disabled'
   */
  readonly encryptionState?: string;
  /**
   * The current state of encryption provisioning for this Data Lake Store account. Possible values
   * include: 'Creating', 'Succeeded'
   */
  readonly encryptionProvisioningState?: string;
  /**
   * The list of firewall rules associated with this Data Lake Store account.
   */
  readonly firewallRules?: FirewallRule[];
  /**
   * The list of virtual network rules associated with this Data Lake Store account.
   */
  readonly virtualNetworkRules?: VirtualNetworkRule[];
  /**
   * The current state of the IP address firewall for this Data Lake Store account. Possible values
   * include: 'Enabled', 'Disabled'
   */
  readonly firewallState?: string;
  /**
   * The current state of allowing or disallowing IPs originating within Azure through the
   * firewall. If the firewall is disabled, this is not enforced. Possible values include:
   * 'Enabled', 'Disabled'
   */
  readonly firewallAllowAzureIps?: string;
  /**
   * The list of trusted identity providers associated with this Data Lake Store account.
   */
  readonly trustedIdProviders?: TrustedIdProvider[];
  /**
   * The current state of the trusted identity provider feature for this Data Lake Store account.
   * Possible values include: 'Enabled', 'Disabled'
   */
  readonly trustedIdProviderState?: string;
  /**
   * The commitment tier to use for next month. Possible values include: 'Consumption',
   * 'Commitment_1TB', 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB',
   * 'Commitment_5PB'
   */
  readonly newTier?: string;
  /**
   * The commitment tier in use for the current month. Possible values include: 'Consumption',
   * 'Commitment_1TB', 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB',
   * 'Commitment_5PB'
   */
  readonly currentTier?: string;
}

/**
 * Basic Data Lake Store account information, returned on list calls.
 */
export interface DataLakeStoreAccountBasic extends Resource {
  /**
   * The unique identifier associated with this Data Lake Store account.
   */
  readonly accountId?: string;
  /**
   * The provisioning status of the Data Lake Store account. Possible values include: 'Failed',
   * 'Creating', 'Running', 'Succeeded', 'Patching', 'Suspending', 'Resuming', 'Deleting',
   * 'Deleted', 'Undeleting', 'Canceled'
   */
  readonly provisioningState?: string;
  /**
   * The state of the Data Lake Store account. Possible values include: 'Active', 'Suspended'
   */
  readonly state?: string;
  /**
   * The account creation time.
   */
  readonly creationTime?: Date;
  /**
   * The account last modified time.
   */
  readonly lastModifiedTime?: Date;
  /**
   * The full CName endpoint for this account.
   */
  readonly endpoint?: string;
}

/**
 * The display information for a particular operation.
 */
export interface OperationDisplay {
  /**
   * The resource provider of the operation.
   */
  readonly provider?: string;
  /**
   * The resource type of the operation.
   */
  readonly resource?: string;
  /**
   * A friendly name of the operation.
   */
  readonly operation?: string;
  /**
   * A friendly description of the operation.
   */
  readonly description?: string;
}

/**
 * An available operation for Data Lake Store.
 */
export interface Operation {
  /**
   * The name of the operation.
   */
  readonly name?: string;
  /**
   * The display information for the operation.
   */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation. Possible values include: 'user', 'system',
   * 'user,system'
   */
  readonly origin?: string;
}

/**
 * The list of available operations for Data Lake Store.
 */
export interface OperationListResult {
  /**
   * The results of the list operation.
   */
  readonly value?: Operation[];
  /**
   * The link (url) to the next page of results.
   */
  readonly nextLink?: string;
}

/**
 * Subscription-level properties and limits for Data Lake Store.
 */
export interface CapabilityInformation {
  /**
   * The subscription credentials that uniquely identifies the subscription.
   */
  readonly subscriptionId?: string;
  /**
   * The subscription state. Possible values include: 'Registered', 'Suspended', 'Deleted',
   * 'Unregistered', 'Warned'
   */
  readonly state?: string;
  /**
   * The maximum supported number of accounts under this subscription.
   */
  readonly maxAccountCount?: number;
  /**
   * The current number of accounts under this subscription.
   */
  readonly accountCount?: number;
  /**
   * The Boolean value of true or false to indicate the maintenance state.
   */
  readonly migrationState?: boolean;
}

/**
 * Data Lake Store account name availability result information.
 */
export interface NameAvailabilityInformation {
  /**
   * The Boolean value of true or false to indicate whether the Data Lake Store account name is
   * available or not.
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason why the Data Lake Store account name is not available, if nameAvailable is false.
   */
  readonly reason?: string;
  /**
   * The message describing why the Data Lake Store account name is not available, if nameAvailable
   * is false.
   */
  readonly message?: string;
}

/**
 * The parameters used to create a new firewall rule while creating a new Data Lake Store account.
 */
export interface CreateFirewallRuleWithAccountParameters {
  /**
   * The unique name of the firewall rule to create.
   */
  name: string;
  /**
   * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
   */
  startIpAddress: string;
  /**
   * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
   */
  endIpAddress: string;
}

/**
 * The parameters used to create a new virtual network rule while creating a new Data Lake Store
 * account.
 */
export interface CreateVirtualNetworkRuleWithAccountParameters {
  /**
   * The unique name of the virtual network rule to create.
   */
  name: string;
  /**
   * The resource identifier for the subnet.
   */
  subnetId: string;
}

/**
 * The parameters used to create a new trusted identity provider while creating a new Data Lake
 * Store account.
 */
export interface CreateTrustedIdProviderWithAccountParameters {
  /**
   * The unique name of the trusted identity provider to create.
   */
  name: string;
  /**
   * The URL of this trusted identity provider.
   */
  idProvider: string;
}

export interface CreateDataLakeStoreAccountParameters {
  /**
   * The resource location.
  */
  location: string;
  /**
   * The resource tags.
  */
  tags?: { [propertyName: string]: string };
  /**
   * The Key Vault encryption identity, if any.
  */
  identity?: EncryptionIdentity;
  /**
   * The default owner group for all new folders and files created in the Data Lake Store account.
  */
  defaultGroup?: string;
  /**
   * The Key Vault encryption configuration.
  */
  encryptionConfig?: EncryptionConfig;
  /**
   * The current state of encryption for this Data Lake Store account. Possible values include:
   * 'Enabled', 'Disabled'
  */
  encryptionState?: string;
  /**
   * The list of firewall rules associated with this Data Lake Store account.
  */
  firewallRules?: CreateFirewallRuleWithAccountParameters[];
  /**
   * The list of virtual network rules associated with this Data Lake Store account.
  */
  virtualNetworkRules?: CreateVirtualNetworkRuleWithAccountParameters[];
  /**
   * The current state of the IP address firewall for this Data Lake Store account. Possible values
   * include: 'Enabled', 'Disabled'
  */
  firewallState?: string;
  /**
   * The current state of allowing or disallowing IPs originating within Azure through the
   * firewall. If the firewall is disabled, this is not enforced. Possible values include:
   * 'Enabled', 'Disabled'
  */
  firewallAllowAzureIps?: string;
  /**
   * The list of trusted identity providers associated with this Data Lake Store account.
  */
  trustedIdProviders?: CreateTrustedIdProviderWithAccountParameters[];
  /**
   * The current state of the trusted identity provider feature for this Data Lake Store account.
   * Possible values include: 'Enabled', 'Disabled'
  */
  trustedIdProviderState?: string;
  /**
   * The commitment tier to use for next month. Possible values include: 'Consumption',
   * 'Commitment_1TB', 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB',
   * 'Commitment_5PB'
  */
  newTier?: string;
}

/**
 * The Key Vault update information used for user managed key rotation.
*/
export interface UpdateKeyVaultMetaInfo {
  /**
   * The version of the user managed encryption key to update through a key rotation.
  */
  encryptionKeyVersion?: string;
}

/**
 * The encryption configuration used to update a user managed Key Vault key.
*/
export interface UpdateEncryptionConfig {
  /**
   * The updated Key Vault key to use in user managed key rotation.
  */
  keyVaultMetaInfo?: UpdateKeyVaultMetaInfo;
}

/**
 * The parameters used to update a firewall rule while updating a Data Lake Store account.
*/
export interface UpdateFirewallRuleWithAccountParameters {
  /**
   * The unique name of the firewall rule to update.
  */
  name: string;
  /**
   * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
  */
  startIpAddress?: string;
  /**
   * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
  */
  endIpAddress?: string;
}

/**
 * The parameters used to update a virtual network rule while updating a Data Lake Store account.
*/
export interface UpdateVirtualNetworkRuleWithAccountParameters {
  /**
   * The unique name of the virtual network rule to update.
  */
  name: string;
  /**
   * The resource identifier for the subnet.
  */
  subnetId?: string;
}

/**
 * The parameters used to update a trusted identity provider while updating a Data Lake Store
 * account.
*/
export interface UpdateTrustedIdProviderWithAccountParameters {
  /**
   * The unique name of the trusted identity provider to update.
  */
  name: string;
  /**
   * The URL of this trusted identity provider.
  */
  idProvider?: string;
}

/**
 * Data Lake Store account information to update.
*/
export interface UpdateDataLakeStoreAccountParameters {
  /**
   * Resource tags
  */
  tags?: { [propertyName: string]: string };
  /**
   * The default owner group for all new folders and files created in the Data Lake Store account.
  */
  defaultGroup?: string;
  /**
   * Used for rotation of user managed Key Vault keys. Can only be used to rotate a user managed
   * encryption Key Vault key.
  */
  encryptionConfig?: UpdateEncryptionConfig;
  /**
   * The list of firewall rules associated with this Data Lake Store account.
  */
  firewallRules?: UpdateFirewallRuleWithAccountParameters[];
  /**
   * The list of virtual network rules associated with this Data Lake Store account.
  */
  virtualNetworkRules?: UpdateVirtualNetworkRuleWithAccountParameters[];
  /**
   * The current state of the IP address firewall for this Data Lake Store account. Disabling the
   * firewall does not remove existing rules, they will just be ignored until the firewall is
   * re-enabled. Possible values include: 'Enabled', 'Disabled'
  */
  firewallState?: string;
  /**
   * The current state of allowing or disallowing IPs originating within Azure through the
   * firewall. If the firewall is disabled, this is not enforced. Possible values include:
   * 'Enabled', 'Disabled'
  */
  firewallAllowAzureIps?: string;
  /**
   * The list of trusted identity providers associated with this Data Lake Store account.
  */
  trustedIdProviders?: UpdateTrustedIdProviderWithAccountParameters[];
  /**
   * The current state of the trusted identity provider feature for this Data Lake Store account.
   * Disabling trusted identity provider functionality does not remove the providers, they will
   * just be ignored until this feature is re-enabled. Possible values include: 'Enabled',
   * 'Disabled'
  */
  trustedIdProviderState?: string;
  /**
   * The commitment tier to use for next month. Possible values include: 'Consumption',
   * 'Commitment_1TB', 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB',
   * 'Commitment_5PB'
  */
  newTier?: string;
}

/**
 * The parameters used to create a new firewall rule.
*/
export interface CreateOrUpdateFirewallRuleParameters {
  /**
   * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
  */
  startIpAddress: string;
  /**
   * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
  */
  endIpAddress: string;
}

/**
 * The parameters used to update a firewall rule.
*/
export interface UpdateFirewallRuleParameters {
  /**
   * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
  */
  startIpAddress?: string;
  /**
   * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End
   * should be in the same protocol.
  */
  endIpAddress?: string;
}

/**
 * The parameters used to create a new virtual network rule.
*/
export interface CreateOrUpdateVirtualNetworkRuleParameters {
  /**
   * The resource identifier for the subnet.
  */
  subnetId: string;
}

/**
 * The parameters used to update a virtual network rule.
*/
export interface UpdateVirtualNetworkRuleParameters {
  /**
   * The resource identifier for the subnet.
  */
  subnetId?: string;
}

/**
 * The parameters used to create a new trusted identity provider.
*/
export interface CreateOrUpdateTrustedIdProviderParameters {
  /**
   * The URL of this trusted identity provider.
  */
  idProvider: string;
}

/**
 * The parameters used to update a trusted identity provider.
*/
export interface UpdateTrustedIdProviderParameters {
  /**
   * The URL of this trusted identity provider.
  */
  idProvider?: string;
}

/**
 * Data Lake Store account name availability check parameters.
*/
export interface CheckNameAvailabilityParameters {
  /**
   * The Data Lake Store name to check availability for.
  */
  name: string;
}

/**
 * Data Lake Store account list information response.
*/
export interface DataLakeStoreAccountListResult extends Array<DataLakeStoreAccountBasic> {
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}

/**
 * Data Lake Store firewall rule list information.
*/
export interface FirewallRuleListResult extends Array<FirewallRule> {
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}

/**
 * Data Lake Store virtual network rule list information.
*/
export interface VirtualNetworkRuleListResult extends Array<VirtualNetworkRule> {
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}

/**
 * Data Lake Store trusted identity provider list information.
*/
export interface TrustedIdProviderListResult extends Array<TrustedIdProvider> {
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}
