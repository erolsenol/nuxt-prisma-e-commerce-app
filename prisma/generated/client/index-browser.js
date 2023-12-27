
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  firstname: 'firstname',
  lastname: 'lastname',
  username: 'username',
  password: 'password',
  email: 'email',
  phone: 'phone',
  age: 'age',
  verify: 'verify',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_en: 'name_en',
  title: 'title',
  title_en: 'title_en',
  content: 'content',
  content_en: 'content_en',
  otherLangs: 'otherLangs',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subCategoryId: 'subCategoryId',
  categoryId: 'categoryId',
  tags: 'tags'
};

exports.Prisma.StarScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  userId: 'userId'
};

exports.Prisma.QuestionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  reply: 'reply',
  answered: 'answered',
  productId: 'productId',
  userId: 'userId',
  questionId: 'questionId',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_en: 'name_en',
  description: 'description',
  description_en: 'description_en',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_en: 'name_en',
  description: 'description',
  description_en: 'description_en',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  categoryId: 'categoryId',
  lowerSubCategoryId: 'lowerSubCategoryId'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  path: 'path',
  name: 'name',
  ownerName: 'ownerName',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId',
  pageContentId: 'pageContentId',
  commentId: 'commentId',
  minisliderId: 'minisliderId'
};

exports.Prisma.PhotoScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  imageId: 'imageId'
};

exports.Prisma.PhototypeScalarFieldEnum = {
  id: 'id',
  typeName: 'typeName'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  username: 'username',
  title: 'title',
  content: 'content',
  point: 'point',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId',
  userId: 'userId'
};

exports.Prisma.ContactUsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  email: 'email',
  phone: 'phone',
  title: 'title',
  content: 'content',
  readed: 'readed',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.PagecontentScalarFieldEnum = {
  id: 'id',
  locale: 'locale',
  bigTitle: 'bigTitle',
  title: 'title',
  content: 'content',
  pageName: 'pageName',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MinisliderScalarFieldEnum = {
  id: 'id',
  texts: 'texts',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SiteScalarFieldEnum = {
  id: 'id',
  headerLogo: 'headerLogo',
  footerLogo: 'footerLogo',
  headerBgColor: 'headerBgColor',
  footerBgColor: 'footerBgColor',
  headerFontColor: 'headerFontColor',
  footerFontColor: 'footerFontColor',
  mail: 'mail',
  mail_en: 'mail_en',
  phone: 'phone',
  phone_en: 'phone_en',
  address: 'address',
  address_en: 'address_en',
  footerText: 'footerText',
  aboutUsText: 'aboutUsText',
  footerJson: 'footerJson',
  headerJson: 'headerJson',
  point: 'point',
  instagramName: 'instagramName',
  facebookName: 'facebookName',
  twitterName: 'twitterName',
  instagramUrl: 'instagramUrl',
  facebookUrl: 'facebookUrl',
  twitterUrl: 'twitterUrl',
  instagramShow: 'instagramShow',
  facebookShow: 'facebookShow',
  twitterShow: 'twitterShow',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  pageAbout: 'pageAbout'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  firstname: 'firstname',
  lastname: 'lastname',
  username: 'username',
  password: 'password',
  email: 'email',
  phone: 'phone'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.ProductOrderByRelevanceFieldEnum = {
  name: 'name',
  name_en: 'name_en',
  title: 'title',
  title_en: 'title_en',
  content: 'content',
  content_en: 'content_en'
};

exports.Prisma.QuestionOrderByRelevanceFieldEnum = {
  title: 'title',
  content: 'content',
  reply: 'reply'
};

exports.Prisma.CategoryOrderByRelevanceFieldEnum = {
  name: 'name',
  name_en: 'name_en',
  description: 'description',
  description_en: 'description_en'
};

exports.Prisma.SubCategoryOrderByRelevanceFieldEnum = {
  name: 'name',
  name_en: 'name_en',
  description: 'description',
  description_en: 'description_en'
};

exports.Prisma.ImageOrderByRelevanceFieldEnum = {
  path: 'path',
  name: 'name',
  ownerName: 'ownerName'
};

exports.Prisma.PhotoOrderByRelevanceFieldEnum = {
  name: 'name',
  type: 'type'
};

exports.Prisma.PhototypeOrderByRelevanceFieldEnum = {
  typeName: 'typeName'
};

exports.Prisma.CommentOrderByRelevanceFieldEnum = {
  username: 'username',
  title: 'title',
  content: 'content'
};

exports.Prisma.ContactUsOrderByRelevanceFieldEnum = {
  name: 'name',
  surname: 'surname',
  email: 'email',
  phone: 'phone',
  title: 'title',
  content: 'content'
};

exports.Prisma.PagecontentOrderByRelevanceFieldEnum = {
  locale: 'locale',
  bigTitle: 'bigTitle',
  title: 'title',
  content: 'content',
  pageName: 'pageName'
};

exports.Prisma.SiteOrderByRelevanceFieldEnum = {
  headerLogo: 'headerLogo',
  footerLogo: 'footerLogo',
  headerBgColor: 'headerBgColor',
  footerBgColor: 'footerBgColor',
  headerFontColor: 'headerFontColor',
  footerFontColor: 'footerFontColor',
  mail: 'mail',
  mail_en: 'mail_en',
  phone: 'phone',
  phone_en: 'phone_en',
  address: 'address',
  address_en: 'address_en',
  footerText: 'footerText',
  aboutUsText: 'aboutUsText',
  instagramName: 'instagramName',
  facebookName: 'facebookName',
  twitterName: 'twitterName',
  instagramUrl: 'instagramUrl',
  facebookUrl: 'facebookUrl',
  twitterUrl: 'twitterUrl'
};


exports.Prisma.ModelName = {
  User: 'User',
  Product: 'Product',
  Star: 'Star',
  Question: 'Question',
  Category: 'Category',
  SubCategory: 'SubCategory',
  Image: 'Image',
  Photo: 'Photo',
  Phototype: 'Phototype',
  Comment: 'Comment',
  ContactUs: 'ContactUs',
  Pagecontent: 'Pagecontent',
  Minislider: 'Minislider',
  Site: 'Site'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
