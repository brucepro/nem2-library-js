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

/**
 * The TransactionHashes model module.
 * @module model/TransactionHashes
 * @version 0.7.15
 */
class TransactionHashes {
    /**
     * Constructs a new <code>TransactionHashes</code>.
     * @alias module:model/TransactionHashes
     */
    constructor() { 
        
        TransactionHashes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionHashes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionHashes} obj Optional instance to populate.
     * @return {module:model/TransactionHashes} The populated <code>TransactionHashes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionHashes();

            if (data.hasOwnProperty('hashes')) {
                obj['hashes'] = ApiClient.convertToType(data['hashes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The array of transaction hashes.
 * @member {Array.<String>} hashes
 */
TransactionHashes.prototype['hashes'] = undefined;






export default TransactionHashes;

