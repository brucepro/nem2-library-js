/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AccountsIds from '../model/AccountsIds';
import NamespaceIds from '../model/NamespaceIds';
import NamespaceInfoDTO from '../model/NamespaceInfoDTO';
import NamespaceNameDTO from '../model/NamespaceNameDTO';

/**
* NamespaceRoutes service.
* @module api/NamespaceRoutesApi
* @version 0.7.15
*/
export default class NamespaceRoutesApi {

    /**
    * Constructs a new NamespaceRoutesApi. 
    * @alias module:api/NamespaceRoutesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get namespace information
     * Gets the namespace for a given namespaceId.
     * @param {String} namespaceId The namespace identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NamespaceInfoDTO} and HTTP response
     */
    getNamespaceWithHttpInfo(namespaceId) {
      let postBody = null;
      // verify the required parameter 'namespaceId' is set
      if (namespaceId === undefined || namespaceId === null) {
        throw new Error("Missing the required parameter 'namespaceId' when calling getNamespace");
      }

      let pathParams = {
        'namespaceId': namespaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NamespaceInfoDTO;
      return this.apiClient.callApi(
        '/namespace/{namespaceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get namespace information
     * Gets the namespace for a given namespaceId.
     * @param {String} namespaceId The namespace identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NamespaceInfoDTO}
     */
    getNamespace(namespaceId) {
      return this.getNamespaceWithHttpInfo(namespaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get namespaces owned by an account
     * Gets an array of namespaces for a given account address.
     * @param {String} accountId The address or public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of namespaces to return.
     * @param {String} opts.id The namespace id up to which namespace objects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NamespaceInfoDTO>} and HTTP response
     */
    getNamespacesFromAccountWithHttpInfo(accountId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getNamespacesFromAccount");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [NamespaceInfoDTO];
      return this.apiClient.callApi(
        '/account/{accountId}/namespaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get namespaces owned by an account
     * Gets an array of namespaces for a given account address.
     * @param {String} accountId The address or public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of namespaces to return.
     * @param {String} opts.id The namespace id up to which namespace objects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NamespaceInfoDTO>}
     */
    getNamespacesFromAccount(accountId, opts) {
      return this.getNamespacesFromAccountWithHttpInfo(accountId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get namespaces for given array of addresses
     * Gets namespaces for a given array of addresses.
     * @param {module:model/AccountsIds} accountsIds 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of namespaces to return.
     * @param {String} opts.id The namespace id up to which namespace objects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NamespaceInfoDTO>} and HTTP response
     */
    getNamespacesFromAccountsWithHttpInfo(accountsIds, opts) {
      opts = opts || {};
      let postBody = accountsIds;
      // verify the required parameter 'accountsIds' is set
      if (accountsIds === undefined || accountsIds === null) {
        throw new Error("Missing the required parameter 'accountsIds' when calling getNamespacesFromAccounts");
      }

      let pathParams = {
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [NamespaceInfoDTO];
      return this.apiClient.callApi(
        '/account/namespaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get namespaces for given array of addresses
     * Gets namespaces for a given array of addresses.
     * @param {module:model/AccountsIds} accountsIds 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of namespaces to return.
     * @param {String} opts.id The namespace id up to which namespace objects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NamespaceInfoDTO>}
     */
    getNamespacesFromAccounts(accountsIds, opts) {
      return this.getNamespacesFromAccountsWithHttpInfo(accountsIds, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get readable names for a set of namespaces
     * Returns friendly names for mosaics.
     * @param {module:model/NamespaceIds} namespaceIds An array of namespaceIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NamespaceNameDTO>} and HTTP response
     */
    getNamespacesNamesWithHttpInfo(namespaceIds) {
      let postBody = namespaceIds;
      // verify the required parameter 'namespaceIds' is set
      if (namespaceIds === undefined || namespaceIds === null) {
        throw new Error("Missing the required parameter 'namespaceIds' when calling getNamespacesNames");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [NamespaceNameDTO];
      return this.apiClient.callApi(
        '/namespace/names', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get readable names for a set of namespaces
     * Returns friendly names for mosaics.
     * @param {module:model/NamespaceIds} namespaceIds An array of namespaceIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NamespaceNameDTO>}
     */
    getNamespacesNames(namespaceIds) {
      return this.getNamespacesNamesWithHttpInfo(namespaceIds)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
