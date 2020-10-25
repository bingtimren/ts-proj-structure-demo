




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