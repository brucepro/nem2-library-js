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
 * The AnnounceTransactionInfoDTO model module.
 * @module model/AnnounceTransactionInfoDTO
 * @version 0.7.15
 */
class AnnounceTransactionInfoDTO {
    /**
     * Constructs a new <code>AnnounceTransactionInfoDTO</code>.
     * @alias module:model/AnnounceTransactionInfoDTO
     * @param message {String} 
     */
    constructor(message) { 
        
        AnnounceTransactionInfoDTO.initialize(this, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message) { 
        obj['message'] = message;
    }

    /**
     * Constructs a <code>AnnounceTransactionInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnnounceTransactionInfoDTO} obj Optional instance to populate.
     * @return {module:model/AnnounceTransactionInfoDTO} The populated <code>AnnounceTransactionInfoDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnnounceTransactionInfoDTO();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
AnnounceTransactionInfoDTO.prototype['message'] = undefined;






export default AnnounceTransactionInfoDTO;

