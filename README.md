# Pay Test

## Goal
En paie, nous travaillons avec des périodes.

La période mensuelle est la plus courante, notamment parce qu'elle correspond au rythme d'édition des bulletins de paie.

Elle commence le premier jour du mois à minuit (inclus) et termine le premier jour du mois suivant à minuit (exclu).

D'autres périodes existent dans le métier de la paie, par exemple les périodes d'absence comme les congés.

Etant donné qu'un salarié a posé des congés:
* j'ai besoin de la fonction sur la période mensuelle isInclusDansPeriode(Absence $absence): bool pour déterminer si je dois prendre en compte cette période d’absence lors du calcul du bulletin correspondant à la période mensuelle en cours;
* la fonction doit avoir des tests unitaires associés pour valider le fonctionnement attendu.

## Getting Started

### Prerequisites
`Node.js >= 14.15.0`

The project includes an `.nvmrc` file so you can `nvm use` to use correct Node version.

### Installation
1. Clone the repo
    ```sh
    git clone https://github.com/cretinaverti/pay-test.git
    ```
2. Install NPM packages
    ```sh
    cd pay-test \
    yarn
    ```

## Usage

### Develop
To start the development mode:
```sh
yarn run develop
````

### Production
```sh
yarn run build
````


## Testing
```sh
yarn run test
```
