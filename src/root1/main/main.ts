export const src1M1 = "exported from main"

// Relative References
// relative reference to a .ts
import RelativeRefFromTs from  "../relative-ref-to-ts/relativeRefToTs" // built
export const relativeRefFromTs = RelativeRefFromTs
// relative reference to a package.json with "types"
import RelativeRefToPackageWithTypes from "../relative-ref-to-package-with-types" // not built
export const relativeRefToPackageWithTypes = RelativeRefToPackageWithTypes
// relateive reference to a package.json without "types"
import RelativeRefToPackageWithoutTypes from '../relative-ref-to-package-without-types' // built
export const relativeRefToPackageWithoutTypes = RelativeRefToPackageWithoutTypes

// Non-relative references
// non-relative reference to a .ts
import * as NonRelativeRefToDotTs from "non-relative-ref-to-ts" // not built
export const nonRelativeRefToDotTs = NonRelativeRefToDotTs
// non-relative reference to a package.json with "types"
import * as NonRelativeRefToPackageWithTypes from "non-relative-ref-to-package-with-types" // not built
export const nonRelativeRefToPackageWithTypes = NonRelativeRefToPackageWithTypes
// non-relative reference to a package.json without "types"
import NonRelativeRefToPackageWithoutTypes from "non-relative-ref-to-package-without-types" // not built
export const nonRelativeRefToPackageWithoutTypes = NonRelativeRefToPackageWithoutTypes

// Non-relative reference from baseUrl
// from a .ts
import NonRelativeRefToDotTsUnderBaseUrl from "baseUrlTs"
export const nonRelativeRefToDotTsUnderBaseUrl = NonRelativeRefToDotTsUnderBaseUrl // built
// from a package.json with "types"
import NonRelativeRefToPackageWithTypesUnderBaseUrl from "from-base-url-package-with-types" // not built
export const nonRelativeRefToPackageWithTypesUnderBaseUrl = NonRelativeRefToPackageWithTypesUnderBaseUrl
// from a package without "types" 
import NonRelativeRefToPackageWithoutTypesUnderBaseUrl from "from-base-url-package-without-types" // built
export const nonRelativeRefToPackageWithoutTypesUnderBaseUrl = NonRelativeRefToPackageWithoutTypesUnderBaseUrl;

// Non-relative reference to a mapped path
// from a .ts
import NonRelativeRefToMappedModule from "@/path-mapped"
export const nonRelativeRefToMappedModule = NonRelativeRefToMappedModule // built
// from a package.json with types
import NonRelativeRefToMappedPackageWithTypes from "@/from-mapped-non-relative-ref-with-types" //not built
export const nonRelativeRefToMappedPackageWithTypes = NonRelativeRefToMappedPackageWithTypes
// from a package.json without types
import NonRelativeRefToMappedPackageWithoutTypes from "@/from-mapped-non-relative-ref-without-types" // built
export const nonRelativeRefToMappedPackageWithoutTypes = NonRelativeRefToMappedPackageWithoutTypes

