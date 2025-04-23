
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Telefone
 * 
 */
export type Telefone = $Result.DefaultSelection<Prisma.$TelefonePayload>
/**
 * Model Matricula
 * 
 */
export type Matricula = $Result.DefaultSelection<Prisma.$MatriculaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alunos
 * const alunos = await prisma.aluno.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Alunos
   * const alunos = await prisma.aluno.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telefone`: Exposes CRUD operations for the **Telefone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telefones
    * const telefones = await prisma.telefone.findMany()
    * ```
    */
  get telefone(): Prisma.TelefoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matricula`: Exposes CRUD operations for the **Matricula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matriculas
    * const matriculas = await prisma.matricula.findMany()
    * ```
    */
  get matricula(): Prisma.MatriculaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Aluno: 'Aluno',
    Telefone: 'Telefone',
    Matricula: 'Matricula'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "aluno" | "telefone" | "matricula"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Telefone: {
        payload: Prisma.$TelefonePayload<ExtArgs>
        fields: Prisma.TelefoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelefoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelefoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          findFirst: {
            args: Prisma.TelefoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelefoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          findMany: {
            args: Prisma.TelefoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>[]
          }
          create: {
            args: Prisma.TelefoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          createMany: {
            args: Prisma.TelefoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TelefoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          update: {
            args: Prisma.TelefoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          deleteMany: {
            args: Prisma.TelefoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelefoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TelefoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          aggregate: {
            args: Prisma.TelefoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelefone>
          }
          groupBy: {
            args: Prisma.TelefoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelefoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelefoneCountArgs<ExtArgs>
            result: $Utils.Optional<TelefoneCountAggregateOutputType> | number
          }
        }
      }
      Matricula: {
        payload: Prisma.$MatriculaPayload<ExtArgs>
        fields: Prisma.MatriculaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatriculaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatriculaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findFirst: {
            args: Prisma.MatriculaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatriculaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findMany: {
            args: Prisma.MatriculaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          create: {
            args: Prisma.MatriculaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          createMany: {
            args: Prisma.MatriculaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatriculaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          update: {
            args: Prisma.MatriculaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          deleteMany: {
            args: Prisma.MatriculaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatriculaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatriculaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          aggregate: {
            args: Prisma.MatriculaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatricula>
          }
          groupBy: {
            args: Prisma.MatriculaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatriculaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatriculaCountArgs<ExtArgs>
            result: $Utils.Optional<MatriculaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    aluno?: AlunoOmit
    telefone?: TelefoneOmit
    matricula?: MatriculaOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    telefones: number
    matriculas: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telefones?: boolean | AlunoCountOutputTypeCountTelefonesArgs
    matriculas?: boolean | AlunoCountOutputTypeCountMatriculasArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountTelefonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelefoneWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoAvgAggregateOutputType = {
    id: number | null
  }

  export type AlunoSumAggregateOutputType = {
    id: number | null
  }

  export type AlunoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    _all: number
  }


  export type AlunoAvgAggregateInputType = {
    id?: true
  }

  export type AlunoSumAggregateInputType = {
    id?: true
  }

  export type AlunoMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _avg?: AlunoAvgAggregateInputType
    _sum?: AlunoSumAggregateInputType
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id: number
    nome: string
    email: string | null
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefones?: boolean | Aluno$telefonesArgs<ExtArgs>
    matriculas?: boolean | Aluno$matriculasArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>



  export type AlunoSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telefones?: boolean | Aluno$telefonesArgs<ExtArgs>
    matriculas?: boolean | Aluno$matriculasArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      telefones: Prisma.$TelefonePayload<ExtArgs>[]
      matriculas: Prisma.$MatriculaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string | null
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telefones<T extends Aluno$telefonesArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$telefonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matriculas<T extends Aluno$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly id: FieldRef<"Aluno", 'Int'>
    readonly nome: FieldRef<"Aluno", 'String'>
    readonly email: FieldRef<"Aluno", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.telefones
   */
  export type Aluno$telefonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    where?: TelefoneWhereInput
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    cursor?: TelefoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Aluno.matriculas
   */
  export type Aluno$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    cursor?: MatriculaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model Telefone
   */

  export type AggregateTelefone = {
    _count: TelefoneCountAggregateOutputType | null
    _avg: TelefoneAvgAggregateOutputType | null
    _sum: TelefoneSumAggregateOutputType | null
    _min: TelefoneMinAggregateOutputType | null
    _max: TelefoneMaxAggregateOutputType | null
  }

  export type TelefoneAvgAggregateOutputType = {
    id: number | null
    alunoID: number | null
  }

  export type TelefoneSumAggregateOutputType = {
    id: number | null
    alunoID: number | null
  }

  export type TelefoneMinAggregateOutputType = {
    id: number | null
    alunoID: number | null
    numero: string | null
    tipo: string | null
  }

  export type TelefoneMaxAggregateOutputType = {
    id: number | null
    alunoID: number | null
    numero: string | null
    tipo: string | null
  }

  export type TelefoneCountAggregateOutputType = {
    id: number
    alunoID: number
    numero: number
    tipo: number
    _all: number
  }


  export type TelefoneAvgAggregateInputType = {
    id?: true
    alunoID?: true
  }

  export type TelefoneSumAggregateInputType = {
    id?: true
    alunoID?: true
  }

  export type TelefoneMinAggregateInputType = {
    id?: true
    alunoID?: true
    numero?: true
    tipo?: true
  }

  export type TelefoneMaxAggregateInputType = {
    id?: true
    alunoID?: true
    numero?: true
    tipo?: true
  }

  export type TelefoneCountAggregateInputType = {
    id?: true
    alunoID?: true
    numero?: true
    tipo?: true
    _all?: true
  }

  export type TelefoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telefone to aggregate.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Telefones
    **/
    _count?: true | TelefoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelefoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelefoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelefoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelefoneMaxAggregateInputType
  }

  export type GetTelefoneAggregateType<T extends TelefoneAggregateArgs> = {
        [P in keyof T & keyof AggregateTelefone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelefone[P]>
      : GetScalarType<T[P], AggregateTelefone[P]>
  }




  export type TelefoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelefoneWhereInput
    orderBy?: TelefoneOrderByWithAggregationInput | TelefoneOrderByWithAggregationInput[]
    by: TelefoneScalarFieldEnum[] | TelefoneScalarFieldEnum
    having?: TelefoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelefoneCountAggregateInputType | true
    _avg?: TelefoneAvgAggregateInputType
    _sum?: TelefoneSumAggregateInputType
    _min?: TelefoneMinAggregateInputType
    _max?: TelefoneMaxAggregateInputType
  }

  export type TelefoneGroupByOutputType = {
    id: number
    alunoID: number
    numero: string
    tipo: string
    _count: TelefoneCountAggregateOutputType | null
    _avg: TelefoneAvgAggregateOutputType | null
    _sum: TelefoneSumAggregateOutputType | null
    _min: TelefoneMinAggregateOutputType | null
    _max: TelefoneMaxAggregateOutputType | null
  }

  type GetTelefoneGroupByPayload<T extends TelefoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelefoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelefoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelefoneGroupByOutputType[P]>
            : GetScalarType<T[P], TelefoneGroupByOutputType[P]>
        }
      >
    >


  export type TelefoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoID?: boolean
    numero?: boolean
    tipo?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telefone"]>



  export type TelefoneSelectScalar = {
    id?: boolean
    alunoID?: boolean
    numero?: boolean
    tipo?: boolean
  }

  export type TelefoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoID" | "numero" | "tipo", ExtArgs["result"]["telefone"]>
  export type TelefoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $TelefonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Telefone"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoID: number
      numero: string
      tipo: string
    }, ExtArgs["result"]["telefone"]>
    composites: {}
  }

  type TelefoneGetPayload<S extends boolean | null | undefined | TelefoneDefaultArgs> = $Result.GetResult<Prisma.$TelefonePayload, S>

  type TelefoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelefoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelefoneCountAggregateInputType | true
    }

  export interface TelefoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Telefone'], meta: { name: 'Telefone' } }
    /**
     * Find zero or one Telefone that matches the filter.
     * @param {TelefoneFindUniqueArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelefoneFindUniqueArgs>(args: SelectSubset<T, TelefoneFindUniqueArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telefone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelefoneFindUniqueOrThrowArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelefoneFindUniqueOrThrowArgs>(args: SelectSubset<T, TelefoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindFirstArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelefoneFindFirstArgs>(args?: SelectSubset<T, TelefoneFindFirstArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindFirstOrThrowArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelefoneFindFirstOrThrowArgs>(args?: SelectSubset<T, TelefoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telefones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telefones
     * const telefones = await prisma.telefone.findMany()
     * 
     * // Get first 10 Telefones
     * const telefones = await prisma.telefone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telefoneWithIdOnly = await prisma.telefone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelefoneFindManyArgs>(args?: SelectSubset<T, TelefoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telefone.
     * @param {TelefoneCreateArgs} args - Arguments to create a Telefone.
     * @example
     * // Create one Telefone
     * const Telefone = await prisma.telefone.create({
     *   data: {
     *     // ... data to create a Telefone
     *   }
     * })
     * 
     */
    create<T extends TelefoneCreateArgs>(args: SelectSubset<T, TelefoneCreateArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telefones.
     * @param {TelefoneCreateManyArgs} args - Arguments to create many Telefones.
     * @example
     * // Create many Telefones
     * const telefone = await prisma.telefone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelefoneCreateManyArgs>(args?: SelectSubset<T, TelefoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Telefone.
     * @param {TelefoneDeleteArgs} args - Arguments to delete one Telefone.
     * @example
     * // Delete one Telefone
     * const Telefone = await prisma.telefone.delete({
     *   where: {
     *     // ... filter to delete one Telefone
     *   }
     * })
     * 
     */
    delete<T extends TelefoneDeleteArgs>(args: SelectSubset<T, TelefoneDeleteArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telefone.
     * @param {TelefoneUpdateArgs} args - Arguments to update one Telefone.
     * @example
     * // Update one Telefone
     * const telefone = await prisma.telefone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelefoneUpdateArgs>(args: SelectSubset<T, TelefoneUpdateArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telefones.
     * @param {TelefoneDeleteManyArgs} args - Arguments to filter Telefones to delete.
     * @example
     * // Delete a few Telefones
     * const { count } = await prisma.telefone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelefoneDeleteManyArgs>(args?: SelectSubset<T, TelefoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telefones
     * const telefone = await prisma.telefone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelefoneUpdateManyArgs>(args: SelectSubset<T, TelefoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Telefone.
     * @param {TelefoneUpsertArgs} args - Arguments to update or create a Telefone.
     * @example
     * // Update or create a Telefone
     * const telefone = await prisma.telefone.upsert({
     *   create: {
     *     // ... data to create a Telefone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telefone we want to update
     *   }
     * })
     */
    upsert<T extends TelefoneUpsertArgs>(args: SelectSubset<T, TelefoneUpsertArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneCountArgs} args - Arguments to filter Telefones to count.
     * @example
     * // Count the number of Telefones
     * const count = await prisma.telefone.count({
     *   where: {
     *     // ... the filter for the Telefones we want to count
     *   }
     * })
    **/
    count<T extends TelefoneCountArgs>(
      args?: Subset<T, TelefoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelefoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelefoneAggregateArgs>(args: Subset<T, TelefoneAggregateArgs>): Prisma.PrismaPromise<GetTelefoneAggregateType<T>>

    /**
     * Group by Telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneGroupByArgs} args - Group by arguments.
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
      T extends TelefoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelefoneGroupByArgs['orderBy'] }
        : { orderBy?: TelefoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelefoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelefoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Telefone model
   */
  readonly fields: TelefoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Telefone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelefoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Telefone model
   */
  interface TelefoneFieldRefs {
    readonly id: FieldRef<"Telefone", 'Int'>
    readonly alunoID: FieldRef<"Telefone", 'Int'>
    readonly numero: FieldRef<"Telefone", 'String'>
    readonly tipo: FieldRef<"Telefone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Telefone findUnique
   */
  export type TelefoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone findUniqueOrThrow
   */
  export type TelefoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone findFirst
   */
  export type TelefoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telefones.
     */
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone findFirstOrThrow
   */
  export type TelefoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telefones.
     */
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone findMany
   */
  export type TelefoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefones to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone create
   */
  export type TelefoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Telefone.
     */
    data: XOR<TelefoneCreateInput, TelefoneUncheckedCreateInput>
  }

  /**
   * Telefone createMany
   */
  export type TelefoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Telefones.
     */
    data: TelefoneCreateManyInput | TelefoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Telefone update
   */
  export type TelefoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Telefone.
     */
    data: XOR<TelefoneUpdateInput, TelefoneUncheckedUpdateInput>
    /**
     * Choose, which Telefone to update.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone updateMany
   */
  export type TelefoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Telefones.
     */
    data: XOR<TelefoneUpdateManyMutationInput, TelefoneUncheckedUpdateManyInput>
    /**
     * Filter which Telefones to update
     */
    where?: TelefoneWhereInput
    /**
     * Limit how many Telefones to update.
     */
    limit?: number
  }

  /**
   * Telefone upsert
   */
  export type TelefoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Telefone to update in case it exists.
     */
    where: TelefoneWhereUniqueInput
    /**
     * In case the Telefone found by the `where` argument doesn't exist, create a new Telefone with this data.
     */
    create: XOR<TelefoneCreateInput, TelefoneUncheckedCreateInput>
    /**
     * In case the Telefone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelefoneUpdateInput, TelefoneUncheckedUpdateInput>
  }

  /**
   * Telefone delete
   */
  export type TelefoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter which Telefone to delete.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone deleteMany
   */
  export type TelefoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telefones to delete
     */
    where?: TelefoneWhereInput
    /**
     * Limit how many Telefones to delete.
     */
    limit?: number
  }

  /**
   * Telefone without action
   */
  export type TelefoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
  }


  /**
   * Model Matricula
   */

  export type AggregateMatricula = {
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  export type MatriculaAvgAggregateOutputType = {
    id: number | null
    alunoID: number | null
  }

  export type MatriculaSumAggregateOutputType = {
    id: number | null
    alunoID: number | null
  }

  export type MatriculaMinAggregateOutputType = {
    id: number | null
    alunoID: number | null
    data: Date | null
  }

  export type MatriculaMaxAggregateOutputType = {
    id: number | null
    alunoID: number | null
    data: Date | null
  }

  export type MatriculaCountAggregateOutputType = {
    id: number
    alunoID: number
    data: number
    _all: number
  }


  export type MatriculaAvgAggregateInputType = {
    id?: true
    alunoID?: true
  }

  export type MatriculaSumAggregateInputType = {
    id?: true
    alunoID?: true
  }

  export type MatriculaMinAggregateInputType = {
    id?: true
    alunoID?: true
    data?: true
  }

  export type MatriculaMaxAggregateInputType = {
    id?: true
    alunoID?: true
    data?: true
  }

  export type MatriculaCountAggregateInputType = {
    id?: true
    alunoID?: true
    data?: true
    _all?: true
  }

  export type MatriculaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matricula to aggregate.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matriculas
    **/
    _count?: true | MatriculaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatriculaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatriculaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatriculaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatriculaMaxAggregateInputType
  }

  export type GetMatriculaAggregateType<T extends MatriculaAggregateArgs> = {
        [P in keyof T & keyof AggregateMatricula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatricula[P]>
      : GetScalarType<T[P], AggregateMatricula[P]>
  }




  export type MatriculaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithAggregationInput | MatriculaOrderByWithAggregationInput[]
    by: MatriculaScalarFieldEnum[] | MatriculaScalarFieldEnum
    having?: MatriculaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatriculaCountAggregateInputType | true
    _avg?: MatriculaAvgAggregateInputType
    _sum?: MatriculaSumAggregateInputType
    _min?: MatriculaMinAggregateInputType
    _max?: MatriculaMaxAggregateInputType
  }

  export type MatriculaGroupByOutputType = {
    id: number
    alunoID: number
    data: Date
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  type GetMatriculaGroupByPayload<T extends MatriculaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatriculaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatriculaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
            : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
        }
      >
    >


  export type MatriculaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoID?: boolean
    data?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>



  export type MatriculaSelectScalar = {
    id?: boolean
    alunoID?: boolean
    data?: boolean
  }

  export type MatriculaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoID" | "data", ExtArgs["result"]["matricula"]>
  export type MatriculaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $MatriculaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matricula"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoID: number
      data: Date
    }, ExtArgs["result"]["matricula"]>
    composites: {}
  }

  type MatriculaGetPayload<S extends boolean | null | undefined | MatriculaDefaultArgs> = $Result.GetResult<Prisma.$MatriculaPayload, S>

  type MatriculaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatriculaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatriculaCountAggregateInputType | true
    }

  export interface MatriculaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matricula'], meta: { name: 'Matricula' } }
    /**
     * Find zero or one Matricula that matches the filter.
     * @param {MatriculaFindUniqueArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatriculaFindUniqueArgs>(args: SelectSubset<T, MatriculaFindUniqueArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matricula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatriculaFindUniqueOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatriculaFindUniqueOrThrowArgs>(args: SelectSubset<T, MatriculaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatriculaFindFirstArgs>(args?: SelectSubset<T, MatriculaFindFirstArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matricula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatriculaFindFirstOrThrowArgs>(args?: SelectSubset<T, MatriculaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matriculas
     * const matriculas = await prisma.matricula.findMany()
     * 
     * // Get first 10 Matriculas
     * const matriculas = await prisma.matricula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matriculaWithIdOnly = await prisma.matricula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatriculaFindManyArgs>(args?: SelectSubset<T, MatriculaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matricula.
     * @param {MatriculaCreateArgs} args - Arguments to create a Matricula.
     * @example
     * // Create one Matricula
     * const Matricula = await prisma.matricula.create({
     *   data: {
     *     // ... data to create a Matricula
     *   }
     * })
     * 
     */
    create<T extends MatriculaCreateArgs>(args: SelectSubset<T, MatriculaCreateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matriculas.
     * @param {MatriculaCreateManyArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matricula = await prisma.matricula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatriculaCreateManyArgs>(args?: SelectSubset<T, MatriculaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matricula.
     * @param {MatriculaDeleteArgs} args - Arguments to delete one Matricula.
     * @example
     * // Delete one Matricula
     * const Matricula = await prisma.matricula.delete({
     *   where: {
     *     // ... filter to delete one Matricula
     *   }
     * })
     * 
     */
    delete<T extends MatriculaDeleteArgs>(args: SelectSubset<T, MatriculaDeleteArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matricula.
     * @param {MatriculaUpdateArgs} args - Arguments to update one Matricula.
     * @example
     * // Update one Matricula
     * const matricula = await prisma.matricula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatriculaUpdateArgs>(args: SelectSubset<T, MatriculaUpdateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matriculas.
     * @param {MatriculaDeleteManyArgs} args - Arguments to filter Matriculas to delete.
     * @example
     * // Delete a few Matriculas
     * const { count } = await prisma.matricula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatriculaDeleteManyArgs>(args?: SelectSubset<T, MatriculaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matriculas
     * const matricula = await prisma.matricula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatriculaUpdateManyArgs>(args: SelectSubset<T, MatriculaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matricula.
     * @param {MatriculaUpsertArgs} args - Arguments to update or create a Matricula.
     * @example
     * // Update or create a Matricula
     * const matricula = await prisma.matricula.upsert({
     *   create: {
     *     // ... data to create a Matricula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matricula we want to update
     *   }
     * })
     */
    upsert<T extends MatriculaUpsertArgs>(args: SelectSubset<T, MatriculaUpsertArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaCountArgs} args - Arguments to filter Matriculas to count.
     * @example
     * // Count the number of Matriculas
     * const count = await prisma.matricula.count({
     *   where: {
     *     // ... the filter for the Matriculas we want to count
     *   }
     * })
    **/
    count<T extends MatriculaCountArgs>(
      args?: Subset<T, MatriculaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatriculaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatriculaAggregateArgs>(args: Subset<T, MatriculaAggregateArgs>): Prisma.PrismaPromise<GetMatriculaAggregateType<T>>

    /**
     * Group by Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaGroupByArgs} args - Group by arguments.
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
      T extends MatriculaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatriculaGroupByArgs['orderBy'] }
        : { orderBy?: MatriculaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatriculaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatriculaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matricula model
   */
  readonly fields: MatriculaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matricula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatriculaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Matricula model
   */
  interface MatriculaFieldRefs {
    readonly id: FieldRef<"Matricula", 'Int'>
    readonly alunoID: FieldRef<"Matricula", 'Int'>
    readonly data: FieldRef<"Matricula", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Matricula findUnique
   */
  export type MatriculaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findUniqueOrThrow
   */
  export type MatriculaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findFirst
   */
  export type MatriculaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findFirstOrThrow
   */
  export type MatriculaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findMany
   */
  export type MatriculaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matriculas to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula create
   */
  export type MatriculaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to create a Matricula.
     */
    data: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
  }

  /**
   * Matricula createMany
   */
  export type MatriculaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matriculas.
     */
    data: MatriculaCreateManyInput | MatriculaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matricula update
   */
  export type MatriculaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to update a Matricula.
     */
    data: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
    /**
     * Choose, which Matricula to update.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula updateMany
   */
  export type MatriculaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matriculas.
     */
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyInput>
    /**
     * Filter which Matriculas to update
     */
    where?: MatriculaWhereInput
    /**
     * Limit how many Matriculas to update.
     */
    limit?: number
  }

  /**
   * Matricula upsert
   */
  export type MatriculaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The filter to search for the Matricula to update in case it exists.
     */
    where: MatriculaWhereUniqueInput
    /**
     * In case the Matricula found by the `where` argument doesn't exist, create a new Matricula with this data.
     */
    create: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
    /**
     * In case the Matricula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
  }

  /**
   * Matricula delete
   */
  export type MatriculaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter which Matricula to delete.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula deleteMany
   */
  export type MatriculaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matriculas to delete
     */
    where?: MatriculaWhereInput
    /**
     * Limit how many Matriculas to delete.
     */
    limit?: number
  }

  /**
   * Matricula without action
   */
  export type MatriculaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
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


  export const AlunoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const TelefoneScalarFieldEnum: {
    id: 'id',
    alunoID: 'alunoID',
    numero: 'numero',
    tipo: 'tipo'
  };

  export type TelefoneScalarFieldEnum = (typeof TelefoneScalarFieldEnum)[keyof typeof TelefoneScalarFieldEnum]


  export const MatriculaScalarFieldEnum: {
    id: 'id',
    alunoID: 'alunoID',
    data: 'data'
  };

  export type MatriculaScalarFieldEnum = (typeof MatriculaScalarFieldEnum)[keyof typeof MatriculaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AlunoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email'
  };

  export type AlunoOrderByRelevanceFieldEnum = (typeof AlunoOrderByRelevanceFieldEnum)[keyof typeof AlunoOrderByRelevanceFieldEnum]


  export const TelefoneOrderByRelevanceFieldEnum: {
    numero: 'numero',
    tipo: 'tipo'
  };

  export type TelefoneOrderByRelevanceFieldEnum = (typeof TelefoneOrderByRelevanceFieldEnum)[keyof typeof TelefoneOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id?: IntFilter<"Aluno"> | number
    nome?: StringFilter<"Aluno"> | string
    email?: StringNullableFilter<"Aluno"> | string | null
    telefones?: TelefoneListRelationFilter
    matriculas?: MatriculaListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefones?: TelefoneOrderByRelationAggregateInput
    matriculas?: MatriculaOrderByRelationAggregateInput
    _relevance?: AlunoOrderByRelevanceInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    nome?: StringFilter<"Aluno"> | string
    email?: StringNullableFilter<"Aluno"> | string | null
    telefones?: TelefoneListRelationFilter
    matriculas?: MatriculaListRelationFilter
  }, "id">

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _avg?: AlunoAvgOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
    _sum?: AlunoSumOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aluno"> | number
    nome?: StringWithAggregatesFilter<"Aluno"> | string
    email?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
  }

  export type TelefoneWhereInput = {
    AND?: TelefoneWhereInput | TelefoneWhereInput[]
    OR?: TelefoneWhereInput[]
    NOT?: TelefoneWhereInput | TelefoneWhereInput[]
    id?: IntFilter<"Telefone"> | number
    alunoID?: IntFilter<"Telefone"> | number
    numero?: StringFilter<"Telefone"> | string
    tipo?: StringFilter<"Telefone"> | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type TelefoneOrderByWithRelationInput = {
    id?: SortOrder
    alunoID?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
    _relevance?: TelefoneOrderByRelevanceInput
  }

  export type TelefoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TelefoneWhereInput | TelefoneWhereInput[]
    OR?: TelefoneWhereInput[]
    NOT?: TelefoneWhereInput | TelefoneWhereInput[]
    alunoID?: IntFilter<"Telefone"> | number
    numero?: StringFilter<"Telefone"> | string
    tipo?: StringFilter<"Telefone"> | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id">

  export type TelefoneOrderByWithAggregationInput = {
    id?: SortOrder
    alunoID?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
    _count?: TelefoneCountOrderByAggregateInput
    _avg?: TelefoneAvgOrderByAggregateInput
    _max?: TelefoneMaxOrderByAggregateInput
    _min?: TelefoneMinOrderByAggregateInput
    _sum?: TelefoneSumOrderByAggregateInput
  }

  export type TelefoneScalarWhereWithAggregatesInput = {
    AND?: TelefoneScalarWhereWithAggregatesInput | TelefoneScalarWhereWithAggregatesInput[]
    OR?: TelefoneScalarWhereWithAggregatesInput[]
    NOT?: TelefoneScalarWhereWithAggregatesInput | TelefoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Telefone"> | number
    alunoID?: IntWithAggregatesFilter<"Telefone"> | number
    numero?: StringWithAggregatesFilter<"Telefone"> | string
    tipo?: StringWithAggregatesFilter<"Telefone"> | string
  }

  export type MatriculaWhereInput = {
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    id?: IntFilter<"Matricula"> | number
    alunoID?: IntFilter<"Matricula"> | number
    data?: DateTimeFilter<"Matricula"> | Date | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type MatriculaOrderByWithRelationInput = {
    id?: SortOrder
    alunoID?: SortOrder
    data?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
  }

  export type MatriculaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    alunoID?: IntFilter<"Matricula"> | number
    data?: DateTimeFilter<"Matricula"> | Date | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id">

  export type MatriculaOrderByWithAggregationInput = {
    id?: SortOrder
    alunoID?: SortOrder
    data?: SortOrder
    _count?: MatriculaCountOrderByAggregateInput
    _avg?: MatriculaAvgOrderByAggregateInput
    _max?: MatriculaMaxOrderByAggregateInput
    _min?: MatriculaMinOrderByAggregateInput
    _sum?: MatriculaSumOrderByAggregateInput
  }

  export type MatriculaScalarWhereWithAggregatesInput = {
    AND?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    OR?: MatriculaScalarWhereWithAggregatesInput[]
    NOT?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matricula"> | number
    alunoID?: IntWithAggregatesFilter<"Matricula"> | number
    data?: DateTimeWithAggregatesFilter<"Matricula"> | Date | string
  }

  export type AlunoCreateInput = {
    nome: string
    email?: string | null
    telefones?: TelefoneCreateNestedManyWithoutAlunoInput
    matriculas?: MatriculaCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: number
    nome: string
    email?: string | null
    telefones?: TelefoneUncheckedCreateNestedManyWithoutAlunoInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: TelefoneUpdateManyWithoutAlunoNestedInput
    matriculas?: MatriculaUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: TelefoneUncheckedUpdateManyWithoutAlunoNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id?: number
    nome: string
    email?: string | null
  }

  export type AlunoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TelefoneCreateInput = {
    numero: string
    tipo: string
    aluno: AlunoCreateNestedOneWithoutTelefonesInput
  }

  export type TelefoneUncheckedCreateInput = {
    id?: number
    alunoID: number
    numero: string
    tipo: string
  }

  export type TelefoneUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUpdateOneRequiredWithoutTelefonesNestedInput
  }

  export type TelefoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoID?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneCreateManyInput = {
    id?: number
    alunoID: number
    numero: string
    tipo: string
  }

  export type TelefoneUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoID?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type MatriculaCreateInput = {
    data?: Date | string
    aluno: AlunoCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateInput = {
    id?: number
    alunoID: number
    data?: Date | string
  }

  export type MatriculaUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoID?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatriculaCreateManyInput = {
    id?: number
    alunoID: number
    data?: Date | string
  }

  export type MatriculaUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatriculaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoID?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TelefoneListRelationFilter = {
    every?: TelefoneWhereInput
    some?: TelefoneWhereInput
    none?: TelefoneWhereInput
  }

  export type MatriculaListRelationFilter = {
    every?: MatriculaWhereInput
    some?: MatriculaWhereInput
    none?: MatriculaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TelefoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatriculaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoOrderByRelevanceInput = {
    fields: AlunoOrderByRelevanceFieldEnum | AlunoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type AlunoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type AlunoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type AlunoScalarRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type TelefoneOrderByRelevanceInput = {
    fields: TelefoneOrderByRelevanceFieldEnum | TelefoneOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TelefoneCountOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type TelefoneAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
  }

  export type TelefoneMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type TelefoneMinOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type TelefoneSumOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
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

  export type MatriculaCountOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
    data?: SortOrder
  }

  export type MatriculaAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
  }

  export type MatriculaMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
    data?: SortOrder
  }

  export type MatriculaMinOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
    data?: SortOrder
  }

  export type MatriculaSumOrderByAggregateInput = {
    id?: SortOrder
    alunoID?: SortOrder
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

  export type TelefoneCreateNestedManyWithoutAlunoInput = {
    create?: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput> | TelefoneCreateWithoutAlunoInput[] | TelefoneUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutAlunoInput | TelefoneCreateOrConnectWithoutAlunoInput[]
    createMany?: TelefoneCreateManyAlunoInputEnvelope
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
  }

  export type MatriculaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput> | MatriculaCreateWithoutAlunoInput[] | MatriculaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutAlunoInput | MatriculaCreateOrConnectWithoutAlunoInput[]
    createMany?: MatriculaCreateManyAlunoInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type TelefoneUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput> | TelefoneCreateWithoutAlunoInput[] | TelefoneUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutAlunoInput | TelefoneCreateOrConnectWithoutAlunoInput[]
    createMany?: TelefoneCreateManyAlunoInputEnvelope
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
  }

  export type MatriculaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput> | MatriculaCreateWithoutAlunoInput[] | MatriculaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutAlunoInput | MatriculaCreateOrConnectWithoutAlunoInput[]
    createMany?: MatriculaCreateManyAlunoInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TelefoneUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput> | TelefoneCreateWithoutAlunoInput[] | TelefoneUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutAlunoInput | TelefoneCreateOrConnectWithoutAlunoInput[]
    upsert?: TelefoneUpsertWithWhereUniqueWithoutAlunoInput | TelefoneUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: TelefoneCreateManyAlunoInputEnvelope
    set?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    disconnect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    delete?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    update?: TelefoneUpdateWithWhereUniqueWithoutAlunoInput | TelefoneUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: TelefoneUpdateManyWithWhereWithoutAlunoInput | TelefoneUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
  }

  export type MatriculaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput> | MatriculaCreateWithoutAlunoInput[] | MatriculaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutAlunoInput | MatriculaCreateOrConnectWithoutAlunoInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutAlunoInput | MatriculaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: MatriculaCreateManyAlunoInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutAlunoInput | MatriculaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutAlunoInput | MatriculaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TelefoneUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput> | TelefoneCreateWithoutAlunoInput[] | TelefoneUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutAlunoInput | TelefoneCreateOrConnectWithoutAlunoInput[]
    upsert?: TelefoneUpsertWithWhereUniqueWithoutAlunoInput | TelefoneUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: TelefoneCreateManyAlunoInputEnvelope
    set?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    disconnect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    delete?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    update?: TelefoneUpdateWithWhereUniqueWithoutAlunoInput | TelefoneUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: TelefoneUpdateManyWithWhereWithoutAlunoInput | TelefoneUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
  }

  export type MatriculaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput> | MatriculaCreateWithoutAlunoInput[] | MatriculaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutAlunoInput | MatriculaCreateOrConnectWithoutAlunoInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutAlunoInput | MatriculaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: MatriculaCreateManyAlunoInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutAlunoInput | MatriculaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutAlunoInput | MatriculaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type AlunoCreateNestedOneWithoutTelefonesInput = {
    create?: XOR<AlunoCreateWithoutTelefonesInput, AlunoUncheckedCreateWithoutTelefonesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutTelefonesInput
    connect?: AlunoWhereUniqueInput
  }

  export type AlunoUpdateOneRequiredWithoutTelefonesNestedInput = {
    create?: XOR<AlunoCreateWithoutTelefonesInput, AlunoUncheckedCreateWithoutTelefonesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutTelefonesInput
    upsert?: AlunoUpsertWithoutTelefonesInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutTelefonesInput, AlunoUpdateWithoutTelefonesInput>, AlunoUncheckedUpdateWithoutTelefonesInput>
  }

  export type AlunoCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<AlunoCreateWithoutMatriculasInput, AlunoUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutMatriculasInput
    connect?: AlunoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AlunoUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<AlunoCreateWithoutMatriculasInput, AlunoUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutMatriculasInput
    upsert?: AlunoUpsertWithoutMatriculasInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutMatriculasInput, AlunoUpdateWithoutMatriculasInput>, AlunoUncheckedUpdateWithoutMatriculasInput>
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

  export type TelefoneCreateWithoutAlunoInput = {
    numero: string
    tipo: string
  }

  export type TelefoneUncheckedCreateWithoutAlunoInput = {
    id?: number
    numero: string
    tipo: string
  }

  export type TelefoneCreateOrConnectWithoutAlunoInput = {
    where: TelefoneWhereUniqueInput
    create: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput>
  }

  export type TelefoneCreateManyAlunoInputEnvelope = {
    data: TelefoneCreateManyAlunoInput | TelefoneCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaCreateWithoutAlunoInput = {
    data?: Date | string
  }

  export type MatriculaUncheckedCreateWithoutAlunoInput = {
    id?: number
    data?: Date | string
  }

  export type MatriculaCreateOrConnectWithoutAlunoInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput>
  }

  export type MatriculaCreateManyAlunoInputEnvelope = {
    data: MatriculaCreateManyAlunoInput | MatriculaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type TelefoneUpsertWithWhereUniqueWithoutAlunoInput = {
    where: TelefoneWhereUniqueInput
    update: XOR<TelefoneUpdateWithoutAlunoInput, TelefoneUncheckedUpdateWithoutAlunoInput>
    create: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput>
  }

  export type TelefoneUpdateWithWhereUniqueWithoutAlunoInput = {
    where: TelefoneWhereUniqueInput
    data: XOR<TelefoneUpdateWithoutAlunoInput, TelefoneUncheckedUpdateWithoutAlunoInput>
  }

  export type TelefoneUpdateManyWithWhereWithoutAlunoInput = {
    where: TelefoneScalarWhereInput
    data: XOR<TelefoneUpdateManyMutationInput, TelefoneUncheckedUpdateManyWithoutAlunoInput>
  }

  export type TelefoneScalarWhereInput = {
    AND?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
    OR?: TelefoneScalarWhereInput[]
    NOT?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
    id?: IntFilter<"Telefone"> | number
    alunoID?: IntFilter<"Telefone"> | number
    numero?: StringFilter<"Telefone"> | string
    tipo?: StringFilter<"Telefone"> | string
  }

  export type MatriculaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: MatriculaWhereUniqueInput
    update: XOR<MatriculaUpdateWithoutAlunoInput, MatriculaUncheckedUpdateWithoutAlunoInput>
    create: XOR<MatriculaCreateWithoutAlunoInput, MatriculaUncheckedCreateWithoutAlunoInput>
  }

  export type MatriculaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: MatriculaWhereUniqueInput
    data: XOR<MatriculaUpdateWithoutAlunoInput, MatriculaUncheckedUpdateWithoutAlunoInput>
  }

  export type MatriculaUpdateManyWithWhereWithoutAlunoInput = {
    where: MatriculaScalarWhereInput
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type MatriculaScalarWhereInput = {
    AND?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    OR?: MatriculaScalarWhereInput[]
    NOT?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    id?: IntFilter<"Matricula"> | number
    alunoID?: IntFilter<"Matricula"> | number
    data?: DateTimeFilter<"Matricula"> | Date | string
  }

  export type AlunoCreateWithoutTelefonesInput = {
    nome: string
    email?: string | null
    matriculas?: MatriculaCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutTelefonesInput = {
    id?: number
    nome: string
    email?: string | null
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutTelefonesInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutTelefonesInput, AlunoUncheckedCreateWithoutTelefonesInput>
  }

  export type AlunoUpsertWithoutTelefonesInput = {
    update: XOR<AlunoUpdateWithoutTelefonesInput, AlunoUncheckedUpdateWithoutTelefonesInput>
    create: XOR<AlunoCreateWithoutTelefonesInput, AlunoUncheckedCreateWithoutTelefonesInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutTelefonesInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutTelefonesInput, AlunoUncheckedUpdateWithoutTelefonesInput>
  }

  export type AlunoUpdateWithoutTelefonesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matriculas?: MatriculaUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutTelefonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matriculas?: MatriculaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateWithoutMatriculasInput = {
    nome: string
    email?: string | null
    telefones?: TelefoneCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutMatriculasInput = {
    id?: number
    nome: string
    email?: string | null
    telefones?: TelefoneUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutMatriculasInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutMatriculasInput, AlunoUncheckedCreateWithoutMatriculasInput>
  }

  export type AlunoUpsertWithoutMatriculasInput = {
    update: XOR<AlunoUpdateWithoutMatriculasInput, AlunoUncheckedUpdateWithoutMatriculasInput>
    create: XOR<AlunoCreateWithoutMatriculasInput, AlunoUncheckedCreateWithoutMatriculasInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutMatriculasInput, AlunoUncheckedUpdateWithoutMatriculasInput>
  }

  export type AlunoUpdateWithoutMatriculasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: TelefoneUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: TelefoneUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type TelefoneCreateManyAlunoInput = {
    id?: number
    numero: string
    tipo: string
  }

  export type MatriculaCreateManyAlunoInput = {
    id?: number
    data?: Date | string
  }

  export type TelefoneUpdateWithoutAlunoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type MatriculaUpdateWithoutAlunoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatriculaUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatriculaUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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