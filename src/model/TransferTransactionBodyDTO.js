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
import MessageDTO from './MessageDTO';
import MosaicDTO from './MosaicDTO';

/**
 * The TransferTransactionBodyDTO model module.
 * @module model/TransferTransactionBodyDTO
 * @version 0.7.15
 */
class TransferTransactionBodyDTO {
    /**
     * Constructs a new <code>TransferTransactionBodyDTO</code>.
     * @alias module:model/TransferTransactionBodyDTO
     * @param recipient {Object} If the bit 0 of byte 0 is not set (like in 0x90), then it is a regular address. Else (e.g. 0x91) it represents a namespace id which starts at byte 1.
     * @param mosaics {Array.<module:model/MosaicDTO>} The array of mosics sent to the recipient. If the most significant bit of byte 0 is set, a namespaceId (alias) is used instead of a instead of a mosaicId corresponds to a mosaicId.
     * @param message {module:model/MessageDTO} 
     */
    constructor(recipient, mosaics, message) { 
        
        TransferTransactionBodyDTO.initialize(this, recipient, mosaics, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipient, mosaics, message) { 
        obj['recipient'] = recipient;
        obj['mosaics'] = mosaics;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>TransferTransactionBodyDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferTransactionBodyDTO} obj Optional instance to populate.
     * @return {module:model/TransferTransactionBodyDTO} The populated <code>TransferTransactionBodyDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferTransactionBodyDTO();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], Object);
            }
            if (data.hasOwnProperty('mosaics')) {
                obj['mosaics'] = ApiClient.convertToType(data['mosaics'], [MosaicDTO]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = MessageDTO.constructFromObject(data['message']);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} type
 */
TransferTransactionBodyDTO.prototype['type'] = undefined;

/**
 * If the bit 0 of byte 0 is not set (like in 0x90), then it is a regular address. Else (e.g. 0x91) it represents a namespace id which starts at byte 1.
 * @member {Object} recipient
 */
TransferTransactionBodyDTO.prototype['recipient'] = undefined;

/**
 * The array of mosics sent to the recipient. If the most significant bit of byte 0 is set, a namespaceId (alias) is used instead of a instead of a mosaicId corresponds to a mosaicId.
 * @member {Array.<module:model/MosaicDTO>} mosaics
 */
TransferTransactionBodyDTO.prototype['mosaics'] = undefined;

/**
 * @member {module:model/MessageDTO} message
 */
TransferTransactionBodyDTO.prototype['message'] = undefined;






export default TransferTransactionBodyDTO;

