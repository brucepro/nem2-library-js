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
import EmbeddedTransactionDTO from './EmbeddedTransactionDTO';
import HashAlgorithmEnum from './HashAlgorithmEnum';
import SecretLockTransactionBodyDTO from './SecretLockTransactionBodyDTO';

/**
 * The EmbeddedSecretLockTransactionDTO model module.
 * @module model/EmbeddedSecretLockTransactionDTO
 * @version 0.7.15
 */
class EmbeddedSecretLockTransactionDTO {
    /**
     * Constructs a new <code>EmbeddedSecretLockTransactionDTO</code>.
     * @alias module:model/EmbeddedSecretLockTransactionDTO
     * @implements module:model/EmbeddedTransactionDTO
     * @implements module:model/SecretLockTransactionBodyDTO
     */
    constructor() { 
        EmbeddedTransactionDTO.initialize(this);SecretLockTransactionBodyDTO.initialize(this, duration, mosaicId, amount, hashAlgorithm, secret, recipient);
        EmbeddedSecretLockTransactionDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['signer'] = signer;
        obj['version'] = version;
        obj['type'] = type;
        obj['max_fee'] = maxFee;
        obj['deadline'] = deadline;
        obj['duration'] = duration;
        obj['mosaicId'] = mosaicId;
        obj['amount'] = amount;
        obj['hashAlgorithm'] = hashAlgorithm;
        obj['secret'] = secret;
        obj['recipient'] = recipient;
    }

    /**
     * Constructs a <code>EmbeddedSecretLockTransactionDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmbeddedSecretLockTransactionDTO} obj Optional instance to populate.
     * @return {module:model/EmbeddedSecretLockTransactionDTO} The populated <code>EmbeddedSecretLockTransactionDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmbeddedSecretLockTransactionDTO();
            EmbeddedTransactionDTO.constructFromObject(data, obj);
            SecretLockTransactionBodyDTO.constructFromObject(data, obj);

            if (data.hasOwnProperty('signer')) {
                obj['signer'] = ApiClient.convertToType(data['signer'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('max_fee')) {
                obj['max_fee'] = ApiClient.convertToType(data['max_fee'], ['Number']);
            }
            if (data.hasOwnProperty('deadline')) {
                obj['deadline'] = ApiClient.convertToType(data['deadline'], ['Number']);
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], ['Number']);
            }
            if (data.hasOwnProperty('mosaicId')) {
                obj['mosaicId'] = ApiClient.convertToType(data['mosaicId'], ['Number']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], ['Number']);
            }
            if (data.hasOwnProperty('hashAlgorithm')) {
                obj['hashAlgorithm'] = HashAlgorithmEnum.constructFromObject(data['hashAlgorithm']);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The public key of the entity signer formatted as hexadecimal.
 * @member {String} signer
 */
EmbeddedSecretLockTransactionDTO.prototype['signer'] = undefined;

/**
 * The entity version. The higher byte represents the network identifier: * 0x68 (MAIN_NET) - Public main network. * 0x98 (TEST_NET) - Public test network. * 0x60 (MIJIN) - Private network. * 0x90 (MIJIN_TEST) - Private test network. 
 * @member {Number} version
 */
EmbeddedSecretLockTransactionDTO.prototype['version'] = undefined;

/**
 * @member {Object} type
 */
EmbeddedSecretLockTransactionDTO.prototype['type'] = undefined;

/**
 * @member {Array.<Number>} max_fee
 */
EmbeddedSecretLockTransactionDTO.prototype['max_fee'] = undefined;

/**
 * @member {Array.<Number>} deadline
 */
EmbeddedSecretLockTransactionDTO.prototype['deadline'] = undefined;

/**
 * @member {Array.<Number>} duration
 */
EmbeddedSecretLockTransactionDTO.prototype['duration'] = undefined;

/**
 * @member {Array.<Number>} mosaicId
 */
EmbeddedSecretLockTransactionDTO.prototype['mosaicId'] = undefined;

/**
 * @member {Array.<Number>} amount
 */
EmbeddedSecretLockTransactionDTO.prototype['amount'] = undefined;

/**
 * @member {module:model/HashAlgorithmEnum} hashAlgorithm
 */
EmbeddedSecretLockTransactionDTO.prototype['hashAlgorithm'] = undefined;

/**
 * The proof hashed.
 * @member {String} secret
 */
EmbeddedSecretLockTransactionDTO.prototype['secret'] = undefined;

/**
 * The address in hexadecimal that will receive the funds once the transaction is unlocked.
 * @member {String} recipient
 */
EmbeddedSecretLockTransactionDTO.prototype['recipient'] = undefined;


// Implement EmbeddedTransactionDTO interface:
// Implement SecretLockTransactionBodyDTO interface:
/**
 * @member {Object} type
 */
SecretLockTransactionBodyDTO.prototype['type'] = undefined;
/**
 * @member {Array.<Number>} duration
 */
SecretLockTransactionBodyDTO.prototype['duration'] = undefined;
/**
 * @member {Array.<Number>} mosaicId
 */
SecretLockTransactionBodyDTO.prototype['mosaicId'] = undefined;
/**
 * @member {Array.<Number>} amount
 */
SecretLockTransactionBodyDTO.prototype['amount'] = undefined;
/**
 * @member {module:model/HashAlgorithmEnum} hashAlgorithm
 */
SecretLockTransactionBodyDTO.prototype['hashAlgorithm'] = undefined;
/**
 * The proof hashed.
 * @member {String} secret
 */
SecretLockTransactionBodyDTO.prototype['secret'] = undefined;
/**
 * The address in hexadecimal that will receive the funds once the transaction is unlocked.
 * @member {String} recipient
 */
SecretLockTransactionBodyDTO.prototype['recipient'] = undefined;




export default EmbeddedSecretLockTransactionDTO;

