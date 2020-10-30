

# Typescript Directory Structure & Configuration Options Test Project

This project tests Typescript project directory structure, module resolution, and relevant configuration options.

- [Typescript Directory Structure & Configuration Options Test Project](#typescript-directory-structure--configuration-options-test-project)
  - [Run scripts](#run-scripts)
  - [General Options](#general-options)
    - [extends](#extends)
    - [rootDir](#rootdir)
  - [Output Options](#output-options)
    - [outDir](#outdir)
    - [target](#target)
    - [module](#module)
    - [declaration](#declaration)
    - [declarationMap](#declarationmap)
  - [Packaging Options](#packaging-options)
    - [types in "package.json"](#types-in-packagejson)
  - [Inclusion of Initial Implementation Files](#inclusion-of-initial-implementation-files)
    - [include](#include)
    - [exclude](#exclude)
    - [files](#files)
  - [Module Reference Basics](#module-reference-basics)
    - [General Options](#general-options-1)
      - [Module Resolution Strategy Option "moduleResolution"](#module-resolution-strategy-option-moduleresolution)
      - [Debug Option "--traceResolution"](#debug-option---traceresolution)
  - [Relative Module Resolution](#relative-module-resolution)
    - [Option "rootDirs"](#option-rootdirs)
  - [Non-relative Module Resolution](#non-relative-module-resolution)
  - [Inclusion of Referenced Implementation Files](#inclusion-of-referenced-implementation-files)
  - [Project Reference](#project-reference)
    - [Option "reference"](#option-reference)
    - [Option: composite](#option-composite)
    - [Incremental Compilation (--incremental) Build Mode (-b, --build)](#incremental-compilation---incremental-build-mode--b---build)

## Run scripts

After "npm install",

To build: `npm run build`

To assemble the outputs into the directory for execution: `npm run assemble`

To run test after assemble: `npm run run`

To clean up: `npm run clean`

To clean up, build, assemble and then test: `npm run test`

Summary of the options demonstrated in this project:

## General Options

### [extends](https://www.typescriptlang.org/tsconfig#extends) 

To specify another configuration file (base configuration) to inherit from. See project [@tsconfig/bases](https://github.com/tsconfig/bases/).

### [rootDir](https://www.typescriptlang.org/tsconfig#rootDir)

Specifies the root that is expected to contain all Implementation Files.

## Output Options

### [outDir](https://www.typescriptlang.org/tsconfig#outDir)

Specifies the directory where the outputs (.js as well as .d.ts, .js.map etc.) will be emitted into. 

### [target](https://www.typescriptlang.org/tsconfig#target)

Determins what features in the emitted JS are downleveled (polyfill). Also changes the default values of options **"lib"**, **"module"** and **"moduleResolution"**. 

### [module](https://www.typescriptlang.org/tsconfig#module)

Determines the module import & export codes in the emitted javascripts.

### [declaration](https://www.typescriptlang.org/tsconfig#declaration)

Generate type declaration ".d.ts" files. 

### [declarationMap](https://www.typescriptlang.org/tsconfig#declarationMap)

Generates source map for the type declarations (.d.ts.

## Packaging Options

### [types](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#including-declarations-in-your-npm-package) in "package.json"

Indicates the package's type declaration file (.d.ts). 

## Inclusion of Initial Implementation Files

### [include](https://www.typescriptlang.org/tsconfig#include)

A list of filenames or file name patterns, relative to Project Root, to include in compilation. 

### [exclude](https://www.typescriptlang.org/tsconfig#exclude)

A list of filenames or file name patterns, relative to Project Root, to be skipped when resolving "include". 

### [files](https://www.typescriptlang.org/tsconfig#files)

Specifies a list of files to include as Implementation Files.

## Module Reference Basics

### General Options

#### Module Resolution Strategy Option "moduleResolution"

Option "moduleResolution" sets how Typescript compiler (compile time) resolves module. ("node")

#### Debug Option "--traceResolution"

Enable compiler output each step of module resolution for diagnosis.

## Relative Module Resolution

### Option "rootDirs"

Configured with a list of directories relative to the Project Root (where tsconfig.json locates). 

## Non-relative Module Resolution

Non-relative module resolution can be resolved (1) relative to **baseUrl** and by **path mapping**, (2) by mimicing the Node.js module resolution mechanism, or (3) to [ambient module](https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules) declarations. 

## Inclusion of Referenced Implementation Files

(1) If the file is a type declaration or ambient module, it's not included. 
(2) If the module is resolved in a "node_modules" folder mimicing the Node.js strategy, it's not included. 
(3) Otherwise, included.

## Project Reference

### Option ["reference"](https://www.typescriptlang.org/tsconfig#references)

### Option: [composite](https://www.typescriptlang.org/tsconfig#composite)

### Incremental Compilation (--incremental) Build Mode (-b, --build)

