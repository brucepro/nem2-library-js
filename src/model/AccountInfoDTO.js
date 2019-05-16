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

import ApiClient from '../ApiClient';
import AccountDTO from './AccountDTO';

/**
 * The AccountInfoDTO model module.
 * @module model/AccountInfoDTO
 * @version 0.7.15
 */
class AccountInfoDTO {
    /**
     * Constructs a new <code>AccountInfoDTO</code>.
     * @alias module:model/AccountInfoDTO
     * @param meta {Object} 
     * @param account {module:model/AccountDTO} 
     */
    constructor(meta, account) { 
        
        AccountInfoDTO.initialize(this, meta, account);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta, account) { 
        obj['meta'] = meta;
        obj['account'] = account;
    }

    /**
     * Constructs a <code>AccountInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountInfoDTO} obj Optional instance to populate.
     * @return {module:model/AccountInfoDTO} The populated <code>AccountInfoDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountInfoDTO();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = AccountDTO.constructFromObject(data['account']);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} meta
 */
AccountInfoDTO.prototype['meta'] = undefined;

/**
 * @member {module:model/AccountDTO} account
 */
AccountInfoDTO.prototype['account'] = undefined;






export default AccountInfoDTO;

