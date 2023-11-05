
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Star
 * 
 */
export type Star = $Result.DefaultSelection<Prisma.$StarPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Phototype
 * 
 */
export type Phototype = $Result.DefaultSelection<Prisma.$PhototypePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model ContactUs
 * 
 */
export type ContactUs = $Result.DefaultSelection<Prisma.$ContactUsPayload>
/**
 * Model Pagecontent
 * 
 */
export type Pagecontent = $Result.DefaultSelection<Prisma.$PagecontentPayload>
/**
 * Model Minislider
 * 
 */
export type Minislider = $Result.DefaultSelection<Prisma.$MinisliderPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.star`: Exposes CRUD operations for the **Star** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stars
    * const stars = await prisma.star.findMany()
    * ```
    */
  get star(): Prisma.StarDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs>;

  /**
   * `prisma.phototype`: Exposes CRUD operations for the **Phototype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phototypes
    * const phototypes = await prisma.phototype.findMany()
    * ```
    */
  get phototype(): Prisma.PhototypeDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.contactUs`: Exposes CRUD operations for the **ContactUs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactuses
    * const contactuses = await prisma.contactUs.findMany()
    * ```
    */
  get contactUs(): Prisma.ContactUsDelegate<ExtArgs>;

  /**
   * `prisma.pagecontent`: Exposes CRUD operations for the **Pagecontent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagecontents
    * const pagecontents = await prisma.pagecontent.findMany()
    * ```
    */
  get pagecontent(): Prisma.PagecontentDelegate<ExtArgs>;

  /**
   * `prisma.minislider`: Exposes CRUD operations for the **Minislider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Minisliders
    * const minisliders = await prisma.minislider.findMany()
    * ```
    */
  get minislider(): Prisma.MinisliderDelegate<ExtArgs>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'product' | 'star' | 'question' | 'category' | 'subCategory' | 'image' | 'photo' | 'phototype' | 'comment' | 'contactUs' | 'pagecontent' | 'minislider' | 'site'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Star: {
        payload: Prisma.$StarPayload<ExtArgs>
        fields: Prisma.StarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StarFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StarFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload>
          }
          findFirst: {
            args: Prisma.StarFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StarFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload>
          }
          findMany: {
            args: Prisma.StarFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload>[]
          }
          create: {
            args: Prisma.StarCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload>
          }
          createMany: {
            args: Prisma.StarCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StarDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload>
          }
          update: {
            args: Prisma.StarUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload>
          }
          deleteMany: {
            args: Prisma.StarDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StarUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StarUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StarPayload>
          }
          aggregate: {
            args: Prisma.StarAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStar>
          }
          groupBy: {
            args: Prisma.StarGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StarGroupByOutputType>[]
          }
          count: {
            args: Prisma.StarCountArgs<ExtArgs>,
            result: $Utils.Optional<StarCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>,
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Phototype: {
        payload: Prisma.$PhototypePayload<ExtArgs>
        fields: Prisma.PhototypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhototypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhototypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload>
          }
          findFirst: {
            args: Prisma.PhototypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhototypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload>
          }
          findMany: {
            args: Prisma.PhototypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload>[]
          }
          create: {
            args: Prisma.PhototypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload>
          }
          createMany: {
            args: Prisma.PhototypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PhototypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload>
          }
          update: {
            args: Prisma.PhototypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload>
          }
          deleteMany: {
            args: Prisma.PhototypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhototypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhototypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhototypePayload>
          }
          aggregate: {
            args: Prisma.PhototypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhototype>
          }
          groupBy: {
            args: Prisma.PhototypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhototypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhototypeCountArgs<ExtArgs>,
            result: $Utils.Optional<PhototypeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      ContactUs: {
        payload: Prisma.$ContactUsPayload<ExtArgs>
        fields: Prisma.ContactUsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactUsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactUsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          findFirst: {
            args: Prisma.ContactUsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactUsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          findMany: {
            args: Prisma.ContactUsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>[]
          }
          create: {
            args: Prisma.ContactUsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          createMany: {
            args: Prisma.ContactUsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactUsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          update: {
            args: Prisma.ContactUsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          deleteMany: {
            args: Prisma.ContactUsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactUsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          aggregate: {
            args: Prisma.ContactUsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactUs>
          }
          groupBy: {
            args: Prisma.ContactUsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactUsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactUsCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactUsCountAggregateOutputType> | number
          }
        }
      }
      Pagecontent: {
        payload: Prisma.$PagecontentPayload<ExtArgs>
        fields: Prisma.PagecontentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagecontentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagecontentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload>
          }
          findFirst: {
            args: Prisma.PagecontentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagecontentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload>
          }
          findMany: {
            args: Prisma.PagecontentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload>[]
          }
          create: {
            args: Prisma.PagecontentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload>
          }
          createMany: {
            args: Prisma.PagecontentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PagecontentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload>
          }
          update: {
            args: Prisma.PagecontentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload>
          }
          deleteMany: {
            args: Prisma.PagecontentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PagecontentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PagecontentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagecontentPayload>
          }
          aggregate: {
            args: Prisma.PagecontentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePagecontent>
          }
          groupBy: {
            args: Prisma.PagecontentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PagecontentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagecontentCountArgs<ExtArgs>,
            result: $Utils.Optional<PagecontentCountAggregateOutputType> | number
          }
        }
      }
      Minislider: {
        payload: Prisma.$MinisliderPayload<ExtArgs>
        fields: Prisma.MinisliderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MinisliderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MinisliderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload>
          }
          findFirst: {
            args: Prisma.MinisliderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MinisliderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload>
          }
          findMany: {
            args: Prisma.MinisliderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload>[]
          }
          create: {
            args: Prisma.MinisliderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload>
          }
          createMany: {
            args: Prisma.MinisliderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MinisliderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload>
          }
          update: {
            args: Prisma.MinisliderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload>
          }
          deleteMany: {
            args: Prisma.MinisliderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MinisliderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MinisliderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinisliderPayload>
          }
          aggregate: {
            args: Prisma.MinisliderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMinislider>
          }
          groupBy: {
            args: Prisma.MinisliderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MinisliderGroupByOutputType>[]
          }
          count: {
            args: Prisma.MinisliderCountArgs<ExtArgs>,
            result: $Utils.Optional<MinisliderCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>,
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    comments: number
    star: number
    question: number
    contactUs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    star?: boolean | UserCountOutputTypeCountStarArgs
    question?: boolean | UserCountOutputTypeCountQuestionArgs
    contactUs?: boolean | UserCountOutputTypeCountContactUsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactUsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactUsWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    images: number
    comments: number
    star: number
    question: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    comments?: boolean | ProductCountOutputTypeCountCommentsArgs
    star?: boolean | ProductCountOutputTypeCountStarArgs
    question?: boolean | ProductCountOutputTypeCountQuestionArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }



  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    lowQuestion: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowQuestion?: boolean | QuestionCountOutputTypeCountLowQuestionArgs
  }

  // Custom InputTypes

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountLowQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subCategory: number
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | CategoryCountOutputTypeCountSubCategoryArgs
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    lowerSubCategories: number
    product: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowerSubCategories?: boolean | SubCategoryCountOutputTypeCountLowerSubCategoriesArgs
    product?: boolean | SubCategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountLowerSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    Photo: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Photo?: boolean | ImageCountOutputTypeCountPhotoArgs
  }

  // Custom InputTypes

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }



  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    images: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | CommentCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }



  /**
   * Count Type PagecontentCountOutputType
   */

  export type PagecontentCountOutputType = {
    images: number
  }

  export type PagecontentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | PagecontentCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes

  /**
   * PagecontentCountOutputType without action
   */
  export type PagecontentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagecontentCountOutputType
     */
    select?: PagecontentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PagecontentCountOutputType without action
   */
  export type PagecontentCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }



  /**
   * Count Type MinisliderCountOutputType
   */

  export type MinisliderCountOutputType = {
    Image: number
  }

  export type MinisliderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Image?: boolean | MinisliderCountOutputTypeCountImageArgs
  }

  // Custom InputTypes

  /**
   * MinisliderCountOutputType without action
   */
  export type MinisliderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinisliderCountOutputType
     */
    select?: MinisliderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MinisliderCountOutputType without action
   */
  export type MinisliderCountOutputTypeCountImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    username: string | null
    password: string | null
    email: string | null
    phone: string | null
    age: number | null
    verify: boolean | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    username: string | null
    password: string | null
    email: string | null
    phone: string | null
    age: number | null
    verify: boolean | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    username: number
    password: number
    email: number
    phone: number
    age: number
    verify: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    email?: true
    phone?: true
    age?: true
    verify?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    email?: true
    phone?: true
    age?: true
    verify?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    email?: true
    phone?: true
    age?: true
    verify?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstname: string | null
    lastname: string | null
    username: string
    password: string
    email: string
    phone: string | null
    age: number | null
    verify: boolean | null
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    phone?: boolean
    age?: boolean
    verify?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments?: boolean | User$commentsArgs<ExtArgs>
    star?: boolean | User$starArgs<ExtArgs>
    question?: boolean | User$questionArgs<ExtArgs>
    contactUs?: boolean | User$contactUsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    phone?: boolean
    age?: boolean
    verify?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | User$commentsArgs<ExtArgs>
    star?: boolean | User$starArgs<ExtArgs>
    question?: boolean | User$questionArgs<ExtArgs>
    contactUs?: boolean | User$contactUsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      star: Prisma.$StarPayload<ExtArgs>[]
      question: Prisma.$QuestionPayload<ExtArgs>[]
      contactUs: Prisma.$ContactUsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string | null
      lastname: string | null
      username: string
      password: string
      email: string
      phone: string | null
      age: number | null
      verify: boolean | null
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    star<T extends User$starArgs<ExtArgs> = {}>(args?: Subset<T, User$starArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'findMany'> | Null>;

    question<T extends User$questionArgs<ExtArgs> = {}>(args?: Subset<T, User$questionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findMany'> | Null>;

    contactUs<T extends User$contactUsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactUsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly verify: FieldRef<"User", 'Boolean'>
    readonly deleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationAndSearchRelevanceInput | CommentOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * User.star
   */
  export type User$starArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    where?: StarWhereInput
    orderBy?: StarOrderByWithRelationAndSearchRelevanceInput | StarOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: StarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarScalarFieldEnum | StarScalarFieldEnum[]
  }


  /**
   * User.question
   */
  export type User$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationAndSearchRelevanceInput | QuestionOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * User.contactUs
   */
  export type User$contactUsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    where?: ContactUsWhereInput
    orderBy?: ContactUsOrderByWithRelationAndSearchRelevanceInput | ContactUsOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ContactUsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    subCategoryId: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    subCategoryId: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    name_en: string | null
    title: string | null
    title_en: string | null
    content: string | null
    content_en: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    subCategoryId: number | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    name_en: string | null
    title: string | null
    title_en: string | null
    content: string | null
    content_en: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    subCategoryId: number | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    name_en: number
    title: number
    title_en: number
    content: number
    content_en: number
    otherLangs: number
    deleted: number
    createdAt: number
    updatedAt: number
    subCategoryId: number
    categoryId: number
    tags: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    subCategoryId?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    subCategoryId?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    title?: true
    title_en?: true
    content?: true
    content_en?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    subCategoryId?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    title?: true
    title_en?: true
    content?: true
    content_en?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    subCategoryId?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    title?: true
    title_en?: true
    content?: true
    content_en?: true
    otherLangs?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    subCategoryId?: true
    categoryId?: true
    tags?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    name_en: string | null
    title: string
    title_en: string | null
    content: string
    content_en: string | null
    otherLangs: JsonValue | null
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    subCategoryId: number | null
    categoryId: number | null
    tags: JsonValue | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    name_en?: boolean
    title?: boolean
    title_en?: boolean
    content?: boolean
    content_en?: boolean
    otherLangs?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subCategoryId?: boolean
    categoryId?: boolean
    tags?: boolean
    subCategory?: boolean | Product$subCategoryArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    comments?: boolean | Product$commentsArgs<ExtArgs>
    star?: boolean | Product$starArgs<ExtArgs>
    question?: boolean | Product$questionArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    name_en?: boolean
    title?: boolean
    title_en?: boolean
    content?: boolean
    content_en?: boolean
    otherLangs?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subCategoryId?: boolean
    categoryId?: boolean
    tags?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | Product$subCategoryArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    comments?: boolean | Product$commentsArgs<ExtArgs>
    star?: boolean | Product$starArgs<ExtArgs>
    question?: boolean | Product$questionArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      subCategory: Prisma.$SubCategoryPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
      images: Prisma.$ImagePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      star: Prisma.$StarPayload<ExtArgs>[]
      question: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      name_en: string | null
      title: string
      title_en: string | null
      content: string
      content_en: string | null
      otherLangs: Prisma.JsonValue | null
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
      subCategoryId: number | null
      categoryId: number | null
      tags: Prisma.JsonValue | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subCategory<T extends Product$subCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$subCategoryArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends Product$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    star<T extends Product$starArgs<ExtArgs> = {}>(args?: Subset<T, Product$starArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'findMany'> | Null>;

    question<T extends Product$questionArgs<ExtArgs> = {}>(args?: Subset<T, Product$questionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly name_en: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly title_en: FieldRef<"Product", 'String'>
    readonly content: FieldRef<"Product", 'String'>
    readonly content_en: FieldRef<"Product", 'String'>
    readonly otherLangs: FieldRef<"Product", 'Json'>
    readonly deleted: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly subCategoryId: FieldRef<"Product", 'Int'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly tags: FieldRef<"Product", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.subCategory
   */
  export type Product$subCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
  }


  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationAndSearchRelevanceInput | ImageOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Product.comments
   */
  export type Product$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationAndSearchRelevanceInput | CommentOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Product.star
   */
  export type Product$starArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    where?: StarWhereInput
    orderBy?: StarOrderByWithRelationAndSearchRelevanceInput | StarOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: StarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarScalarFieldEnum | StarScalarFieldEnum[]
  }


  /**
   * Product.question
   */
  export type Product$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationAndSearchRelevanceInput | QuestionOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Star
   */

  export type AggregateStar = {
    _count: StarCountAggregateOutputType | null
    _avg: StarAvgAggregateOutputType | null
    _sum: StarSumAggregateOutputType | null
    _min: StarMinAggregateOutputType | null
    _max: StarMaxAggregateOutputType | null
  }

  export type StarAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    userId: number | null
  }

  export type StarSumAggregateOutputType = {
    id: number | null
    productId: number | null
    userId: number | null
  }

  export type StarMinAggregateOutputType = {
    id: number | null
    productId: number | null
    userId: number | null
  }

  export type StarMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    userId: number | null
  }

  export type StarCountAggregateOutputType = {
    id: number
    productId: number
    userId: number
    _all: number
  }


  export type StarAvgAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
  }

  export type StarSumAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
  }

  export type StarMinAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
  }

  export type StarMaxAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
  }

  export type StarCountAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    _all?: true
  }

  export type StarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Star to aggregate.
     */
    where?: StarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarOrderByWithRelationAndSearchRelevanceInput | StarOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stars
    **/
    _count?: true | StarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StarMaxAggregateInputType
  }

  export type GetStarAggregateType<T extends StarAggregateArgs> = {
        [P in keyof T & keyof AggregateStar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStar[P]>
      : GetScalarType<T[P], AggregateStar[P]>
  }




  export type StarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarWhereInput
    orderBy?: StarOrderByWithAggregationInput | StarOrderByWithAggregationInput[]
    by: StarScalarFieldEnum[] | StarScalarFieldEnum
    having?: StarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StarCountAggregateInputType | true
    _avg?: StarAvgAggregateInputType
    _sum?: StarSumAggregateInputType
    _min?: StarMinAggregateInputType
    _max?: StarMaxAggregateInputType
  }

  export type StarGroupByOutputType = {
    id: number
    productId: number
    userId: number
    _count: StarCountAggregateOutputType | null
    _avg: StarAvgAggregateOutputType | null
    _sum: StarSumAggregateOutputType | null
    _min: StarMinAggregateOutputType | null
    _max: StarMaxAggregateOutputType | null
  }

  type GetStarGroupByPayload<T extends StarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StarGroupByOutputType[P]>
            : GetScalarType<T[P], StarGroupByOutputType[P]>
        }
      >
    >


  export type StarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["star"]>

  export type StarSelectScalar = {
    id?: boolean
    productId?: boolean
    userId?: boolean
  }

  export type StarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $StarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Star"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      userId: number
    }, ExtArgs["result"]["star"]>
    composites: {}
  }


  type StarGetPayload<S extends boolean | null | undefined | StarDefaultArgs> = $Result.GetResult<Prisma.$StarPayload, S>

  type StarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StarFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StarCountAggregateInputType | true
    }

  export interface StarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Star'], meta: { name: 'Star' } }
    /**
     * Find zero or one Star that matches the filter.
     * @param {StarFindUniqueArgs} args - Arguments to find a Star
     * @example
     * // Get one Star
     * const star = await prisma.star.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StarFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StarFindUniqueArgs<ExtArgs>>
    ): Prisma__StarClient<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Star that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StarFindUniqueOrThrowArgs} args - Arguments to find a Star
     * @example
     * // Get one Star
     * const star = await prisma.star.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StarFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StarFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StarClient<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Star that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarFindFirstArgs} args - Arguments to find a Star
     * @example
     * // Get one Star
     * const star = await prisma.star.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StarFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StarFindFirstArgs<ExtArgs>>
    ): Prisma__StarClient<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Star that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarFindFirstOrThrowArgs} args - Arguments to find a Star
     * @example
     * // Get one Star
     * const star = await prisma.star.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StarFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StarFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StarClient<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stars
     * const stars = await prisma.star.findMany()
     * 
     * // Get first 10 Stars
     * const stars = await prisma.star.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const starWithIdOnly = await prisma.star.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StarFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StarFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Star.
     * @param {StarCreateArgs} args - Arguments to create a Star.
     * @example
     * // Create one Star
     * const Star = await prisma.star.create({
     *   data: {
     *     // ... data to create a Star
     *   }
     * })
     * 
    **/
    create<T extends StarCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StarCreateArgs<ExtArgs>>
    ): Prisma__StarClient<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stars.
     *     @param {StarCreateManyArgs} args - Arguments to create many Stars.
     *     @example
     *     // Create many Stars
     *     const star = await prisma.star.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StarCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StarCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Star.
     * @param {StarDeleteArgs} args - Arguments to delete one Star.
     * @example
     * // Delete one Star
     * const Star = await prisma.star.delete({
     *   where: {
     *     // ... filter to delete one Star
     *   }
     * })
     * 
    **/
    delete<T extends StarDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StarDeleteArgs<ExtArgs>>
    ): Prisma__StarClient<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Star.
     * @param {StarUpdateArgs} args - Arguments to update one Star.
     * @example
     * // Update one Star
     * const star = await prisma.star.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StarUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StarUpdateArgs<ExtArgs>>
    ): Prisma__StarClient<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stars.
     * @param {StarDeleteManyArgs} args - Arguments to filter Stars to delete.
     * @example
     * // Delete a few Stars
     * const { count } = await prisma.star.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StarDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StarDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stars
     * const star = await prisma.star.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StarUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StarUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Star.
     * @param {StarUpsertArgs} args - Arguments to update or create a Star.
     * @example
     * // Update or create a Star
     * const star = await prisma.star.upsert({
     *   create: {
     *     // ... data to create a Star
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Star we want to update
     *   }
     * })
    **/
    upsert<T extends StarUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StarUpsertArgs<ExtArgs>>
    ): Prisma__StarClient<$Result.GetResult<Prisma.$StarPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarCountArgs} args - Arguments to filter Stars to count.
     * @example
     * // Count the number of Stars
     * const count = await prisma.star.count({
     *   where: {
     *     // ... the filter for the Stars we want to count
     *   }
     * })
    **/
    count<T extends StarCountArgs>(
      args?: Subset<T, StarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Star.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StarAggregateArgs>(args: Subset<T, StarAggregateArgs>): Prisma.PrismaPromise<GetStarAggregateType<T>>

    /**
     * Group by Star.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StarGroupByArgs['orderBy'] }
        : { orderBy?: StarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Star model
   */
  readonly fields: StarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Star.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Star model
   */ 
  interface StarFieldRefs {
    readonly id: FieldRef<"Star", 'Int'>
    readonly productId: FieldRef<"Star", 'Int'>
    readonly userId: FieldRef<"Star", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Star findUnique
   */
  export type StarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * Filter, which Star to fetch.
     */
    where: StarWhereUniqueInput
  }


  /**
   * Star findUniqueOrThrow
   */
  export type StarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * Filter, which Star to fetch.
     */
    where: StarWhereUniqueInput
  }


  /**
   * Star findFirst
   */
  export type StarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * Filter, which Star to fetch.
     */
    where?: StarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarOrderByWithRelationAndSearchRelevanceInput | StarOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stars.
     */
    cursor?: StarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stars.
     */
    distinct?: StarScalarFieldEnum | StarScalarFieldEnum[]
  }


  /**
   * Star findFirstOrThrow
   */
  export type StarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * Filter, which Star to fetch.
     */
    where?: StarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarOrderByWithRelationAndSearchRelevanceInput | StarOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stars.
     */
    cursor?: StarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stars.
     */
    distinct?: StarScalarFieldEnum | StarScalarFieldEnum[]
  }


  /**
   * Star findMany
   */
  export type StarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarOrderByWithRelationAndSearchRelevanceInput | StarOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stars.
     */
    cursor?: StarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    distinct?: StarScalarFieldEnum | StarScalarFieldEnum[]
  }


  /**
   * Star create
   */
  export type StarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * The data needed to create a Star.
     */
    data: XOR<StarCreateInput, StarUncheckedCreateInput>
  }


  /**
   * Star createMany
   */
  export type StarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stars.
     */
    data: StarCreateManyInput | StarCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Star update
   */
  export type StarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * The data needed to update a Star.
     */
    data: XOR<StarUpdateInput, StarUncheckedUpdateInput>
    /**
     * Choose, which Star to update.
     */
    where: StarWhereUniqueInput
  }


  /**
   * Star updateMany
   */
  export type StarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stars.
     */
    data: XOR<StarUpdateManyMutationInput, StarUncheckedUpdateManyInput>
    /**
     * Filter which Stars to update
     */
    where?: StarWhereInput
  }


  /**
   * Star upsert
   */
  export type StarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * The filter to search for the Star to update in case it exists.
     */
    where: StarWhereUniqueInput
    /**
     * In case the Star found by the `where` argument doesn't exist, create a new Star with this data.
     */
    create: XOR<StarCreateInput, StarUncheckedCreateInput>
    /**
     * In case the Star was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StarUpdateInput, StarUncheckedUpdateInput>
  }


  /**
   * Star delete
   */
  export type StarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
    /**
     * Filter which Star to delete.
     */
    where: StarWhereUniqueInput
  }


  /**
   * Star deleteMany
   */
  export type StarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stars to delete
     */
    where?: StarWhereInput
  }


  /**
   * Star without action
   */
  export type StarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Star
     */
    select?: StarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StarInclude<ExtArgs> | null
  }



  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    userId: number | null
    questionId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    productId: number | null
    userId: number | null
    questionId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    reply: string | null
    answered: boolean | null
    productId: number | null
    userId: number | null
    questionId: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    reply: string | null
    answered: boolean | null
    productId: number | null
    userId: number | null
    questionId: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    content: number
    reply: number
    answered: number
    productId: number
    userId: number
    questionId: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    questionId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    questionId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    reply?: true
    answered?: true
    productId?: true
    userId?: true
    questionId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    reply?: true
    answered?: true
    productId?: true
    userId?: true
    questionId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    reply?: true
    answered?: true
    productId?: true
    userId?: true
    questionId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationAndSearchRelevanceInput | QuestionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    title: string
    content: string
    reply: string | null
    answered: boolean | null
    productId: number | null
    userId: number | null
    questionId: number | null
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    reply?: boolean
    answered?: boolean
    productId?: boolean
    userId?: boolean
    questionId?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | Question$productArgs<ExtArgs>
    user?: boolean | Question$userArgs<ExtArgs>
    topQuestion?: boolean | Question$topQuestionArgs<ExtArgs>
    lowQuestion?: boolean | Question$lowQuestionArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    reply?: boolean
    answered?: boolean
    productId?: boolean
    userId?: boolean
    questionId?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Question$productArgs<ExtArgs>
    user?: boolean | Question$userArgs<ExtArgs>
    topQuestion?: boolean | Question$topQuestionArgs<ExtArgs>
    lowQuestion?: boolean | Question$lowQuestionArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      topQuestion: Prisma.$QuestionPayload<ExtArgs> | null
      lowQuestion: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      reply: string | null
      answered: boolean | null
      productId: number | null
      userId: number | null
      questionId: number | null
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }


  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
    **/
    create<T extends QuestionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Questions.
     *     @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const question = await prisma.question.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
    **/
    delete<T extends QuestionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends Question$productArgs<ExtArgs> = {}>(args?: Subset<T, Question$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user<T extends Question$userArgs<ExtArgs> = {}>(args?: Subset<T, Question$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    topQuestion<T extends Question$topQuestionArgs<ExtArgs> = {}>(args?: Subset<T, Question$topQuestionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    lowQuestion<T extends Question$lowQuestionArgs<ExtArgs> = {}>(args?: Subset<T, Question$lowQuestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly title: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly reply: FieldRef<"Question", 'String'>
    readonly answered: FieldRef<"Question", 'Boolean'>
    readonly productId: FieldRef<"Question", 'Int'>
    readonly userId: FieldRef<"Question", 'Int'>
    readonly questionId: FieldRef<"Question", 'Int'>
    readonly deleted: FieldRef<"Question", 'Boolean'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationAndSearchRelevanceInput | QuestionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationAndSearchRelevanceInput | QuestionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationAndSearchRelevanceInput | QuestionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }


  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }


  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }


  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }


  /**
   * Question.product
   */
  export type Question$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }


  /**
   * Question.user
   */
  export type Question$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Question.topQuestion
   */
  export type Question$topQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }


  /**
   * Question.lowQuestion
   */
  export type Question$lowQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationAndSearchRelevanceInput | QuestionOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    name_en: string | null
    description: string | null
    description_en: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    name_en: string | null
    description: string | null
    description_en: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    name_en: number
    description: number
    description_en: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    description?: true
    description_en?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    description?: true
    description_en?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    description?: true
    description_en?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput | CategoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    name_en: string | null
    description: string | null
    description_en: string | null
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    name_en?: boolean
    description?: boolean
    description_en?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subCategory?: boolean | Category$subCategoryArgs<ExtArgs>
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    name_en?: boolean
    description?: boolean
    description_en?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | Category$subCategoryArgs<ExtArgs>
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      subCategory: Prisma.$SubCategoryPayload<ExtArgs>[]
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      name_en: string | null
      description: string | null
      description_en: string | null
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subCategory<T extends Category$subCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    product<T extends Category$productArgs<ExtArgs> = {}>(args?: Subset<T, Category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly name_en: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly description_en: FieldRef<"Category", 'String'>
    readonly deleted: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput | CategoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput | CategoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput | CategoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.subCategory
   */
  export type Category$subCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationAndSearchRelevanceInput | SubCategoryOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * Category.product
   */
  export type Category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    lowerSubCategoryId: number | null
  }

  export type SubCategorySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    lowerSubCategoryId: number | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    name_en: string | null
    description: string | null
    description_en: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
    lowerSubCategoryId: number | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    name_en: string | null
    description: string | null
    description_en: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
    lowerSubCategoryId: number | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    name: number
    name_en: number
    description: number
    description_en: number
    deleted: number
    createdAt: number
    updatedAt: number
    categoryId: number
    lowerSubCategoryId: number
    _all: number
  }


  export type SubCategoryAvgAggregateInputType = {
    id?: true
    categoryId?: true
    lowerSubCategoryId?: true
  }

  export type SubCategorySumAggregateInputType = {
    id?: true
    categoryId?: true
    lowerSubCategoryId?: true
  }

  export type SubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    description?: true
    description_en?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    lowerSubCategoryId?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    description?: true
    description_en?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    lowerSubCategoryId?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    name_en?: true
    description?: true
    description_en?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    lowerSubCategoryId?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationAndSearchRelevanceInput | SubCategoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _avg?: SubCategoryAvgAggregateInputType
    _sum?: SubCategorySumAggregateInputType
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: number
    name: string
    name_en: string | null
    description: string | null
    description_en: string | null
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    categoryId: number | null
    lowerSubCategoryId: number | null
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    name_en?: boolean
    description?: boolean
    description_en?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    lowerSubCategoryId?: boolean
    category?: boolean | SubCategory$categoryArgs<ExtArgs>
    topSubCategory?: boolean | SubCategory$topSubCategoryArgs<ExtArgs>
    lowerSubCategories?: boolean | SubCategory$lowerSubCategoriesArgs<ExtArgs>
    product?: boolean | SubCategory$productArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    name_en?: boolean
    description?: boolean
    description_en?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    lowerSubCategoryId?: boolean
  }

  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SubCategory$categoryArgs<ExtArgs>
    topSubCategory?: boolean | SubCategory$topSubCategoryArgs<ExtArgs>
    lowerSubCategories?: boolean | SubCategory$lowerSubCategoriesArgs<ExtArgs>
    product?: boolean | SubCategory$productArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      topSubCategory: Prisma.$SubCategoryPayload<ExtArgs> | null
      lowerSubCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      name_en: string | null
      description: string | null
      description_en: string | null
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
      categoryId: number | null
      lowerSubCategoryId: number | null
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }


  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SubCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
    **/
    create<T extends SubCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SubCategories.
     *     @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     *     @example
     *     // Create many SubCategories
     *     const subCategory = await prisma.subCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
    **/
    delete<T extends SubCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
    **/
    upsert<T extends SubCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends SubCategory$categoryArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    topSubCategory<T extends SubCategory$topSubCategoryArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$topSubCategoryArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    lowerSubCategories<T extends SubCategory$lowerSubCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$lowerSubCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    product<T extends SubCategory$productArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SubCategory model
   */ 
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'Int'>
    readonly name: FieldRef<"SubCategory", 'String'>
    readonly name_en: FieldRef<"SubCategory", 'String'>
    readonly description: FieldRef<"SubCategory", 'String'>
    readonly description_en: FieldRef<"SubCategory", 'String'>
    readonly deleted: FieldRef<"SubCategory", 'Boolean'>
    readonly createdAt: FieldRef<"SubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SubCategory", 'DateTime'>
    readonly categoryId: FieldRef<"SubCategory", 'Int'>
    readonly lowerSubCategoryId: FieldRef<"SubCategory", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationAndSearchRelevanceInput | SubCategoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationAndSearchRelevanceInput | SubCategoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationAndSearchRelevanceInput | SubCategoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }


  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }


  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory.category
   */
  export type SubCategory$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * SubCategory.topSubCategory
   */
  export type SubCategory$topSubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory.lowerSubCategories
   */
  export type SubCategory$lowerSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationAndSearchRelevanceInput | SubCategoryOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory.product
   */
  export type SubCategory$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    pageContentId: number | null
    commentId: number | null
    minisliderId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    productId: number | null
    pageContentId: number | null
    commentId: number | null
    minisliderId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    path: string | null
    name: string | null
    ownerName: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: number | null
    pageContentId: number | null
    commentId: number | null
    minisliderId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    path: string | null
    name: string | null
    ownerName: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: number | null
    pageContentId: number | null
    commentId: number | null
    minisliderId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    path: number
    name: number
    ownerName: number
    deleted: number
    createdAt: number
    updatedAt: number
    productId: number
    pageContentId: number
    commentId: number
    minisliderId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    productId?: true
    pageContentId?: true
    commentId?: true
    minisliderId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    productId?: true
    pageContentId?: true
    commentId?: true
    minisliderId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    path?: true
    name?: true
    ownerName?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    pageContentId?: true
    commentId?: true
    minisliderId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    path?: true
    name?: true
    ownerName?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    pageContentId?: true
    commentId?: true
    minisliderId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    path?: true
    name?: true
    ownerName?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    pageContentId?: true
    commentId?: true
    minisliderId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationAndSearchRelevanceInput | ImageOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    path: string
    name: string
    ownerName: string | null
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    productId: number | null
    pageContentId: number | null
    commentId: number | null
    minisliderId: number | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    name?: boolean
    ownerName?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    pageContentId?: boolean
    commentId?: boolean
    minisliderId?: boolean
    product?: boolean | Image$productArgs<ExtArgs>
    pageContent?: boolean | Image$pageContentArgs<ExtArgs>
    comment?: boolean | Image$commentArgs<ExtArgs>
    minislider?: boolean | Image$minisliderArgs<ExtArgs>
    Photo?: boolean | Image$PhotoArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    path?: boolean
    name?: boolean
    ownerName?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    pageContentId?: boolean
    commentId?: boolean
    minisliderId?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Image$productArgs<ExtArgs>
    pageContent?: boolean | Image$pageContentArgs<ExtArgs>
    comment?: boolean | Image$commentArgs<ExtArgs>
    minislider?: boolean | Image$minisliderArgs<ExtArgs>
    Photo?: boolean | Image$PhotoArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
      pageContent: Prisma.$PagecontentPayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs> | null
      minislider: Prisma.$MinisliderPayload<ExtArgs> | null
      Photo: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      name: string
      ownerName: string | null
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
      productId: number | null
      pageContentId: number | null
      commentId: number | null
      minisliderId: number | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends Image$productArgs<ExtArgs> = {}>(args?: Subset<T, Image$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    pageContent<T extends Image$pageContentArgs<ExtArgs> = {}>(args?: Subset<T, Image$pageContentArgs<ExtArgs>>): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    comment<T extends Image$commentArgs<ExtArgs> = {}>(args?: Subset<T, Image$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    minislider<T extends Image$minisliderArgs<ExtArgs> = {}>(args?: Subset<T, Image$minisliderArgs<ExtArgs>>): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Photo<T extends Image$PhotoArgs<ExtArgs> = {}>(args?: Subset<T, Image$PhotoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly path: FieldRef<"Image", 'String'>
    readonly name: FieldRef<"Image", 'String'>
    readonly ownerName: FieldRef<"Image", 'String'>
    readonly deleted: FieldRef<"Image", 'Boolean'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
    readonly productId: FieldRef<"Image", 'Int'>
    readonly pageContentId: FieldRef<"Image", 'Int'>
    readonly commentId: FieldRef<"Image", 'Int'>
    readonly minisliderId: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationAndSearchRelevanceInput | ImageOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationAndSearchRelevanceInput | ImageOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationAndSearchRelevanceInput | ImageOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image.product
   */
  export type Image$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }


  /**
   * Image.pageContent
   */
  export type Image$pageContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    where?: PagecontentWhereInput
  }


  /**
   * Image.comment
   */
  export type Image$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }


  /**
   * Image.minislider
   */
  export type Image$minisliderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    where?: MinisliderWhereInput
  }


  /**
   * Image.Photo
   */
  export type Image$PhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationAndSearchRelevanceInput | PhotoOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
  }



  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    imageId: number | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    imageId: number | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    name: number
    type: number
    imageId: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    imageId?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    imageId?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    imageId?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationAndSearchRelevanceInput | PhotoOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    name: string | null
    type: string | null
    imageId: number
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    imageId?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    imageId?: boolean
  }

  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }


  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      type: string | null
      imageId: number
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }


  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Photo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhotoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
    **/
    create<T extends PhotoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Photos.
     *     @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     *     @example
     *     // Create many Photos
     *     const photo = await prisma.photo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhotoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
    **/
    delete<T extends PhotoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
    **/
    upsert<T extends PhotoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Photo model
   */ 
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly name: FieldRef<"Photo", 'String'>
    readonly type: FieldRef<"Photo", 'String'>
    readonly imageId: FieldRef<"Photo", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationAndSearchRelevanceInput | PhotoOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationAndSearchRelevanceInput | PhotoOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationAndSearchRelevanceInput | PhotoOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }


  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
  }


  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }


  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
  }


  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
  }



  /**
   * Model Phototype
   */

  export type AggregatePhototype = {
    _count: PhototypeCountAggregateOutputType | null
    _avg: PhototypeAvgAggregateOutputType | null
    _sum: PhototypeSumAggregateOutputType | null
    _min: PhototypeMinAggregateOutputType | null
    _max: PhototypeMaxAggregateOutputType | null
  }

  export type PhototypeAvgAggregateOutputType = {
    id: number | null
  }

  export type PhototypeSumAggregateOutputType = {
    id: number | null
  }

  export type PhototypeMinAggregateOutputType = {
    id: number | null
    typeName: string | null
  }

  export type PhototypeMaxAggregateOutputType = {
    id: number | null
    typeName: string | null
  }

  export type PhototypeCountAggregateOutputType = {
    id: number
    typeName: number
    _all: number
  }


  export type PhototypeAvgAggregateInputType = {
    id?: true
  }

  export type PhototypeSumAggregateInputType = {
    id?: true
  }

  export type PhototypeMinAggregateInputType = {
    id?: true
    typeName?: true
  }

  export type PhototypeMaxAggregateInputType = {
    id?: true
    typeName?: true
  }

  export type PhototypeCountAggregateInputType = {
    id?: true
    typeName?: true
    _all?: true
  }

  export type PhototypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phototype to aggregate.
     */
    where?: PhototypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phototypes to fetch.
     */
    orderBy?: PhototypeOrderByWithRelationAndSearchRelevanceInput | PhototypeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhototypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phototypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phototypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phototypes
    **/
    _count?: true | PhototypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhototypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhototypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhototypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhototypeMaxAggregateInputType
  }

  export type GetPhototypeAggregateType<T extends PhototypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePhototype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhototype[P]>
      : GetScalarType<T[P], AggregatePhototype[P]>
  }




  export type PhototypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhototypeWhereInput
    orderBy?: PhototypeOrderByWithAggregationInput | PhototypeOrderByWithAggregationInput[]
    by: PhototypeScalarFieldEnum[] | PhototypeScalarFieldEnum
    having?: PhototypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhototypeCountAggregateInputType | true
    _avg?: PhototypeAvgAggregateInputType
    _sum?: PhototypeSumAggregateInputType
    _min?: PhototypeMinAggregateInputType
    _max?: PhototypeMaxAggregateInputType
  }

  export type PhototypeGroupByOutputType = {
    id: number
    typeName: string
    _count: PhototypeCountAggregateOutputType | null
    _avg: PhototypeAvgAggregateOutputType | null
    _sum: PhototypeSumAggregateOutputType | null
    _min: PhototypeMinAggregateOutputType | null
    _max: PhototypeMaxAggregateOutputType | null
  }

  type GetPhototypeGroupByPayload<T extends PhototypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhototypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhototypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhototypeGroupByOutputType[P]>
            : GetScalarType<T[P], PhototypeGroupByOutputType[P]>
        }
      >
    >


  export type PhototypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
  }, ExtArgs["result"]["phototype"]>

  export type PhototypeSelectScalar = {
    id?: boolean
    typeName?: boolean
  }


  export type $PhototypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phototype"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      typeName: string
    }, ExtArgs["result"]["phototype"]>
    composites: {}
  }


  type PhototypeGetPayload<S extends boolean | null | undefined | PhototypeDefaultArgs> = $Result.GetResult<Prisma.$PhototypePayload, S>

  type PhototypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhototypeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PhototypeCountAggregateInputType | true
    }

  export interface PhototypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phototype'], meta: { name: 'Phototype' } }
    /**
     * Find zero or one Phototype that matches the filter.
     * @param {PhototypeFindUniqueArgs} args - Arguments to find a Phototype
     * @example
     * // Get one Phototype
     * const phototype = await prisma.phototype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhototypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhototypeFindUniqueArgs<ExtArgs>>
    ): Prisma__PhototypeClient<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Phototype that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhototypeFindUniqueOrThrowArgs} args - Arguments to find a Phototype
     * @example
     * // Get one Phototype
     * const phototype = await prisma.phototype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhototypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhototypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhototypeClient<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Phototype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhototypeFindFirstArgs} args - Arguments to find a Phototype
     * @example
     * // Get one Phototype
     * const phototype = await prisma.phototype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhototypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhototypeFindFirstArgs<ExtArgs>>
    ): Prisma__PhototypeClient<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Phototype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhototypeFindFirstOrThrowArgs} args - Arguments to find a Phototype
     * @example
     * // Get one Phototype
     * const phototype = await prisma.phototype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhototypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhototypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhototypeClient<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Phototypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhototypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phototypes
     * const phototypes = await prisma.phototype.findMany()
     * 
     * // Get first 10 Phototypes
     * const phototypes = await prisma.phototype.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phototypeWithIdOnly = await prisma.phototype.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhototypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhototypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Phototype.
     * @param {PhototypeCreateArgs} args - Arguments to create a Phototype.
     * @example
     * // Create one Phototype
     * const Phototype = await prisma.phototype.create({
     *   data: {
     *     // ... data to create a Phototype
     *   }
     * })
     * 
    **/
    create<T extends PhototypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhototypeCreateArgs<ExtArgs>>
    ): Prisma__PhototypeClient<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Phototypes.
     *     @param {PhototypeCreateManyArgs} args - Arguments to create many Phototypes.
     *     @example
     *     // Create many Phototypes
     *     const phototype = await prisma.phototype.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhototypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhototypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phototype.
     * @param {PhototypeDeleteArgs} args - Arguments to delete one Phototype.
     * @example
     * // Delete one Phototype
     * const Phototype = await prisma.phototype.delete({
     *   where: {
     *     // ... filter to delete one Phototype
     *   }
     * })
     * 
    **/
    delete<T extends PhototypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhototypeDeleteArgs<ExtArgs>>
    ): Prisma__PhototypeClient<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Phototype.
     * @param {PhototypeUpdateArgs} args - Arguments to update one Phototype.
     * @example
     * // Update one Phototype
     * const phototype = await prisma.phototype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhototypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhototypeUpdateArgs<ExtArgs>>
    ): Prisma__PhototypeClient<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Phototypes.
     * @param {PhototypeDeleteManyArgs} args - Arguments to filter Phototypes to delete.
     * @example
     * // Delete a few Phototypes
     * const { count } = await prisma.phototype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhototypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhototypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phototypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhototypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phototypes
     * const phototype = await prisma.phototype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhototypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhototypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phototype.
     * @param {PhototypeUpsertArgs} args - Arguments to update or create a Phototype.
     * @example
     * // Update or create a Phototype
     * const phototype = await prisma.phototype.upsert({
     *   create: {
     *     // ... data to create a Phototype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phototype we want to update
     *   }
     * })
    **/
    upsert<T extends PhototypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhototypeUpsertArgs<ExtArgs>>
    ): Prisma__PhototypeClient<$Result.GetResult<Prisma.$PhototypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Phototypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhototypeCountArgs} args - Arguments to filter Phototypes to count.
     * @example
     * // Count the number of Phototypes
     * const count = await prisma.phototype.count({
     *   where: {
     *     // ... the filter for the Phototypes we want to count
     *   }
     * })
    **/
    count<T extends PhototypeCountArgs>(
      args?: Subset<T, PhototypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhototypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phototype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhototypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhototypeAggregateArgs>(args: Subset<T, PhototypeAggregateArgs>): Prisma.PrismaPromise<GetPhototypeAggregateType<T>>

    /**
     * Group by Phototype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhototypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhototypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhototypeGroupByArgs['orderBy'] }
        : { orderBy?: PhototypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhototypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhototypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phototype model
   */
  readonly fields: PhototypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phototype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhototypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Phototype model
   */ 
  interface PhototypeFieldRefs {
    readonly id: FieldRef<"Phototype", 'Int'>
    readonly typeName: FieldRef<"Phototype", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Phototype findUnique
   */
  export type PhototypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * Filter, which Phototype to fetch.
     */
    where: PhototypeWhereUniqueInput
  }


  /**
   * Phototype findUniqueOrThrow
   */
  export type PhototypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * Filter, which Phototype to fetch.
     */
    where: PhototypeWhereUniqueInput
  }


  /**
   * Phototype findFirst
   */
  export type PhototypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * Filter, which Phototype to fetch.
     */
    where?: PhototypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phototypes to fetch.
     */
    orderBy?: PhototypeOrderByWithRelationAndSearchRelevanceInput | PhototypeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phototypes.
     */
    cursor?: PhototypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phototypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phototypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phototypes.
     */
    distinct?: PhototypeScalarFieldEnum | PhototypeScalarFieldEnum[]
  }


  /**
   * Phototype findFirstOrThrow
   */
  export type PhototypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * Filter, which Phototype to fetch.
     */
    where?: PhototypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phototypes to fetch.
     */
    orderBy?: PhototypeOrderByWithRelationAndSearchRelevanceInput | PhototypeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phototypes.
     */
    cursor?: PhototypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phototypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phototypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phototypes.
     */
    distinct?: PhototypeScalarFieldEnum | PhototypeScalarFieldEnum[]
  }


  /**
   * Phototype findMany
   */
  export type PhototypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * Filter, which Phototypes to fetch.
     */
    where?: PhototypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phototypes to fetch.
     */
    orderBy?: PhototypeOrderByWithRelationAndSearchRelevanceInput | PhototypeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phototypes.
     */
    cursor?: PhototypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phototypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phototypes.
     */
    skip?: number
    distinct?: PhototypeScalarFieldEnum | PhototypeScalarFieldEnum[]
  }


  /**
   * Phototype create
   */
  export type PhototypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * The data needed to create a Phototype.
     */
    data: XOR<PhototypeCreateInput, PhototypeUncheckedCreateInput>
  }


  /**
   * Phototype createMany
   */
  export type PhototypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phototypes.
     */
    data: PhototypeCreateManyInput | PhototypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Phototype update
   */
  export type PhototypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * The data needed to update a Phototype.
     */
    data: XOR<PhototypeUpdateInput, PhototypeUncheckedUpdateInput>
    /**
     * Choose, which Phototype to update.
     */
    where: PhototypeWhereUniqueInput
  }


  /**
   * Phototype updateMany
   */
  export type PhototypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phototypes.
     */
    data: XOR<PhototypeUpdateManyMutationInput, PhototypeUncheckedUpdateManyInput>
    /**
     * Filter which Phototypes to update
     */
    where?: PhototypeWhereInput
  }


  /**
   * Phototype upsert
   */
  export type PhototypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * The filter to search for the Phototype to update in case it exists.
     */
    where: PhototypeWhereUniqueInput
    /**
     * In case the Phototype found by the `where` argument doesn't exist, create a new Phototype with this data.
     */
    create: XOR<PhototypeCreateInput, PhototypeUncheckedCreateInput>
    /**
     * In case the Phototype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhototypeUpdateInput, PhototypeUncheckedUpdateInput>
  }


  /**
   * Phototype delete
   */
  export type PhototypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
    /**
     * Filter which Phototype to delete.
     */
    where: PhototypeWhereUniqueInput
  }


  /**
   * Phototype deleteMany
   */
  export type PhototypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phototypes to delete
     */
    where?: PhototypeWhereInput
  }


  /**
   * Phototype without action
   */
  export type PhototypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phototype
     */
    select?: PhototypeSelect<ExtArgs> | null
  }



  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    point: number | null
    productId: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    point: number | null
    productId: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    username: string | null
    title: string | null
    content: string | null
    point: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: number | null
    userId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    username: string | null
    title: string | null
    content: string | null
    point: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: number | null
    userId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    username: number
    title: number
    content: number
    point: number
    deleted: number
    createdAt: number
    updatedAt: number
    productId: number
    userId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    point?: true
    productId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    point?: true
    productId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    username?: true
    title?: true
    content?: true
    point?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    username?: true
    title?: true
    content?: true
    point?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    username?: true
    title?: true
    content?: true
    point?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationAndSearchRelevanceInput | CommentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    username: string | null
    title: string | null
    content: string | null
    point: number | null
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    productId: number
    userId: number | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    title?: boolean
    content?: boolean
    point?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    userId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
    images?: boolean | Comment$imagesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    username?: boolean
    title?: boolean
    content?: boolean
    point?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    userId?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
    images?: boolean | Comment$imagesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      title: string | null
      content: string | null
      point: number | null
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
      productId: number
      userId: number | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }


  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends Comment$userArgs<ExtArgs> = {}>(args?: Subset<T, Comment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    images<T extends Comment$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly username: FieldRef<"Comment", 'String'>
    readonly title: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly point: FieldRef<"Comment", 'Int'>
    readonly deleted: FieldRef<"Comment", 'Boolean'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly productId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationAndSearchRelevanceInput | CommentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationAndSearchRelevanceInput | CommentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationAndSearchRelevanceInput | CommentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment.user
   */
  export type Comment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Comment.images
   */
  export type Comment$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationAndSearchRelevanceInput | ImageOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
  }



  /**
   * Model ContactUs
   */

  export type AggregateContactUs = {
    _count: ContactUsCountAggregateOutputType | null
    _avg: ContactUsAvgAggregateOutputType | null
    _sum: ContactUsSumAggregateOutputType | null
    _min: ContactUsMinAggregateOutputType | null
    _max: ContactUsMaxAggregateOutputType | null
  }

  export type ContactUsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactUsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactUsMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    email: string | null
    phone: string | null
    title: string | null
    content: string | null
    readed: boolean | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ContactUsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    email: string | null
    phone: string | null
    title: string | null
    content: string | null
    readed: boolean | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ContactUsCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    email: number
    phone: number
    title: number
    content: number
    readed: number
    deleted: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ContactUsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactUsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactUsMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    phone?: true
    title?: true
    content?: true
    readed?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContactUsMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    phone?: true
    title?: true
    content?: true
    readed?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContactUsCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    phone?: true
    title?: true
    content?: true
    readed?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ContactUsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactUs to aggregate.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationAndSearchRelevanceInput | ContactUsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contactuses
    **/
    _count?: true | ContactUsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactUsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactUsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactUsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactUsMaxAggregateInputType
  }

  export type GetContactUsAggregateType<T extends ContactUsAggregateArgs> = {
        [P in keyof T & keyof AggregateContactUs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactUs[P]>
      : GetScalarType<T[P], AggregateContactUs[P]>
  }




  export type ContactUsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactUsWhereInput
    orderBy?: ContactUsOrderByWithAggregationInput | ContactUsOrderByWithAggregationInput[]
    by: ContactUsScalarFieldEnum[] | ContactUsScalarFieldEnum
    having?: ContactUsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactUsCountAggregateInputType | true
    _avg?: ContactUsAvgAggregateInputType
    _sum?: ContactUsSumAggregateInputType
    _min?: ContactUsMinAggregateInputType
    _max?: ContactUsMaxAggregateInputType
  }

  export type ContactUsGroupByOutputType = {
    id: number
    name: string | null
    surname: string | null
    email: string | null
    phone: string | null
    title: string | null
    content: string | null
    readed: boolean | null
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    userId: number | null
    _count: ContactUsCountAggregateOutputType | null
    _avg: ContactUsAvgAggregateOutputType | null
    _sum: ContactUsSumAggregateOutputType | null
    _min: ContactUsMinAggregateOutputType | null
    _max: ContactUsMaxAggregateOutputType | null
  }

  type GetContactUsGroupByPayload<T extends ContactUsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactUsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactUsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactUsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactUsGroupByOutputType[P]>
        }
      >
    >


  export type ContactUsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    phone?: boolean
    title?: boolean
    content?: boolean
    readed?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | ContactUs$userArgs<ExtArgs>
  }, ExtArgs["result"]["contactUs"]>

  export type ContactUsSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    phone?: boolean
    title?: boolean
    content?: boolean
    readed?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ContactUsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ContactUs$userArgs<ExtArgs>
  }


  export type $ContactUsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactUs"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      surname: string | null
      email: string | null
      phone: string | null
      title: string | null
      content: string | null
      readed: boolean | null
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
      userId: number | null
    }, ExtArgs["result"]["contactUs"]>
    composites: {}
  }


  type ContactUsGetPayload<S extends boolean | null | undefined | ContactUsDefaultArgs> = $Result.GetResult<Prisma.$ContactUsPayload, S>

  type ContactUsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactUsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ContactUsCountAggregateInputType | true
    }

  export interface ContactUsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactUs'], meta: { name: 'ContactUs' } }
    /**
     * Find zero or one ContactUs that matches the filter.
     * @param {ContactUsFindUniqueArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactUsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUsFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactUs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactUsFindUniqueOrThrowArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactUsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactUsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactUs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindFirstArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactUsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactUsFindFirstArgs<ExtArgs>>
    ): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactUs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindFirstOrThrowArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactUsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactUsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contactuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactuses
     * const contactuses = await prisma.contactUs.findMany()
     * 
     * // Get first 10 Contactuses
     * const contactuses = await prisma.contactUs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactUsWithIdOnly = await prisma.contactUs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactUsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactUsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactUs.
     * @param {ContactUsCreateArgs} args - Arguments to create a ContactUs.
     * @example
     * // Create one ContactUs
     * const ContactUs = await prisma.contactUs.create({
     *   data: {
     *     // ... data to create a ContactUs
     *   }
     * })
     * 
    **/
    create<T extends ContactUsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUsCreateArgs<ExtArgs>>
    ): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contactuses.
     *     @param {ContactUsCreateManyArgs} args - Arguments to create many Contactuses.
     *     @example
     *     // Create many Contactuses
     *     const contactUs = await prisma.contactUs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactUsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactUsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactUs.
     * @param {ContactUsDeleteArgs} args - Arguments to delete one ContactUs.
     * @example
     * // Delete one ContactUs
     * const ContactUs = await prisma.contactUs.delete({
     *   where: {
     *     // ... filter to delete one ContactUs
     *   }
     * })
     * 
    **/
    delete<T extends ContactUsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUsDeleteArgs<ExtArgs>>
    ): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactUs.
     * @param {ContactUsUpdateArgs} args - Arguments to update one ContactUs.
     * @example
     * // Update one ContactUs
     * const contactUs = await prisma.contactUs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUsUpdateArgs<ExtArgs>>
    ): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contactuses.
     * @param {ContactUsDeleteManyArgs} args - Arguments to filter Contactuses to delete.
     * @example
     * // Delete a few Contactuses
     * const { count } = await prisma.contactUs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactUsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactUsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactuses
     * const contactUs = await prisma.contactUs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactUs.
     * @param {ContactUsUpsertArgs} args - Arguments to update or create a ContactUs.
     * @example
     * // Update or create a ContactUs
     * const contactUs = await prisma.contactUs.upsert({
     *   create: {
     *     // ... data to create a ContactUs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactUs we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUsUpsertArgs<ExtArgs>>
    ): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contactuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsCountArgs} args - Arguments to filter Contactuses to count.
     * @example
     * // Count the number of Contactuses
     * const count = await prisma.contactUs.count({
     *   where: {
     *     // ... the filter for the Contactuses we want to count
     *   }
     * })
    **/
    count<T extends ContactUsCountArgs>(
      args?: Subset<T, ContactUsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactUsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactUsAggregateArgs>(args: Subset<T, ContactUsAggregateArgs>): Prisma.PrismaPromise<GetContactUsAggregateType<T>>

    /**
     * Group by ContactUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactUsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactUsGroupByArgs['orderBy'] }
        : { orderBy?: ContactUsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactUsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactUsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactUs model
   */
  readonly fields: ContactUsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactUs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactUsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends ContactUs$userArgs<ExtArgs> = {}>(args?: Subset<T, ContactUs$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactUs model
   */ 
  interface ContactUsFieldRefs {
    readonly id: FieldRef<"ContactUs", 'Int'>
    readonly name: FieldRef<"ContactUs", 'String'>
    readonly surname: FieldRef<"ContactUs", 'String'>
    readonly email: FieldRef<"ContactUs", 'String'>
    readonly phone: FieldRef<"ContactUs", 'String'>
    readonly title: FieldRef<"ContactUs", 'String'>
    readonly content: FieldRef<"ContactUs", 'String'>
    readonly readed: FieldRef<"ContactUs", 'Boolean'>
    readonly deleted: FieldRef<"ContactUs", 'Boolean'>
    readonly createdAt: FieldRef<"ContactUs", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactUs", 'DateTime'>
    readonly userId: FieldRef<"ContactUs", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ContactUs findUnique
   */
  export type ContactUsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where: ContactUsWhereUniqueInput
  }


  /**
   * ContactUs findUniqueOrThrow
   */
  export type ContactUsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where: ContactUsWhereUniqueInput
  }


  /**
   * ContactUs findFirst
   */
  export type ContactUsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationAndSearchRelevanceInput | ContactUsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactuses.
     */
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }


  /**
   * ContactUs findFirstOrThrow
   */
  export type ContactUsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationAndSearchRelevanceInput | ContactUsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactuses.
     */
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }


  /**
   * ContactUs findMany
   */
  export type ContactUsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * Filter, which Contactuses to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationAndSearchRelevanceInput | ContactUsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }


  /**
   * ContactUs create
   */
  export type ContactUsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactUs.
     */
    data: XOR<ContactUsCreateInput, ContactUsUncheckedCreateInput>
  }


  /**
   * ContactUs createMany
   */
  export type ContactUsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contactuses.
     */
    data: ContactUsCreateManyInput | ContactUsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ContactUs update
   */
  export type ContactUsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactUs.
     */
    data: XOR<ContactUsUpdateInput, ContactUsUncheckedUpdateInput>
    /**
     * Choose, which ContactUs to update.
     */
    where: ContactUsWhereUniqueInput
  }


  /**
   * ContactUs updateMany
   */
  export type ContactUsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contactuses.
     */
    data: XOR<ContactUsUpdateManyMutationInput, ContactUsUncheckedUpdateManyInput>
    /**
     * Filter which Contactuses to update
     */
    where?: ContactUsWhereInput
  }


  /**
   * ContactUs upsert
   */
  export type ContactUsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactUs to update in case it exists.
     */
    where: ContactUsWhereUniqueInput
    /**
     * In case the ContactUs found by the `where` argument doesn't exist, create a new ContactUs with this data.
     */
    create: XOR<ContactUsCreateInput, ContactUsUncheckedCreateInput>
    /**
     * In case the ContactUs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUsUpdateInput, ContactUsUncheckedUpdateInput>
  }


  /**
   * ContactUs delete
   */
  export type ContactUsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
    /**
     * Filter which ContactUs to delete.
     */
    where: ContactUsWhereUniqueInput
  }


  /**
   * ContactUs deleteMany
   */
  export type ContactUsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contactuses to delete
     */
    where?: ContactUsWhereInput
  }


  /**
   * ContactUs.user
   */
  export type ContactUs$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * ContactUs without action
   */
  export type ContactUsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactUsInclude<ExtArgs> | null
  }



  /**
   * Model Pagecontent
   */

  export type AggregatePagecontent = {
    _count: PagecontentCountAggregateOutputType | null
    _avg: PagecontentAvgAggregateOutputType | null
    _sum: PagecontentSumAggregateOutputType | null
    _min: PagecontentMinAggregateOutputType | null
    _max: PagecontentMaxAggregateOutputType | null
  }

  export type PagecontentAvgAggregateOutputType = {
    id: number | null
  }

  export type PagecontentSumAggregateOutputType = {
    id: number | null
  }

  export type PagecontentMinAggregateOutputType = {
    id: number | null
    locale: string | null
    bigTitle: string | null
    title: string | null
    content: string | null
    pageName: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PagecontentMaxAggregateOutputType = {
    id: number | null
    locale: string | null
    bigTitle: string | null
    title: string | null
    content: string | null
    pageName: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PagecontentCountAggregateOutputType = {
    id: number
    locale: number
    bigTitle: number
    title: number
    content: number
    pageName: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PagecontentAvgAggregateInputType = {
    id?: true
  }

  export type PagecontentSumAggregateInputType = {
    id?: true
  }

  export type PagecontentMinAggregateInputType = {
    id?: true
    locale?: true
    bigTitle?: true
    title?: true
    content?: true
    pageName?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PagecontentMaxAggregateInputType = {
    id?: true
    locale?: true
    bigTitle?: true
    title?: true
    content?: true
    pageName?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PagecontentCountAggregateInputType = {
    id?: true
    locale?: true
    bigTitle?: true
    title?: true
    content?: true
    pageName?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PagecontentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagecontent to aggregate.
     */
    where?: PagecontentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagecontents to fetch.
     */
    orderBy?: PagecontentOrderByWithRelationAndSearchRelevanceInput | PagecontentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagecontentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagecontents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagecontents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagecontents
    **/
    _count?: true | PagecontentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagecontentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagecontentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagecontentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagecontentMaxAggregateInputType
  }

  export type GetPagecontentAggregateType<T extends PagecontentAggregateArgs> = {
        [P in keyof T & keyof AggregatePagecontent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagecontent[P]>
      : GetScalarType<T[P], AggregatePagecontent[P]>
  }




  export type PagecontentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagecontentWhereInput
    orderBy?: PagecontentOrderByWithAggregationInput | PagecontentOrderByWithAggregationInput[]
    by: PagecontentScalarFieldEnum[] | PagecontentScalarFieldEnum
    having?: PagecontentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagecontentCountAggregateInputType | true
    _avg?: PagecontentAvgAggregateInputType
    _sum?: PagecontentSumAggregateInputType
    _min?: PagecontentMinAggregateInputType
    _max?: PagecontentMaxAggregateInputType
  }

  export type PagecontentGroupByOutputType = {
    id: number
    locale: string
    bigTitle: string | null
    title: string
    content: string
    pageName: string
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: PagecontentCountAggregateOutputType | null
    _avg: PagecontentAvgAggregateOutputType | null
    _sum: PagecontentSumAggregateOutputType | null
    _min: PagecontentMinAggregateOutputType | null
    _max: PagecontentMaxAggregateOutputType | null
  }

  type GetPagecontentGroupByPayload<T extends PagecontentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagecontentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagecontentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagecontentGroupByOutputType[P]>
            : GetScalarType<T[P], PagecontentGroupByOutputType[P]>
        }
      >
    >


  export type PagecontentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    bigTitle?: boolean
    title?: boolean
    content?: boolean
    pageName?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Pagecontent$imagesArgs<ExtArgs>
    _count?: boolean | PagecontentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagecontent"]>

  export type PagecontentSelectScalar = {
    id?: boolean
    locale?: boolean
    bigTitle?: boolean
    title?: boolean
    content?: boolean
    pageName?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PagecontentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Pagecontent$imagesArgs<ExtArgs>
    _count?: boolean | PagecontentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PagecontentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagecontent"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locale: string
      bigTitle: string | null
      title: string
      content: string
      pageName: string
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pagecontent"]>
    composites: {}
  }


  type PagecontentGetPayload<S extends boolean | null | undefined | PagecontentDefaultArgs> = $Result.GetResult<Prisma.$PagecontentPayload, S>

  type PagecontentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagecontentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PagecontentCountAggregateInputType | true
    }

  export interface PagecontentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagecontent'], meta: { name: 'Pagecontent' } }
    /**
     * Find zero or one Pagecontent that matches the filter.
     * @param {PagecontentFindUniqueArgs} args - Arguments to find a Pagecontent
     * @example
     * // Get one Pagecontent
     * const pagecontent = await prisma.pagecontent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PagecontentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PagecontentFindUniqueArgs<ExtArgs>>
    ): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pagecontent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PagecontentFindUniqueOrThrowArgs} args - Arguments to find a Pagecontent
     * @example
     * // Get one Pagecontent
     * const pagecontent = await prisma.pagecontent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PagecontentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PagecontentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pagecontent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagecontentFindFirstArgs} args - Arguments to find a Pagecontent
     * @example
     * // Get one Pagecontent
     * const pagecontent = await prisma.pagecontent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PagecontentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PagecontentFindFirstArgs<ExtArgs>>
    ): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pagecontent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagecontentFindFirstOrThrowArgs} args - Arguments to find a Pagecontent
     * @example
     * // Get one Pagecontent
     * const pagecontent = await prisma.pagecontent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PagecontentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PagecontentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pagecontents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagecontentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagecontents
     * const pagecontents = await prisma.pagecontent.findMany()
     * 
     * // Get first 10 Pagecontents
     * const pagecontents = await prisma.pagecontent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagecontentWithIdOnly = await prisma.pagecontent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PagecontentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PagecontentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pagecontent.
     * @param {PagecontentCreateArgs} args - Arguments to create a Pagecontent.
     * @example
     * // Create one Pagecontent
     * const Pagecontent = await prisma.pagecontent.create({
     *   data: {
     *     // ... data to create a Pagecontent
     *   }
     * })
     * 
    **/
    create<T extends PagecontentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PagecontentCreateArgs<ExtArgs>>
    ): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pagecontents.
     *     @param {PagecontentCreateManyArgs} args - Arguments to create many Pagecontents.
     *     @example
     *     // Create many Pagecontents
     *     const pagecontent = await prisma.pagecontent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PagecontentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PagecontentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagecontent.
     * @param {PagecontentDeleteArgs} args - Arguments to delete one Pagecontent.
     * @example
     * // Delete one Pagecontent
     * const Pagecontent = await prisma.pagecontent.delete({
     *   where: {
     *     // ... filter to delete one Pagecontent
     *   }
     * })
     * 
    **/
    delete<T extends PagecontentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PagecontentDeleteArgs<ExtArgs>>
    ): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pagecontent.
     * @param {PagecontentUpdateArgs} args - Arguments to update one Pagecontent.
     * @example
     * // Update one Pagecontent
     * const pagecontent = await prisma.pagecontent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PagecontentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PagecontentUpdateArgs<ExtArgs>>
    ): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pagecontents.
     * @param {PagecontentDeleteManyArgs} args - Arguments to filter Pagecontents to delete.
     * @example
     * // Delete a few Pagecontents
     * const { count } = await prisma.pagecontent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PagecontentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PagecontentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagecontents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagecontentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagecontents
     * const pagecontent = await prisma.pagecontent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PagecontentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PagecontentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagecontent.
     * @param {PagecontentUpsertArgs} args - Arguments to update or create a Pagecontent.
     * @example
     * // Update or create a Pagecontent
     * const pagecontent = await prisma.pagecontent.upsert({
     *   create: {
     *     // ... data to create a Pagecontent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagecontent we want to update
     *   }
     * })
    **/
    upsert<T extends PagecontentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PagecontentUpsertArgs<ExtArgs>>
    ): Prisma__PagecontentClient<$Result.GetResult<Prisma.$PagecontentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pagecontents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagecontentCountArgs} args - Arguments to filter Pagecontents to count.
     * @example
     * // Count the number of Pagecontents
     * const count = await prisma.pagecontent.count({
     *   where: {
     *     // ... the filter for the Pagecontents we want to count
     *   }
     * })
    **/
    count<T extends PagecontentCountArgs>(
      args?: Subset<T, PagecontentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagecontentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagecontent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagecontentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagecontentAggregateArgs>(args: Subset<T, PagecontentAggregateArgs>): Prisma.PrismaPromise<GetPagecontentAggregateType<T>>

    /**
     * Group by Pagecontent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagecontentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagecontentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagecontentGroupByArgs['orderBy'] }
        : { orderBy?: PagecontentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagecontentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagecontentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagecontent model
   */
  readonly fields: PagecontentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagecontent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagecontentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    images<T extends Pagecontent$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Pagecontent$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pagecontent model
   */ 
  interface PagecontentFieldRefs {
    readonly id: FieldRef<"Pagecontent", 'Int'>
    readonly locale: FieldRef<"Pagecontent", 'String'>
    readonly bigTitle: FieldRef<"Pagecontent", 'String'>
    readonly title: FieldRef<"Pagecontent", 'String'>
    readonly content: FieldRef<"Pagecontent", 'String'>
    readonly pageName: FieldRef<"Pagecontent", 'String'>
    readonly deleted: FieldRef<"Pagecontent", 'Boolean'>
    readonly createdAt: FieldRef<"Pagecontent", 'DateTime'>
    readonly updatedAt: FieldRef<"Pagecontent", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Pagecontent findUnique
   */
  export type PagecontentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * Filter, which Pagecontent to fetch.
     */
    where: PagecontentWhereUniqueInput
  }


  /**
   * Pagecontent findUniqueOrThrow
   */
  export type PagecontentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * Filter, which Pagecontent to fetch.
     */
    where: PagecontentWhereUniqueInput
  }


  /**
   * Pagecontent findFirst
   */
  export type PagecontentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * Filter, which Pagecontent to fetch.
     */
    where?: PagecontentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagecontents to fetch.
     */
    orderBy?: PagecontentOrderByWithRelationAndSearchRelevanceInput | PagecontentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagecontents.
     */
    cursor?: PagecontentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagecontents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagecontents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagecontents.
     */
    distinct?: PagecontentScalarFieldEnum | PagecontentScalarFieldEnum[]
  }


  /**
   * Pagecontent findFirstOrThrow
   */
  export type PagecontentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * Filter, which Pagecontent to fetch.
     */
    where?: PagecontentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagecontents to fetch.
     */
    orderBy?: PagecontentOrderByWithRelationAndSearchRelevanceInput | PagecontentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagecontents.
     */
    cursor?: PagecontentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagecontents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagecontents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagecontents.
     */
    distinct?: PagecontentScalarFieldEnum | PagecontentScalarFieldEnum[]
  }


  /**
   * Pagecontent findMany
   */
  export type PagecontentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * Filter, which Pagecontents to fetch.
     */
    where?: PagecontentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagecontents to fetch.
     */
    orderBy?: PagecontentOrderByWithRelationAndSearchRelevanceInput | PagecontentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagecontents.
     */
    cursor?: PagecontentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagecontents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagecontents.
     */
    skip?: number
    distinct?: PagecontentScalarFieldEnum | PagecontentScalarFieldEnum[]
  }


  /**
   * Pagecontent create
   */
  export type PagecontentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagecontent.
     */
    data: XOR<PagecontentCreateInput, PagecontentUncheckedCreateInput>
  }


  /**
   * Pagecontent createMany
   */
  export type PagecontentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagecontents.
     */
    data: PagecontentCreateManyInput | PagecontentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pagecontent update
   */
  export type PagecontentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagecontent.
     */
    data: XOR<PagecontentUpdateInput, PagecontentUncheckedUpdateInput>
    /**
     * Choose, which Pagecontent to update.
     */
    where: PagecontentWhereUniqueInput
  }


  /**
   * Pagecontent updateMany
   */
  export type PagecontentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagecontents.
     */
    data: XOR<PagecontentUpdateManyMutationInput, PagecontentUncheckedUpdateManyInput>
    /**
     * Filter which Pagecontents to update
     */
    where?: PagecontentWhereInput
  }


  /**
   * Pagecontent upsert
   */
  export type PagecontentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagecontent to update in case it exists.
     */
    where: PagecontentWhereUniqueInput
    /**
     * In case the Pagecontent found by the `where` argument doesn't exist, create a new Pagecontent with this data.
     */
    create: XOR<PagecontentCreateInput, PagecontentUncheckedCreateInput>
    /**
     * In case the Pagecontent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagecontentUpdateInput, PagecontentUncheckedUpdateInput>
  }


  /**
   * Pagecontent delete
   */
  export type PagecontentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
    /**
     * Filter which Pagecontent to delete.
     */
    where: PagecontentWhereUniqueInput
  }


  /**
   * Pagecontent deleteMany
   */
  export type PagecontentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagecontents to delete
     */
    where?: PagecontentWhereInput
  }


  /**
   * Pagecontent.images
   */
  export type Pagecontent$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationAndSearchRelevanceInput | ImageOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Pagecontent without action
   */
  export type PagecontentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagecontent
     */
    select?: PagecontentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagecontentInclude<ExtArgs> | null
  }



  /**
   * Model Minislider
   */

  export type AggregateMinislider = {
    _count: MinisliderCountAggregateOutputType | null
    _avg: MinisliderAvgAggregateOutputType | null
    _sum: MinisliderSumAggregateOutputType | null
    _min: MinisliderMinAggregateOutputType | null
    _max: MinisliderMaxAggregateOutputType | null
  }

  export type MinisliderAvgAggregateOutputType = {
    id: number | null
  }

  export type MinisliderSumAggregateOutputType = {
    id: number | null
  }

  export type MinisliderMinAggregateOutputType = {
    id: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MinisliderMaxAggregateOutputType = {
    id: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MinisliderCountAggregateOutputType = {
    id: number
    texts: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MinisliderAvgAggregateInputType = {
    id?: true
  }

  export type MinisliderSumAggregateInputType = {
    id?: true
  }

  export type MinisliderMinAggregateInputType = {
    id?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MinisliderMaxAggregateInputType = {
    id?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MinisliderCountAggregateInputType = {
    id?: true
    texts?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MinisliderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Minislider to aggregate.
     */
    where?: MinisliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minisliders to fetch.
     */
    orderBy?: MinisliderOrderByWithRelationAndSearchRelevanceInput | MinisliderOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MinisliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minisliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minisliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Minisliders
    **/
    _count?: true | MinisliderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MinisliderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MinisliderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MinisliderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MinisliderMaxAggregateInputType
  }

  export type GetMinisliderAggregateType<T extends MinisliderAggregateArgs> = {
        [P in keyof T & keyof AggregateMinislider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMinislider[P]>
      : GetScalarType<T[P], AggregateMinislider[P]>
  }




  export type MinisliderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinisliderWhereInput
    orderBy?: MinisliderOrderByWithAggregationInput | MinisliderOrderByWithAggregationInput[]
    by: MinisliderScalarFieldEnum[] | MinisliderScalarFieldEnum
    having?: MinisliderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MinisliderCountAggregateInputType | true
    _avg?: MinisliderAvgAggregateInputType
    _sum?: MinisliderSumAggregateInputType
    _min?: MinisliderMinAggregateInputType
    _max?: MinisliderMaxAggregateInputType
  }

  export type MinisliderGroupByOutputType = {
    id: number
    texts: JsonValue
    deleted: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: MinisliderCountAggregateOutputType | null
    _avg: MinisliderAvgAggregateOutputType | null
    _sum: MinisliderSumAggregateOutputType | null
    _min: MinisliderMinAggregateOutputType | null
    _max: MinisliderMaxAggregateOutputType | null
  }

  type GetMinisliderGroupByPayload<T extends MinisliderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MinisliderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MinisliderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MinisliderGroupByOutputType[P]>
            : GetScalarType<T[P], MinisliderGroupByOutputType[P]>
        }
      >
    >


  export type MinisliderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texts?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Image?: boolean | Minislider$ImageArgs<ExtArgs>
    _count?: boolean | MinisliderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["minislider"]>

  export type MinisliderSelectScalar = {
    id?: boolean
    texts?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MinisliderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Image?: boolean | Minislider$ImageArgs<ExtArgs>
    _count?: boolean | MinisliderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MinisliderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Minislider"
    objects: {
      Image: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      texts: Prisma.JsonValue
      deleted: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["minislider"]>
    composites: {}
  }


  type MinisliderGetPayload<S extends boolean | null | undefined | MinisliderDefaultArgs> = $Result.GetResult<Prisma.$MinisliderPayload, S>

  type MinisliderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MinisliderFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MinisliderCountAggregateInputType | true
    }

  export interface MinisliderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Minislider'], meta: { name: 'Minislider' } }
    /**
     * Find zero or one Minislider that matches the filter.
     * @param {MinisliderFindUniqueArgs} args - Arguments to find a Minislider
     * @example
     * // Get one Minislider
     * const minislider = await prisma.minislider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MinisliderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MinisliderFindUniqueArgs<ExtArgs>>
    ): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Minislider that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MinisliderFindUniqueOrThrowArgs} args - Arguments to find a Minislider
     * @example
     * // Get one Minislider
     * const minislider = await prisma.minislider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MinisliderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MinisliderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Minislider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinisliderFindFirstArgs} args - Arguments to find a Minislider
     * @example
     * // Get one Minislider
     * const minislider = await prisma.minislider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MinisliderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MinisliderFindFirstArgs<ExtArgs>>
    ): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Minislider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinisliderFindFirstOrThrowArgs} args - Arguments to find a Minislider
     * @example
     * // Get one Minislider
     * const minislider = await prisma.minislider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MinisliderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MinisliderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Minisliders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinisliderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Minisliders
     * const minisliders = await prisma.minislider.findMany()
     * 
     * // Get first 10 Minisliders
     * const minisliders = await prisma.minislider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const minisliderWithIdOnly = await prisma.minislider.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MinisliderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinisliderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Minislider.
     * @param {MinisliderCreateArgs} args - Arguments to create a Minislider.
     * @example
     * // Create one Minislider
     * const Minislider = await prisma.minislider.create({
     *   data: {
     *     // ... data to create a Minislider
     *   }
     * })
     * 
    **/
    create<T extends MinisliderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MinisliderCreateArgs<ExtArgs>>
    ): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Minisliders.
     *     @param {MinisliderCreateManyArgs} args - Arguments to create many Minisliders.
     *     @example
     *     // Create many Minisliders
     *     const minislider = await prisma.minislider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MinisliderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinisliderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Minislider.
     * @param {MinisliderDeleteArgs} args - Arguments to delete one Minislider.
     * @example
     * // Delete one Minislider
     * const Minislider = await prisma.minislider.delete({
     *   where: {
     *     // ... filter to delete one Minislider
     *   }
     * })
     * 
    **/
    delete<T extends MinisliderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MinisliderDeleteArgs<ExtArgs>>
    ): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Minislider.
     * @param {MinisliderUpdateArgs} args - Arguments to update one Minislider.
     * @example
     * // Update one Minislider
     * const minislider = await prisma.minislider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MinisliderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MinisliderUpdateArgs<ExtArgs>>
    ): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Minisliders.
     * @param {MinisliderDeleteManyArgs} args - Arguments to filter Minisliders to delete.
     * @example
     * // Delete a few Minisliders
     * const { count } = await prisma.minislider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MinisliderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinisliderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Minisliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinisliderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Minisliders
     * const minislider = await prisma.minislider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MinisliderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MinisliderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Minislider.
     * @param {MinisliderUpsertArgs} args - Arguments to update or create a Minislider.
     * @example
     * // Update or create a Minislider
     * const minislider = await prisma.minislider.upsert({
     *   create: {
     *     // ... data to create a Minislider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Minislider we want to update
     *   }
     * })
    **/
    upsert<T extends MinisliderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MinisliderUpsertArgs<ExtArgs>>
    ): Prisma__MinisliderClient<$Result.GetResult<Prisma.$MinisliderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Minisliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinisliderCountArgs} args - Arguments to filter Minisliders to count.
     * @example
     * // Count the number of Minisliders
     * const count = await prisma.minislider.count({
     *   where: {
     *     // ... the filter for the Minisliders we want to count
     *   }
     * })
    **/
    count<T extends MinisliderCountArgs>(
      args?: Subset<T, MinisliderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MinisliderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Minislider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinisliderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MinisliderAggregateArgs>(args: Subset<T, MinisliderAggregateArgs>): Prisma.PrismaPromise<GetMinisliderAggregateType<T>>

    /**
     * Group by Minislider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinisliderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MinisliderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MinisliderGroupByArgs['orderBy'] }
        : { orderBy?: MinisliderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MinisliderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinisliderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Minislider model
   */
  readonly fields: MinisliderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Minislider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MinisliderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Image<T extends Minislider$ImageArgs<ExtArgs> = {}>(args?: Subset<T, Minislider$ImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Minislider model
   */ 
  interface MinisliderFieldRefs {
    readonly id: FieldRef<"Minislider", 'Int'>
    readonly texts: FieldRef<"Minislider", 'Json'>
    readonly deleted: FieldRef<"Minislider", 'Boolean'>
    readonly createdAt: FieldRef<"Minislider", 'DateTime'>
    readonly updatedAt: FieldRef<"Minislider", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Minislider findUnique
   */
  export type MinisliderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * Filter, which Minislider to fetch.
     */
    where: MinisliderWhereUniqueInput
  }


  /**
   * Minislider findUniqueOrThrow
   */
  export type MinisliderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * Filter, which Minislider to fetch.
     */
    where: MinisliderWhereUniqueInput
  }


  /**
   * Minislider findFirst
   */
  export type MinisliderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * Filter, which Minislider to fetch.
     */
    where?: MinisliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minisliders to fetch.
     */
    orderBy?: MinisliderOrderByWithRelationAndSearchRelevanceInput | MinisliderOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Minisliders.
     */
    cursor?: MinisliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minisliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minisliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Minisliders.
     */
    distinct?: MinisliderScalarFieldEnum | MinisliderScalarFieldEnum[]
  }


  /**
   * Minislider findFirstOrThrow
   */
  export type MinisliderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * Filter, which Minislider to fetch.
     */
    where?: MinisliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minisliders to fetch.
     */
    orderBy?: MinisliderOrderByWithRelationAndSearchRelevanceInput | MinisliderOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Minisliders.
     */
    cursor?: MinisliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minisliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minisliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Minisliders.
     */
    distinct?: MinisliderScalarFieldEnum | MinisliderScalarFieldEnum[]
  }


  /**
   * Minislider findMany
   */
  export type MinisliderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * Filter, which Minisliders to fetch.
     */
    where?: MinisliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minisliders to fetch.
     */
    orderBy?: MinisliderOrderByWithRelationAndSearchRelevanceInput | MinisliderOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Minisliders.
     */
    cursor?: MinisliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minisliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minisliders.
     */
    skip?: number
    distinct?: MinisliderScalarFieldEnum | MinisliderScalarFieldEnum[]
  }


  /**
   * Minislider create
   */
  export type MinisliderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * The data needed to create a Minislider.
     */
    data: XOR<MinisliderCreateInput, MinisliderUncheckedCreateInput>
  }


  /**
   * Minislider createMany
   */
  export type MinisliderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Minisliders.
     */
    data: MinisliderCreateManyInput | MinisliderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Minislider update
   */
  export type MinisliderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * The data needed to update a Minislider.
     */
    data: XOR<MinisliderUpdateInput, MinisliderUncheckedUpdateInput>
    /**
     * Choose, which Minislider to update.
     */
    where: MinisliderWhereUniqueInput
  }


  /**
   * Minislider updateMany
   */
  export type MinisliderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Minisliders.
     */
    data: XOR<MinisliderUpdateManyMutationInput, MinisliderUncheckedUpdateManyInput>
    /**
     * Filter which Minisliders to update
     */
    where?: MinisliderWhereInput
  }


  /**
   * Minislider upsert
   */
  export type MinisliderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * The filter to search for the Minislider to update in case it exists.
     */
    where: MinisliderWhereUniqueInput
    /**
     * In case the Minislider found by the `where` argument doesn't exist, create a new Minislider with this data.
     */
    create: XOR<MinisliderCreateInput, MinisliderUncheckedCreateInput>
    /**
     * In case the Minislider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MinisliderUpdateInput, MinisliderUncheckedUpdateInput>
  }


  /**
   * Minislider delete
   */
  export type MinisliderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
    /**
     * Filter which Minislider to delete.
     */
    where: MinisliderWhereUniqueInput
  }


  /**
   * Minislider deleteMany
   */
  export type MinisliderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Minisliders to delete
     */
    where?: MinisliderWhereInput
  }


  /**
   * Minislider.Image
   */
  export type Minislider$ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationAndSearchRelevanceInput | ImageOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Minislider without action
   */
  export type MinisliderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minislider
     */
    select?: MinisliderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinisliderInclude<ExtArgs> | null
  }



  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteAvgAggregateOutputType = {
    id: number | null
    point: number | null
  }

  export type SiteSumAggregateOutputType = {
    id: number | null
    point: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: number | null
    headerLogo: string | null
    footerLogo: string | null
    headerBgColor: string | null
    footerBgColor: string | null
    headerFontColor: string | null
    footerFontColor: string | null
    mail: string | null
    mail_en: string | null
    phone: string | null
    phone_en: string | null
    address: string | null
    address_en: string | null
    footerText: string | null
    aboutUsText: string | null
    point: number | null
    instagramName: string | null
    facebookName: string | null
    twitterName: string | null
    instagramUrl: string | null
    facebookUrl: string | null
    twitterUrl: string | null
    instagramShow: boolean | null
    facebookShow: boolean | null
    twitterShow: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMaxAggregateOutputType = {
    id: number | null
    headerLogo: string | null
    footerLogo: string | null
    headerBgColor: string | null
    footerBgColor: string | null
    headerFontColor: string | null
    footerFontColor: string | null
    mail: string | null
    mail_en: string | null
    phone: string | null
    phone_en: string | null
    address: string | null
    address_en: string | null
    footerText: string | null
    aboutUsText: string | null
    point: number | null
    instagramName: string | null
    facebookName: string | null
    twitterName: string | null
    instagramUrl: string | null
    facebookUrl: string | null
    twitterUrl: string | null
    instagramShow: boolean | null
    facebookShow: boolean | null
    twitterShow: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    headerLogo: number
    footerLogo: number
    headerBgColor: number
    footerBgColor: number
    headerFontColor: number
    footerFontColor: number
    mail: number
    mail_en: number
    phone: number
    phone_en: number
    address: number
    address_en: number
    footerText: number
    aboutUsText: number
    footerJson: number
    headerJson: number
    point: number
    instagramName: number
    facebookName: number
    twitterName: number
    instagramUrl: number
    facebookUrl: number
    twitterUrl: number
    instagramShow: number
    facebookShow: number
    twitterShow: number
    createdAt: number
    updatedAt: number
    pageAbout: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    id?: true
    point?: true
  }

  export type SiteSumAggregateInputType = {
    id?: true
    point?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    headerLogo?: true
    footerLogo?: true
    headerBgColor?: true
    footerBgColor?: true
    headerFontColor?: true
    footerFontColor?: true
    mail?: true
    mail_en?: true
    phone?: true
    phone_en?: true
    address?: true
    address_en?: true
    footerText?: true
    aboutUsText?: true
    point?: true
    instagramName?: true
    facebookName?: true
    twitterName?: true
    instagramUrl?: true
    facebookUrl?: true
    twitterUrl?: true
    instagramShow?: true
    facebookShow?: true
    twitterShow?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    headerLogo?: true
    footerLogo?: true
    headerBgColor?: true
    footerBgColor?: true
    headerFontColor?: true
    footerFontColor?: true
    mail?: true
    mail_en?: true
    phone?: true
    phone_en?: true
    address?: true
    address_en?: true
    footerText?: true
    aboutUsText?: true
    point?: true
    instagramName?: true
    facebookName?: true
    twitterName?: true
    instagramUrl?: true
    facebookUrl?: true
    twitterUrl?: true
    instagramShow?: true
    facebookShow?: true
    twitterShow?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    headerLogo?: true
    footerLogo?: true
    headerBgColor?: true
    footerBgColor?: true
    headerFontColor?: true
    footerFontColor?: true
    mail?: true
    mail_en?: true
    phone?: true
    phone_en?: true
    address?: true
    address_en?: true
    footerText?: true
    aboutUsText?: true
    footerJson?: true
    headerJson?: true
    point?: true
    instagramName?: true
    facebookName?: true
    twitterName?: true
    instagramUrl?: true
    facebookUrl?: true
    twitterUrl?: true
    instagramShow?: true
    facebookShow?: true
    twitterShow?: true
    createdAt?: true
    updatedAt?: true
    pageAbout?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationAndSearchRelevanceInput | SiteOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _avg?: SiteAvgAggregateInputType
    _sum?: SiteSumAggregateInputType
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: number
    headerLogo: string | null
    footerLogo: string | null
    headerBgColor: string | null
    footerBgColor: string | null
    headerFontColor: string | null
    footerFontColor: string | null
    mail: string | null
    mail_en: string | null
    phone: string | null
    phone_en: string | null
    address: string | null
    address_en: string | null
    footerText: string | null
    aboutUsText: string | null
    footerJson: JsonValue | null
    headerJson: JsonValue | null
    point: number | null
    instagramName: string | null
    facebookName: string | null
    twitterName: string | null
    instagramUrl: string | null
    facebookUrl: string | null
    twitterUrl: string | null
    instagramShow: boolean | null
    facebookShow: boolean | null
    twitterShow: boolean | null
    createdAt: Date
    updatedAt: Date
    pageAbout: JsonValue | null
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headerLogo?: boolean
    footerLogo?: boolean
    headerBgColor?: boolean
    footerBgColor?: boolean
    headerFontColor?: boolean
    footerFontColor?: boolean
    mail?: boolean
    mail_en?: boolean
    phone?: boolean
    phone_en?: boolean
    address?: boolean
    address_en?: boolean
    footerText?: boolean
    aboutUsText?: boolean
    footerJson?: boolean
    headerJson?: boolean
    point?: boolean
    instagramName?: boolean
    facebookName?: boolean
    twitterName?: boolean
    instagramUrl?: boolean
    facebookUrl?: boolean
    twitterUrl?: boolean
    instagramShow?: boolean
    facebookShow?: boolean
    twitterShow?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageAbout?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    headerLogo?: boolean
    footerLogo?: boolean
    headerBgColor?: boolean
    footerBgColor?: boolean
    headerFontColor?: boolean
    footerFontColor?: boolean
    mail?: boolean
    mail_en?: boolean
    phone?: boolean
    phone_en?: boolean
    address?: boolean
    address_en?: boolean
    footerText?: boolean
    aboutUsText?: boolean
    footerJson?: boolean
    headerJson?: boolean
    point?: boolean
    instagramName?: boolean
    facebookName?: boolean
    twitterName?: boolean
    instagramUrl?: boolean
    facebookUrl?: boolean
    twitterUrl?: boolean
    instagramShow?: boolean
    facebookShow?: boolean
    twitterShow?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageAbout?: boolean
  }


  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      headerLogo: string | null
      footerLogo: string | null
      headerBgColor: string | null
      footerBgColor: string | null
      headerFontColor: string | null
      footerFontColor: string | null
      mail: string | null
      mail_en: string | null
      phone: string | null
      phone_en: string | null
      address: string | null
      address_en: string | null
      footerText: string | null
      aboutUsText: string | null
      footerJson: Prisma.JsonValue | null
      headerJson: Prisma.JsonValue | null
      point: number | null
      instagramName: string | null
      facebookName: string | null
      twitterName: string | null
      instagramUrl: string | null
      facebookUrl: string | null
      twitterUrl: string | null
      instagramShow: boolean | null
      facebookShow: boolean | null
      twitterShow: boolean | null
      createdAt: Date
      updatedAt: Date
      pageAbout: Prisma.JsonValue | null
    }, ExtArgs["result"]["site"]>
    composites: {}
  }


  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SiteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Site that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SiteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SiteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
    **/
    create<T extends SiteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SiteCreateArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sites.
     *     @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     *     @example
     *     // Create many Sites
     *     const site = await prisma.site.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SiteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
    **/
    delete<T extends SiteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SiteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SiteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SiteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
    **/
    upsert<T extends SiteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Site model
   */ 
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'Int'>
    readonly headerLogo: FieldRef<"Site", 'String'>
    readonly footerLogo: FieldRef<"Site", 'String'>
    readonly headerBgColor: FieldRef<"Site", 'String'>
    readonly footerBgColor: FieldRef<"Site", 'String'>
    readonly headerFontColor: FieldRef<"Site", 'String'>
    readonly footerFontColor: FieldRef<"Site", 'String'>
    readonly mail: FieldRef<"Site", 'String'>
    readonly mail_en: FieldRef<"Site", 'String'>
    readonly phone: FieldRef<"Site", 'String'>
    readonly phone_en: FieldRef<"Site", 'String'>
    readonly address: FieldRef<"Site", 'String'>
    readonly address_en: FieldRef<"Site", 'String'>
    readonly footerText: FieldRef<"Site", 'String'>
    readonly aboutUsText: FieldRef<"Site", 'String'>
    readonly footerJson: FieldRef<"Site", 'Json'>
    readonly headerJson: FieldRef<"Site", 'Json'>
    readonly point: FieldRef<"Site", 'Int'>
    readonly instagramName: FieldRef<"Site", 'String'>
    readonly facebookName: FieldRef<"Site", 'String'>
    readonly twitterName: FieldRef<"Site", 'String'>
    readonly instagramUrl: FieldRef<"Site", 'String'>
    readonly facebookUrl: FieldRef<"Site", 'String'>
    readonly twitterUrl: FieldRef<"Site", 'String'>
    readonly instagramShow: FieldRef<"Site", 'Boolean'>
    readonly facebookShow: FieldRef<"Site", 'Boolean'>
    readonly twitterShow: FieldRef<"Site", 'Boolean'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
    readonly pageAbout: FieldRef<"Site", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }


  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }


  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationAndSearchRelevanceInput | SiteOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }


  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationAndSearchRelevanceInput | SiteOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }


  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationAndSearchRelevanceInput | SiteOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }


  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }


  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }


  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
  }


  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }


  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }


  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
  }


  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
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

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const StarScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId'
  };

  export type StarScalarFieldEnum = (typeof StarScalarFieldEnum)[keyof typeof StarScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
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

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    name_en: 'name_en',
    description: 'description',
    description_en: 'description_en',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
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

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const ImageScalarFieldEnum: {
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

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    imageId: 'imageId'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const PhototypeScalarFieldEnum: {
    id: 'id',
    typeName: 'typeName'
  };

  export type PhototypeScalarFieldEnum = (typeof PhototypeScalarFieldEnum)[keyof typeof PhototypeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
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

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ContactUsScalarFieldEnum: {
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

  export type ContactUsScalarFieldEnum = (typeof ContactUsScalarFieldEnum)[keyof typeof ContactUsScalarFieldEnum]


  export const PagecontentScalarFieldEnum: {
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

  export type PagecontentScalarFieldEnum = (typeof PagecontentScalarFieldEnum)[keyof typeof PagecontentScalarFieldEnum]


  export const MinisliderScalarFieldEnum: {
    id: 'id',
    texts: 'texts',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MinisliderScalarFieldEnum = (typeof MinisliderScalarFieldEnum)[keyof typeof MinisliderScalarFieldEnum]


  export const SiteScalarFieldEnum: {
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

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    password: 'password',
    email: 'email',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const ProductOrderByRelevanceFieldEnum: {
    name: 'name',
    name_en: 'name_en',
    title: 'title',
    title_en: 'title_en',
    content: 'content',
    content_en: 'content_en'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    reply: 'reply'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    name_en: 'name_en',
    description: 'description',
    description_en: 'description_en'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const SubCategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    name_en: 'name_en',
    description: 'description',
    description_en: 'description_en'
  };

  export type SubCategoryOrderByRelevanceFieldEnum = (typeof SubCategoryOrderByRelevanceFieldEnum)[keyof typeof SubCategoryOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    path: 'path',
    name: 'name',
    ownerName: 'ownerName'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const PhotoOrderByRelevanceFieldEnum: {
    name: 'name',
    type: 'type'
  };

  export type PhotoOrderByRelevanceFieldEnum = (typeof PhotoOrderByRelevanceFieldEnum)[keyof typeof PhotoOrderByRelevanceFieldEnum]


  export const PhototypeOrderByRelevanceFieldEnum: {
    typeName: 'typeName'
  };

  export type PhototypeOrderByRelevanceFieldEnum = (typeof PhototypeOrderByRelevanceFieldEnum)[keyof typeof PhototypeOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    username: 'username',
    title: 'title',
    content: 'content'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const ContactUsOrderByRelevanceFieldEnum: {
    name: 'name',
    surname: 'surname',
    email: 'email',
    phone: 'phone',
    title: 'title',
    content: 'content'
  };

  export type ContactUsOrderByRelevanceFieldEnum = (typeof ContactUsOrderByRelevanceFieldEnum)[keyof typeof ContactUsOrderByRelevanceFieldEnum]


  export const PagecontentOrderByRelevanceFieldEnum: {
    locale: 'locale',
    bigTitle: 'bigTitle',
    title: 'title',
    content: 'content',
    pageName: 'pageName'
  };

  export type PagecontentOrderByRelevanceFieldEnum = (typeof PagecontentOrderByRelevanceFieldEnum)[keyof typeof PagecontentOrderByRelevanceFieldEnum]


  export const SiteOrderByRelevanceFieldEnum: {
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

  export type SiteOrderByRelevanceFieldEnum = (typeof SiteOrderByRelevanceFieldEnum)[keyof typeof SiteOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    verify?: BoolNullableFilter<"User"> | boolean | null
    deleted?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    comments?: CommentListRelationFilter
    star?: StarListRelationFilter
    question?: QuestionListRelationFilter
    contactUs?: ContactUsListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    verify?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    star?: StarOrderByRelationAggregateInput
    question?: QuestionOrderByRelationAggregateInput
    contactUs?: ContactUsOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    email_username?: UserEmailUsernameCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    verify?: BoolNullableFilter<"User"> | boolean | null
    deleted?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    comments?: CommentListRelationFilter
    star?: StarListRelationFilter
    question?: QuestionListRelationFilter
    contactUs?: ContactUsListRelationFilter
  }, "id" | "id" | "email" | "email_username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    verify?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    verify?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    deleted?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    name_en?: StringNullableFilter<"Product"> | string | null
    title?: StringFilter<"Product"> | string
    title_en?: StringNullableFilter<"Product"> | string | null
    content?: StringFilter<"Product"> | string
    content_en?: StringNullableFilter<"Product"> | string | null
    otherLangs?: JsonNullableFilter<"Product">
    deleted?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    subCategoryId?: IntNullableFilter<"Product"> | number | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    tags?: JsonNullableFilter<"Product">
    subCategory?: XOR<SubCategoryNullableRelationFilter, SubCategoryWhereInput> | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    images?: ImageListRelationFilter
    comments?: CommentListRelationFilter
    star?: StarListRelationFilter
    question?: QuestionListRelationFilter
  }

  export type ProductOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrderInput | SortOrder
    title?: SortOrder
    title_en?: SortOrderInput | SortOrder
    content?: SortOrder
    content_en?: SortOrderInput | SortOrder
    otherLangs?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    subCategory?: SubCategoryOrderByWithRelationAndSearchRelevanceInput
    category?: CategoryOrderByWithRelationAndSearchRelevanceInput
    images?: ImageOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    star?: StarOrderByRelationAggregateInput
    question?: QuestionOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name_en?: StringNullableFilter<"Product"> | string | null
    title?: StringFilter<"Product"> | string
    title_en?: StringNullableFilter<"Product"> | string | null
    content?: StringFilter<"Product"> | string
    content_en?: StringNullableFilter<"Product"> | string | null
    otherLangs?: JsonNullableFilter<"Product">
    deleted?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    subCategoryId?: IntNullableFilter<"Product"> | number | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    tags?: JsonNullableFilter<"Product">
    subCategory?: XOR<SubCategoryNullableRelationFilter, SubCategoryWhereInput> | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    images?: ImageListRelationFilter
    comments?: CommentListRelationFilter
    star?: StarListRelationFilter
    question?: QuestionListRelationFilter
  }, "id" | "id" | "name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrderInput | SortOrder
    title?: SortOrder
    title_en?: SortOrderInput | SortOrder
    content?: SortOrder
    content_en?: SortOrderInput | SortOrder
    otherLangs?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    name_en?: StringNullableWithAggregatesFilter<"Product"> | string | null
    title?: StringWithAggregatesFilter<"Product"> | string
    title_en?: StringNullableWithAggregatesFilter<"Product"> | string | null
    content?: StringWithAggregatesFilter<"Product"> | string
    content_en?: StringNullableWithAggregatesFilter<"Product"> | string | null
    otherLangs?: JsonNullableWithAggregatesFilter<"Product">
    deleted?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    subCategoryId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    categoryId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    tags?: JsonNullableWithAggregatesFilter<"Product">
  }

  export type StarWhereInput = {
    AND?: StarWhereInput | StarWhereInput[]
    OR?: StarWhereInput[]
    NOT?: StarWhereInput | StarWhereInput[]
    id?: IntFilter<"Star"> | number
    productId?: IntFilter<"Star"> | number
    userId?: IntFilter<"Star"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StarOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
    user?: UserOrderByWithRelationAndSearchRelevanceInput
  }

  export type StarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StarWhereInput | StarWhereInput[]
    OR?: StarWhereInput[]
    NOT?: StarWhereInput | StarWhereInput[]
    productId?: IntFilter<"Star"> | number
    userId?: IntFilter<"Star"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type StarOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    _count?: StarCountOrderByAggregateInput
    _avg?: StarAvgOrderByAggregateInput
    _max?: StarMaxOrderByAggregateInput
    _min?: StarMinOrderByAggregateInput
    _sum?: StarSumOrderByAggregateInput
  }

  export type StarScalarWhereWithAggregatesInput = {
    AND?: StarScalarWhereWithAggregatesInput | StarScalarWhereWithAggregatesInput[]
    OR?: StarScalarWhereWithAggregatesInput[]
    NOT?: StarScalarWhereWithAggregatesInput | StarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Star"> | number
    productId?: IntWithAggregatesFilter<"Star"> | number
    userId?: IntWithAggregatesFilter<"Star"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    reply?: StringNullableFilter<"Question"> | string | null
    answered?: BoolNullableFilter<"Question"> | boolean | null
    productId?: IntNullableFilter<"Question"> | number | null
    userId?: IntNullableFilter<"Question"> | number | null
    questionId?: IntNullableFilter<"Question"> | number | null
    deleted?: BoolNullableFilter<"Question"> | boolean | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    topQuestion?: XOR<QuestionNullableRelationFilter, QuestionWhereInput> | null
    lowQuestion?: QuestionListRelationFilter
  }

  export type QuestionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    reply?: SortOrderInput | SortOrder
    answered?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    questionId?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    topQuestion?: QuestionOrderByWithRelationAndSearchRelevanceInput
    lowQuestion?: QuestionOrderByRelationAggregateInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    reply?: StringNullableFilter<"Question"> | string | null
    answered?: BoolNullableFilter<"Question"> | boolean | null
    productId?: IntNullableFilter<"Question"> | number | null
    userId?: IntNullableFilter<"Question"> | number | null
    questionId?: IntNullableFilter<"Question"> | number | null
    deleted?: BoolNullableFilter<"Question"> | boolean | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    topQuestion?: XOR<QuestionNullableRelationFilter, QuestionWhereInput> | null
    lowQuestion?: QuestionListRelationFilter
  }, "id" | "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    reply?: SortOrderInput | SortOrder
    answered?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    questionId?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    title?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    reply?: StringNullableWithAggregatesFilter<"Question"> | string | null
    answered?: BoolNullableWithAggregatesFilter<"Question"> | boolean | null
    productId?: IntNullableWithAggregatesFilter<"Question"> | number | null
    userId?: IntNullableWithAggregatesFilter<"Question"> | number | null
    questionId?: IntNullableWithAggregatesFilter<"Question"> | number | null
    deleted?: BoolNullableWithAggregatesFilter<"Question"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    name_en?: StringNullableFilter<"Category"> | string | null
    description?: StringNullableFilter<"Category"> | string | null
    description_en?: StringNullableFilter<"Category"> | string | null
    deleted?: BoolNullableFilter<"Category"> | boolean | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    subCategory?: SubCategoryListRelationFilter
    product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subCategory?: SubCategoryOrderByRelationAggregateInput
    product?: ProductOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name_en?: StringNullableFilter<"Category"> | string | null
    description?: StringNullableFilter<"Category"> | string | null
    description_en?: StringNullableFilter<"Category"> | string | null
    deleted?: BoolNullableFilter<"Category"> | boolean | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    subCategory?: SubCategoryListRelationFilter
    product?: ProductListRelationFilter
  }, "id" | "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    name_en?: StringNullableWithAggregatesFilter<"Category"> | string | null
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"Category"> | string | null
    deleted?: BoolNullableWithAggregatesFilter<"Category"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    name_en?: StringNullableFilter<"SubCategory"> | string | null
    description?: StringNullableFilter<"SubCategory"> | string | null
    description_en?: StringNullableFilter<"SubCategory"> | string | null
    deleted?: BoolNullableFilter<"SubCategory"> | boolean | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    categoryId?: IntNullableFilter<"SubCategory"> | number | null
    lowerSubCategoryId?: IntNullableFilter<"SubCategory"> | number | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    topSubCategory?: XOR<SubCategoryNullableRelationFilter, SubCategoryWhereInput> | null
    lowerSubCategories?: SubCategoryListRelationFilter
    product?: ProductListRelationFilter
  }

  export type SubCategoryOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    lowerSubCategoryId?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationAndSearchRelevanceInput
    topSubCategory?: SubCategoryOrderByWithRelationAndSearchRelevanceInput
    lowerSubCategories?: SubCategoryOrderByRelationAggregateInput
    product?: ProductOrderByRelationAggregateInput
    _relevance?: SubCategoryOrderByRelevanceInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    name_en?: StringNullableFilter<"SubCategory"> | string | null
    description?: StringNullableFilter<"SubCategory"> | string | null
    description_en?: StringNullableFilter<"SubCategory"> | string | null
    deleted?: BoolNullableFilter<"SubCategory"> | boolean | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    categoryId?: IntNullableFilter<"SubCategory"> | number | null
    lowerSubCategoryId?: IntNullableFilter<"SubCategory"> | number | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    topSubCategory?: XOR<SubCategoryNullableRelationFilter, SubCategoryWhereInput> | null
    lowerSubCategories?: SubCategoryListRelationFilter
    product?: ProductListRelationFilter
  }, "id" | "id" | "name">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    lowerSubCategoryId?: SortOrderInput | SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _avg?: SubCategoryAvgOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
    _sum?: SubCategorySumOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubCategory"> | number
    name?: StringWithAggregatesFilter<"SubCategory"> | string
    name_en?: StringNullableWithAggregatesFilter<"SubCategory"> | string | null
    description?: StringNullableWithAggregatesFilter<"SubCategory"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"SubCategory"> | string | null
    deleted?: BoolNullableWithAggregatesFilter<"SubCategory"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    categoryId?: IntNullableWithAggregatesFilter<"SubCategory"> | number | null
    lowerSubCategoryId?: IntNullableWithAggregatesFilter<"SubCategory"> | number | null
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    path?: StringFilter<"Image"> | string
    name?: StringFilter<"Image"> | string
    ownerName?: StringNullableFilter<"Image"> | string | null
    deleted?: BoolNullableFilter<"Image"> | boolean | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    productId?: IntNullableFilter<"Image"> | number | null
    pageContentId?: IntNullableFilter<"Image"> | number | null
    commentId?: IntNullableFilter<"Image"> | number | null
    minisliderId?: IntNullableFilter<"Image"> | number | null
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    pageContent?: XOR<PagecontentNullableRelationFilter, PagecontentWhereInput> | null
    comment?: XOR<CommentNullableRelationFilter, CommentWhereInput> | null
    minislider?: XOR<MinisliderNullableRelationFilter, MinisliderWhereInput> | null
    Photo?: PhotoListRelationFilter
  }

  export type ImageOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    path?: SortOrder
    name?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    pageContentId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    minisliderId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
    pageContent?: PagecontentOrderByWithRelationAndSearchRelevanceInput
    comment?: CommentOrderByWithRelationAndSearchRelevanceInput
    minislider?: MinisliderOrderByWithRelationAndSearchRelevanceInput
    Photo?: PhotoOrderByRelationAggregateInput
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    path?: StringFilter<"Image"> | string
    ownerName?: StringNullableFilter<"Image"> | string | null
    deleted?: BoolNullableFilter<"Image"> | boolean | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    productId?: IntNullableFilter<"Image"> | number | null
    pageContentId?: IntNullableFilter<"Image"> | number | null
    commentId?: IntNullableFilter<"Image"> | number | null
    minisliderId?: IntNullableFilter<"Image"> | number | null
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    pageContent?: XOR<PagecontentNullableRelationFilter, PagecontentWhereInput> | null
    comment?: XOR<CommentNullableRelationFilter, CommentWhereInput> | null
    minislider?: XOR<MinisliderNullableRelationFilter, MinisliderWhereInput> | null
    Photo?: PhotoListRelationFilter
  }, "id" | "id" | "name">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    name?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    pageContentId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    minisliderId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    path?: StringWithAggregatesFilter<"Image"> | string
    name?: StringWithAggregatesFilter<"Image"> | string
    ownerName?: StringNullableWithAggregatesFilter<"Image"> | string | null
    deleted?: BoolNullableWithAggregatesFilter<"Image"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    productId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    pageContentId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    commentId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    minisliderId?: IntNullableWithAggregatesFilter<"Image"> | number | null
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    name?: StringNullableFilter<"Photo"> | string | null
    type?: StringNullableFilter<"Photo"> | string | null
    imageId?: IntFilter<"Photo"> | number
    image?: XOR<ImageRelationFilter, ImageWhereInput>
  }

  export type PhotoOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    imageId?: SortOrder
    image?: ImageOrderByWithRelationAndSearchRelevanceInput
    _relevance?: PhotoOrderByRelevanceInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    name?: StringNullableFilter<"Photo"> | string | null
    type?: StringNullableFilter<"Photo"> | string | null
    imageId?: IntFilter<"Photo"> | number
    image?: XOR<ImageRelationFilter, ImageWhereInput>
  }, "id" | "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    imageId?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    name?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    type?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    imageId?: IntWithAggregatesFilter<"Photo"> | number
  }

  export type PhototypeWhereInput = {
    AND?: PhototypeWhereInput | PhototypeWhereInput[]
    OR?: PhototypeWhereInput[]
    NOT?: PhototypeWhereInput | PhototypeWhereInput[]
    id?: IntFilter<"Phototype"> | number
    typeName?: StringFilter<"Phototype"> | string
  }

  export type PhototypeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    typeName?: SortOrder
    _relevance?: PhototypeOrderByRelevanceInput
  }

  export type PhototypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    typeName?: string
    AND?: PhototypeWhereInput | PhototypeWhereInput[]
    OR?: PhototypeWhereInput[]
    NOT?: PhototypeWhereInput | PhototypeWhereInput[]
  }, "id" | "id" | "typeName">

  export type PhototypeOrderByWithAggregationInput = {
    id?: SortOrder
    typeName?: SortOrder
    _count?: PhototypeCountOrderByAggregateInput
    _avg?: PhototypeAvgOrderByAggregateInput
    _max?: PhototypeMaxOrderByAggregateInput
    _min?: PhototypeMinOrderByAggregateInput
    _sum?: PhototypeSumOrderByAggregateInput
  }

  export type PhototypeScalarWhereWithAggregatesInput = {
    AND?: PhototypeScalarWhereWithAggregatesInput | PhototypeScalarWhereWithAggregatesInput[]
    OR?: PhototypeScalarWhereWithAggregatesInput[]
    NOT?: PhototypeScalarWhereWithAggregatesInput | PhototypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Phototype"> | number
    typeName?: StringWithAggregatesFilter<"Phototype"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    username?: StringNullableFilter<"Comment"> | string | null
    title?: StringNullableFilter<"Comment"> | string | null
    content?: StringNullableFilter<"Comment"> | string | null
    point?: IntNullableFilter<"Comment"> | number | null
    deleted?: BoolNullableFilter<"Comment"> | boolean | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    productId?: IntFilter<"Comment"> | number
    userId?: IntNullableFilter<"Comment"> | number | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    images?: ImageListRelationFilter
  }

  export type CommentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    point?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    userId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    images?: ImageOrderByRelationAggregateInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    username?: StringNullableFilter<"Comment"> | string | null
    title?: StringNullableFilter<"Comment"> | string | null
    content?: StringNullableFilter<"Comment"> | string | null
    point?: IntNullableFilter<"Comment"> | number | null
    deleted?: BoolNullableFilter<"Comment"> | boolean | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    productId?: IntFilter<"Comment"> | number
    userId?: IntNullableFilter<"Comment"> | number | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    images?: ImageListRelationFilter
  }, "id" | "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    point?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    username?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    title?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    content?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    point?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    deleted?: BoolNullableWithAggregatesFilter<"Comment"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    productId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntNullableWithAggregatesFilter<"Comment"> | number | null
  }

  export type ContactUsWhereInput = {
    AND?: ContactUsWhereInput | ContactUsWhereInput[]
    OR?: ContactUsWhereInput[]
    NOT?: ContactUsWhereInput | ContactUsWhereInput[]
    id?: IntFilter<"ContactUs"> | number
    name?: StringNullableFilter<"ContactUs"> | string | null
    surname?: StringNullableFilter<"ContactUs"> | string | null
    email?: StringNullableFilter<"ContactUs"> | string | null
    phone?: StringNullableFilter<"ContactUs"> | string | null
    title?: StringNullableFilter<"ContactUs"> | string | null
    content?: StringNullableFilter<"ContactUs"> | string | null
    readed?: BoolNullableFilter<"ContactUs"> | boolean | null
    deleted?: BoolNullableFilter<"ContactUs"> | boolean | null
    createdAt?: DateTimeFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeFilter<"ContactUs"> | Date | string
    userId?: IntNullableFilter<"ContactUs"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ContactUsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    readed?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: ContactUsOrderByRelevanceInput
  }

  export type ContactUsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactUsWhereInput | ContactUsWhereInput[]
    OR?: ContactUsWhereInput[]
    NOT?: ContactUsWhereInput | ContactUsWhereInput[]
    name?: StringNullableFilter<"ContactUs"> | string | null
    surname?: StringNullableFilter<"ContactUs"> | string | null
    email?: StringNullableFilter<"ContactUs"> | string | null
    phone?: StringNullableFilter<"ContactUs"> | string | null
    title?: StringNullableFilter<"ContactUs"> | string | null
    content?: StringNullableFilter<"ContactUs"> | string | null
    readed?: BoolNullableFilter<"ContactUs"> | boolean | null
    deleted?: BoolNullableFilter<"ContactUs"> | boolean | null
    createdAt?: DateTimeFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeFilter<"ContactUs"> | Date | string
    userId?: IntNullableFilter<"ContactUs"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "id">

  export type ContactUsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    readed?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ContactUsCountOrderByAggregateInput
    _avg?: ContactUsAvgOrderByAggregateInput
    _max?: ContactUsMaxOrderByAggregateInput
    _min?: ContactUsMinOrderByAggregateInput
    _sum?: ContactUsSumOrderByAggregateInput
  }

  export type ContactUsScalarWhereWithAggregatesInput = {
    AND?: ContactUsScalarWhereWithAggregatesInput | ContactUsScalarWhereWithAggregatesInput[]
    OR?: ContactUsScalarWhereWithAggregatesInput[]
    NOT?: ContactUsScalarWhereWithAggregatesInput | ContactUsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactUs"> | number
    name?: StringNullableWithAggregatesFilter<"ContactUs"> | string | null
    surname?: StringNullableWithAggregatesFilter<"ContactUs"> | string | null
    email?: StringNullableWithAggregatesFilter<"ContactUs"> | string | null
    phone?: StringNullableWithAggregatesFilter<"ContactUs"> | string | null
    title?: StringNullableWithAggregatesFilter<"ContactUs"> | string | null
    content?: StringNullableWithAggregatesFilter<"ContactUs"> | string | null
    readed?: BoolNullableWithAggregatesFilter<"ContactUs"> | boolean | null
    deleted?: BoolNullableWithAggregatesFilter<"ContactUs"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactUs"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"ContactUs"> | number | null
  }

  export type PagecontentWhereInput = {
    AND?: PagecontentWhereInput | PagecontentWhereInput[]
    OR?: PagecontentWhereInput[]
    NOT?: PagecontentWhereInput | PagecontentWhereInput[]
    id?: IntFilter<"Pagecontent"> | number
    locale?: StringFilter<"Pagecontent"> | string
    bigTitle?: StringNullableFilter<"Pagecontent"> | string | null
    title?: StringFilter<"Pagecontent"> | string
    content?: StringFilter<"Pagecontent"> | string
    pageName?: StringFilter<"Pagecontent"> | string
    deleted?: BoolNullableFilter<"Pagecontent"> | boolean | null
    createdAt?: DateTimeFilter<"Pagecontent"> | Date | string
    updatedAt?: DateTimeFilter<"Pagecontent"> | Date | string
    images?: ImageListRelationFilter
  }

  export type PagecontentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    locale?: SortOrder
    bigTitle?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    pageName?: SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    _relevance?: PagecontentOrderByRelevanceInput
  }

  export type PagecontentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagecontentWhereInput | PagecontentWhereInput[]
    OR?: PagecontentWhereInput[]
    NOT?: PagecontentWhereInput | PagecontentWhereInput[]
    locale?: StringFilter<"Pagecontent"> | string
    bigTitle?: StringNullableFilter<"Pagecontent"> | string | null
    title?: StringFilter<"Pagecontent"> | string
    content?: StringFilter<"Pagecontent"> | string
    pageName?: StringFilter<"Pagecontent"> | string
    deleted?: BoolNullableFilter<"Pagecontent"> | boolean | null
    createdAt?: DateTimeFilter<"Pagecontent"> | Date | string
    updatedAt?: DateTimeFilter<"Pagecontent"> | Date | string
    images?: ImageListRelationFilter
  }, "id" | "id">

  export type PagecontentOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    bigTitle?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    pageName?: SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PagecontentCountOrderByAggregateInput
    _avg?: PagecontentAvgOrderByAggregateInput
    _max?: PagecontentMaxOrderByAggregateInput
    _min?: PagecontentMinOrderByAggregateInput
    _sum?: PagecontentSumOrderByAggregateInput
  }

  export type PagecontentScalarWhereWithAggregatesInput = {
    AND?: PagecontentScalarWhereWithAggregatesInput | PagecontentScalarWhereWithAggregatesInput[]
    OR?: PagecontentScalarWhereWithAggregatesInput[]
    NOT?: PagecontentScalarWhereWithAggregatesInput | PagecontentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pagecontent"> | number
    locale?: StringWithAggregatesFilter<"Pagecontent"> | string
    bigTitle?: StringNullableWithAggregatesFilter<"Pagecontent"> | string | null
    title?: StringWithAggregatesFilter<"Pagecontent"> | string
    content?: StringWithAggregatesFilter<"Pagecontent"> | string
    pageName?: StringWithAggregatesFilter<"Pagecontent"> | string
    deleted?: BoolNullableWithAggregatesFilter<"Pagecontent"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Pagecontent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pagecontent"> | Date | string
  }

  export type MinisliderWhereInput = {
    AND?: MinisliderWhereInput | MinisliderWhereInput[]
    OR?: MinisliderWhereInput[]
    NOT?: MinisliderWhereInput | MinisliderWhereInput[]
    id?: IntFilter<"Minislider"> | number
    texts?: JsonFilter<"Minislider">
    deleted?: BoolNullableFilter<"Minislider"> | boolean | null
    createdAt?: DateTimeFilter<"Minislider"> | Date | string
    updatedAt?: DateTimeFilter<"Minislider"> | Date | string
    Image?: ImageListRelationFilter
  }

  export type MinisliderOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    texts?: SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Image?: ImageOrderByRelationAggregateInput
  }

  export type MinisliderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MinisliderWhereInput | MinisliderWhereInput[]
    OR?: MinisliderWhereInput[]
    NOT?: MinisliderWhereInput | MinisliderWhereInput[]
    texts?: JsonFilter<"Minislider">
    deleted?: BoolNullableFilter<"Minislider"> | boolean | null
    createdAt?: DateTimeFilter<"Minislider"> | Date | string
    updatedAt?: DateTimeFilter<"Minislider"> | Date | string
    Image?: ImageListRelationFilter
  }, "id" | "id">

  export type MinisliderOrderByWithAggregationInput = {
    id?: SortOrder
    texts?: SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MinisliderCountOrderByAggregateInput
    _avg?: MinisliderAvgOrderByAggregateInput
    _max?: MinisliderMaxOrderByAggregateInput
    _min?: MinisliderMinOrderByAggregateInput
    _sum?: MinisliderSumOrderByAggregateInput
  }

  export type MinisliderScalarWhereWithAggregatesInput = {
    AND?: MinisliderScalarWhereWithAggregatesInput | MinisliderScalarWhereWithAggregatesInput[]
    OR?: MinisliderScalarWhereWithAggregatesInput[]
    NOT?: MinisliderScalarWhereWithAggregatesInput | MinisliderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Minislider"> | number
    texts?: JsonWithAggregatesFilter<"Minislider">
    deleted?: BoolNullableWithAggregatesFilter<"Minislider"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Minislider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Minislider"> | Date | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: IntFilter<"Site"> | number
    headerLogo?: StringNullableFilter<"Site"> | string | null
    footerLogo?: StringNullableFilter<"Site"> | string | null
    headerBgColor?: StringNullableFilter<"Site"> | string | null
    footerBgColor?: StringNullableFilter<"Site"> | string | null
    headerFontColor?: StringNullableFilter<"Site"> | string | null
    footerFontColor?: StringNullableFilter<"Site"> | string | null
    mail?: StringNullableFilter<"Site"> | string | null
    mail_en?: StringNullableFilter<"Site"> | string | null
    phone?: StringNullableFilter<"Site"> | string | null
    phone_en?: StringNullableFilter<"Site"> | string | null
    address?: StringNullableFilter<"Site"> | string | null
    address_en?: StringNullableFilter<"Site"> | string | null
    footerText?: StringNullableFilter<"Site"> | string | null
    aboutUsText?: StringNullableFilter<"Site"> | string | null
    footerJson?: JsonNullableFilter<"Site">
    headerJson?: JsonNullableFilter<"Site">
    point?: IntNullableFilter<"Site"> | number | null
    instagramName?: StringNullableFilter<"Site"> | string | null
    facebookName?: StringNullableFilter<"Site"> | string | null
    twitterName?: StringNullableFilter<"Site"> | string | null
    instagramUrl?: StringNullableFilter<"Site"> | string | null
    facebookUrl?: StringNullableFilter<"Site"> | string | null
    twitterUrl?: StringNullableFilter<"Site"> | string | null
    instagramShow?: BoolNullableFilter<"Site"> | boolean | null
    facebookShow?: BoolNullableFilter<"Site"> | boolean | null
    twitterShow?: BoolNullableFilter<"Site"> | boolean | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    pageAbout?: JsonNullableFilter<"Site">
  }

  export type SiteOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    headerLogo?: SortOrderInput | SortOrder
    footerLogo?: SortOrderInput | SortOrder
    headerBgColor?: SortOrderInput | SortOrder
    footerBgColor?: SortOrderInput | SortOrder
    headerFontColor?: SortOrderInput | SortOrder
    footerFontColor?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    mail_en?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    phone_en?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    address_en?: SortOrderInput | SortOrder
    footerText?: SortOrderInput | SortOrder
    aboutUsText?: SortOrderInput | SortOrder
    footerJson?: SortOrderInput | SortOrder
    headerJson?: SortOrderInput | SortOrder
    point?: SortOrderInput | SortOrder
    instagramName?: SortOrderInput | SortOrder
    facebookName?: SortOrderInput | SortOrder
    twitterName?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    instagramShow?: SortOrderInput | SortOrder
    facebookShow?: SortOrderInput | SortOrder
    twitterShow?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageAbout?: SortOrderInput | SortOrder
    _relevance?: SiteOrderByRelevanceInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    headerLogo?: StringNullableFilter<"Site"> | string | null
    footerLogo?: StringNullableFilter<"Site"> | string | null
    headerBgColor?: StringNullableFilter<"Site"> | string | null
    footerBgColor?: StringNullableFilter<"Site"> | string | null
    headerFontColor?: StringNullableFilter<"Site"> | string | null
    footerFontColor?: StringNullableFilter<"Site"> | string | null
    mail?: StringNullableFilter<"Site"> | string | null
    mail_en?: StringNullableFilter<"Site"> | string | null
    phone?: StringNullableFilter<"Site"> | string | null
    phone_en?: StringNullableFilter<"Site"> | string | null
    address?: StringNullableFilter<"Site"> | string | null
    address_en?: StringNullableFilter<"Site"> | string | null
    footerText?: StringNullableFilter<"Site"> | string | null
    aboutUsText?: StringNullableFilter<"Site"> | string | null
    footerJson?: JsonNullableFilter<"Site">
    headerJson?: JsonNullableFilter<"Site">
    point?: IntNullableFilter<"Site"> | number | null
    instagramName?: StringNullableFilter<"Site"> | string | null
    facebookName?: StringNullableFilter<"Site"> | string | null
    twitterName?: StringNullableFilter<"Site"> | string | null
    instagramUrl?: StringNullableFilter<"Site"> | string | null
    facebookUrl?: StringNullableFilter<"Site"> | string | null
    twitterUrl?: StringNullableFilter<"Site"> | string | null
    instagramShow?: BoolNullableFilter<"Site"> | boolean | null
    facebookShow?: BoolNullableFilter<"Site"> | boolean | null
    twitterShow?: BoolNullableFilter<"Site"> | boolean | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    pageAbout?: JsonNullableFilter<"Site">
  }, "id" | "id">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    headerLogo?: SortOrderInput | SortOrder
    footerLogo?: SortOrderInput | SortOrder
    headerBgColor?: SortOrderInput | SortOrder
    footerBgColor?: SortOrderInput | SortOrder
    headerFontColor?: SortOrderInput | SortOrder
    footerFontColor?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    mail_en?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    phone_en?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    address_en?: SortOrderInput | SortOrder
    footerText?: SortOrderInput | SortOrder
    aboutUsText?: SortOrderInput | SortOrder
    footerJson?: SortOrderInput | SortOrder
    headerJson?: SortOrderInput | SortOrder
    point?: SortOrderInput | SortOrder
    instagramName?: SortOrderInput | SortOrder
    facebookName?: SortOrderInput | SortOrder
    twitterName?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    instagramShow?: SortOrderInput | SortOrder
    facebookShow?: SortOrderInput | SortOrder
    twitterShow?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageAbout?: SortOrderInput | SortOrder
    _count?: SiteCountOrderByAggregateInput
    _avg?: SiteAvgOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
    _sum?: SiteSumOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Site"> | number
    headerLogo?: StringNullableWithAggregatesFilter<"Site"> | string | null
    footerLogo?: StringNullableWithAggregatesFilter<"Site"> | string | null
    headerBgColor?: StringNullableWithAggregatesFilter<"Site"> | string | null
    footerBgColor?: StringNullableWithAggregatesFilter<"Site"> | string | null
    headerFontColor?: StringNullableWithAggregatesFilter<"Site"> | string | null
    footerFontColor?: StringNullableWithAggregatesFilter<"Site"> | string | null
    mail?: StringNullableWithAggregatesFilter<"Site"> | string | null
    mail_en?: StringNullableWithAggregatesFilter<"Site"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Site"> | string | null
    phone_en?: StringNullableWithAggregatesFilter<"Site"> | string | null
    address?: StringNullableWithAggregatesFilter<"Site"> | string | null
    address_en?: StringNullableWithAggregatesFilter<"Site"> | string | null
    footerText?: StringNullableWithAggregatesFilter<"Site"> | string | null
    aboutUsText?: StringNullableWithAggregatesFilter<"Site"> | string | null
    footerJson?: JsonNullableWithAggregatesFilter<"Site">
    headerJson?: JsonNullableWithAggregatesFilter<"Site">
    point?: IntNullableWithAggregatesFilter<"Site"> | number | null
    instagramName?: StringNullableWithAggregatesFilter<"Site"> | string | null
    facebookName?: StringNullableWithAggregatesFilter<"Site"> | string | null
    twitterName?: StringNullableWithAggregatesFilter<"Site"> | string | null
    instagramUrl?: StringNullableWithAggregatesFilter<"Site"> | string | null
    facebookUrl?: StringNullableWithAggregatesFilter<"Site"> | string | null
    twitterUrl?: StringNullableWithAggregatesFilter<"Site"> | string | null
    instagramShow?: BoolNullableWithAggregatesFilter<"Site"> | boolean | null
    facebookShow?: BoolNullableWithAggregatesFilter<"Site"> | boolean | null
    twitterShow?: BoolNullableWithAggregatesFilter<"Site"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    pageAbout?: JsonNullableWithAggregatesFilter<"Site">
  }

  export type UserCreateInput = {
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    star?: StarCreateNestedManyWithoutUserInput
    question?: QuestionCreateNestedManyWithoutUserInput
    contactUs?: ContactUsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    star?: StarUncheckedCreateNestedManyWithoutUserInput
    question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    contactUs?: ContactUsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    star?: StarUpdateManyWithoutUserNestedInput
    question?: QuestionUpdateManyWithoutUserNestedInput
    contactUs?: ContactUsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    star?: StarUncheckedUpdateManyWithoutUserNestedInput
    question?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    contactUs?: ContactUsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryCreateNestedOneWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
    comments?: CommentCreateNestedManyWithoutProductInput
    star?: StarCreateNestedManyWithoutProductInput
    question?: QuestionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: number | null
    categoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductInput
    star?: StarUncheckedCreateNestedManyWithoutProductInput
    question?: QuestionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryUpdateOneWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    comments?: CommentUpdateManyWithoutProductNestedInput
    star?: StarUpdateManyWithoutProductNestedInput
    question?: QuestionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductNestedInput
    star?: StarUncheckedUpdateManyWithoutProductNestedInput
    question?: QuestionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: number | null
    categoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StarCreateInput = {
    product: ProductCreateNestedOneWithoutStarInput
    user: UserCreateNestedOneWithoutStarInput
  }

  export type StarUncheckedCreateInput = {
    id?: number
    productId: number
    userId: number
  }

  export type StarUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutStarNestedInput
    user?: UserUpdateOneRequiredWithoutStarNestedInput
  }

  export type StarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StarCreateManyInput = {
    id?: number
    productId: number
    userId: number
  }

  export type StarUpdateManyMutationInput = {

  }

  export type StarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutQuestionInput
    user?: UserCreateNestedOneWithoutQuestionInput
    topQuestion?: QuestionCreateNestedOneWithoutLowQuestionInput
    lowQuestion?: QuestionCreateNestedManyWithoutTopQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    productId?: number | null
    userId?: number | null
    questionId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lowQuestion?: QuestionUncheckedCreateNestedManyWithoutTopQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutQuestionNestedInput
    user?: UserUpdateOneWithoutQuestionNestedInput
    topQuestion?: QuestionUpdateOneWithoutLowQuestionNestedInput
    lowQuestion?: QuestionUpdateManyWithoutTopQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowQuestion?: QuestionUncheckedUpdateManyWithoutTopQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    productId?: number | null
    userId?: number | null
    questionId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory?: SubCategoryCreateNestedManyWithoutCategoryInput
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUpdateManyWithoutCategoryNestedInput
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateInput = {
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutSubCategoryInput
    topSubCategory?: SubCategoryCreateNestedOneWithoutLowerSubCategoriesInput
    lowerSubCategories?: SubCategoryCreateNestedManyWithoutTopSubCategoryInput
    product?: ProductCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
    lowerSubCategoryId?: number | null
    lowerSubCategories?: SubCategoryUncheckedCreateNestedManyWithoutTopSubCategoryInput
    product?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutSubCategoryNestedInput
    topSubCategory?: SubCategoryUpdateOneWithoutLowerSubCategoriesNestedInput
    lowerSubCategories?: SubCategoryUpdateManyWithoutTopSubCategoryNestedInput
    product?: ProductUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lowerSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lowerSubCategories?: SubCategoryUncheckedUpdateManyWithoutTopSubCategoryNestedInput
    product?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryCreateManyInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
    lowerSubCategoryId?: number | null
  }

  export type SubCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lowerSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageCreateInput = {
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutImagesInput
    pageContent?: PagecontentCreateNestedOneWithoutImagesInput
    comment?: CommentCreateNestedOneWithoutImagesInput
    minislider?: MinisliderCreateNestedOneWithoutImageInput
    Photo?: PhotoCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    pageContentId?: number | null
    commentId?: number | null
    minisliderId?: number | null
    Photo?: PhotoUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutImagesNestedInput
    pageContent?: PagecontentUpdateOneWithoutImagesNestedInput
    comment?: CommentUpdateOneWithoutImagesNestedInput
    minislider?: MinisliderUpdateOneWithoutImageNestedInput
    Photo?: PhotoUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
    Photo?: PhotoUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    pageContentId?: number | null
    commentId?: number | null
    minisliderId?: number | null
  }

  export type ImageUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PhotoCreateInput = {
    name?: string | null
    type?: string | null
    image: ImageCreateNestedOneWithoutPhotoInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    name?: string | null
    type?: string | null
    imageId: number
  }

  export type PhotoUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    image?: ImageUpdateOneRequiredWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type PhotoCreateManyInput = {
    id?: number
    name?: string | null
    type?: string | null
    imageId: number
  }

  export type PhotoUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type PhototypeCreateInput = {
    typeName: string
  }

  export type PhototypeUncheckedCreateInput = {
    id?: number
    typeName: string
  }

  export type PhototypeUpdateInput = {
    typeName?: StringFieldUpdateOperationsInput | string
  }

  export type PhototypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
  }

  export type PhototypeCreateManyInput = {
    id?: number
    typeName: string
  }

  export type PhototypeUpdateManyMutationInput = {
    typeName?: StringFieldUpdateOperationsInput | string
  }

  export type PhototypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCommentsInput
    user?: UserCreateNestedOneWithoutCommentsInput
    images?: ImageCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
    userId?: number | null
    images?: ImageUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneWithoutCommentsNestedInput
    images?: ImageUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: number
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
    userId?: number | null
  }

  export type CommentUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContactUsCreateInput = {
    name?: string | null
    surname?: string | null
    email?: string | null
    phone?: string | null
    title?: string | null
    content?: string | null
    readed?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutContactUsInput
  }

  export type ContactUsUncheckedCreateInput = {
    id?: number
    name?: string | null
    surname?: string | null
    email?: string | null
    phone?: string | null
    title?: string | null
    content?: string | null
    readed?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type ContactUsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    readed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutContactUsNestedInput
  }

  export type ContactUsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    readed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContactUsCreateManyInput = {
    id?: number
    name?: string | null
    surname?: string | null
    email?: string | null
    phone?: string | null
    title?: string | null
    content?: string | null
    readed?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type ContactUsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    readed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    readed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PagecontentCreateInput = {
    locale: string
    bigTitle?: string | null
    title: string
    content: string
    pageName: string
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutPageContentInput
  }

  export type PagecontentUncheckedCreateInput = {
    id?: number
    locale: string
    bigTitle?: string | null
    title: string
    content: string
    pageName: string
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutPageContentInput
  }

  export type PagecontentUpdateInput = {
    locale?: StringFieldUpdateOperationsInput | string
    bigTitle?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutPageContentNestedInput
  }

  export type PagecontentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locale?: StringFieldUpdateOperationsInput | string
    bigTitle?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutPageContentNestedInput
  }

  export type PagecontentCreateManyInput = {
    id?: number
    locale: string
    bigTitle?: string | null
    title: string
    content: string
    pageName: string
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PagecontentUpdateManyMutationInput = {
    locale?: StringFieldUpdateOperationsInput | string
    bigTitle?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagecontentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locale?: StringFieldUpdateOperationsInput | string
    bigTitle?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinisliderCreateInput = {
    texts: JsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Image?: ImageCreateNestedManyWithoutMinisliderInput
  }

  export type MinisliderUncheckedCreateInput = {
    id?: number
    texts: JsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Image?: ImageUncheckedCreateNestedManyWithoutMinisliderInput
  }

  export type MinisliderUpdateInput = {
    texts?: JsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Image?: ImageUpdateManyWithoutMinisliderNestedInput
  }

  export type MinisliderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    texts?: JsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Image?: ImageUncheckedUpdateManyWithoutMinisliderNestedInput
  }

  export type MinisliderCreateManyInput = {
    id?: number
    texts: JsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MinisliderUpdateManyMutationInput = {
    texts?: JsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinisliderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    texts?: JsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateInput = {
    headerLogo?: string | null
    footerLogo?: string | null
    headerBgColor?: string | null
    footerBgColor?: string | null
    headerFontColor?: string | null
    footerFontColor?: string | null
    mail?: string | null
    mail_en?: string | null
    phone?: string | null
    phone_en?: string | null
    address?: string | null
    address_en?: string | null
    footerText?: string | null
    aboutUsText?: string | null
    footerJson?: NullableJsonNullValueInput | InputJsonValue
    headerJson?: NullableJsonNullValueInput | InputJsonValue
    point?: number | null
    instagramName?: string | null
    facebookName?: string | null
    twitterName?: string | null
    instagramUrl?: string | null
    facebookUrl?: string | null
    twitterUrl?: string | null
    instagramShow?: boolean | null
    facebookShow?: boolean | null
    twitterShow?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pageAbout?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SiteUncheckedCreateInput = {
    id?: number
    headerLogo?: string | null
    footerLogo?: string | null
    headerBgColor?: string | null
    footerBgColor?: string | null
    headerFontColor?: string | null
    footerFontColor?: string | null
    mail?: string | null
    mail_en?: string | null
    phone?: string | null
    phone_en?: string | null
    address?: string | null
    address_en?: string | null
    footerText?: string | null
    aboutUsText?: string | null
    footerJson?: NullableJsonNullValueInput | InputJsonValue
    headerJson?: NullableJsonNullValueInput | InputJsonValue
    point?: number | null
    instagramName?: string | null
    facebookName?: string | null
    twitterName?: string | null
    instagramUrl?: string | null
    facebookUrl?: string | null
    twitterUrl?: string | null
    instagramShow?: boolean | null
    facebookShow?: boolean | null
    twitterShow?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pageAbout?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SiteUpdateInput = {
    headerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    headerBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerFontColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerFontColor?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    mail_en?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_en?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_en?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsText?: NullableStringFieldUpdateOperationsInput | string | null
    footerJson?: NullableJsonNullValueInput | InputJsonValue
    headerJson?: NullableJsonNullValueInput | InputJsonValue
    point?: NullableIntFieldUpdateOperationsInput | number | null
    instagramName?: NullableStringFieldUpdateOperationsInput | string | null
    facebookName?: NullableStringFieldUpdateOperationsInput | string | null
    twitterName?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    facebookShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    twitterShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageAbout?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    headerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    headerBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerFontColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerFontColor?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    mail_en?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_en?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_en?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsText?: NullableStringFieldUpdateOperationsInput | string | null
    footerJson?: NullableJsonNullValueInput | InputJsonValue
    headerJson?: NullableJsonNullValueInput | InputJsonValue
    point?: NullableIntFieldUpdateOperationsInput | number | null
    instagramName?: NullableStringFieldUpdateOperationsInput | string | null
    facebookName?: NullableStringFieldUpdateOperationsInput | string | null
    twitterName?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    facebookShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    twitterShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageAbout?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SiteCreateManyInput = {
    id?: number
    headerLogo?: string | null
    footerLogo?: string | null
    headerBgColor?: string | null
    footerBgColor?: string | null
    headerFontColor?: string | null
    footerFontColor?: string | null
    mail?: string | null
    mail_en?: string | null
    phone?: string | null
    phone_en?: string | null
    address?: string | null
    address_en?: string | null
    footerText?: string | null
    aboutUsText?: string | null
    footerJson?: NullableJsonNullValueInput | InputJsonValue
    headerJson?: NullableJsonNullValueInput | InputJsonValue
    point?: number | null
    instagramName?: string | null
    facebookName?: string | null
    twitterName?: string | null
    instagramUrl?: string | null
    facebookUrl?: string | null
    twitterUrl?: string | null
    instagramShow?: boolean | null
    facebookShow?: boolean | null
    twitterShow?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pageAbout?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SiteUpdateManyMutationInput = {
    headerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    headerBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerFontColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerFontColor?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    mail_en?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_en?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_en?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsText?: NullableStringFieldUpdateOperationsInput | string | null
    footerJson?: NullableJsonNullValueInput | InputJsonValue
    headerJson?: NullableJsonNullValueInput | InputJsonValue
    point?: NullableIntFieldUpdateOperationsInput | number | null
    instagramName?: NullableStringFieldUpdateOperationsInput | string | null
    facebookName?: NullableStringFieldUpdateOperationsInput | string | null
    twitterName?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    facebookShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    twitterShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageAbout?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    headerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    headerBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerFontColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerFontColor?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    mail_en?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_en?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_en?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsText?: NullableStringFieldUpdateOperationsInput | string | null
    footerJson?: NullableJsonNullValueInput | InputJsonValue
    headerJson?: NullableJsonNullValueInput | InputJsonValue
    point?: NullableIntFieldUpdateOperationsInput | number | null
    instagramName?: NullableStringFieldUpdateOperationsInput | string | null
    facebookName?: NullableStringFieldUpdateOperationsInput | string | null
    twitterName?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    facebookShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    twitterShow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageAbout?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type StarListRelationFilter = {
    every?: StarWhereInput
    some?: StarWhereInput
    none?: StarWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type ContactUsListRelationFilter = {
    every?: ContactUsWhereInput
    some?: ContactUsWhereInput
    none?: ContactUsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactUsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserEmailUsernameCompoundUniqueInput = {
    email: string
    username: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    age?: SortOrder
    verify?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    age?: SortOrder
    verify?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    age?: SortOrder
    verify?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubCategoryNullableRelationFilter = {
    is?: SubCategoryWhereInput | null
    isNot?: SubCategoryWhereInput | null
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    title?: SortOrder
    title_en?: SortOrder
    content?: SortOrder
    content_en?: SortOrder
    otherLangs?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subCategoryId?: SortOrder
    categoryId?: SortOrder
    tags?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    subCategoryId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    title?: SortOrder
    title_en?: SortOrder
    content?: SortOrder
    content_en?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subCategoryId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    title?: SortOrder
    title_en?: SortOrder
    content?: SortOrder
    content_en?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subCategoryId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    subCategoryId?: SortOrder
    categoryId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StarCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type StarAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type StarMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type StarMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type StarSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type ProductNullableRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type QuestionNullableRelationFilter = {
    is?: QuestionWhereInput | null
    isNot?: QuestionWhereInput | null
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    reply?: SortOrder
    answered?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    reply?: SortOrder
    answered?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    reply?: SortOrder
    answered?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    description?: SortOrder
    description_en?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    description?: SortOrder
    description_en?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    description?: SortOrder
    description_en?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubCategoryOrderByRelevanceInput = {
    fields: SubCategoryOrderByRelevanceFieldEnum | SubCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    description?: SortOrder
    description_en?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    lowerSubCategoryId?: SortOrder
  }

  export type SubCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    lowerSubCategoryId?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    description?: SortOrder
    description_en?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    lowerSubCategoryId?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_en?: SortOrder
    description?: SortOrder
    description_en?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    lowerSubCategoryId?: SortOrder
  }

  export type SubCategorySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    lowerSubCategoryId?: SortOrder
  }

  export type PagecontentNullableRelationFilter = {
    is?: PagecontentWhereInput | null
    isNot?: PagecontentWhereInput | null
  }

  export type CommentNullableRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type MinisliderNullableRelationFilter = {
    is?: MinisliderWhereInput | null
    isNot?: MinisliderWhereInput | null
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    name?: SortOrder
    ownerName?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    pageContentId?: SortOrder
    commentId?: SortOrder
    minisliderId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pageContentId?: SortOrder
    commentId?: SortOrder
    minisliderId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    name?: SortOrder
    ownerName?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    pageContentId?: SortOrder
    commentId?: SortOrder
    minisliderId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    name?: SortOrder
    ownerName?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    pageContentId?: SortOrder
    commentId?: SortOrder
    minisliderId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pageContentId?: SortOrder
    commentId?: SortOrder
    minisliderId?: SortOrder
  }

  export type ImageRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type PhotoOrderByRelevanceInput = {
    fields: PhotoOrderByRelevanceFieldEnum | PhotoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    imageId?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    imageId?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    imageId?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type PhototypeOrderByRelevanceInput = {
    fields: PhototypeOrderByRelevanceFieldEnum | PhototypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhototypeCountOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
  }

  export type PhototypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PhototypeMaxOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
  }

  export type PhototypeMinOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
  }

  export type PhototypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    title?: SortOrder
    content?: SortOrder
    point?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    title?: SortOrder
    content?: SortOrder
    point?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    title?: SortOrder
    content?: SortOrder
    point?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type ContactUsOrderByRelevanceInput = {
    fields: ContactUsOrderByRelevanceFieldEnum | ContactUsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactUsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    title?: SortOrder
    content?: SortOrder
    readed?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactUsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactUsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    title?: SortOrder
    content?: SortOrder
    readed?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactUsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    title?: SortOrder
    content?: SortOrder
    readed?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactUsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PagecontentOrderByRelevanceInput = {
    fields: PagecontentOrderByRelevanceFieldEnum | PagecontentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PagecontentCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    bigTitle?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pageName?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PagecontentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PagecontentMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    bigTitle?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pageName?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PagecontentMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    bigTitle?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pageName?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PagecontentSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MinisliderCountOrderByAggregateInput = {
    id?: SortOrder
    texts?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MinisliderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MinisliderMaxOrderByAggregateInput = {
    id?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MinisliderMinOrderByAggregateInput = {
    id?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MinisliderSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SiteOrderByRelevanceInput = {
    fields: SiteOrderByRelevanceFieldEnum | SiteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    headerLogo?: SortOrder
    footerLogo?: SortOrder
    headerBgColor?: SortOrder
    footerBgColor?: SortOrder
    headerFontColor?: SortOrder
    footerFontColor?: SortOrder
    mail?: SortOrder
    mail_en?: SortOrder
    phone?: SortOrder
    phone_en?: SortOrder
    address?: SortOrder
    address_en?: SortOrder
    footerText?: SortOrder
    aboutUsText?: SortOrder
    footerJson?: SortOrder
    headerJson?: SortOrder
    point?: SortOrder
    instagramName?: SortOrder
    facebookName?: SortOrder
    twitterName?: SortOrder
    instagramUrl?: SortOrder
    facebookUrl?: SortOrder
    twitterUrl?: SortOrder
    instagramShow?: SortOrder
    facebookShow?: SortOrder
    twitterShow?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageAbout?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    headerLogo?: SortOrder
    footerLogo?: SortOrder
    headerBgColor?: SortOrder
    footerBgColor?: SortOrder
    headerFontColor?: SortOrder
    footerFontColor?: SortOrder
    mail?: SortOrder
    mail_en?: SortOrder
    phone?: SortOrder
    phone_en?: SortOrder
    address?: SortOrder
    address_en?: SortOrder
    footerText?: SortOrder
    aboutUsText?: SortOrder
    point?: SortOrder
    instagramName?: SortOrder
    facebookName?: SortOrder
    twitterName?: SortOrder
    instagramUrl?: SortOrder
    facebookUrl?: SortOrder
    twitterUrl?: SortOrder
    instagramShow?: SortOrder
    facebookShow?: SortOrder
    twitterShow?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    headerLogo?: SortOrder
    footerLogo?: SortOrder
    headerBgColor?: SortOrder
    footerBgColor?: SortOrder
    headerFontColor?: SortOrder
    footerFontColor?: SortOrder
    mail?: SortOrder
    mail_en?: SortOrder
    phone?: SortOrder
    phone_en?: SortOrder
    address?: SortOrder
    address_en?: SortOrder
    footerText?: SortOrder
    aboutUsText?: SortOrder
    point?: SortOrder
    instagramName?: SortOrder
    facebookName?: SortOrder
    twitterName?: SortOrder
    instagramUrl?: SortOrder
    facebookUrl?: SortOrder
    twitterUrl?: SortOrder
    instagramShow?: SortOrder
    facebookShow?: SortOrder
    twitterShow?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StarCreateNestedManyWithoutUserInput = {
    create?: XOR<StarCreateWithoutUserInput, StarUncheckedCreateWithoutUserInput> | StarCreateWithoutUserInput[] | StarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarCreateOrConnectWithoutUserInput | StarCreateOrConnectWithoutUserInput[]
    createMany?: StarCreateManyUserInputEnvelope
    connect?: StarWhereUniqueInput | StarWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ContactUsCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactUsCreateWithoutUserInput, ContactUsUncheckedCreateWithoutUserInput> | ContactUsCreateWithoutUserInput[] | ContactUsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactUsCreateOrConnectWithoutUserInput | ContactUsCreateOrConnectWithoutUserInput[]
    createMany?: ContactUsCreateManyUserInputEnvelope
    connect?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StarCreateWithoutUserInput, StarUncheckedCreateWithoutUserInput> | StarCreateWithoutUserInput[] | StarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarCreateOrConnectWithoutUserInput | StarCreateOrConnectWithoutUserInput[]
    createMany?: StarCreateManyUserInputEnvelope
    connect?: StarWhereUniqueInput | StarWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ContactUsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactUsCreateWithoutUserInput, ContactUsUncheckedCreateWithoutUserInput> | ContactUsCreateWithoutUserInput[] | ContactUsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactUsCreateOrConnectWithoutUserInput | ContactUsCreateOrConnectWithoutUserInput[]
    createMany?: ContactUsCreateManyUserInputEnvelope
    connect?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type StarUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarCreateWithoutUserInput, StarUncheckedCreateWithoutUserInput> | StarCreateWithoutUserInput[] | StarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarCreateOrConnectWithoutUserInput | StarCreateOrConnectWithoutUserInput[]
    upsert?: StarUpsertWithWhereUniqueWithoutUserInput | StarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarCreateManyUserInputEnvelope
    set?: StarWhereUniqueInput | StarWhereUniqueInput[]
    disconnect?: StarWhereUniqueInput | StarWhereUniqueInput[]
    delete?: StarWhereUniqueInput | StarWhereUniqueInput[]
    connect?: StarWhereUniqueInput | StarWhereUniqueInput[]
    update?: StarUpdateWithWhereUniqueWithoutUserInput | StarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarUpdateManyWithWhereWithoutUserInput | StarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarScalarWhereInput | StarScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ContactUsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactUsCreateWithoutUserInput, ContactUsUncheckedCreateWithoutUserInput> | ContactUsCreateWithoutUserInput[] | ContactUsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactUsCreateOrConnectWithoutUserInput | ContactUsCreateOrConnectWithoutUserInput[]
    upsert?: ContactUsUpsertWithWhereUniqueWithoutUserInput | ContactUsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactUsCreateManyUserInputEnvelope
    set?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
    disconnect?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
    delete?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
    connect?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
    update?: ContactUsUpdateWithWhereUniqueWithoutUserInput | ContactUsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUsUpdateManyWithWhereWithoutUserInput | ContactUsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactUsScalarWhereInput | ContactUsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type StarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarCreateWithoutUserInput, StarUncheckedCreateWithoutUserInput> | StarCreateWithoutUserInput[] | StarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarCreateOrConnectWithoutUserInput | StarCreateOrConnectWithoutUserInput[]
    upsert?: StarUpsertWithWhereUniqueWithoutUserInput | StarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarCreateManyUserInputEnvelope
    set?: StarWhereUniqueInput | StarWhereUniqueInput[]
    disconnect?: StarWhereUniqueInput | StarWhereUniqueInput[]
    delete?: StarWhereUniqueInput | StarWhereUniqueInput[]
    connect?: StarWhereUniqueInput | StarWhereUniqueInput[]
    update?: StarUpdateWithWhereUniqueWithoutUserInput | StarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarUpdateManyWithWhereWithoutUserInput | StarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarScalarWhereInput | StarScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ContactUsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactUsCreateWithoutUserInput, ContactUsUncheckedCreateWithoutUserInput> | ContactUsCreateWithoutUserInput[] | ContactUsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactUsCreateOrConnectWithoutUserInput | ContactUsCreateOrConnectWithoutUserInput[]
    upsert?: ContactUsUpsertWithWhereUniqueWithoutUserInput | ContactUsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactUsCreateManyUserInputEnvelope
    set?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
    disconnect?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
    delete?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
    connect?: ContactUsWhereUniqueInput | ContactUsWhereUniqueInput[]
    update?: ContactUsUpdateWithWhereUniqueWithoutUserInput | ContactUsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUsUpdateManyWithWhereWithoutUserInput | ContactUsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactUsScalarWhereInput | ContactUsScalarWhereInput[]
  }

  export type SubCategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<SubCategoryCreateWithoutProductInput, SubCategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutProductInput = {
    create?: XOR<CommentCreateWithoutProductInput, CommentUncheckedCreateWithoutProductInput> | CommentCreateWithoutProductInput[] | CommentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProductInput | CommentCreateOrConnectWithoutProductInput[]
    createMany?: CommentCreateManyProductInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StarCreateNestedManyWithoutProductInput = {
    create?: XOR<StarCreateWithoutProductInput, StarUncheckedCreateWithoutProductInput> | StarCreateWithoutProductInput[] | StarUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StarCreateOrConnectWithoutProductInput | StarCreateOrConnectWithoutProductInput[]
    createMany?: StarCreateManyProductInputEnvelope
    connect?: StarWhereUniqueInput | StarWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutProductInput = {
    create?: XOR<QuestionCreateWithoutProductInput, QuestionUncheckedCreateWithoutProductInput> | QuestionCreateWithoutProductInput[] | QuestionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutProductInput | QuestionCreateOrConnectWithoutProductInput[]
    createMany?: QuestionCreateManyProductInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CommentCreateWithoutProductInput, CommentUncheckedCreateWithoutProductInput> | CommentCreateWithoutProductInput[] | CommentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProductInput | CommentCreateOrConnectWithoutProductInput[]
    createMany?: CommentCreateManyProductInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StarUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StarCreateWithoutProductInput, StarUncheckedCreateWithoutProductInput> | StarCreateWithoutProductInput[] | StarUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StarCreateOrConnectWithoutProductInput | StarCreateOrConnectWithoutProductInput[]
    createMany?: StarCreateManyProductInputEnvelope
    connect?: StarWhereUniqueInput | StarWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<QuestionCreateWithoutProductInput, QuestionUncheckedCreateWithoutProductInput> | QuestionCreateWithoutProductInput[] | QuestionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutProductInput | QuestionCreateOrConnectWithoutProductInput[]
    createMany?: QuestionCreateManyProductInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type SubCategoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<SubCategoryCreateWithoutProductInput, SubCategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductInput
    upsert?: SubCategoryUpsertWithoutProductInput
    disconnect?: SubCategoryWhereInput | boolean
    delete?: SubCategoryWhereInput | boolean
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutProductInput, SubCategoryUpdateWithoutProductInput>, SubCategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type ImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutProductNestedInput = {
    create?: XOR<CommentCreateWithoutProductInput, CommentUncheckedCreateWithoutProductInput> | CommentCreateWithoutProductInput[] | CommentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProductInput | CommentCreateOrConnectWithoutProductInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutProductInput | CommentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CommentCreateManyProductInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutProductInput | CommentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutProductInput | CommentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type StarUpdateManyWithoutProductNestedInput = {
    create?: XOR<StarCreateWithoutProductInput, StarUncheckedCreateWithoutProductInput> | StarCreateWithoutProductInput[] | StarUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StarCreateOrConnectWithoutProductInput | StarCreateOrConnectWithoutProductInput[]
    upsert?: StarUpsertWithWhereUniqueWithoutProductInput | StarUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StarCreateManyProductInputEnvelope
    set?: StarWhereUniqueInput | StarWhereUniqueInput[]
    disconnect?: StarWhereUniqueInput | StarWhereUniqueInput[]
    delete?: StarWhereUniqueInput | StarWhereUniqueInput[]
    connect?: StarWhereUniqueInput | StarWhereUniqueInput[]
    update?: StarUpdateWithWhereUniqueWithoutProductInput | StarUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StarUpdateManyWithWhereWithoutProductInput | StarUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StarScalarWhereInput | StarScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutProductNestedInput = {
    create?: XOR<QuestionCreateWithoutProductInput, QuestionUncheckedCreateWithoutProductInput> | QuestionCreateWithoutProductInput[] | QuestionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutProductInput | QuestionCreateOrConnectWithoutProductInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutProductInput | QuestionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: QuestionCreateManyProductInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutProductInput | QuestionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutProductInput | QuestionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CommentCreateWithoutProductInput, CommentUncheckedCreateWithoutProductInput> | CommentCreateWithoutProductInput[] | CommentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProductInput | CommentCreateOrConnectWithoutProductInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutProductInput | CommentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CommentCreateManyProductInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutProductInput | CommentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutProductInput | CommentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type StarUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StarCreateWithoutProductInput, StarUncheckedCreateWithoutProductInput> | StarCreateWithoutProductInput[] | StarUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StarCreateOrConnectWithoutProductInput | StarCreateOrConnectWithoutProductInput[]
    upsert?: StarUpsertWithWhereUniqueWithoutProductInput | StarUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StarCreateManyProductInputEnvelope
    set?: StarWhereUniqueInput | StarWhereUniqueInput[]
    disconnect?: StarWhereUniqueInput | StarWhereUniqueInput[]
    delete?: StarWhereUniqueInput | StarWhereUniqueInput[]
    connect?: StarWhereUniqueInput | StarWhereUniqueInput[]
    update?: StarUpdateWithWhereUniqueWithoutProductInput | StarUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StarUpdateManyWithWhereWithoutProductInput | StarUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StarScalarWhereInput | StarScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<QuestionCreateWithoutProductInput, QuestionUncheckedCreateWithoutProductInput> | QuestionCreateWithoutProductInput[] | QuestionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutProductInput | QuestionCreateOrConnectWithoutProductInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutProductInput | QuestionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: QuestionCreateManyProductInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutProductInput | QuestionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutProductInput | QuestionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutStarInput = {
    create?: XOR<ProductCreateWithoutStarInput, ProductUncheckedCreateWithoutStarInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStarInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStarInput = {
    create?: XOR<UserCreateWithoutStarInput, UserUncheckedCreateWithoutStarInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarInput
    connect?: UserWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStarNestedInput = {
    create?: XOR<ProductCreateWithoutStarInput, ProductUncheckedCreateWithoutStarInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStarInput
    upsert?: ProductUpsertWithoutStarInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStarInput, ProductUpdateWithoutStarInput>, ProductUncheckedUpdateWithoutStarInput>
  }

  export type UserUpdateOneRequiredWithoutStarNestedInput = {
    create?: XOR<UserCreateWithoutStarInput, UserUncheckedCreateWithoutStarInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarInput
    upsert?: UserUpsertWithoutStarInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStarInput, UserUpdateWithoutStarInput>, UserUncheckedUpdateWithoutStarInput>
  }

  export type ProductCreateNestedOneWithoutQuestionInput = {
    create?: XOR<ProductCreateWithoutQuestionInput, ProductUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutQuestionInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionInput = {
    create?: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutLowQuestionInput = {
    create?: XOR<QuestionCreateWithoutLowQuestionInput, QuestionUncheckedCreateWithoutLowQuestionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutLowQuestionInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutTopQuestionInput = {
    create?: XOR<QuestionCreateWithoutTopQuestionInput, QuestionUncheckedCreateWithoutTopQuestionInput> | QuestionCreateWithoutTopQuestionInput[] | QuestionUncheckedCreateWithoutTopQuestionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopQuestionInput | QuestionCreateOrConnectWithoutTopQuestionInput[]
    createMany?: QuestionCreateManyTopQuestionInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTopQuestionInput = {
    create?: XOR<QuestionCreateWithoutTopQuestionInput, QuestionUncheckedCreateWithoutTopQuestionInput> | QuestionCreateWithoutTopQuestionInput[] | QuestionUncheckedCreateWithoutTopQuestionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopQuestionInput | QuestionCreateOrConnectWithoutTopQuestionInput[]
    createMany?: QuestionCreateManyTopQuestionInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ProductUpdateOneWithoutQuestionNestedInput = {
    create?: XOR<ProductCreateWithoutQuestionInput, ProductUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutQuestionInput
    upsert?: ProductUpsertWithoutQuestionInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutQuestionInput, ProductUpdateWithoutQuestionInput>, ProductUncheckedUpdateWithoutQuestionInput>
  }

  export type UserUpdateOneWithoutQuestionNestedInput = {
    create?: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionInput
    upsert?: UserUpsertWithoutQuestionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionInput, UserUpdateWithoutQuestionInput>, UserUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionUpdateOneWithoutLowQuestionNestedInput = {
    create?: XOR<QuestionCreateWithoutLowQuestionInput, QuestionUncheckedCreateWithoutLowQuestionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutLowQuestionInput
    upsert?: QuestionUpsertWithoutLowQuestionInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutLowQuestionInput, QuestionUpdateWithoutLowQuestionInput>, QuestionUncheckedUpdateWithoutLowQuestionInput>
  }

  export type QuestionUpdateManyWithoutTopQuestionNestedInput = {
    create?: XOR<QuestionCreateWithoutTopQuestionInput, QuestionUncheckedCreateWithoutTopQuestionInput> | QuestionCreateWithoutTopQuestionInput[] | QuestionUncheckedCreateWithoutTopQuestionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopQuestionInput | QuestionCreateOrConnectWithoutTopQuestionInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTopQuestionInput | QuestionUpsertWithWhereUniqueWithoutTopQuestionInput[]
    createMany?: QuestionCreateManyTopQuestionInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTopQuestionInput | QuestionUpdateWithWhereUniqueWithoutTopQuestionInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTopQuestionInput | QuestionUpdateManyWithWhereWithoutTopQuestionInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutTopQuestionNestedInput = {
    create?: XOR<QuestionCreateWithoutTopQuestionInput, QuestionUncheckedCreateWithoutTopQuestionInput> | QuestionCreateWithoutTopQuestionInput[] | QuestionUncheckedCreateWithoutTopQuestionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopQuestionInput | QuestionCreateOrConnectWithoutTopQuestionInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTopQuestionInput | QuestionUpsertWithWhereUniqueWithoutTopQuestionInput[]
    createMany?: QuestionCreateManyTopQuestionInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTopQuestionInput | QuestionUpdateWithWhereUniqueWithoutTopQuestionInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTopQuestionInput | QuestionUpdateManyWithWhereWithoutTopQuestionInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type SubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoryInput = {
    create?: XOR<CategoryCreateWithoutSubCategoryInput, CategoryUncheckedCreateWithoutSubCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type SubCategoryCreateNestedOneWithoutLowerSubCategoriesInput = {
    create?: XOR<SubCategoryCreateWithoutLowerSubCategoriesInput, SubCategoryUncheckedCreateWithoutLowerSubCategoriesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutLowerSubCategoriesInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type SubCategoryCreateNestedManyWithoutTopSubCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutTopSubCategoryInput, SubCategoryUncheckedCreateWithoutTopSubCategoryInput> | SubCategoryCreateWithoutTopSubCategoryInput[] | SubCategoryUncheckedCreateWithoutTopSubCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutTopSubCategoryInput | SubCategoryCreateOrConnectWithoutTopSubCategoryInput[]
    createMany?: SubCategoryCreateManyTopSubCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutTopSubCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutTopSubCategoryInput, SubCategoryUncheckedCreateWithoutTopSubCategoryInput> | SubCategoryCreateWithoutTopSubCategoryInput[] | SubCategoryUncheckedCreateWithoutTopSubCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutTopSubCategoryInput | SubCategoryCreateOrConnectWithoutTopSubCategoryInput[]
    createMany?: SubCategoryCreateManyTopSubCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutSubCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoryInput, CategoryUncheckedCreateWithoutSubCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoryInput
    upsert?: CategoryUpsertWithoutSubCategoryInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoryInput, CategoryUpdateWithoutSubCategoryInput>, CategoryUncheckedUpdateWithoutSubCategoryInput>
  }

  export type SubCategoryUpdateOneWithoutLowerSubCategoriesNestedInput = {
    create?: XOR<SubCategoryCreateWithoutLowerSubCategoriesInput, SubCategoryUncheckedCreateWithoutLowerSubCategoriesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutLowerSubCategoriesInput
    upsert?: SubCategoryUpsertWithoutLowerSubCategoriesInput
    disconnect?: SubCategoryWhereInput | boolean
    delete?: SubCategoryWhereInput | boolean
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutLowerSubCategoriesInput, SubCategoryUpdateWithoutLowerSubCategoriesInput>, SubCategoryUncheckedUpdateWithoutLowerSubCategoriesInput>
  }

  export type SubCategoryUpdateManyWithoutTopSubCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutTopSubCategoryInput, SubCategoryUncheckedCreateWithoutTopSubCategoryInput> | SubCategoryCreateWithoutTopSubCategoryInput[] | SubCategoryUncheckedCreateWithoutTopSubCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutTopSubCategoryInput | SubCategoryCreateOrConnectWithoutTopSubCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutTopSubCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutTopSubCategoryInput[]
    createMany?: SubCategoryCreateManyTopSubCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutTopSubCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutTopSubCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutTopSubCategoryInput | SubCategoryUpdateManyWithWhereWithoutTopSubCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubCategoryInput | ProductUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubCategoryInput | ProductUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubCategoryInput | ProductUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutTopSubCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutTopSubCategoryInput, SubCategoryUncheckedCreateWithoutTopSubCategoryInput> | SubCategoryCreateWithoutTopSubCategoryInput[] | SubCategoryUncheckedCreateWithoutTopSubCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutTopSubCategoryInput | SubCategoryCreateOrConnectWithoutTopSubCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutTopSubCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutTopSubCategoryInput[]
    createMany?: SubCategoryCreateManyTopSubCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutTopSubCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutTopSubCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutTopSubCategoryInput | SubCategoryUpdateManyWithWhereWithoutTopSubCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubCategoryInput | ProductUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubCategoryInput | ProductUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubCategoryInput | ProductUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type PagecontentCreateNestedOneWithoutImagesInput = {
    create?: XOR<PagecontentCreateWithoutImagesInput, PagecontentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PagecontentCreateOrConnectWithoutImagesInput
    connect?: PagecontentWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutImagesInput = {
    create?: XOR<CommentCreateWithoutImagesInput, CommentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutImagesInput
    connect?: CommentWhereUniqueInput
  }

  export type MinisliderCreateNestedOneWithoutImageInput = {
    create?: XOR<MinisliderCreateWithoutImageInput, MinisliderUncheckedCreateWithoutImageInput>
    connectOrCreate?: MinisliderCreateOrConnectWithoutImageInput
    connect?: MinisliderWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutImageInput = {
    create?: XOR<PhotoCreateWithoutImageInput, PhotoUncheckedCreateWithoutImageInput> | PhotoCreateWithoutImageInput[] | PhotoUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutImageInput | PhotoCreateOrConnectWithoutImageInput[]
    createMany?: PhotoCreateManyImageInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<PhotoCreateWithoutImageInput, PhotoUncheckedCreateWithoutImageInput> | PhotoCreateWithoutImageInput[] | PhotoUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutImageInput | PhotoCreateOrConnectWithoutImageInput[]
    createMany?: PhotoCreateManyImageInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type ProductUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type PagecontentUpdateOneWithoutImagesNestedInput = {
    create?: XOR<PagecontentCreateWithoutImagesInput, PagecontentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PagecontentCreateOrConnectWithoutImagesInput
    upsert?: PagecontentUpsertWithoutImagesInput
    disconnect?: PagecontentWhereInput | boolean
    delete?: PagecontentWhereInput | boolean
    connect?: PagecontentWhereUniqueInput
    update?: XOR<XOR<PagecontentUpdateToOneWithWhereWithoutImagesInput, PagecontentUpdateWithoutImagesInput>, PagecontentUncheckedUpdateWithoutImagesInput>
  }

  export type CommentUpdateOneWithoutImagesNestedInput = {
    create?: XOR<CommentCreateWithoutImagesInput, CommentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutImagesInput
    upsert?: CommentUpsertWithoutImagesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutImagesInput, CommentUpdateWithoutImagesInput>, CommentUncheckedUpdateWithoutImagesInput>
  }

  export type MinisliderUpdateOneWithoutImageNestedInput = {
    create?: XOR<MinisliderCreateWithoutImageInput, MinisliderUncheckedCreateWithoutImageInput>
    connectOrCreate?: MinisliderCreateOrConnectWithoutImageInput
    upsert?: MinisliderUpsertWithoutImageInput
    disconnect?: MinisliderWhereInput | boolean
    delete?: MinisliderWhereInput | boolean
    connect?: MinisliderWhereUniqueInput
    update?: XOR<XOR<MinisliderUpdateToOneWithWhereWithoutImageInput, MinisliderUpdateWithoutImageInput>, MinisliderUncheckedUpdateWithoutImageInput>
  }

  export type PhotoUpdateManyWithoutImageNestedInput = {
    create?: XOR<PhotoCreateWithoutImageInput, PhotoUncheckedCreateWithoutImageInput> | PhotoCreateWithoutImageInput[] | PhotoUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutImageInput | PhotoCreateOrConnectWithoutImageInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutImageInput | PhotoUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: PhotoCreateManyImageInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutImageInput | PhotoUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutImageInput | PhotoUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<PhotoCreateWithoutImageInput, PhotoUncheckedCreateWithoutImageInput> | PhotoCreateWithoutImageInput[] | PhotoUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutImageInput | PhotoCreateOrConnectWithoutImageInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutImageInput | PhotoUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: PhotoCreateManyImageInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutImageInput | PhotoUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutImageInput | PhotoUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type ImageCreateNestedOneWithoutPhotoInput = {
    create?: XOR<ImageCreateWithoutPhotoInput, ImageUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: ImageCreateOrConnectWithoutPhotoInput
    connect?: ImageWhereUniqueInput
  }

  export type ImageUpdateOneRequiredWithoutPhotoNestedInput = {
    create?: XOR<ImageCreateWithoutPhotoInput, ImageUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: ImageCreateOrConnectWithoutPhotoInput
    upsert?: ImageUpsertWithoutPhotoInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutPhotoInput, ImageUpdateWithoutPhotoInput>, ImageUncheckedUpdateWithoutPhotoInput>
  }

  export type ProductCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProductCreateWithoutCommentsInput, ProductUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCommentsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutCommentInput = {
    create?: XOR<ImageCreateWithoutCommentInput, ImageUncheckedCreateWithoutCommentInput> | ImageCreateWithoutCommentInput[] | ImageUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCommentInput | ImageCreateOrConnectWithoutCommentInput[]
    createMany?: ImageCreateManyCommentInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<ImageCreateWithoutCommentInput, ImageUncheckedCreateWithoutCommentInput> | ImageCreateWithoutCommentInput[] | ImageUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCommentInput | ImageCreateOrConnectWithoutCommentInput[]
    createMany?: ImageCreateManyCommentInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ProductCreateWithoutCommentsInput, ProductUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCommentsInput
    upsert?: ProductUpsertWithoutCommentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCommentsInput, ProductUpdateWithoutCommentsInput>, ProductUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type ImageUpdateManyWithoutCommentNestedInput = {
    create?: XOR<ImageCreateWithoutCommentInput, ImageUncheckedCreateWithoutCommentInput> | ImageCreateWithoutCommentInput[] | ImageUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCommentInput | ImageCreateOrConnectWithoutCommentInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutCommentInput | ImageUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: ImageCreateManyCommentInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutCommentInput | ImageUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutCommentInput | ImageUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<ImageCreateWithoutCommentInput, ImageUncheckedCreateWithoutCommentInput> | ImageCreateWithoutCommentInput[] | ImageUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCommentInput | ImageCreateOrConnectWithoutCommentInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutCommentInput | ImageUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: ImageCreateManyCommentInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutCommentInput | ImageUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutCommentInput | ImageUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContactUsInput = {
    create?: XOR<UserCreateWithoutContactUsInput, UserUncheckedCreateWithoutContactUsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactUsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutContactUsNestedInput = {
    create?: XOR<UserCreateWithoutContactUsInput, UserUncheckedCreateWithoutContactUsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactUsInput
    upsert?: UserUpsertWithoutContactUsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactUsInput, UserUpdateWithoutContactUsInput>, UserUncheckedUpdateWithoutContactUsInput>
  }

  export type ImageCreateNestedManyWithoutPageContentInput = {
    create?: XOR<ImageCreateWithoutPageContentInput, ImageUncheckedCreateWithoutPageContentInput> | ImageCreateWithoutPageContentInput[] | ImageUncheckedCreateWithoutPageContentInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPageContentInput | ImageCreateOrConnectWithoutPageContentInput[]
    createMany?: ImageCreateManyPageContentInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutPageContentInput = {
    create?: XOR<ImageCreateWithoutPageContentInput, ImageUncheckedCreateWithoutPageContentInput> | ImageCreateWithoutPageContentInput[] | ImageUncheckedCreateWithoutPageContentInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPageContentInput | ImageCreateOrConnectWithoutPageContentInput[]
    createMany?: ImageCreateManyPageContentInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutPageContentNestedInput = {
    create?: XOR<ImageCreateWithoutPageContentInput, ImageUncheckedCreateWithoutPageContentInput> | ImageCreateWithoutPageContentInput[] | ImageUncheckedCreateWithoutPageContentInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPageContentInput | ImageCreateOrConnectWithoutPageContentInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPageContentInput | ImageUpsertWithWhereUniqueWithoutPageContentInput[]
    createMany?: ImageCreateManyPageContentInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPageContentInput | ImageUpdateWithWhereUniqueWithoutPageContentInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPageContentInput | ImageUpdateManyWithWhereWithoutPageContentInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutPageContentNestedInput = {
    create?: XOR<ImageCreateWithoutPageContentInput, ImageUncheckedCreateWithoutPageContentInput> | ImageCreateWithoutPageContentInput[] | ImageUncheckedCreateWithoutPageContentInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPageContentInput | ImageCreateOrConnectWithoutPageContentInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPageContentInput | ImageUpsertWithWhereUniqueWithoutPageContentInput[]
    createMany?: ImageCreateManyPageContentInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPageContentInput | ImageUpdateWithWhereUniqueWithoutPageContentInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPageContentInput | ImageUpdateManyWithWhereWithoutPageContentInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutMinisliderInput = {
    create?: XOR<ImageCreateWithoutMinisliderInput, ImageUncheckedCreateWithoutMinisliderInput> | ImageCreateWithoutMinisliderInput[] | ImageUncheckedCreateWithoutMinisliderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMinisliderInput | ImageCreateOrConnectWithoutMinisliderInput[]
    createMany?: ImageCreateManyMinisliderInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutMinisliderInput = {
    create?: XOR<ImageCreateWithoutMinisliderInput, ImageUncheckedCreateWithoutMinisliderInput> | ImageCreateWithoutMinisliderInput[] | ImageUncheckedCreateWithoutMinisliderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMinisliderInput | ImageCreateOrConnectWithoutMinisliderInput[]
    createMany?: ImageCreateManyMinisliderInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutMinisliderNestedInput = {
    create?: XOR<ImageCreateWithoutMinisliderInput, ImageUncheckedCreateWithoutMinisliderInput> | ImageCreateWithoutMinisliderInput[] | ImageUncheckedCreateWithoutMinisliderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMinisliderInput | ImageCreateOrConnectWithoutMinisliderInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutMinisliderInput | ImageUpsertWithWhereUniqueWithoutMinisliderInput[]
    createMany?: ImageCreateManyMinisliderInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutMinisliderInput | ImageUpdateWithWhereUniqueWithoutMinisliderInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutMinisliderInput | ImageUpdateManyWithWhereWithoutMinisliderInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutMinisliderNestedInput = {
    create?: XOR<ImageCreateWithoutMinisliderInput, ImageUncheckedCreateWithoutMinisliderInput> | ImageCreateWithoutMinisliderInput[] | ImageUncheckedCreateWithoutMinisliderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMinisliderInput | ImageCreateOrConnectWithoutMinisliderInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutMinisliderInput | ImageUpsertWithWhereUniqueWithoutMinisliderInput[]
    createMany?: ImageCreateManyMinisliderInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutMinisliderInput | ImageUpdateWithWhereUniqueWithoutMinisliderInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutMinisliderInput | ImageUpdateManyWithWhereWithoutMinisliderInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CommentCreateWithoutUserInput = {
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCommentsInput
    images?: ImageCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
    images?: ImageUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StarCreateWithoutUserInput = {
    product: ProductCreateNestedOneWithoutStarInput
  }

  export type StarUncheckedCreateWithoutUserInput = {
    id?: number
    productId: number
  }

  export type StarCreateOrConnectWithoutUserInput = {
    where: StarWhereUniqueInput
    create: XOR<StarCreateWithoutUserInput, StarUncheckedCreateWithoutUserInput>
  }

  export type StarCreateManyUserInputEnvelope = {
    data: StarCreateManyUserInput | StarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutUserInput = {
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutQuestionInput
    topQuestion?: QuestionCreateNestedOneWithoutLowQuestionInput
    lowQuestion?: QuestionCreateNestedManyWithoutTopQuestionInput
  }

  export type QuestionUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    productId?: number | null
    questionId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lowQuestion?: QuestionUncheckedCreateNestedManyWithoutTopQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionCreateManyUserInputEnvelope = {
    data: QuestionCreateManyUserInput | QuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactUsCreateWithoutUserInput = {
    name?: string | null
    surname?: string | null
    email?: string | null
    phone?: string | null
    title?: string | null
    content?: string | null
    readed?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    surname?: string | null
    email?: string | null
    phone?: string | null
    title?: string | null
    content?: string | null
    readed?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsCreateOrConnectWithoutUserInput = {
    where: ContactUsWhereUniqueInput
    create: XOR<ContactUsCreateWithoutUserInput, ContactUsUncheckedCreateWithoutUserInput>
  }

  export type ContactUsCreateManyUserInputEnvelope = {
    data: ContactUsCreateManyUserInput | ContactUsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    username?: StringNullableFilter<"Comment"> | string | null
    title?: StringNullableFilter<"Comment"> | string | null
    content?: StringNullableFilter<"Comment"> | string | null
    point?: IntNullableFilter<"Comment"> | number | null
    deleted?: BoolNullableFilter<"Comment"> | boolean | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    productId?: IntFilter<"Comment"> | number
    userId?: IntNullableFilter<"Comment"> | number | null
  }

  export type StarUpsertWithWhereUniqueWithoutUserInput = {
    where: StarWhereUniqueInput
    update: XOR<StarUpdateWithoutUserInput, StarUncheckedUpdateWithoutUserInput>
    create: XOR<StarCreateWithoutUserInput, StarUncheckedCreateWithoutUserInput>
  }

  export type StarUpdateWithWhereUniqueWithoutUserInput = {
    where: StarWhereUniqueInput
    data: XOR<StarUpdateWithoutUserInput, StarUncheckedUpdateWithoutUserInput>
  }

  export type StarUpdateManyWithWhereWithoutUserInput = {
    where: StarScalarWhereInput
    data: XOR<StarUpdateManyMutationInput, StarUncheckedUpdateManyWithoutUserInput>
  }

  export type StarScalarWhereInput = {
    AND?: StarScalarWhereInput | StarScalarWhereInput[]
    OR?: StarScalarWhereInput[]
    NOT?: StarScalarWhereInput | StarScalarWhereInput[]
    id?: IntFilter<"Star"> | number
    productId?: IntFilter<"Star"> | number
    userId?: IntFilter<"Star"> | number
  }

  export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
  }

  export type QuestionUpdateManyWithWhereWithoutUserInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    reply?: StringNullableFilter<"Question"> | string | null
    answered?: BoolNullableFilter<"Question"> | boolean | null
    productId?: IntNullableFilter<"Question"> | number | null
    userId?: IntNullableFilter<"Question"> | number | null
    questionId?: IntNullableFilter<"Question"> | number | null
    deleted?: BoolNullableFilter<"Question"> | boolean | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type ContactUsUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactUsWhereUniqueInput
    update: XOR<ContactUsUpdateWithoutUserInput, ContactUsUncheckedUpdateWithoutUserInput>
    create: XOR<ContactUsCreateWithoutUserInput, ContactUsUncheckedCreateWithoutUserInput>
  }

  export type ContactUsUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactUsWhereUniqueInput
    data: XOR<ContactUsUpdateWithoutUserInput, ContactUsUncheckedUpdateWithoutUserInput>
  }

  export type ContactUsUpdateManyWithWhereWithoutUserInput = {
    where: ContactUsScalarWhereInput
    data: XOR<ContactUsUpdateManyMutationInput, ContactUsUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactUsScalarWhereInput = {
    AND?: ContactUsScalarWhereInput | ContactUsScalarWhereInput[]
    OR?: ContactUsScalarWhereInput[]
    NOT?: ContactUsScalarWhereInput | ContactUsScalarWhereInput[]
    id?: IntFilter<"ContactUs"> | number
    name?: StringNullableFilter<"ContactUs"> | string | null
    surname?: StringNullableFilter<"ContactUs"> | string | null
    email?: StringNullableFilter<"ContactUs"> | string | null
    phone?: StringNullableFilter<"ContactUs"> | string | null
    title?: StringNullableFilter<"ContactUs"> | string | null
    content?: StringNullableFilter<"ContactUs"> | string | null
    readed?: BoolNullableFilter<"ContactUs"> | boolean | null
    deleted?: BoolNullableFilter<"ContactUs"> | boolean | null
    createdAt?: DateTimeFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeFilter<"ContactUs"> | Date | string
    userId?: IntNullableFilter<"ContactUs"> | number | null
  }

  export type SubCategoryCreateWithoutProductInput = {
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutSubCategoryInput
    topSubCategory?: SubCategoryCreateNestedOneWithoutLowerSubCategoriesInput
    lowerSubCategories?: SubCategoryCreateNestedManyWithoutTopSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
    lowerSubCategoryId?: number | null
    lowerSubCategories?: SubCategoryUncheckedCreateNestedManyWithoutTopSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutProductInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutProductInput, SubCategoryUncheckedCreateWithoutProductInput>
  }

  export type CategoryCreateWithoutProductInput = {
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type ImageCreateWithoutProductInput = {
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pageContent?: PagecontentCreateNestedOneWithoutImagesInput
    comment?: CommentCreateNestedOneWithoutImagesInput
    minislider?: MinisliderCreateNestedOneWithoutImageInput
    Photo?: PhotoCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutProductInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pageContentId?: number | null
    commentId?: number | null
    minisliderId?: number | null
    Photo?: PhotoUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageCreateManyProductInputEnvelope = {
    data: ImageCreateManyProductInput | ImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutProductInput = {
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCommentsInput
    images?: ImageCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutProductInput = {
    id?: number
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    images?: ImageUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutProductInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutProductInput, CommentUncheckedCreateWithoutProductInput>
  }

  export type CommentCreateManyProductInputEnvelope = {
    data: CommentCreateManyProductInput | CommentCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StarCreateWithoutProductInput = {
    user: UserCreateNestedOneWithoutStarInput
  }

  export type StarUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
  }

  export type StarCreateOrConnectWithoutProductInput = {
    where: StarWhereUniqueInput
    create: XOR<StarCreateWithoutProductInput, StarUncheckedCreateWithoutProductInput>
  }

  export type StarCreateManyProductInputEnvelope = {
    data: StarCreateManyProductInput | StarCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutProductInput = {
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutQuestionInput
    topQuestion?: QuestionCreateNestedOneWithoutLowQuestionInput
    lowQuestion?: QuestionCreateNestedManyWithoutTopQuestionInput
  }

  export type QuestionUncheckedCreateWithoutProductInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    userId?: number | null
    questionId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lowQuestion?: QuestionUncheckedCreateNestedManyWithoutTopQuestionInput
  }

  export type QuestionCreateOrConnectWithoutProductInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutProductInput, QuestionUncheckedCreateWithoutProductInput>
  }

  export type QuestionCreateManyProductInputEnvelope = {
    data: QuestionCreateManyProductInput | QuestionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryUpsertWithoutProductInput = {
    update: XOR<SubCategoryUpdateWithoutProductInput, SubCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<SubCategoryCreateWithoutProductInput, SubCategoryUncheckedCreateWithoutProductInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutProductInput, SubCategoryUncheckedUpdateWithoutProductInput>
  }

  export type SubCategoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutSubCategoryNestedInput
    topSubCategory?: SubCategoryUpdateOneWithoutLowerSubCategoriesNestedInput
    lowerSubCategories?: SubCategoryUpdateManyWithoutTopSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lowerSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lowerSubCategories?: SubCategoryUncheckedUpdateManyWithoutTopSubCategoryNestedInput
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ImageUpdateManyWithWhereWithoutProductInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    path?: StringFilter<"Image"> | string
    name?: StringFilter<"Image"> | string
    ownerName?: StringNullableFilter<"Image"> | string | null
    deleted?: BoolNullableFilter<"Image"> | boolean | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    productId?: IntNullableFilter<"Image"> | number | null
    pageContentId?: IntNullableFilter<"Image"> | number | null
    commentId?: IntNullableFilter<"Image"> | number | null
    minisliderId?: IntNullableFilter<"Image"> | number | null
  }

  export type CommentUpsertWithWhereUniqueWithoutProductInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutProductInput, CommentUncheckedUpdateWithoutProductInput>
    create: XOR<CommentCreateWithoutProductInput, CommentUncheckedCreateWithoutProductInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutProductInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutProductInput, CommentUncheckedUpdateWithoutProductInput>
  }

  export type CommentUpdateManyWithWhereWithoutProductInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutProductInput>
  }

  export type StarUpsertWithWhereUniqueWithoutProductInput = {
    where: StarWhereUniqueInput
    update: XOR<StarUpdateWithoutProductInput, StarUncheckedUpdateWithoutProductInput>
    create: XOR<StarCreateWithoutProductInput, StarUncheckedCreateWithoutProductInput>
  }

  export type StarUpdateWithWhereUniqueWithoutProductInput = {
    where: StarWhereUniqueInput
    data: XOR<StarUpdateWithoutProductInput, StarUncheckedUpdateWithoutProductInput>
  }

  export type StarUpdateManyWithWhereWithoutProductInput = {
    where: StarScalarWhereInput
    data: XOR<StarUpdateManyMutationInput, StarUncheckedUpdateManyWithoutProductInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutProductInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutProductInput, QuestionUncheckedUpdateWithoutProductInput>
    create: XOR<QuestionCreateWithoutProductInput, QuestionUncheckedCreateWithoutProductInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutProductInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutProductInput, QuestionUncheckedUpdateWithoutProductInput>
  }

  export type QuestionUpdateManyWithWhereWithoutProductInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutStarInput = {
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryCreateNestedOneWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
    comments?: CommentCreateNestedManyWithoutProductInput
    question?: QuestionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStarInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: number | null
    categoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductInput
    question?: QuestionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStarInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStarInput, ProductUncheckedCreateWithoutStarInput>
  }

  export type UserCreateWithoutStarInput = {
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    question?: QuestionCreateNestedManyWithoutUserInput
    contactUs?: ContactUsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStarInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    contactUs?: ContactUsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStarInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStarInput, UserUncheckedCreateWithoutStarInput>
  }

  export type ProductUpsertWithoutStarInput = {
    update: XOR<ProductUpdateWithoutStarInput, ProductUncheckedUpdateWithoutStarInput>
    create: XOR<ProductCreateWithoutStarInput, ProductUncheckedCreateWithoutStarInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStarInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStarInput, ProductUncheckedUpdateWithoutStarInput>
  }

  export type ProductUpdateWithoutStarInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryUpdateOneWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    comments?: CommentUpdateManyWithoutProductNestedInput
    question?: QuestionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductNestedInput
    question?: QuestionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutStarInput = {
    update: XOR<UserUpdateWithoutStarInput, UserUncheckedUpdateWithoutStarInput>
    create: XOR<UserCreateWithoutStarInput, UserUncheckedCreateWithoutStarInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStarInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStarInput, UserUncheckedUpdateWithoutStarInput>
  }

  export type UserUpdateWithoutStarInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    question?: QuestionUpdateManyWithoutUserNestedInput
    contactUs?: ContactUsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStarInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    question?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    contactUs?: ContactUsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutQuestionInput = {
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryCreateNestedOneWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
    comments?: CommentCreateNestedManyWithoutProductInput
    star?: StarCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutQuestionInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: number | null
    categoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductInput
    star?: StarUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutQuestionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutQuestionInput, ProductUncheckedCreateWithoutQuestionInput>
  }

  export type UserCreateWithoutQuestionInput = {
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    star?: StarCreateNestedManyWithoutUserInput
    contactUs?: ContactUsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    star?: StarUncheckedCreateNestedManyWithoutUserInput
    contactUs?: ContactUsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionCreateWithoutLowQuestionInput = {
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutQuestionInput
    user?: UserCreateNestedOneWithoutQuestionInput
    topQuestion?: QuestionCreateNestedOneWithoutLowQuestionInput
  }

  export type QuestionUncheckedCreateWithoutLowQuestionInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    productId?: number | null
    userId?: number | null
    questionId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutLowQuestionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutLowQuestionInput, QuestionUncheckedCreateWithoutLowQuestionInput>
  }

  export type QuestionCreateWithoutTopQuestionInput = {
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutQuestionInput
    user?: UserCreateNestedOneWithoutQuestionInput
    lowQuestion?: QuestionCreateNestedManyWithoutTopQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTopQuestionInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    productId?: number | null
    userId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lowQuestion?: QuestionUncheckedCreateNestedManyWithoutTopQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTopQuestionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTopQuestionInput, QuestionUncheckedCreateWithoutTopQuestionInput>
  }

  export type QuestionCreateManyTopQuestionInputEnvelope = {
    data: QuestionCreateManyTopQuestionInput | QuestionCreateManyTopQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutQuestionInput = {
    update: XOR<ProductUpdateWithoutQuestionInput, ProductUncheckedUpdateWithoutQuestionInput>
    create: XOR<ProductCreateWithoutQuestionInput, ProductUncheckedCreateWithoutQuestionInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutQuestionInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutQuestionInput, ProductUncheckedUpdateWithoutQuestionInput>
  }

  export type ProductUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryUpdateOneWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    comments?: CommentUpdateManyWithoutProductNestedInput
    star?: StarUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductNestedInput
    star?: StarUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutQuestionInput = {
    update: XOR<UserUpdateWithoutQuestionInput, UserUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionInput, UserUncheckedUpdateWithoutQuestionInput>
  }

  export type UserUpdateWithoutQuestionInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    star?: StarUpdateManyWithoutUserNestedInput
    contactUs?: ContactUsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    star?: StarUncheckedUpdateManyWithoutUserNestedInput
    contactUs?: ContactUsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionUpsertWithoutLowQuestionInput = {
    update: XOR<QuestionUpdateWithoutLowQuestionInput, QuestionUncheckedUpdateWithoutLowQuestionInput>
    create: XOR<QuestionCreateWithoutLowQuestionInput, QuestionUncheckedCreateWithoutLowQuestionInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutLowQuestionInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutLowQuestionInput, QuestionUncheckedUpdateWithoutLowQuestionInput>
  }

  export type QuestionUpdateWithoutLowQuestionInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutQuestionNestedInput
    user?: UserUpdateOneWithoutQuestionNestedInput
    topQuestion?: QuestionUpdateOneWithoutLowQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutLowQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutTopQuestionInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTopQuestionInput, QuestionUncheckedUpdateWithoutTopQuestionInput>
    create: XOR<QuestionCreateWithoutTopQuestionInput, QuestionUncheckedCreateWithoutTopQuestionInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTopQuestionInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTopQuestionInput, QuestionUncheckedUpdateWithoutTopQuestionInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTopQuestionInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTopQuestionInput>
  }

  export type SubCategoryCreateWithoutCategoryInput = {
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topSubCategory?: SubCategoryCreateNestedOneWithoutLowerSubCategoriesInput
    lowerSubCategories?: SubCategoryCreateNestedManyWithoutTopSubCategoryInput
    product?: ProductCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lowerSubCategoryId?: number | null
    lowerSubCategories?: SubCategoryUncheckedCreateNestedManyWithoutTopSubCategoryInput
    product?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateManyCategoryInputEnvelope = {
    data: SubCategoryCreateManyCategoryInput | SubCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryCreateNestedOneWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
    comments?: CommentCreateNestedManyWithoutProductInput
    star?: StarCreateNestedManyWithoutProductInput
    question?: QuestionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductInput
    star?: StarUncheckedCreateNestedManyWithoutProductInput
    question?: QuestionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    name_en?: StringNullableFilter<"SubCategory"> | string | null
    description?: StringNullableFilter<"SubCategory"> | string | null
    description_en?: StringNullableFilter<"SubCategory"> | string | null
    deleted?: BoolNullableFilter<"SubCategory"> | boolean | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    categoryId?: IntNullableFilter<"SubCategory"> | number | null
    lowerSubCategoryId?: IntNullableFilter<"SubCategory"> | number | null
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    name_en?: StringNullableFilter<"Product"> | string | null
    title?: StringFilter<"Product"> | string
    title_en?: StringNullableFilter<"Product"> | string | null
    content?: StringFilter<"Product"> | string
    content_en?: StringNullableFilter<"Product"> | string | null
    otherLangs?: JsonNullableFilter<"Product">
    deleted?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    subCategoryId?: IntNullableFilter<"Product"> | number | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    tags?: JsonNullableFilter<"Product">
  }

  export type CategoryCreateWithoutSubCategoryInput = {
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoryInput, CategoryUncheckedCreateWithoutSubCategoryInput>
  }

  export type SubCategoryCreateWithoutLowerSubCategoriesInput = {
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutSubCategoryInput
    topSubCategory?: SubCategoryCreateNestedOneWithoutLowerSubCategoriesInput
    product?: ProductCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutLowerSubCategoriesInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
    lowerSubCategoryId?: number | null
    product?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutLowerSubCategoriesInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutLowerSubCategoriesInput, SubCategoryUncheckedCreateWithoutLowerSubCategoriesInput>
  }

  export type SubCategoryCreateWithoutTopSubCategoryInput = {
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutSubCategoryInput
    lowerSubCategories?: SubCategoryCreateNestedManyWithoutTopSubCategoryInput
    product?: ProductCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutTopSubCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
    lowerSubCategories?: SubCategoryUncheckedCreateNestedManyWithoutTopSubCategoryInput
    product?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutTopSubCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutTopSubCategoryInput, SubCategoryUncheckedCreateWithoutTopSubCategoryInput>
  }

  export type SubCategoryCreateManyTopSubCategoryInputEnvelope = {
    data: SubCategoryCreateManyTopSubCategoryInput | SubCategoryCreateManyTopSubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutSubCategoryInput = {
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryCreateNestedOneWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
    comments?: CommentCreateNestedManyWithoutProductInput
    star?: StarCreateNestedManyWithoutProductInput
    question?: QuestionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSubCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductInput
    star?: StarUncheckedCreateNestedManyWithoutProductInput
    question?: QuestionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProductCreateManySubCategoryInputEnvelope = {
    data: ProductCreateManySubCategoryInput | ProductCreateManySubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSubCategoryInput = {
    update: XOR<CategoryUpdateWithoutSubCategoryInput, CategoryUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<CategoryCreateWithoutSubCategoryInput, CategoryUncheckedCreateWithoutSubCategoryInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoryInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoryInput, CategoryUncheckedUpdateWithoutSubCategoryInput>
  }

  export type CategoryUpdateWithoutSubCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUpsertWithoutLowerSubCategoriesInput = {
    update: XOR<SubCategoryUpdateWithoutLowerSubCategoriesInput, SubCategoryUncheckedUpdateWithoutLowerSubCategoriesInput>
    create: XOR<SubCategoryCreateWithoutLowerSubCategoriesInput, SubCategoryUncheckedCreateWithoutLowerSubCategoriesInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutLowerSubCategoriesInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutLowerSubCategoriesInput, SubCategoryUncheckedUpdateWithoutLowerSubCategoriesInput>
  }

  export type SubCategoryUpdateWithoutLowerSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutSubCategoryNestedInput
    topSubCategory?: SubCategoryUpdateOneWithoutLowerSubCategoriesNestedInput
    product?: ProductUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutLowerSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lowerSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutTopSubCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutTopSubCategoryInput, SubCategoryUncheckedUpdateWithoutTopSubCategoryInput>
    create: XOR<SubCategoryCreateWithoutTopSubCategoryInput, SubCategoryUncheckedCreateWithoutTopSubCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutTopSubCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutTopSubCategoryInput, SubCategoryUncheckedUpdateWithoutTopSubCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutTopSubCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutTopSubCategoryInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSubCategoryInput, ProductUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSubCategoryInput, ProductUncheckedUpdateWithoutSubCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutSubCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type ProductCreateWithoutImagesInput = {
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryCreateNestedOneWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductInput
    comments?: CommentCreateNestedManyWithoutProductInput
    star?: StarCreateNestedManyWithoutProductInput
    question?: QuestionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: number | null
    categoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    comments?: CommentUncheckedCreateNestedManyWithoutProductInput
    star?: StarUncheckedCreateNestedManyWithoutProductInput
    question?: QuestionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type PagecontentCreateWithoutImagesInput = {
    locale: string
    bigTitle?: string | null
    title: string
    content: string
    pageName: string
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PagecontentUncheckedCreateWithoutImagesInput = {
    id?: number
    locale: string
    bigTitle?: string | null
    title: string
    content: string
    pageName: string
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PagecontentCreateOrConnectWithoutImagesInput = {
    where: PagecontentWhereUniqueInput
    create: XOR<PagecontentCreateWithoutImagesInput, PagecontentUncheckedCreateWithoutImagesInput>
  }

  export type CommentCreateWithoutImagesInput = {
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCommentsInput
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutImagesInput = {
    id?: number
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
    userId?: number | null
  }

  export type CommentCreateOrConnectWithoutImagesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutImagesInput, CommentUncheckedCreateWithoutImagesInput>
  }

  export type MinisliderCreateWithoutImageInput = {
    texts: JsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MinisliderUncheckedCreateWithoutImageInput = {
    id?: number
    texts: JsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MinisliderCreateOrConnectWithoutImageInput = {
    where: MinisliderWhereUniqueInput
    create: XOR<MinisliderCreateWithoutImageInput, MinisliderUncheckedCreateWithoutImageInput>
  }

  export type PhotoCreateWithoutImageInput = {
    name?: string | null
    type?: string | null
  }

  export type PhotoUncheckedCreateWithoutImageInput = {
    id?: number
    name?: string | null
    type?: string | null
  }

  export type PhotoCreateOrConnectWithoutImageInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutImageInput, PhotoUncheckedCreateWithoutImageInput>
  }

  export type PhotoCreateManyImageInputEnvelope = {
    data: PhotoCreateManyImageInput | PhotoCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryUpdateOneWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductNestedInput
    comments?: CommentUpdateManyWithoutProductNestedInput
    star?: StarUpdateManyWithoutProductNestedInput
    question?: QuestionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    comments?: CommentUncheckedUpdateManyWithoutProductNestedInput
    star?: StarUncheckedUpdateManyWithoutProductNestedInput
    question?: QuestionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PagecontentUpsertWithoutImagesInput = {
    update: XOR<PagecontentUpdateWithoutImagesInput, PagecontentUncheckedUpdateWithoutImagesInput>
    create: XOR<PagecontentCreateWithoutImagesInput, PagecontentUncheckedCreateWithoutImagesInput>
    where?: PagecontentWhereInput
  }

  export type PagecontentUpdateToOneWithWhereWithoutImagesInput = {
    where?: PagecontentWhereInput
    data: XOR<PagecontentUpdateWithoutImagesInput, PagecontentUncheckedUpdateWithoutImagesInput>
  }

  export type PagecontentUpdateWithoutImagesInput = {
    locale?: StringFieldUpdateOperationsInput | string
    bigTitle?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagecontentUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    locale?: StringFieldUpdateOperationsInput | string
    bigTitle?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithoutImagesInput = {
    update: XOR<CommentUpdateWithoutImagesInput, CommentUncheckedUpdateWithoutImagesInput>
    create: XOR<CommentCreateWithoutImagesInput, CommentUncheckedCreateWithoutImagesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutImagesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutImagesInput, CommentUncheckedUpdateWithoutImagesInput>
  }

  export type CommentUpdateWithoutImagesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MinisliderUpsertWithoutImageInput = {
    update: XOR<MinisliderUpdateWithoutImageInput, MinisliderUncheckedUpdateWithoutImageInput>
    create: XOR<MinisliderCreateWithoutImageInput, MinisliderUncheckedCreateWithoutImageInput>
    where?: MinisliderWhereInput
  }

  export type MinisliderUpdateToOneWithWhereWithoutImageInput = {
    where?: MinisliderWhereInput
    data: XOR<MinisliderUpdateWithoutImageInput, MinisliderUncheckedUpdateWithoutImageInput>
  }

  export type MinisliderUpdateWithoutImageInput = {
    texts?: JsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinisliderUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    texts?: JsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutImageInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutImageInput, PhotoUncheckedUpdateWithoutImageInput>
    create: XOR<PhotoCreateWithoutImageInput, PhotoUncheckedCreateWithoutImageInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutImageInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutImageInput, PhotoUncheckedUpdateWithoutImageInput>
  }

  export type PhotoUpdateManyWithWhereWithoutImageInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutImageInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    name?: StringNullableFilter<"Photo"> | string | null
    type?: StringNullableFilter<"Photo"> | string | null
    imageId?: IntFilter<"Photo"> | number
  }

  export type ImageCreateWithoutPhotoInput = {
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutImagesInput
    pageContent?: PagecontentCreateNestedOneWithoutImagesInput
    comment?: CommentCreateNestedOneWithoutImagesInput
    minislider?: MinisliderCreateNestedOneWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutPhotoInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    pageContentId?: number | null
    commentId?: number | null
    minisliderId?: number | null
  }

  export type ImageCreateOrConnectWithoutPhotoInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPhotoInput, ImageUncheckedCreateWithoutPhotoInput>
  }

  export type ImageUpsertWithoutPhotoInput = {
    update: XOR<ImageUpdateWithoutPhotoInput, ImageUncheckedUpdateWithoutPhotoInput>
    create: XOR<ImageCreateWithoutPhotoInput, ImageUncheckedCreateWithoutPhotoInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutPhotoInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutPhotoInput, ImageUncheckedUpdateWithoutPhotoInput>
  }

  export type ImageUpdateWithoutPhotoInput = {
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutImagesNestedInput
    pageContent?: PagecontentUpdateOneWithoutImagesNestedInput
    comment?: CommentUpdateOneWithoutImagesNestedInput
    minislider?: MinisliderUpdateOneWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateWithoutCommentsInput = {
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryCreateNestedOneWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
    star?: StarCreateNestedManyWithoutProductInput
    question?: QuestionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: number | null
    categoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    star?: StarUncheckedCreateNestedManyWithoutProductInput
    question?: QuestionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCommentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCommentsInput, ProductUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    star?: StarCreateNestedManyWithoutUserInput
    question?: QuestionCreateNestedManyWithoutUserInput
    contactUs?: ContactUsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    star?: StarUncheckedCreateNestedManyWithoutUserInput
    question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    contactUs?: ContactUsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ImageCreateWithoutCommentInput = {
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutImagesInput
    pageContent?: PagecontentCreateNestedOneWithoutImagesInput
    minislider?: MinisliderCreateNestedOneWithoutImageInput
    Photo?: PhotoCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutCommentInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    pageContentId?: number | null
    minisliderId?: number | null
    Photo?: PhotoUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutCommentInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCommentInput, ImageUncheckedCreateWithoutCommentInput>
  }

  export type ImageCreateManyCommentInputEnvelope = {
    data: ImageCreateManyCommentInput | ImageCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutCommentsInput = {
    update: XOR<ProductUpdateWithoutCommentsInput, ProductUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProductCreateWithoutCommentsInput, ProductUncheckedCreateWithoutCommentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCommentsInput, ProductUncheckedUpdateWithoutCommentsInput>
  }

  export type ProductUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryUpdateOneWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    star?: StarUpdateManyWithoutProductNestedInput
    question?: QuestionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    star?: StarUncheckedUpdateManyWithoutProductNestedInput
    question?: QuestionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: StarUpdateManyWithoutUserNestedInput
    question?: QuestionUpdateManyWithoutUserNestedInput
    contactUs?: ContactUsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: StarUncheckedUpdateManyWithoutUserNestedInput
    question?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    contactUs?: ContactUsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutCommentInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutCommentInput, ImageUncheckedUpdateWithoutCommentInput>
    create: XOR<ImageCreateWithoutCommentInput, ImageUncheckedCreateWithoutCommentInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutCommentInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutCommentInput, ImageUncheckedUpdateWithoutCommentInput>
  }

  export type ImageUpdateManyWithWhereWithoutCommentInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutContactUsInput = {
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    star?: StarCreateNestedManyWithoutUserInput
    question?: QuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactUsInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    username: string
    password: string
    email: string
    phone?: string | null
    age?: number | null
    verify?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    star?: StarUncheckedCreateNestedManyWithoutUserInput
    question?: QuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactUsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactUsInput, UserUncheckedCreateWithoutContactUsInput>
  }

  export type UserUpsertWithoutContactUsInput = {
    update: XOR<UserUpdateWithoutContactUsInput, UserUncheckedUpdateWithoutContactUsInput>
    create: XOR<UserCreateWithoutContactUsInput, UserUncheckedCreateWithoutContactUsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactUsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactUsInput, UserUncheckedUpdateWithoutContactUsInput>
  }

  export type UserUpdateWithoutContactUsInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    star?: StarUpdateManyWithoutUserNestedInput
    question?: QuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactUsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    star?: StarUncheckedUpdateManyWithoutUserNestedInput
    question?: QuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageCreateWithoutPageContentInput = {
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutImagesInput
    comment?: CommentCreateNestedOneWithoutImagesInput
    minislider?: MinisliderCreateNestedOneWithoutImageInput
    Photo?: PhotoCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutPageContentInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    commentId?: number | null
    minisliderId?: number | null
    Photo?: PhotoUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutPageContentInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPageContentInput, ImageUncheckedCreateWithoutPageContentInput>
  }

  export type ImageCreateManyPageContentInputEnvelope = {
    data: ImageCreateManyPageContentInput | ImageCreateManyPageContentInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutPageContentInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutPageContentInput, ImageUncheckedUpdateWithoutPageContentInput>
    create: XOR<ImageCreateWithoutPageContentInput, ImageUncheckedCreateWithoutPageContentInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutPageContentInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutPageContentInput, ImageUncheckedUpdateWithoutPageContentInput>
  }

  export type ImageUpdateManyWithWhereWithoutPageContentInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutPageContentInput>
  }

  export type ImageCreateWithoutMinisliderInput = {
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutImagesInput
    pageContent?: PagecontentCreateNestedOneWithoutImagesInput
    comment?: CommentCreateNestedOneWithoutImagesInput
    Photo?: PhotoCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutMinisliderInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    pageContentId?: number | null
    commentId?: number | null
    Photo?: PhotoUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutMinisliderInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMinisliderInput, ImageUncheckedCreateWithoutMinisliderInput>
  }

  export type ImageCreateManyMinisliderInputEnvelope = {
    data: ImageCreateManyMinisliderInput | ImageCreateManyMinisliderInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutMinisliderInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutMinisliderInput, ImageUncheckedUpdateWithoutMinisliderInput>
    create: XOR<ImageCreateWithoutMinisliderInput, ImageUncheckedCreateWithoutMinisliderInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutMinisliderInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutMinisliderInput, ImageUncheckedUpdateWithoutMinisliderInput>
  }

  export type ImageUpdateManyWithWhereWithoutMinisliderInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutMinisliderInput>
  }

  export type CommentCreateManyUserInput = {
    id?: number
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
  }

  export type StarCreateManyUserInput = {
    id?: number
    productId: number
  }

  export type QuestionCreateManyUserInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    productId?: number | null
    questionId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsCreateManyUserInput = {
    id?: number
    name?: string | null
    surname?: string | null
    email?: string | null
    phone?: string | null
    title?: string | null
    content?: string | null
    readed?: boolean | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCommentsNestedInput
    images?: ImageUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    images?: ImageUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StarUpdateWithoutUserInput = {
    product?: ProductUpdateOneRequiredWithoutStarNestedInput
  }

  export type StarUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StarUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutQuestionNestedInput
    topQuestion?: QuestionUpdateOneWithoutLowQuestionNestedInput
    lowQuestion?: QuestionUpdateManyWithoutTopQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowQuestion?: QuestionUncheckedUpdateManyWithoutTopQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    readed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    readed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    readed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyProductInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pageContentId?: number | null
    commentId?: number | null
    minisliderId?: number | null
  }

  export type CommentCreateManyProductInput = {
    id?: number
    username?: string | null
    title?: string | null
    content?: string | null
    point?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type StarCreateManyProductInput = {
    id?: number
    userId: number
  }

  export type QuestionCreateManyProductInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    userId?: number | null
    questionId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateWithoutProductInput = {
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageContent?: PagecontentUpdateOneWithoutImagesNestedInput
    comment?: CommentUpdateOneWithoutImagesNestedInput
    minislider?: MinisliderUpdateOneWithoutImageNestedInput
    Photo?: PhotoUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
    Photo?: PhotoUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUpdateWithoutProductInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCommentsNestedInput
    images?: ImageUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StarUpdateWithoutProductInput = {
    user?: UserUpdateOneRequiredWithoutStarNestedInput
  }

  export type StarUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StarUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutQuestionNestedInput
    topQuestion?: QuestionUpdateOneWithoutLowQuestionNestedInput
    lowQuestion?: QuestionUpdateManyWithoutTopQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowQuestion?: QuestionUncheckedUpdateManyWithoutTopQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyTopQuestionInput = {
    id?: number
    title: string
    content: string
    reply?: string | null
    answered?: boolean | null
    productId?: number | null
    userId?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutTopQuestionInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutQuestionNestedInput
    user?: UserUpdateOneWithoutQuestionNestedInput
    lowQuestion?: QuestionUpdateManyWithoutTopQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTopQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowQuestion?: QuestionUncheckedUpdateManyWithoutTopQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutTopQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    answered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateManyCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lowerSubCategoryId?: number | null
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SubCategoryUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topSubCategory?: SubCategoryUpdateOneWithoutLowerSubCategoriesNestedInput
    lowerSubCategories?: SubCategoryUpdateManyWithoutTopSubCategoryNestedInput
    product?: ProductUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowerSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lowerSubCategories?: SubCategoryUncheckedUpdateManyWithoutTopSubCategoryNestedInput
    product?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lowerSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    subCategory?: SubCategoryUpdateOneWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    comments?: CommentUpdateManyWithoutProductNestedInput
    star?: StarUpdateManyWithoutProductNestedInput
    question?: QuestionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductNestedInput
    star?: StarUncheckedUpdateManyWithoutProductNestedInput
    question?: QuestionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SubCategoryCreateManyTopSubCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    description?: string | null
    description_en?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
  }

  export type ProductCreateManySubCategoryInput = {
    id?: number
    name: string
    name_en?: string | null
    title: string
    title_en?: string | null
    content: string
    content_en?: string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SubCategoryUpdateWithoutTopSubCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutSubCategoryNestedInput
    lowerSubCategories?: SubCategoryUpdateManyWithoutTopSubCategoryNestedInput
    product?: ProductUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutTopSubCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lowerSubCategories?: SubCategoryUncheckedUpdateManyWithoutTopSubCategoryNestedInput
    product?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutTopSubCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUpdateWithoutSubCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    comments?: CommentUpdateManyWithoutProductNestedInput
    star?: StarUpdateManyWithoutProductNestedInput
    question?: QuestionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSubCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductNestedInput
    star?: StarUncheckedUpdateManyWithoutProductNestedInput
    question?: QuestionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSubCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    otherLangs?: NullableJsonNullValueInput | InputJsonValue
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PhotoCreateManyImageInput = {
    id?: number
    name?: string | null
    type?: string | null
  }

  export type PhotoUpdateWithoutImageInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManyCommentInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    pageContentId?: number | null
    minisliderId?: number | null
  }

  export type ImageUpdateWithoutCommentInput = {
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutImagesNestedInput
    pageContent?: PagecontentUpdateOneWithoutImagesNestedInput
    minislider?: MinisliderUpdateOneWithoutImageNestedInput
    Photo?: PhotoUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
    Photo?: PhotoUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageCreateManyPageContentInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    commentId?: number | null
    minisliderId?: number | null
  }

  export type ImageUpdateWithoutPageContentInput = {
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutImagesNestedInput
    comment?: CommentUpdateOneWithoutImagesNestedInput
    minislider?: MinisliderUpdateOneWithoutImageNestedInput
    Photo?: PhotoUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutPageContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
    Photo?: PhotoUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutPageContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    minisliderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageCreateManyMinisliderInput = {
    id?: number
    path: string
    name: string
    ownerName?: string | null
    deleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: number | null
    pageContentId?: number | null
    commentId?: number | null
  }

  export type ImageUpdateWithoutMinisliderInput = {
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutImagesNestedInput
    pageContent?: PagecontentUpdateOneWithoutImagesNestedInput
    comment?: CommentUpdateOneWithoutImagesNestedInput
    Photo?: PhotoUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutMinisliderInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    Photo?: PhotoUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutMinisliderInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    pageContentId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionCountOutputTypeDefaultArgs instead
     */
    export type QuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubCategoryCountOutputTypeDefaultArgs instead
     */
    export type SubCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageCountOutputTypeDefaultArgs instead
     */
    export type ImageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentCountOutputTypeDefaultArgs instead
     */
    export type CommentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagecontentCountOutputTypeDefaultArgs instead
     */
    export type PagecontentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagecontentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MinisliderCountOutputTypeDefaultArgs instead
     */
    export type MinisliderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MinisliderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StarDefaultArgs instead
     */
    export type StarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubCategoryDefaultArgs instead
     */
    export type SubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoDefaultArgs instead
     */
    export type PhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhototypeDefaultArgs instead
     */
    export type PhototypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhototypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactUsDefaultArgs instead
     */
    export type ContactUsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactUsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagecontentDefaultArgs instead
     */
    export type PagecontentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagecontentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MinisliderDefaultArgs instead
     */
    export type MinisliderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MinisliderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteDefaultArgs instead
     */
    export type SiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}