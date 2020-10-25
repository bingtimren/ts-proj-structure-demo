




## Project Reference

Option [references](https://www.typescriptlang.org/tsconfig#references):
- Purpose: to break project into smaller pieces (the referred project in "references")
- Effect:
  - requires the referenced project enable "composite" (by default true)
  - when tsc invoked with --build, incremental build the referenced projects 


Option: [composite](https://www.typescriptlang.org/tsconfig#composite):

- Default: true
- Purpose: enforces certain constraints that make possible for build tools to quickly determine if the project needs build; must be turned on in referred projects
- Effect (when on)
  - "rootDir" defaults to project root (containing tsconfig.json)
  - All implementation files to be compiled must be explicitly matched by "include" and "files", not by module reference; so build tools need not to examine the source files to determine which files need to be built
  - "declaration" defaults to true - produces type declaration

## Build

--build

build heavily relies on .tsbuildinfo. When build or clean, it does not check the actual outputs but relies on .tsbuildinfo. This means if output dir is removed but .tsbuildinfo is not, tsc -b won't rebuild the output (because the .tsbuildinfo indicates it has been built and none of the source file is changed), also if .tsbuildinfo is removed, tsc -b --clean won't clean the output directory. Also --clean won't remove the directory structure, only the files. So it's not a complete clean after all. If you write a script to clean up things, make sure to clean both the .tsbuildinfo and the outputs.

--force: when tsc determines if rebuild is needed, it does not check if the output is there. That means if output dir is removed, and run tsc --build again, nothing will happen. It's best to run tsc --build path/to/project --clean to clean up (this cleans up the .tsbuildinfo). tsc --build --force will force build.


## Caveats

Editor shows spurious module resolution errors - tsc is the final judge. Sometimes an error won't go away until restart VS Code.