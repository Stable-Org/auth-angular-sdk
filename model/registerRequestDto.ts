/**
 * Stable - Auth Service
 * An authentication service API for Stable
 *
 * The version of the OpenAPI document: 0.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface RegisterRequestDto { 
    /**
     * The email of the user
     */
    email: string;
    /**
     * The password of the user
     */
    password: string;
    /**
     * The given name of the user
     */
    givenName: string;
    /**
     * The family name of the user
     */
    familyName: string;
    /**
     * Gender query parameter
     */
    gender?: RegisterRequestDto.GenderEnum;
    /**
     * Acceptance of Terms and Privacy Policy
     */
    acceptTerms: boolean;
}
export namespace RegisterRequestDto {
    export type GenderEnum = 'male' | 'female';
    export const GenderEnum = {
        Male: 'male' as GenderEnum,
        Female: 'female' as GenderEnum
    };
}


