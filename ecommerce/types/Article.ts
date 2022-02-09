/**
 *
 * @export
 * @interface Article
 */
export interface Article {
  /**
   *
   * @type {string}
   * @memberof Article
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  description?: string;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  price?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  priceGross?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  quantity?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  tax?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  taxPercent?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  taxAmount?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  priceWithoutVAT?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  singleItemPrice?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  singleItemPriceWithoutVAT?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  discount?: number;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  type?: string;
}
