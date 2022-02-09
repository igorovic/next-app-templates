/**
 * Whenever the payment method supports `customer` details, the customer object can be used. If a particular field is required varies from payment method to payment method. For example the field `birthDate` is not mandatory for each payment method supporting the `customer` object.
 * @export
 * @interface CustomerRequest
 */
export interface CustomerRequest {
  /**
   * Unique customer identifier
   * @type {string}
   * @memberof CustomerRequest
   */
  id?: string;
  /**
   * Something like `Ms` or `Mrs`
   * @type {string}
   * @memberof CustomerRequest
   */
  title?: string;
  /**
   * The first name of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  firstName?: string;
  /**
   * The last name of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  lastName?: string;
  /**
   * The street of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  street?: string;
  /**
   * Additional street information. For example: \'3rd floor\'
   * @type {string}
   * @memberof CustomerRequest
   */
  street2?: string;
  /**
   * The city of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  city?: string;
  /**
   * 2 letter ISO 3166-1 alpha-2 country code
   * @type {string}
   * @memberof CustomerRequest
   */
  country?: string;
  /**
   * Zip code of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  zipCode?: string;
  /**
   * Phone number of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  phone?: string;
  /**
   * Cell Phone number of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  cellPhone?: string;
  /**
   * The email address of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  email?: string;
  /**
   * Gender of the customer. `female` or `male`.
   * @type {string}
   * @memberof CustomerRequest
   */
  gender?: string;
  /**
   * The birth date of the customer. Must be in <a href=\'https://en.wikipedia.org/wiki/ISO_8601\' target=\'_blank\'>ISO-8601</a> format (`YYYY-MM-DD`).
   * @type {string}
   * @memberof CustomerRequest
   */
  birthDate?: string;
  /**
   * The language of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  language?: string;
  /**
   * `P` or `C` depending on whether the customer is private or a company. If `C`, the fields `name` and `companyRegisterNumber` are required
   * @type {string}
   * @memberof CustomerRequest
   */
  type?: string;
  /**
   * The name of the company. Only applicable if `type=C`
   * @type {string}
   * @memberof CustomerRequest
   */
  name?: string;
  /**
   * The legal form of the company (AG, GmbH, ...)
   * @type {string}
   * @memberof CustomerRequest
   */
  companyLegalForm?: string;
  /**
   * The register number of the company. Only applicable if `type=C`
   * @type {string}
   * @memberof CustomerRequest
   */
  companyRegisterNumber?: string;
  /**
   * The ip address of the customer.
   * @type {string}
   * @memberof CustomerRequest
   */
  ipAddress?: string;
}
