import type { Article } from "./Article";

/**
 * If supported by the payment method, an order with one or more articles can be defined.
 * @export
 * @interface OrderRequest
 */
export interface OrderRequest {
  /**
   *
   * @type {Array<Article>}
   * @memberof OrderRequest
   */
  articles?: Array<Article>;
  /**
   *
   * @type {number}
   * @memberof OrderRequest
   */
  taxAmount?: number;
  /**
   *
   * @type {number}
   * @memberof OrderRequest
   */
  shippingAmount?: number;
  /**
   *
   * @type {number}
   * @memberof OrderRequest
   */
  discountAmount?: number;
}
