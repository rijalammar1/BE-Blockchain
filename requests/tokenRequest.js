import { body } from "express-validator"
// berfungsi sebagai validasi untuk input data
export const validateAddToken = [
  body("campaignId").isString(),
  body("transactionCode").isString(),
  body("token").isString(),
  body("status").isString(),
  body("soldTo").isString(),
]

// changeStatusByTransactionCode
export const validateChangeStatusByTransactionCode = [
  body("transactionCode").isString(),
  body("status").isString(),
]

// berfungsi untuk delete token by transactionCode
export const validateDeleteTokenByTransactionCode = [
  body("transactionCode").isString(),
  body("quantity").isNumeric(),
]

// deleteTokenByCampaignIdAndSoldTo;
export const validatedeleteTokenByCampaignIdAndSoldTo = [
  body("campaignId").isString(),
  body("quantity").isNumeric(),
  body("soldTo").isString(),
]

// berfungsi untuk delete token by CampaignId
export const validateDeleteTokenByCampaignId = [body("campaignId").isString()]
